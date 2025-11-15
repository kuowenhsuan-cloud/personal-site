import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "郭汶瑄 Wen-Hsuan Kuo – Mounting Artist & Contemporary Practice",
  description:
    "郭汶瑄，書畫裝裱與修復實務與當代創作並行的創作者。結合裝裱工藝、文本與去中心化思維，延伸出自畫像、寄生創作與主權封印等系列。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}