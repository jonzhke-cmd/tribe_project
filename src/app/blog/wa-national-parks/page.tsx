import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Western Australia National Parks Accessible by 2WD | AutoTrip",
  description: "Think you need a 4x4 to explore WA? Think again. These spectacular national parks are perfect for our standard rental fleet.",
  keywords: ["WA national parks", "2WD national parks Perth", "Karijini 2WD", "Nambung National Park"],
};

export default function NationalParksGuide() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Destinations</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> March 15, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            5 WA National Parks Accessible by 2WD
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            There is a myth that you need an expensive, heavy-duty 4x4 to see the real Western Australia. That couldn't be further from the truth.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1520635489708-cb864a6f958a?q=80&w=1200&auto=format&fit=crop"
            alt="Pinnacles desert"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Western Australia is massive. While the rugged Kimberley and remote Pilbara demand high-clearance four-wheel drives, some of the most alien, beautiful landscapes on Earth are connected by perfectly paved bitumen. Here are 5 you can drive to in a standard AutoTrip sedan or SUV.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. Nambung National Park (The Pinnacles)</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            A pleasant two-hour drive north of Perth along the Indian Ocean Drive brings you to the Pinnacles Desert. Thousands of ancient limestone pillars rise from the yellow sand. Best of all? The scenic loop drive through the desert is a hard-packed surface specifically maintained to be easily passable for 2WD rental cars.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. Yanchep National Park</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Less than an hour from Perth, Yanchep offers a mix of native bushland, caves, and koalas. The roads throughout the park are sealed, making it an incredibly easy half-day trip for families renting a car from the city or airport. 
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Kalbarri National Park</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Further north (about a 6-hour drive from Perth), Kalbarri features breathtaking coastal cliffs and deep river gorges. The state government recently sealed the roads leading to all major lookouts, including the famous Nature's Window and the new Skywalk. It's a long drive, but a comfortable, air-conditioned AutoTrip SUV makes it a breeze.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">4. Leeuwin-Naturaliste National Park</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Located in the Margaret River region, this park stretches along the coast. Caves Road, which runs through the heart of the towering Karri forest, is fully sealed. You can easily access famous surf breaks, lighthouses, and caves in a standard two-wheel-drive vehicle.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">5. Stirling Range National Park</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Drive down to the Great Southern region to see WA's only major mountain range. While you can't drive *up* Bluff Knoll in a 2WD (you have to hike it), the major access roads leading to the base camps and lookout points are heavily graded and accessible to standard cars.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Pack the car and hit the road.</h3>
            <p className="text-slate-600 mb-8">
              Explore the best of WA in an affordable, modern rental car.
            </p>
            <Link href="/fleet" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              Browse Our Fleet
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
