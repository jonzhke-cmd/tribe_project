import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth to Pinnacles Day Trip: The Ultimate 2026 Drive Guide | AutoTrip",
  description: "The Pinnacles Desert is WA's most otherworldly landmark — and it's just 2.5 hours from Perth Airport. Here's exactly how to do the perfect day trip by car.",
  keywords: ["Perth to Pinnacles day trip", "Pinnacles Desert drive", "Indian Ocean Drive Perth", "Cervantes WA car rental", "Nambung National Park day trip"],
};

export default function PinnaclesDesertPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> April 5, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Perth to Pinnacles: The Perfect Day Trip Drive in 2026
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            One of Western Australia's most-photographed landscapes is just 2.5 hours from Perth Airport. Here's exactly how to make it an unforgettable day out.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/pinnacles-user-photo.jpg"
            alt="The Pinnacles Desert, Nambung National Park, Western Australia - User's photo"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Picture thousands of ancient limestone spires rising from a golden desert floor, set against a vivid blue WA sky. That's the Pinnacles — and it's currently one of the most viral travel destinations in all of Australia.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why the Pinnacles Are Having a Moment in 2026</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia's tourism is hitting record highs in 2026, with visitor numbers and spending reaching all-time peaks. And among WA's many spectacular landscapes, the Pinnacles Desert inside Nambung National Park has become the must-see icon — filling social feeds globally with its eerie, alien beauty. Unlike the remote wonders of the Kimberley or Pilbara, the Pinnacles are accessible to everyone with a standard rental car and a single day to spare.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The formations — some as tall as five metres — were created over millions of years as seashells broke down into lime-rich sands, which wind then sculpted into the jagged columns you see today. Standing among them at sunrise or golden hour, it's genuinely hard to believe you're still on Earth. No wonder the images go viral.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Drive: Perth Airport to the Pinnacles</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The drive north from Perth Airport to the Pinnacles is one of the great Australian coastal roads. You'll head up the Indian Ocean Drive (State Route 60), with the deep blue of the Indian Ocean appearing and disappearing to your left the entire way. The total distance is roughly 245 kilometres, taking about 2 hours and 40 minutes non-stop — easily doable before the park gates open.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> Recommended Stops Heading North
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li><strong>Lancelin (1 hr 20 min from Perth):</strong> Stretch your legs at the famous white sand dunes — a popular sandboarding spot and a brilliant photo stop.</li>
              <li><strong>Cervantes Township (2 hrs 15 min from Perth):</strong> Fill up on fuel and grab a coffee before entering the park. This is the last reliable fuel stop.</li>
              <li><strong>Nambung National Park Entrance (2 hrs 30 min from Perth):</strong> Pay your park fee at the gate (EFTPOS accepted) and cruise the 4 km sealed loop road through the formations.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Inside the Park: What to Expect</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Nambung National Park is well set up for day visitors. The sealed loop road winds directly through the heart of the Pinnacles, letting you stop, step out, and walk among the formations at your own pace. There's a modern Pinnacles Desert Discovery Centre near the entrance with fascinating exhibits on how the formations were created, plus good toilet facilities and a lookout platform with panoramic views.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Allow at least 1.5 to 2 hours inside the park to do the loop drive and walk the short interpretive trails. The formations change character dramatically depending on the light — the morning sun casts long shadows that make the spires look taller and more dramatic, while the late afternoon glow turns everything a warm amber gold.
          </p>

          <div className="bg-amber-50 p-8 rounded-3xl mb-10 border border-amber-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <Sun className="text-amber-500 h-6 w-6" /> Pro Tip: The Best Times to Visit
            </h3>
            <p className="text-slate-700">
              Aim to arrive by 8–9 AM for magical soft morning light and far fewer crowds, or plan to be there from 4 PM onward for golden-hour photography. Midday between November and March can be searingly hot (easily 35°C+), so carry at least 2 litres of water per person and wear sunscreen and a hat. April to September is the most pleasant season — cooler, clearer skies, and wildflower season adds an unexpected burst of colour to the desert floor.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Beyond the Pinnacles: Making a Full Day of It</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The Pinnacles are the headline act, but the drive back to Perth has plenty more worth stopping for. The Cervantes coastline itself is gorgeous — head to Lake Thetis to see ancient living stromatolites (some of the oldest life forms on the planet), then grab lunch in Cervantes township at the Lobster Shack for fresh Western Rock Lobster straight off the boat.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            On the return leg, pull off at Hangover Bay and Green Head for some of the most pristine, crowd-free beaches on the entire WA coastline. The turquoise water and white sand here rivals anything you'll find in the Maldives — and you'll often have the beach entirely to yourself, simply because most visitors turn straight around after the Pinnacles.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            If you're back in Perth by early evening, consider a sunset dinner at Scarborough Beach or Cottesloe as a perfect way to close out a spectacular day.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Car Do You Need?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Here's the good news: you don't need anything special. The entire route — from Perth Airport up the Indian Ocean Drive to the Pinnacles loop road and back — is fully sealed and in excellent condition. Any standard sedan or small SUV from the AutoTrip fleet will handle the trip comfortably and economically.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            For a solo traveller or couple, our compact or mid-size sedans are brilliant — fuel-efficient on the highway, easy to park in the national park, and perfectly comfortable for a full day behind the wheel. If you're heading out with the family, a spacious SUV gives you extra boot room for a packed esky, beach chairs, and whatever treasures the kids collect along the way. Either way, pick up directly from Perth Airport T1-T4 — no transfers, no waiting.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Pinnacles Day Trip Facts</h3>
            <ul className="space-y-3 text-slate-700">
              <li>📍 <strong>Distance from Perth Airport:</strong> ~245 km each way</li>
              <li>🕐 <strong>Drive time:</strong> ~2 hrs 40 min each way</li>
              <li>💰 <strong>Park entry:</strong> WA National Park fee applies (day pass or annual pass)</li>
              <li>⛽ <strong>Fuel up:</strong> Fill in Cervantes before entering the park</li>
              <li>🌡️ <strong>Best season:</strong> April–September (wildflower season is stunning)</li>
              <li>🚗 <strong>Vehicle required:</strong> Any 2WD sedan or SUV — no 4WD needed</li>
            </ul>
          </div>

          <p className="mb-6 text-slate-600 leading-relaxed">
            The Pinnacles Desert is one of those rare places that exceeds expectations no matter how many photos you've seen beforehand. The scale, the silence, the sheer strangeness of the landscape — it's one of those experiences that stays with you long after you've handed back the car keys. In a year when WA tourism is booming and more travellers than ever are discovering what the state has to offer, getting there while it's still beautifully uncrowded is genuinely the smart move.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to explore the Pinnacles?</h3>
            <p className="text-slate-600 mb-8">
              Pick up your rental car directly from Perth Airport T1-T4 — and be at the Pinnacles before the day-trippers arrive.
            </p>
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              Book Your Car Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
