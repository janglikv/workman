"use client";
import appStore from "@/app/app.store";
import { AppstoreOutlined } from "@ant-design/icons";
import { Avatar, Divider, Space } from "antd";
import { useEffect, useLayoutEffect } from "react";

export default function MainLayout({ title, appName, children }) {
    return (
        <main>
            {/* 顶部固定 */}
            <header className="bg-white bg-opacity-10 px-4 py-3 sticky top-0 backdrop-blur-sm w-screen z-10">
                <Space align="center">
                    <Avatar icon={<AppstoreOutlined />}></Avatar>
                    <span>{appName}</span>
                </Space>
                <Divider type="vertical" className="h-4" />
                {title}
            </header>
            {children}
        </main>
    );
}
