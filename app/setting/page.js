import MainLayout from "../layouts/MainLayout";
import { getApp } from "../services/app";

export const metadata = {
    key: "setting",
};

export default async function System() {
    const app = await getApp();
    return (
        <MainLayout appName={app.name} title="setting">
            123
        </MainLayout>
    );
}
