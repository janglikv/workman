import { redirect } from "next/navigation";
import MainLayout from "./layouts/MainLayout";
import { getApp } from "./lib/app";
import { isEmpty } from "lodash";
import { SettingOutlined } from "@ant-design/icons";

export default async function Home() {
    const app = await getApp();
    if (!app) {
        return redirect("/hello", "replace");
    }
    const { fields = [] } = app;
    return (
        <MainLayout title="123123" appName={app.name} extra={<SettingOutlined />}>
            {isEmpty(fields) && "setting"}
        </MainLayout>
    );
}
