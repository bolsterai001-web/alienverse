import React from "react";
import ChapterReader from "@/components/ChapterReader";
import { SAMPLE_CHAPTER } from "@/data/bookData";

export const metadata = {
  title: "Sample Chapter: Transmission 001 | Alien Verse by Elias Vance",
  description:
    "Read the free opening chapter of 'Alien Verse', the bestselling hard sci-fi novel by Elias Vance. Experience the signal from the Kepler-452 Abyss.",
};

export default function SampleChapterPage() {
  return (
    <div className="py-8 sm:py-12">
      <ChapterReader chapter={SAMPLE_CHAPTER} />
    </div>
  );
}
