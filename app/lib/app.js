import { findOne } from "./mongo";

export async function getApp() {
    return findOne("apps");
}
