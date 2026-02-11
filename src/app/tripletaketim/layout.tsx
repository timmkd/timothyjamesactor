import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "#TripleTakeTim - Timothy James Actor",
  description:
    "Timothy James explores 12 months of monthly scene work with three distinct takes. Building creative muscles through consistent practice, exploring character choices, and connecting with casting directors.",
  openGraph: {
    title: "#TripleTakeTim - Timothy James",
    description:
      "Timothy James explores 12 months of monthly scene work. Three distinct takes, every month.",
    url: "https://timothyjamesactor.com/tripletaketim",
    siteName: "Timothy James Actor",
    images: [
      {
        url: "/source_images/social.png",
        width: 1536,
        height: 1024,
        alt: "#TripleTakeTim - Three takes, same moment, different choices",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#TripleTakeTim - Timothy James",
    description:
      "Timothy James explores 12 months of monthly scene work. Three takes per scene. Focussing on getting it done more than getting it perfect.",
    images: ["/source_images/social.png"],
  },
};

export default function TripleTakeTimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
