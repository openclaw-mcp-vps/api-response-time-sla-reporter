import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLA Reporter – API Response Time Compliance Reports",
  description: "Automatically generate branded SLA compliance reports for your enterprise clients. Track API uptime, response times, and compliance status."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f94b7c89-bca4-4b1f-bfa5-041f60ff10e8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
