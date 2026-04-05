import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026 | AutoTrip",
  description:
    "Discover the Swan Valley — Perth's closest wine region, just 25 minutes from the airport. Artisan chocolates, craft breweries, boutique wineries and stunning autumn colours. Here's how to drive it.",
  keywords: [
    "Swan Valley day trip Perth",
    "Swan Valley wine trail car hire",
    "Perth wine region drive 2026",
    "Swan Valley road trip",
    "car rental Perth Swan Valley",
    "Perth autumn harvest drive",
  ],
};

export default function SwanValleyPost() {
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
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">
              Day Trips
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> April 5, 2026
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 6 min read
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Swan Valley Wine &amp; Food Trail: Perth&rsquo;s Best Day Trip Right
            Now
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Just 25 minutes from Perth Airport, the Swan Valley is WA&rsquo;s
            oldest wine region — and in autumn 2026, it has never looked (or
            tasted) better.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80"
            alt="Vineyard rows in the Swan Valley, Perth, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Most visitors fly into Perth and immediately start plotting a trip to
            Margaret River or the Coral Coast. Those are excellent instincts —
            but there is a world-class wine and food trail hiding right on the
            airport&rsquo;s doorstep that most travellers completely miss. The
            Swan Valley is the answer to &ldquo;what do I do on my first day
            before I&rsquo;ve even checked into the hotel?&rdquo;
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Why the Swan Valley Is Trending in 2026
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia welcomed over 11 million overnight visitors in
            2025, generating a record $19.2 billion in tourism spending. In 2026
            the numbers are climbing higher still, fuelled by Qantas&rsquo;s
            expanded direct services from London, Rome, and Paris that are
            funnelling a new wave of international arrivals straight into Perth
            Airport. Many of those travellers are choosing a self-drive
            itinerary — and the Swan Valley is perfect first-stop territory.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The timing is no accident, either. April and May in the Swan Valley
            are harvest season — the vines turn gold and copper, the cellar
            doors are buzzing with crush activity, and every weekend brings
            festivals celebrating the region&rsquo;s artisan food scene. It is,
            frankly, the best the valley looks all year.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> Swan Valley at a
              Glance
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li>
                <strong>Distance from Perth Airport:</strong> ~30 km north-east
                (25–35 mins via Great Eastern Highway)
              </li>
              <li>
                <strong>Best season:</strong> April–May (autumn harvest) and
                July–October (wildflowers)
              </li>
              <li>
                <strong>Ideal trip length:</strong> Half-day (4 hrs) to full
                day
              </li>
              <li>
                <strong>Car recommended:</strong> Any AutoTrip vehicle —
                all sealed roads, no 4WD required
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            The Swan Valley Food &amp; Wine Trail
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The official Swan Valley Food &amp; Wine Trail is a self-guided
            driving loop that strings together more than 150 cellar doors,
            breweries, cideries, chocolate factories, nougat studios, and farm
            gates along the valley floor. The main loop is only about 32 km —
            so you will never feel rushed — but you could easily lose an entire
            day just tasting your way from one end to the other.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Morning: West Swan Road Wineries
          </h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Pick up your rental car from AutoTrip at Perth Airport and take
            Great Eastern Highway north-east into the valley. Your first port of
            call should be the cluster of family-run wineries along West Swan
            Road. Sandalford Wines — one of WA&rsquo;s most historic estates —
            sits here with a gorgeous cellar door restaurant that opens for
            brunch. Try their Estate Chenin Blanc if you want a quintessentially
            Western Australian white that nobody else in the world makes quite
            like the Swan Valley does.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Continue north to Houghton, the valley&rsquo;s largest producer,
            where the old stone cellar door is framed by a canopy of mature
            grapevines going golden in the April light. Even if you only have an
            hour, the drive alone through this stretch is worth it.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Midday: Chocolate, Honey &amp; Nougat
          </h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The Swan Valley is famous — almost absurdly so — for its
            artisan sugar trail. Margaret River gets the wine headlines, but the
            Swan Valley has quietly built a world-class reputation for
            handmade chocolate, raw honey, and nougat. Stop in at the House of
            Honey on West Swan Road for a tasting paddle of infused honeys from
            local hives, then make time for Mondo Nougat — a family business
            that has been hand-pulling pistachio nougat for over 30 years and
            ships it around the world. These are the kinds of places where you
            spend $8 and leave with $80 worth of gifts.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Afternoon: Craft Breweries &amp; the Riverbank
          </h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The Swan River threads through the valley floor and in the afternoon
            the light on the water is extraordinary. Pull up at Mash Brewing or
            Feral Brewing — two of WA&rsquo;s most celebrated craft breweries —
            for a long lunch on the deck. The food is excellent, the beer list
            is wild, and the river views are completely free. If you&rsquo;re
            the designated driver for the day, both venues do excellent
            non-alcoholic alternatives and cold-pressed juices from local fruit.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Hidden Gems Worth the Detour
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The mapped trail is fantastic, but the Swan Valley rewards those who
            wander off-script.
          </p>

          <ul className="space-y-6 text-slate-700 mb-8">
            <li>
              <strong>Whiteman Park:</strong> A massive bushland reserve on the
              western edge of the valley with free walking trails, a vintage
              tram, and one of Perth&rsquo;s best picnic spots. Completely free
              to enter and only 10 minutes from the main wine trail.
            </li>
            <li>
              <strong>Bells Rapids:</strong> Drive north-east up the river and
              you hit the Bells Rapids — a series of white-water cascades that
              are most impressive in autumn when the Swan runs higher. It&rsquo;s
              a short walk from the car park and one of those spots that barely
              appears on tourist maps despite being genuinely spectacular.
            </li>
            <li>
              <strong>Gomboc Gallery:</strong> Tucked into 10 acres of bushland,
              this private sculpture garden and gallery is one of WA&rsquo;s
              best-kept art secrets. The outdoor sculptures are permanently
              installed among the trees and change with the seasons.
            </li>
            <li>
              <strong>The Colonial Brewing Co. Cellar Door:</strong> A newer
              addition to the trail with a sun-drenched courtyard, wood-fired
              pizza, and a rotating seasonal beer list. Perfect for a late
              afternoon wind-down before heading back to Perth.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            What Car Do You Need?
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The good news: every road on the Swan Valley trail is sealed, flat,
            and in excellent condition. You do not need an SUV or 4WD — any
            vehicle in the AutoTrip fleet is perfect for this trip. That said,
            if you are combining the Swan Valley with a drive up to the
            Pinnacles or east toward Wave Rock, our larger sedans and SUVs give
            you the extra boot space for all the wine, honey, and nougat you
            will inevitably buy.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Parking throughout the valley is plentiful and free. The main thing
            to plan is your designated driver situation — WA has some of
            Australia&rsquo;s strictest drink-driving enforcement, and the
            cellar doors will remind you of this with some regularity.
          </p>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AutoTrip Tip: Make It a Two-Day Loop
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Pick up your car at Perth Airport, drive straight to the Swan
              Valley for an afternoon arrival, stay the night at one of the
              valley&rsquo;s boutique B&Bs or glamping sites, then spend the
              full next day working through the trail properly — without the
              stress of driving back to the city at the end. Return the car to
              us the following morning before your onward journey. Our 24/7
              airport shuttle service means no matter what time you return,
              we&rsquo;ll get you to your terminal on time.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 transition"
            >
              Book Your Swan Valley Rental →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Getting There from Perth Airport
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            From Perth Airport, the Swan Valley is one of the easiest drives in
            WA. Head north on Tonkin Highway, then take Great Eastern Highway
            east — you will see the first cellar door signs within 25 minutes.
            There is no tolling on this route, no confusing interchanges, and
            the signage for the food and wine trail starts as soon as you enter
            the valley. It is genuinely one of the most beginner-friendly
            self-drive itineraries in all of Australia, which makes it ideal if
            you have just landed and are still adjusting to driving on the left.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia in 2026 is having a moment. The international
            visitor numbers are unprecedented, the direct flights from Europe
            keep arriving, and travellers are discovering that the state
            rewards those who go beyond the obvious highlights. The Swan Valley
            is proof of that — a wine and food trail so good it would be
            internationally famous if it existed anywhere else. It&rsquo;s here,
            it&rsquo;s 25 minutes from your arrival gate, and the cellar doors
            open at 10am. Plan accordingly.
          </p>
        </div>
      </div>
    </article>
  );
}
