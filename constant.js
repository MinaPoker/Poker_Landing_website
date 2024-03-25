const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/0xMinaPoker",
    handle: "@0xMinaPoker",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/0xminapoker",
    handle: "@0xMinaP",
  },
];

const title = "Mina Poker";
const description = "Zero knowledge based Poker";
const image = "https://minapoker.xyz";

const metaData = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://minapoker.xyz",
    siteName: "MinaPoker",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: [image],
    creator: "@0Vishalpatil",
  },
};

module.exports = { socials, metaData };
