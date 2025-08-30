import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
    title: "Ayush Khatri | Software Engineer & Tech Enthusiast",
    description:
        "Ayush Khatri is a software engineer specializing in modern web development, scalable systems, and innovative technology solutions. Explore his projects, skills, and professional experience.",
    keywords:
        "Ayush Khatri, Ayush , ayush , Khatri , khatri , AK , ak , ayus, ayu, software engineer, web developer, full stack developer, system design, programming, technology solutions, coding portfolio",
    authors: [{ name: "Ayush Khatri" }],

    openGraph: {
        title: "Ayush Khatri | Software Engineer & Tech Enthusiast",
        description:
            "Software engineer passionate about building scalable apps, web solutions, and innovative software.",
        type: "profile",
        url: "https://ayushkhatri07.com.np/",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ayush Khatri | Software Engineer & Tech Enthusiast",
        description:
            "Explore the portfolio and expertise of Ayush Khatri, a software engineer passionate about technology.",
        // images: ['https://ayushkhatri.dev/twitter-image.jpg'], // Add when you have an image
    },

    alternates: {
        canonical: "https://ayushkhatri07.com.np/", // Update with your actual URL
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
