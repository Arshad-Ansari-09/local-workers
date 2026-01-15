"use client";

import React from "react";
import { ArrowLeft, Star, MapPin, Phone, House, Send } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-10">
      
      {/* --- HEADER --- */}
      <div className="bg-white px-6 py-4 flex items-center shadow-sm sticky top-0 z-10">
        <button className="flex items-center hover:cursor-pointer hover:bg-stone-200 px-4 py-2 rounded-full hover:text-gray-900 text-gray-700 text-sm font-medium gap-2 hover:opacity-75 transition">
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-[#1e3a8a] text-lg font-bold -ml-12">
            Worker Profile
          </h1>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-3xl mx-auto px-4 mt-6 space-y-6">
        
        {/* --- CARD 1: PROFILE INFO --- */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 bg-[#1D4ED8] rounded-full flex items-center justify-center text-white text-4xl font-normal">
                R
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 w-full space-y-4">
              
              {/* Name & Rating */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A]">Robin</h2>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex text-gray-300">
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 ml-1">0.0</span>
                  <span className="text-sm text-gray-500">(0 reviews)</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>243005</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <House className="w-5 h-5 text-gray-400" />
                  <span>Ejaz nagar gautiya old city bareilly</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>9027600385</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">WhatsApp</p>
                <p className="text-sm text-gray-500">9027600385</p>
              </div>

              {/* Services Offered */}
              <div className="pt-1">
                <p className="text-sm font-medium text-gray-900 mb-2">Services Offered</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium">
                    Electrician
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium">
                    AC Repair
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium">
                    Gardener
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- CARD 2: SEND MESSAGE --- */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h3>
          
          <div className="space-y-4">
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 min-h-[120px] resize-none placeholder-gray-400"
              placeholder="Hi, I need help with..."
            ></textarea>
            
            <button className="flex items-center gap-2 bg-[#8B9CDE] hover:bg-[#7a8ccf] text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
              <Send className="w-4 h-4 -rotate-45 mb-1" />
              Send Message
            </button>
          </div>
        </div>

        {/* --- CARD 3: REVIEWS --- */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col min-h-[200px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Reviews (0)</h3>
            <button className="text-sm border border-gray-200 px-4 py-1.5 rounded-full text-gray-600 hover:bg-gray-50 transition">
                Leave a review
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 space-y-2">
            <p className="text-sm">No reviews yet. Be the first to review!</p>
          </div>
        </div>

      </div>
    </div>
  );
}