import Head from "next/head";

interface Seo {
  title?: string;
  description?: string;
  keywords?: string;
}

interface SeoHeadProps {
  seo?: Seo;  // make seo optional
}

export default function SeoHead({ seo }: SeoHeadProps) {
  return (
    <Head>
      <title>{seo?.title || "Default Title"}</title>
      <meta name="description" content={seo?.description || "Default description"} />
      {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
    </Head>
  );
}
