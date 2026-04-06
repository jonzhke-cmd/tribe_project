import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Car, Utensils, Map, Star, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth Family Road Trips: The Ultimate Kids Edition 2026 | AutoTrip",
  description: "Planning a family road trip from Perth? Discover kid-friendly routes, essential packing tips, entertainment ideas, and the best stops for families with children of all ages in 2026.",
  keywords: [
    "Perth family road trips",
    "kid-friendly road trips WA",
    "family car trips from Perth",
    "WA road trips with kids",
    "Perth to Margaret River with children",
    "family travel tips 2026",
    "best stops for kids Perth",
    "entertainment for kids road trip"
  ],
};

export default function FamilyRoadTripsKidsEdition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-8"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Guides
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <Calendar className="h-4 w-4" /> April 6, 2026
                </span>
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <Clock className="h-4 w-4" /> 8 min read
                </span>
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <Users className="h-4 w-4" /> Family Edition
                </span>
                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <MapPin className="h-4 w-4" /> Perth & WA
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Perth Family Road Trips:<br />The Ultimate Kids Edition 2026
              </h1>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Road tripping with kids doesn't have to be stressful! Our 2026 family edition guide covers 
                everything from choosing the right vehicle and packing essentials to kid-approved stops 
                and entertainment strategies for happy travels from Perth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-slate-900 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  Book Your Family Vehicle
                </Link>
                <button className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-slate-700 hover:text-primary border-2 border-slate-200 hover:border-primary rounded-full transition">
                  <Heart className="h-5 w-5 mr-2" /> Save Guide
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/family-roadtrip-photo-v2.jpg"
                  alt="Family road trip adventure: mother with three children by SUV on scenic rural road"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Featured Photo</p>
                  <p className="text-xs opacity-90">Family adventure in Western Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-slate-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Map className="h-5 w-5" /> Guide Contents
              </h3>
              <nav className="space-y-3">
                <a href="#why-2026" className="block text-slate-700 hover:text-primary font-medium transition">Why 2026 is Perfect</a>
                <a href="#top-routes" className="block text-slate-700 hover:text-primary font-medium transition">Top 3 Kid-Approved Routes</a>
                <a href="#packing" className="block text-slate-700 hover:text-primary font-medium transition">Essential Packing List</a>
                <a href="#stops" className="block text-slate-700 hover:text-primary font-medium transition">2026 Family Stops</a>
                <a href="#entertainment" className="block text-slate-700 hover:text-primary font-medium transition">Entertainment Strategies</a>
                <a href="#vehicles" className="block text-slate-700 hover:text-primary font-medium transition">Vehicle Selection</a>
                <a href="#seasonal" className="block text-slate-700 hover:text-primary font-medium transition">Seasonal Planning</a>
              </nav>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Quick Tips</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Book vehicles 2-3 weeks in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pack snacks & entertainment for kids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plan stops every 2 hours maximum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {/* Why 2026 Section */}
              <section id="why-2026" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why 2026 is Perfect for Family Road Trips</h2>
                <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-2xl p-8">
                  <p className="text-lg text-slate-700 mb-4">
                    With new family-friendly attractions, improved facilities, and better travel technology, 
                    2026 offers the best-ever experience for family road trips from Perth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">New Attractions</h4>
                      <p className="text-sm text-slate-600">15+ new adventure playgrounds along major routes</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Improved Facilities</h4>
                      <p className="text-sm text-slate-600">Family rest areas with play equipment & charging</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Top Routes Section */}
              <section id="top-routes" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Top 3 Kid-Approved Routes from Perth</h2>
                
                <div className="space-y-8">
                  {/* Route 1 */}
                  <div className="border-2 border-blue-100 rounded-2xl overflow-hidden">
                    <div className="bg-blue-50 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                        <h3 className="text-2xl font-bold text-slate-900">Perth to Margaret River</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-slate-700">Distance</p>
                          <p className="text-slate-900 font-bold">270km (3.5 hours)</p>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">Best For</p>
                          <p className="text-slate-900 font-bold">Ages 3-12, 2-3 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-slate-900 mb-3">Kid Highlights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Busselton Jetty:</strong> Underwater Observatory & train ride</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Margaret River Chocolate Factory:</strong> Free samples & viewing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Sunflowers Animal Farm:</strong> Petting zoo & tractor rides</span>
                        </li>
                      </ul>
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                        <p className="text-sm font-medium text-slate-900">AutoTrip Recommendation</p>
                        <p className="text-primary font-bold">Kia Carnival (7-seater) - $85-110/day</p>
                      </div>
                    </div>
                  </div>

                  {/* Route 2 */}
                  <div className="border-2 border-green-100 rounded-2xl overflow-hidden">
                    <div className="bg-green-50 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                        <h3 className="text-2xl font-bold text-slate-900">Perth to Albany</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-slate-700">Distance</p>
                          <p className="text-slate-900 font-bold">415km (5 hours)</p>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">Best For</p>
                          <p className="text-slate-900 font-bold">Ages 5+, 3-4 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-slate-900 mb-3">Kid Highlights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Walpole Tree Top Walk:</strong> Stroller-friendly elevated walkway</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Albany Whale Museum:</strong> Interactive exhibits & skeletons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Valley of the Giants:</strong> Ancient forest with giant trees</span>
                        </li>
                      </ul>
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                        <p className="text-sm font-medium text-slate-900">AutoTrip Recommendation</p>
                        <p className="text-green-600 font-bold">Hyundai Santa Fe - $75-95/day</p>
                      </div>
                    </div>
                  </div>

                  {/* Route 3 */}
                  <div className="border-2 border-amber-100 rounded-2xl overflow-hidden">
                    <div className="bg-amber-50 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                        <h3 className="text-2xl font-bold text-slate-900">Perth to Kalbarri</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-slate-700">Distance</p>
                          <p className="text-slate-900 font-bold">575km (6.5 hours)</p>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">Best For</p>
                          <p className="text-slate-900 font-bold">Ages 7+, 4-5 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-slate-900 mb-3">Kid Highlights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Kalbarri Skywalk:</strong> Thrilling cliff-top walkways (safe)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Nature's Window:</strong> Easy hike with iconic photo spot</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Car className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Red Bluff Beach:</strong> Sandboarding on red dunes</span>
                        </li>
                      </ul>
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                        <p className="text-sm font-medium text-slate-900">AutoTrip Recommendation</p>
                        <p className="text-amber-600 font-bold">Toyota Prado - $95-125/day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Packing List Section */}
              <section id="packing" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Essential Packing List for Family Road Trips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Entertainment & Comfort</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                          <Star className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Tablets/iPads with pre-downloaded content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                          <Star className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Travel games & audiobooks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                          <Star className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Kid-sized headphones with volume limiters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                          <Star className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Travel pillows & blankets for car naps</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Food & Snacks</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                          <Utensils className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Cooler bag with ice packs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                          <Utensils className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Reusable water bottles (one per person)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                          <Utensils className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Healthy snacks: fruit, veggies, cheese</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                          <Utensils className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Emergency non-perishable snacks</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Safety & Practical</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-amber-100 text-amber-600 rounded-full p-1 mt-0.5">
                          <Heart className="h-3 w-3" />
                        </div>
                        <span className="text-sm">First aid kit with motion sickness tablets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-amber-100 text-amber-600 rounded-full p-1 mt-0.5">
                          <Heart className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Car sickness supplies (bags, wipes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-amber-100 text-amber-600 rounded-full p-1 mt-0.5">
                          <Heart className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Sun protection: sunscreen, hats, sunglasses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-amber-100 text-amber-600 rounded-full p-1 mt-0.5">
                          <Heart className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Weather-appropriate clothing layers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Entertainment Strategies */}
              <section id="entertainment" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Entertainment Strategies for Happy Travel</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Clock className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">2-Hour Rule</h3>
                      <p className="text-sm text-slate-600">Plan stops every 2 hours maximum for stretching and snacks</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">Activity Rotation</h3>
                      <p className="text-sm text-slate-600">Screen time → games → crafts → repeat cycle</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Star className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">Reward System</h3>
                      <p className="text-sm text-slate-600">Road trip bingo with milestones and small rewards</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vehicle Selection */}
              <section id="vehicles" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Choosing the Right Vehicle for Your Family</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Family Size</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">AutoTrip Recommendation</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Key Features</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Daily Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">2 adults + 1-2 kids</td>
                        <td className="px-6 py-4 text-sm">Hyundai Tucson</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Spacious boot, fuel efficient, easy to drive</td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">$65-85/day</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition bg-slate-50/50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">2 adults + 3-4 kids</td>
                        <td className="px-6 py-4 text-sm">Kia Carnival</td>
                        <td className="px-6 py-4 text-sm text-slate-600">7 seats, sliding doors, entertainment system</td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">$85-110/day</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">Extended family</td>
                        <td className="px-6 py-4 text-sm">Toyota HiAce</td>
                        <td className="px-6 py-4 text-sm text-slate-600">12 seats, luggage space, group comfort</td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">$120-150/day</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition bg-slate-50/50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">Adventure family</td>
                        <td className="px-6 py-4 text-sm">Toyota Prado</td>
                        <td className="px-6 py-4 text-sm text-slate-600">4WD capability, roof racks, all-terrain</td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">$95-125/day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Seasonal Planning */}
              <section id="seasonal" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Seasonal Considerations for 2026</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3">Autumn<br />(March-May)</h3>
                    <p className="text-sm text-slate-600 mb-4">Mild weather, fewer crowds, comfortable driving</p>
                    <div className="text-xs text-slate-500">School holidays, Easter activities</div>
                  </div>
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3">Winter<br />(June-August)</h3>
                    <p className="text-sm text-slate-600 mb-4">Whale watching, indoor attractions, lower rates</p>
                    <div className="text-xs text-slate-500">Pack warm clothing, check hours</div>
                  </div>
                  <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3">Spring<br />(September-November)</h3>
                    <p className="text-sm text-slate-600 mb-4">Wildflowers, perfect temperatures, outdoor fun</p>
                    <div className="text-xs text-slate-500">School holidays, spring festivals</div>
                  </div>
                  <div className="bg-gradient-to-b from-yellow-50 to-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3">Summer<br />(December-February)</h3>
                    <p className="text-sm text-slate-600 mb-4">Beach trips, water activities, long daylight</p>
                    <div className="text-xs text-slate-500">Book early, heat precautions</div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-10 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Family Adventure?</h3>
                <p className="mb-8 text-lg opacity-95">
                  AutoTrip makes family road trips simple. Choose the perfect vehicle, pick up at Perth Airport, 
                  and start creating memories within minutes.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-primary bg-white hover:bg-slate-100 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  Book Your Family Road Trip Vehicle
                </Link>
                <p className="mt-6 text-sm opacity-80">All vehicles include child seat compatibility and family-friendly features</p>
              </div>

              {/* Resources */}
              <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Downloadable Resources</h3>
                <p className="text-slate-600 mb-6">
                  Visit our resources page to download our free 2026 Family Road Trip Planner, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700">Packing Checklist</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700">Bingo Cards</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700">Emergency Contacts</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700">Itinerary Planner</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700">Budget Worksheet</p>
                  </div>
                </div>
              </div>

              <p className="mt-12 text-center text-slate-600 italic">
                <strong>Remember:</strong> The journey is part of the adventure. With good planning and the right attitude, 
                your family road trip can create memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}