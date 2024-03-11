import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Weather App",
  description: "A application that shows the weather in desired locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='mx-12 lg:mx-24'>{children}</body>
    </html>
  );
}