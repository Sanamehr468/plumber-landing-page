import "./globals.css";

export const metadata = {
  title: "FlowFix Plumbing Karachi — Test Landing Page",
  description: "Fictional test landing page for FlowFix Plumbing in Karachi. Emergency leak repair, drain cleaning, pump repair and installations with upfront pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
