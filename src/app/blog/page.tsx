import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Perth Travel Guide | AutoTrip Perth",
  description:
    "Explore Perth and Western Australia with AutoTrip's travel guides. Road trip tips, national park guides, and local driving advice.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog" },
};

export default function BlogLanding() {
  // Temporary redirect to simple blog listing while we fix build issues
  redirect('/blog/simple');
  
  // This return statement is never reached due to redirect above
  return null;
}