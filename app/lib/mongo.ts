import { map } from "lodash";
import { MongoClient, ObjectId } from "mongodb";

const uri = `mongodb://0.0.0.0:27017/workman-demo`;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(uri, {});

    const db = await client.db();

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

// 插入数据方法，自动添加创建时间和更新时间
export async function insertOne(collection, data) {
    const { db } = await connectToDatabase();
    const now = Date.now();
    const result = await db.collection(collection).insertOne({
        ...data,
        createdAt: now,
        updatedAt: now,
    });
    return result;
}

// 更新数据方法，自动更新更新时间
export async function updateOne(collection, filterObj, data) {
    const filter = warpFilter(filterObj);
    const { db } = await connectToDatabase();
    const now = Date.now();
    const result = await db.collection(collection).updateOne(filter, {
        $set: {
            ...data,
            updatedAt: now,
        },
    });
    return result;
}

// 查找数据方法
export async function findList(collection, filter) {
    const newFilter = warpFilter(filter);
    const { db } = await connectToDatabase();
    let { page = 1, pageSize = 10, ...extraFilter } = newFilter;
    page = parseInt(page, 10);
    pageSize = parseInt(pageSize, 10);
    const result = await db
        .collection(collection)
        .find(extraFilter)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray();

    return map(result, (item) => {
        if (item._id) {
            item._id = item._id.toString();
        }
        return item;
    });
}

// 查找单个数据方法
export async function findOne(collection, filter) {
    const newFilter = warpFilter(filter);
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).findOne(newFilter);
    if (result && result._id) {
        result._id = result._id.toString();
    }
    return result;
}

function warpFilter(filter) {
    const newFilter = { ...filter };
    if (newFilter._id && typeof newFilter._id === "string") {
        newFilter._id = new ObjectId(newFilter._id);
    }
    return newFilter;
}
