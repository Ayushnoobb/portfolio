import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://ayushkhatri07.com.np";
const FULL_NAME = "Ayush Khatri";
const TITLE = "Ayush Khatri | Senior Software Engineer – Nepal";
const DESCRIPTION =
    "Ayush Khatri is a Senior Software Engineer based in Kathmandu, Nepal with 4+ years of experience building fintech, healthcare, and AI-powered web applications using Next.js, Node.js, and TypeScript.";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: TITLE,
        template: `%s | ${FULL_NAME}`,
    },
    description: DESCRIPTION,
    keywords: [
        "Ayush Khatri",
        "Ayush Khatri software engineer",
        "Ayush Khatri Nepal",
        "Ayush Khatri developer",
        "senior software engineer Nepal",
        "software engineer Kathmandu",
        "full stack developer Nepal",
        "Next.js developer Nepal",
        "Node.js developer Nepal",
        "fintech developer Nepal",
        "healthcare software Nepal",
        "AI developer Nepal",
        "web developer Kathmandu",
        "freelance developer Nepal",
        "ayushkhatri07",
        "ayushnoobb",
    ],
    authors: [{ name: FULL_NAME, url: BASE_URL }],
    creator: FULL_NAME,
    publisher: FULL_NAME,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: BASE_URL,
    },
    openGraph: {
        type: "profile",
        url: BASE_URL,
        title: TITLE,
        description: DESCRIPTION,
        siteName: `${FULL_NAME} – Portfolio`,
        locale: "en_US",
        images: [
            {
                url: `${BASE_URL}/ayush-khatri.png`,
                width: 1200,
                height: 630,
                alt: "Ayush Khatri – Senior Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [`${BASE_URL}/ayush-khatri.png`],
        creator: "@ayushnoobb",
    },
    verification: {
        // Add Google Search Console verification token here once you have it
        // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    },
};

// JSON-LD structured data (Person schema)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    url: BASE_URL,
    image: `${BASE_URL}/ayush-khatri.png`,
    sameAs: [
        "https://github.com/Ayushnoobb",
        "https://www.linkedin.com/in/ayush-khatri-67074a253/",
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: {
        "@type": "Organization",
        name: "Fusion Exis",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
    },
    email: "ayushwilltry@gmail.com",
    telephone: "+977-9745719068",
    knowsAbout: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "React",
        "PostgreSQL",
        "AWS",
        "Fintech",
        "Healthcare Software",
        "AI Integration",
        "Full Stack Development",
    ],
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "LBEF College, Maitidevi",
    },
    description: DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="canonical" href={BASE_URL} />
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                <Script
                    id="json-ld-person"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
