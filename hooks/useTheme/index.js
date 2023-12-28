"use client";

import { theme } from "antd";

export default function useTheme() {
  const token = theme.useToken();
  return token.token;
}
