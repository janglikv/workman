"use server";

import { insertOne } from "../lib/mongo";

export async function addApp(appName) {
    await insertOne("apps", { name: appName });
    return appName;
}
