export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.css";
// app/page.tsx content is co-located below as a named export for the build system

export const metadata: Metadata = {
  title: "Alex Morgan | SQA Engineer Portfolio",
  description:
    "Professional Software Quality Assurance Engineer specializing in test automation, API testing, and CI/CD pipelines. ISTQB certified with 6+ years of experience.",
  keywords: [
    "SQA Engineer",
    "Software Quality Assurance",
    "Test Automation",
    "Selenium",
    "Cypress",
    "ISTQB",
    "QA Portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan | SQA Engineer Portfolio",
    description:
      "Professional Software Quality Assurance Engineer specializing in test automation, API testing, and CI/CD pipelines.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | SQA Engineer Portfolio",
    description:
      "Professional SQA Engineer — Test Automation | API Testing | CI/CD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f172a] text-[#e2e8f0] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
