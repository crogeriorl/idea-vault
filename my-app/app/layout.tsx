import "../styles/globals.css";
import { ReactNode } from "react";
import { UserProvider } from "../context/UserContext";
import { IdeasProvider } from "@/context/IdeasContext";
import { ToastProvider } from "@/context/toastContext";
import { ThemeProvider } from "@/components/personal/theme/themeProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <UserProvider>
            <IdeasProvider>
              <ToastProvider>{children}</ToastProvider>
            </IdeasProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
