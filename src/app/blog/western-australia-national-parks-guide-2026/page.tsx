import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Western Australia National Parks Guide 2026 | AutoTrip",
  description: "Discover Western Australia's most spectacular national parks. From the ancient forests of Walpole to the red cliffs of Kalbarri, this guide covers everything you need for an unforgettable road trip in 2026.",
  keywords: [
    "Western Australia national parks",
    "WA national parks guide 2026",
    "Perth to national parks road trip",
    "Australia national parks camping",
    "Kalbarri National Park guide",
    "Purnululu National Park access"
  ],
};

export default function NationalParksGuide() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> April 6, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 7 min read
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Western Australia
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Western Australia National Parks: The Complete 2026 Guide
          </h1>
          
          <p className="text-lg text-slate-700">
            Western Australia is home to some of Australia's most diverse and spectacular national parks. 
            From ancient forests and rugged coastlines to outback deserts and mountain ranges, this guide 
            covers everything you need to plan your 2026 national park road trip.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
            alt="Western Australia National Parks Landscape"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why 2026 is the Perfect Year for WA National Parks</h2>
          <p>
            With new infrastructure improvements, better accessibility, and increased conservation efforts, 
            2026 offers the best-ever experience for exploring Western Australia's national parks. New walking trails, 
            upgraded facilities, and digital park passes make planning easier than ever.
          </p>

          <h2>Top 5 Must-Visit National Parks</h2>
          
          <h3>1. Kalbarri National Park</h3>
          <p>
            Famous for its dramatic red sandstone cliffs and the Murchison River gorge. The new Skywalk 
            (opened 2025) offers breathtaking views 100 meters above the gorge floor. Best visited April-October.
          </p>
          
          <h3>2. Purnululu National Park (Bungle Bungle Range)</h3>
          <p>
            UNESCO World Heritage site known for its distinctive beehive-shaped sandstone domes. Access requires 
            a 4WD vehicle and careful planning. The dry season (May-October) is the only safe time to visit.
          </p>
          
          <h3>3. Walpole-Nornalup National Park</h3>
          <p>
            Home to the Valley of the Giants and the famous Tree Top Walk through ancient tingle forests. 
            Just 4.5 hours south of Perth, perfect for a weekend trip.
          </p>
          
          <h3>4. Karijini National Park</h3>
          <p>
            Western Australia's second largest park features stunning gorges, waterfalls, and natural swimming 
            holes. The park has undergone significant upgrades with new boardwalks and viewing platforms.
          </p>
          
          <h3>5. Nambung National Park (The Pinnacles)</h3>
          <p>
            Just 2 hours from Perth, this park features thousands of ancient limestone pillars rising from 
            yellow desert sands. Perfect for a day trip or combined with Cervantes and Jurien Bay.
          </p>

          <h2>Planning Your National Park Road Trip</h2>
          
          <h3>Vehicle Requirements</h3>
          <ul>
            <li><strong>Standard parks (near Perth):</strong> Regular 2WD vehicle sufficient</li>
            <li><strong>Remote parks (Karijini, Purnululu):</strong> 4WD essential</li>
            <li><strong>Long distances:</strong> Consider a vehicle with good fuel economy</li>
            <li><strong>AutoTrip recommendation:</strong> Toyota Prado or similar for remote parks</li>
          </ul>
          
          <h3>Park Passes & Permits</h3>
          <p>
            All Western Australian national parks require a park pass. The new digital park pass system 
            (launched 2025) allows easy online purchase:
          </p>
          <ul>
            <li><strong>Day pass:</strong> $17 per vehicle</li>
            <li><strong>Holiday pass (4 weeks):</strong> $50 per vehicle</li>
            <li><strong>Annual pass:</strong> $130 per vehicle</li>
            <li>Purchase online at <a href="https://parks.dpaw.wa.gov.au" className="text-primary">parks.dpaw.wa.gov.au</a></li>
          </ul>
          
          <h3>Best Time to Visit</h3>
          <p>
            <strong>April-October:</strong> Ideal for most parks - mild temperatures, minimal rainfall<br/>
            <strong>November-March:</strong> Some parks close due to extreme heat or flood risk<br/>
            <strong>Wildflower season:</strong> August-October in southern parks
          </p>

          <h2>Safety Considerations</h2>
          <ul>
            <li>Always carry sufficient water (minimum 4L per person per day)</li>
            <li>Check road conditions before entering remote parks</li>
            <li>Inform someone of your travel plans and expected return</li>
            <li>Carry a satellite phone or emergency beacon in remote areas</li>
            <li>Be aware of seasonal closures and fire bans</li>
          </ul>

          <div className="bg-slate-50 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Explore WA's National Parks?</h3>
            <p className="mb-6">
              AutoTrip makes your national park adventure simple. Choose the right vehicle for your journey, 
              pick up at Perth Airport, and start your exploration within minutes.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-slate-900 rounded-full transition"
            >
              Book Your WA National Park Vehicle
            </Link>
          </div>
          
          <h2>2026 Park Improvements & New Features</h2>
          <p>
            Several parks have received significant upgrades for 2026:
          </p>
          <ul>
            <li><strong>Kalbarri:</strong> New accessible walking trails and viewing platforms</li>
            <li><strong>Karijini:</strong> Upgraded campground facilities with powered sites</li>
            <li><strong>Walpole:</strong> Extended Tree Top Walk with new interpretive displays</li>
            <li><strong>All parks:</strong> Improved digital connectivity for emergency services</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
