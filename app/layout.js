import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry.jsx";
import ThemeProvider from "./ThemeProvider";
import "./globals.css";
import { AppStoreProvider } from "./app.store.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "",
};

const RootLayout = async ({ children }) => {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} dark:bg-neutral-900 dark:text-neutral-200`}>
                <StyledComponentsRegistry>
                    <AppStoreProvider>
                        <ThemeProvider>{children}</ThemeProvider>
                    </AppStoreProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
};

export default RootLayout;
