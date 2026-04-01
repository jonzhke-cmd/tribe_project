"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  MoreVertical,
  Search,
  User,
  MapPin,
  Car,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

interface Booking {
  id: string;
  created_at: string;
  customer_name: string;
  email: string;
  car_type: string;
  pickup_date: string;
  return_date: string;
  status: "confirmed" | "pending" | "cancelled";
  pickup_location: string;
  total_price: number;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        
        // If no data or mock URL, use mock data
        if (!data || data.length === 0) {
          setBookings(generateMockBookings());
        } else {
          setBookings(data as Booking[]);
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setBookings(generateMockBookings()); // Fallback for the demo
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  function generateMockBookings(): Booking[] {
    return [
      {
        id: "BK-7829",
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        customer_name: "Sarah Jenkins",
        email: "sarah.j@example.com",
        car_type: "Toyota RAV4",
        pickup_date: "2026-04-10T10:00:00Z",
        return_date: "2026-04-15T10:00:00Z",
        status: "confirmed",
        pickup_location: "Perth Airport T1",
        total_price: 450,
      },
      {
        id: "BK-7830",
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        customer_name: "Michael Chen",
        email: "m.chen99@example.com",
        car_type: "Hyundai i30",
        pickup_date: "2026-04-12T14:30:00Z",
        return_date: "2026-04-18T09:00:00Z",
        status: "pending",
        pickup_location: "Perth City",
        total_price: 320,
      },
      {
        id: "BK-7831",
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        customer_name: "Emma Wilson",
        email: "ewilson.work@example.com",
        car_type: "Kia Carnival",
        pickup_date: "2026-04-20T08:00:00Z",
        return_date: "2026-04-27T18:00:00Z",
        status: "cancelled",
        pickup_location: "Perth Airport T3",
        total_price: 850,
      },
    ];
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-rose-500" />;
      default:
        return null;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "cancelled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">CRM Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Manage bookings, fleet, and customers.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search bookings..." 
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:w-64"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Revenue", value: "$24,500", trend: "+12%", trendUp: true },
            { label: "Active Bookings", value: "142", trend: "+5%", trendUp: true },
            { label: "Pending Approvals", value: "8", trend: "-2%", trendUp: false },
            { label: "Fleet Utilization", value: "86%", trend: "+4%", trendUp: true },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <span className={`text-sm font-medium ${stat.trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">Recent Bookings</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Booking ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Vehicle</th>
                  <th className="px-6 py-4 font-medium">Dates & Location</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Price</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary"></div>
                        <p>Loading bookings...</p>
                      </div>
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="transition hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {booking.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <User className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{booking.customer_name}</div>
                            <div className="text-xs text-slate-500">{booking.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-slate-400" />
                          <span>{booking.car_type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className="h-3 w-3 text-slate-400" />
                            <span>{new Date(booking.pickup_date).toLocaleDateString()} - {new Date(booking.return_date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <MapPin className="h-3 w-3 text-slate-400" />
                            <span>{booking.pickup_location}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${getStatusBadgeClass(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-slate-900">
                        ${booking.total_price}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
            <span className="text-sm text-slate-500">Showing 1 to {bookings.length} of {bookings.length} entries</span>
            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50" disabled>
                Previous
              </button>
              <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
