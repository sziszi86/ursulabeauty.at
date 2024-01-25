export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Margin React",
  description: "Margin is the React template for Marketing and SEO agencies.",
};

export const mainNav = [
  {
    title: "Főoldal",
    href: "/",
  },
  {
    title: "Versenyek",
    href: "/blog",
    external: false,
  },
  {
    title: "Rólunk",
    href: "/about",
    external: false,
  },
  {
    title: "Galéria",
    href: "/services",
    external: false,
  },
  {
    title: "Adatvédelmi tájoztató",
    href: "/pricing",
    external: false,
  },
  {
    title: "Kapcsolat",
    href: "/contact",
    external: false,
  },
] satisfies MainNavItem[];

export const footerNav = [
  {
    title: "Resources",
    items: [
      {
        title: "About",
        href: "/about",
        external: false,
      },
      {
        title: "Services",
        href: "/services",
        external: false,
      },
      {
        title: "Pricing",
        href: "/pricing",
        external: false,
      },
      {
        title: "Blog",
        href: "/blog",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Advertising",
        href: "#",
        external: false,
      },
      {
        title: "SMM",
        href: "#",
        external: false,
      },
      {
        title: "SEO",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];

export const footerNav2 = [
  {
    title: "Solutions",
    items: [
      {
        title: "SEO Marketing",
        href: "#",
        external: false,
      },
      {
        title: "Search engine optimization",
        href: "#",
        external: false,
      },
      {
        title: "Email marketing",
        href: "#",
        external: false,
      },
      {
        title: "Social Media",
        href: "#",
        external: false,
      },
      {
        title: "Conversion rate optimization",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Keyword Research Explained",
        href: "#",
        external: false,
      },
      {
        title: "Why SEO Matters",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Company",
        href: "/about",
        external: false,
      },
      {
        title: "Services & Pricing",
        href: "/services",
        external: false,
      },
      {
        title: "SEO Blog & News",
        href: "/posts",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];
