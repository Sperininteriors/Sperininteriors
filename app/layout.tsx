import './globals.css'

export const metadata = {
  title: "Sperin Interiors",
  description: "Complete Home Renovation & Building Specialists",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
