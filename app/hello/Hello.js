"use client";
import { Button, Flex, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { addApp } from "./page.server";

const defaultAppName = "Demo App";

export default function () {
    const router = useRouter();
    const handleSubmit = async (values) => {
        await addApp(values.name || defaultAppName);
        router.replace("/");
    };
    return (
        <Flex justify="center" align="center" style={{ height: "80vh" }}>
            <div style={{}}>
                <div style={{ fontSize: 64, lineHeight: 2 }}>
                    <div>Hi, nice to meet you.</div>
                </div>
                <Form layout="vertical" size="large" onFinish={handleSubmit}>
                    <Form.Item label="please input your app name" name="name">
                        <Input placeholder={defaultAppName} />
                    </Form.Item>
                    <Button type="primary" block htmlType="submit">
                        LET'S GO!
                    </Button>
                </Form>
            </div>
        </Flex>
    );
}
