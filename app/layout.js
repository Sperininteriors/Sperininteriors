import "./globals.css";

export const metadata = {
  title: "Sperin Interiors",
  description: "Complete Home Renovation & Building Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
