import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Dolatabadi",
  description: "Ali Dolatabadi Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
