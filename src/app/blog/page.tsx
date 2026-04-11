// Simple redirect to static blog listing while we fix build issues
import { redirect } from "next/navigation";

export default function BlogLanding() {
  redirect('/blog-listing-static.html');
  return null;
}