import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronas IT - Software Development Company",
  description: "Design. Development. Maintenance. Professional IT services since 2007.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
