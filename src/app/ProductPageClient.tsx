// src/app/ProductPageClient.tsx
"use client";

import React from "react";
import YouTubePlayer from "@/components/YouTubePlayer";
import parse from "html-react-parser";
import { Product, Section } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductPageClient({ product }: Props) {
    console.log("Product data:", product);
  // Declare the function first
  const getSectionByType = (type: string): Section[] =>
    Array.isArray(product.sections) ? product.sections.filter((section) => section.type === type) : [];

  // Then use it
  const instructors = getSectionByType("instructor");
  const pointers = getSectionByType("pointers");
  const features = getSectionByType("features");
  const about = getSectionByType("about");

  const videoMedia = Array.isArray(product.media)
    ? product.media.find((m) => m.provider === "youtube")
    : undefined;

  const videoId = videoMedia?.url.split("v=")[1];


  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="prose mb-6">{product.description ? parse(product.description) : null}</div>

      {videoId && <YouTubePlayer videoId={videoId} />}

      <div className="mb-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
  {product.cta_text?.button || "Enroll Now"}
</button>
      </div>

      {instructors.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructors</h2>
          <ul className="list-disc ml-6 space-y-1">
            {instructors.map((inst, idx) => (
              <li key={idx}>{inst.title}</li>
            ))}
          </ul>
        </section>
      )}

      {pointers.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
          <ul className="list-disc ml-6 space-y-1">
            {pointers.map((point, idx) => (
              <li key={idx}>{point.title}</li>
            ))}
          </ul>
        </section>
      )}

      {features.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Course Features</h2>
          <ul className="list-disc ml-6 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx}>{feature.title}</li>
            ))}
          </ul>
        </section>
      )}

      {about.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About the Course</h2>
          {about.map((sec, idx) => (
            <div key={idx} className="mb-4">
              {sec.content && parse(sec.content)}
            </div>
          ))}
        </section>
      )}

      {product.checklist && product.checklist.length > 0 && (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Checklist</h2>
    <ul className="list-disc ml-6 space-y-1">
      {product.checklist.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  </section>
)}

    </main>
  );
}
