export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sam Nogalski Software Engineering",
    url: "https://samn.dev",
    logo: "https://samn.dev/web-app-manifest-512x512.png",
    description: "Professional software engineering services including Lovable, v0, and base44 project deployments, technical leadership, and enterprise development.",
    founder: {
      "@type": "Person",
      name: "Sam Nogalski",
      jobTitle: "Software Engineer",
      url: "https://samn.dev",
      sameAs: [
        "https://github.com/nogalskisam",
        "https://samn.dev"
      ]
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "sam@samn.dev",
      contactType: "customer service"
    },
    areaServed: "Worldwide",
    serviceType: [
      "Software Engineering",
      "AI Coding Tool Deployment",
      "Technical Leadership",
      "Web Development",
      "Project Deployment"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sam Nogalski",
    jobTitle: "Software Engineer",
    description: "Professional software engineer specializing in AI coding tool deployments, technical leadership, and enterprise development solutions.",
    url: "https://samn.dev",
    image: "https://samn.dev/web-app-manifest-512x512.png",
    email: "sam@samn.dev",
    knowsAbout: [
      "Software Engineering",
      "Lovable Deployment",
      "v0 Deployment",
      "base44 Deployment",
      "AI Coding Tools",
      "Technical Leadership",
      "Web Development",
      "DevOps"
    ],
    sameAs: [
      "https://github.com/nogalskisam"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sam Nogalski - Software Engineering & AI Coding Deployment",
    url: "https://samn.dev",
    description: "Professional software engineering services from creative AI coding deployments to enterprise development.",
    author: {
      "@type": "Person",
      name: "Sam Nogalski"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://samn.dev/posts?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Lovable Project Deployment",
      description: "Professional deployment services for Lovable AI-generated projects",
      provider: {
        "@type": "Person",
        name: "Sam Nogalski"
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Lovable Deployment Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Code Review and Optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Domain Setup"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Optimization"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "v0 Project Deployment",
      description: "Professional deployment services for v0 AI-generated projects",
      provider: {
        "@type": "Person",
        name: "Sam Nogalski"
      },
      areaServed: "Worldwide"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "base44 Project Deployment",
      description: "Professional deployment services for base44 AI-generated projects",
      provider: {
        "@type": "Person",
        name: "Sam Nogalski"
      },
      areaServed: "Worldwide"
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sam Nogalski Software Engineering",
    image: "https://samn.dev/web-app-manifest-512x512.png",
    "@id": "https://samn.dev",
    url: "https://samn.dev",
    telephone: "",
    email: "sam@samn.dev",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8008,
      longitude: -1.5491
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "17:00"
    },
    sameAs: [
      "https://github.com/nogalskisam"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}