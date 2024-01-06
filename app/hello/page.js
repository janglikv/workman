import { notFound } from "next/navigation";
import Hello from "./Hello";
import { getApp } from "../lib/app";

export const metadata = {
    title: "hello",
    params: {
        name: 123,
    },
};

export default async function () {
    const app = await getApp();
    if (app) {
        return notFound();
    }
    return <Hello />;
}
