"use client";

import useTheme from "@/hooks/useTheme";
import { Segmented as AntSegmented, ConfigProvider, theme } from "antd";

export default function Segmented({ ...props }) {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "rgba(0,0,0,0)",
        },
        components: {
          Segmented: {
            itemHoverBg: theme.colorBgTextHover,
            itemSelectedBg: theme.colorBgTextActive,
          },
        },
      }}
    >
      <AntSegmented {...props} />
    </ConfigProvider>
  );
}
