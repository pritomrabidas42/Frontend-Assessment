"use client";

import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import YouTube from "react-youtube";
import InstructorSection from "@/components/InstructorSection";
import FeatureSection from "@/components/FeatureSection";
import PointersSection from "@/components/PointersSection";
import AboutSection from "@/components/AboutSection";
import ChecklistSection from "@/components/ChecklistSection";

import { getProduct } from "@/lib/api";

export default async function Page() {
  const product = await getProduct();

  const title = product?.title || "IELTS Course";
  const description = parse(product?.description || "");
  const checklist = product?.checklist || [];
  const ctaText = product?.cta_text?.text || "Enroll Now";
  const trailer = product?.media?.find(
    (m: any) => m.type === "video" && m.provider === "youtube"
  );

  const sections = product?.sections || [];
  const instructors = sections.filter((s: any) => s.type === "instructor");
  const features = sections.filter((s: any) => s.type === "feature");
  const pointers = sections.filter((s: any) => s.type === "pointer");
  const about = sections.find((s: any) => s.type === "about");
  const layout = sections.find((s: any) => s.type === "layout");

  return (
    <main className="max-w-5xl mx-auto p-4 space-y-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={product?.meta_description || "IELTS Course"} />
      </Head>

      <section>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="prose max-w-none">{description}</div>
      </section>

      <section>
        <InstructorSection instructors={instructors} />
      </section>

      <section>
        {trailer && <YouTube videoId={trailer.url.split("v=")[1]} />}
      </section>

      <section>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          {ctaText}
        </button>
      </section>

      <section>
        <ChecklistSection checklist={checklist} />
      </section>

      {layout && (
        <section>
          <h2 className="text-xl font-semibold mb-2">How the course is laid out</h2>
          <div>{parse(layout.content)}</div>
        </section>
      )}

      <section>
        <PointersSection pointers={pointers} />
      </section>

      <section>
        <FeatureSection features={features} />
      </section>

      {about && (
        <section>
          <AboutSection about={about} />
        </section>
      )}
    </main>
  );
}
