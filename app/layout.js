import "./globals.css";

export const metadata = {
  title: "Shreyash Musmade | AI/ML Engineer",
  description: "Portfolio of Shreyash Musmade — AI/ML, Generative AI, Data Analytics and Business Intelligence.",
  keywords: ["Shreyash Musmade", "AI ML Engineer", "Generative AI", "Data Analytics", "Power BI", "Python"],
  authors: [{ name: "Shreyash Musmade" }],
  openGraph: {
    title: "Shreyash Musmade | AI/ML Engineer",
    description: "AI/ML, Generative AI and analytics projects by Shreyash Musmade.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}