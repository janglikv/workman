"use client";
import { ConfigProvider, theme } from "antd";

export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          colorPrimary: "#486bd1",
          colorSuccess: "#339c00",
          colorError: "#ca1c1e",
          colorBgBase: "#040404",
        },
        algorithm: [theme.darkAlgorithm],
        components: {
          Divider: {
            // colorSplit: "#202020",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
