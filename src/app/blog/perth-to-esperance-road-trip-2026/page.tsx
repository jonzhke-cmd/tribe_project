import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth to Esperance Road Trip 2026: Lucky Bay, Kangaroos & Cape Le Grand | AutoTrip",
  description: "The WA road trip everyone is talking about in 2026. Drive from Perth to Esperance — home to Lucky Bay (Australia's whitest sand), free-roaming kangaroos, and Cape Le Grand National Park.",
  keywords: ["Perth to Esperance road trip", "Lucky Bay Western Australia", "Cape Le Grand National Park", "car rental Perth Airport", "WA hidden gems 2026"],
};

export default function EsperanceRoadTripPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Road Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> April 8, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Perth to Esperance: The Road Trip That&apos;s Breaking TikTok in 2026
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Lucky Bay has the whitest sand in Australia, kangaroos that literally sunbathe on the beach, and water so turquoise it looks photoshopped. This is WA&apos;s most underrated drive — and international travellers are finally discovering it.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&auto=format&fit=crop&q=80"
            alt="Turquoise bay waters at Esperance, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            While Broome gets the influencer treatment and Margaret River wins the wine crowd, Esperance has quietly become the most talked-about destination in Western Australia for 2026 — and for very good reason.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Esperance Is Having Its Moment</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia is already experiencing record international visitation in 2026, driven in part by Qantas&apos;s new direct flights from London, Paris, and Rome into Perth Airport. As visitors fan out from the capital, they&apos;re increasingly heading south — because WA&apos;s south coast is jaw-dropping in a way that very few places on Earth can match.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Lucky Bay at Cape Le Grand National Park has become a genuine viral phenomenon. The sight of wild kangaroos lounging on a beach of snow-white silica sand, backed by turquoise water cleaner than the Maldives, has racked up millions of views on TikTok and Instagram. Unlike so many viral travel spots, Lucky Bay completely lives up to the hype in person.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Drive: Perth to Esperance</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The distance from Perth CBD (or Perth Airport) to Esperance is approximately 720 kilometres, following the Albany Highway south to Albany, then turning east along the South Coast Highway. In your AutoTrip rental car, plan for a comfortable 7–8 hours of total driving. Given the distances involved in WA, most travellers split the trip across two days — and Albany is the obvious overnight stop.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> Recommended Drive Plan (2 Days)
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li><strong>Day 1 Morning — Perth Airport → Stirling Range (3 hrs):</strong> Pick up your AutoTrip rental and head south on the Albany Highway. Stop at Stirling Range National Park — the granite peaks rising from the flat farmland are extraordinary.</li>
              <li><strong>Day 1 Afternoon — Albany (1 more hr):</strong> Check in, then head straight to Torndirrup National Park for The Gap and Natural Bridge. Some of the most dramatic coastal scenery in Australia.</li>
              <li><strong>Day 2 Morning — Albany → Esperance (3.5 hrs):</strong> Head east along the South Coast Highway. Fuel up in Ravensthorpe (halfway). Arrive in Esperance for lunch.</li>
              <li><strong>Day 2 Afternoon — Lucky Bay:</strong> Drive 56 km east into Cape Le Grand National Park. Spend the afternoon at Lucky Bay with the kangaroos. Return to Esperance for dinner.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Cape Le Grand National Park: What to Expect</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Cape Le Grand is the crown jewel of this entire road trip. The park sits 56 km east of Esperance town, and the road in is fully sealed — meaning any standard rental car handles it with complete ease. No 4WD required, no drama.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Within the park, you have multiple world-class beaches to explore: Lucky Bay (the famous kangaroo beach), Thistle Cove with its dramatic granite headlands, Hellfire Bay with vivid blue water, and Le Grand Beach stretching for kilometres of total solitude. Give yourself a full day here at minimum — two if you can manage it.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The kangaroos at Lucky Bay are wild animals that have simply become comfortable around quiet, respectful humans. They are not fed or trained. Please do not approach, feed, or interfere with them in any way. The best shots come from sitting quietly on the sand and letting them wander close naturally.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Esperance Town: More Than a Pit Stop</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Esperance town itself is a genuine surprise. It&apos;s a proper coastal community with excellent cafes, a well-stocked IGA (stock up before heading into the national park), and the Esplanade foreshore, which offers postcard-perfect views across the Bay of Isles toward the Recherche Archipelago.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Don&apos;t miss the Esperance Museum for a brilliant deep-dive into the town&apos;s quirky history — including the story of Skylab, the NASA space station that famously broke up over southern WA in 1979, with fragments landing near Esperance. The town fined NASA $400 for littering. The fine remains unpaid.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Albany Detour: Non-Negotiable</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Albany is one of Australia&apos;s most underrated coastal cities, and breaking the drive here isn&apos;t just practical — it&apos;s essential. The raw Southern Ocean coastline at Torndirrup National Park, particularly at The Gap and Natural Bridge, is among the most dramatic in the country. Waves from Antarctica crash directly into ancient granite with a force you feel in your chest.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Albany was actually Australia&apos;s first settlement on the west coast, and its heritage precinct along Stirling Terrace is beautifully preserved. Excellent coffee and a strong food scene have emerged in recent years — this is no longer a one-night-stand town. If the schedule allows, consider two nights.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> Which AutoTrip Vehicle to Choose
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li><strong>Standard Sedan:</strong> Perfectly adequate for the entire route. All roads between Perth, Albany, Esperance, and Cape Le Grand are sealed.</li>
              <li><strong>Mid-Size SUV (Recommended):</strong> More comfortable for the longer distances, better fuel range, and fits camping gear if you want to stay at Lucky Bay campground.</li>
              <li><strong>4WD:</strong> Not required for the main route. Only necessary if you plan to venture into Cape Arid National Park on unsealed tracks or want to explore remote beaches east of Esperance.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">When to Go</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Esperance is best visited from September to April. October and November are ideal — wildflower season is peaking inland, and the coastal light is extraordinary. Peak summer (December–February) brings more visitors and higher temperatures, but the water is at its most spectacular. Winter months (June–August) are cooler but offer excellent southern right whale watching in the bay.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Practical Tips Before You Leave Perth</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Fuel up in every major town. Between Albany and Esperance on the South Coast Highway, fuel is available at Ravensthorpe — don&apos;t pass through without stopping. Download Google Maps offline before you leave Perth, and consider a Telstra SIM for the best regional coverage. Mobile signal disappears quickly once you leave the highway corridors.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Lucky Bay campground bookings are essential in peak season and are made online via the DBCA Parks and Wildlife Service website. If you&apos;re not camping, the 45-minute drive from Esperance town is absolutely worth doing as a day trip. Always carry at least four litres of water per person when exploring the national park, and wear sunscreen — the WA sun is relentless.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to hit the south coast?</h3>
            <p className="text-slate-600 mb-8">
              Pick up your AutoTrip rental directly from T1–T4 at Perth Airport. No shuttle bus, no waiting — just grab the keys and start driving.
            </p>
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              Check Vehicle Availability
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
