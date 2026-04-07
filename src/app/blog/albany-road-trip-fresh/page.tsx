import { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Perth to Albany: WA's Most Underrated Road Trip Is About to Blow Up",
  description: "Autumn 2026 is driving renewed interest in WA's Great Southern coastal route — ancient tingle forests at Walpole, the stunning Greens Pool at William Bay, cool-climate Denmark wineries, and Albany's dramatic Torndirrup cliffs.",
};

export default function PerthToAlbanyRoadTrip() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Perth to Albany: WA's Most Underrated Road Trip Is About to Blow Up
        </h1>
        
        <div className="text-gray-600 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
            Road Trips
          </span>
          <span className="text-gray-500">April 7, 2026</span>
        </div>
        
        {/* Hero Image - FRESH URL with timestamp */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/jonzhke-cmd/tribe_project/master/public/albany-coastal-cliff-v2.jpg?force=202604071322"
            alt="Dramatic coastal cliffs near Albany, Western Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
            Albany's stunning coastal cliffs © 2026
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Autumn 2026 is driving renewed interest in WA's Great Southern coastal route — 
            ancient tingle forests at Walpole, the stunning Greens Pool at William Bay, 
            cool-climate Denmark wineries, and Albany's dramatic Torndirrup cliffs are all 
            going viral as a wilder, crowd-free alternative to the well-worn Margaret River trail.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Route is Special</h2>
          <p>
            The 420km drive from Perth to Albany takes you through some of Western Australia's 
            most diverse landscapes. Unlike the more popular Margaret River route, this southern 
            coastal drive offers ancient forests, stunning beaches, and dramatic cliffs with far fewer crowds.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4-Day Itinerary</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Day 1: Perth to Walpole (4.5 hours)</h3>
          <p>
            Start early and head south. Your first major stop should be the Valley of the Giants 
            Tree Top Walk near Walpole. These 400-year-old tingle trees are unique to this region.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Day 2: Walpole to Denmark (1 hour)</h3>
          <p>
            Visit William Bay National Park to see Greens Pool — a natural rock pool so perfect 
            it looks Photoshopped. Continue to Denmark for lunch at one of the region's wineries.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Day 3: Denmark to Albany (1 hour)</h3>
          <p>
            Explore Albany's historic sites and natural wonders. Don't miss Torndirrup National 
            Park's Gap and Natural Bridge formations.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Day 4: Albany to Perth (4.5 hours)</h3>
          <p>
            Take the inland route back via Mount Barker for a different perspective, or explore 
            more of Albany before heading home.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Explore?</h3>
            <p className="mb-4">
              Book your Perth rental car today and discover why this underrated road trip is 
              about to become WA's next big thing.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Book Your Rental Car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}