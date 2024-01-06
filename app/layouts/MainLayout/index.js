"use client";
import { AppstoreOutlined } from "@ant-design/icons";
import { Avatar, Divider, Flex, Space } from "antd";

export default function MainLayout({ title, appName, extra, children }) {
    return (
        <main>
            {/* 顶部固定 */}
            <header className="bg-white bg-opacity-10 px-4 py-3 sticky top-0 backdrop-blur-sm z-10 flex justify-between align-middle">
                <Flex align="center">
                    <Space align="center">
                        <Avatar icon={<AppstoreOutlined />}></Avatar>
                        <span>{appName}</span>
                    </Space>
                    <Divider type="vertical" className="h-4" />
                    {title}
                </Flex>
                <Flex align="center">{extra}</Flex>
            </header>
            {children}
        </main>
    );
}
