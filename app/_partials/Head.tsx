import Head from "next/head";

export default function WebHead() {
    return (
        <>
            <Head>
                {/* Basic SEO */}
                <title>
                    Ayush Khatri | Software Engineer & Tech Enthusiast
                </title>
                <meta
                    name="description"
                    content="Ayush Khatri is a software engineer specializing in modern web development, scalable systems, and innovative technology solutions. Explore his projects, skills, and professional experience."
                />
                <meta
                    name="keywords"
                    content="Ayush Khatri, software engineer, web developer, full stack developer, system design, programming, technology solutions, coding portfolio"
                />
                <meta name="author" content="Ayush Khatri" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Ayush Khatri | Software Engineer"
                />
                <meta
                    property="og:description"
                    content="Software engineer passionate about building scalable apps, web solutions, and innovative software."
                />
                {/* <meta property="og:image" content="https://example.com/images/ayush-khatri.jpg" />
        <meta property="og:url" content="https://example.com" /> */}
                <meta property="og:type" content="profile" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Ayush Khatri | Software Engineer"
                />
                <meta
                    name="twitter:description"
                    content="Explore the portfolio and expertise of Ayush Khatri, a software engineer passionate about technology."
                />
                {/* <meta name="twitter:image" content="https://example.com/images/ayush-khatri.jpg" /> */}

                {/* Mobile Optimization */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://example.com" />

                {/* Structured Data for Google Knowledge Panel */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Ayush Khatri",
                            jobTitle: "Software Engineer",
                            // url: "https://example.com",
                            // image: "https://example.com/images/ayush-khatri.jpg",
                            sameAs: [
                                "https://github.com/ayushnoobb",
                                "https://www.linkedin.com/in/ayush-khatri-67074a253/",
                            ],
                        }),
                    }}
                />
            </Head>
        </>
    );
}
