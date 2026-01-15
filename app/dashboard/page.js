import React from "react";
import ProfileCard from "../../components/ProfileCard";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans">

      {/* NAVBAR */}
      <NavBar />

      {/* PAGE CONTENT */}
      <div className="max-w-7xl mx-auto px-10 py-10 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Find Local Service Experts
          </h1>

          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <span>Showing workers in pincode:</span>
            <span className="font-semibold text-slate-900">243005</span>
          </div>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by name or service..."
          className="w-1/3 max-w-lg px-5 py-1 rounded-full border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white"
        />

        {/* FILTER PILLS */}
        <div className="flex flex-wrap gap-3">
          <button className="px-3 py-1 hover:cursor-pointer rounded-full bg-blue-600 text-white font-bold text-xs shadow">
            All
          </button>

          {["Plumber", "Electrician", "AC Repair", "Carpenter", "Painter", "Cleaner", "Gardener", "Pest Control"].map(
            (item) => (
              <button
                key={item}
                className="px-3 py-1 rounded-full hover:cursor-pointer bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* WORKER CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>

      </div>
    </div>
  );
}
