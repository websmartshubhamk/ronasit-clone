import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronas IT - Software Development Company",
  description: "Design. Development. Maintenance. Professional IT services since 2007.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
