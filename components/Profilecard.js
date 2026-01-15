"use client";
import React, { useState } from 'react';
import { FaTools, FaPhone, FaWhatsapp, FaCommentDots, FaPaperPlane, FaTimes, FaChevronRight } from "react-icons/fa";
import { FaLocationDot as FaLocationDotSolid } from "react-icons/fa6";

export default function ProfileCard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    // Changed to 'contents' or a simple div so it doesn't fight with the Page's flex center
    <div className="flex items-center justify-center">
      
      {/* PROFILE CARD */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[350px] overflow-hidden border border-slate-200 z-10">
        {/* TOP SECTION */}
        <div className="p-5 flex gap-4 items-start">
          <div className="relative shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
              className="w-20 h-20 rounded-xl object-cover shadow-sm border border-slate-200" 
              alt="Profile" 
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
              Michael Johnson
            </h2>
            <div className="flex gap-2 items-start">
              <FaLocationDotSolid className="text-stone-500 mt-0.5 shrink-0" />
              <span className="line-clamp-2 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wide rounded font-bold">
                Gausiya Masjid Waali Gali, Ejaz Nagar Gautiya Old City Bareilly
              </span>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-slate-100 mx-5" />
        
        {/* SERVICES SECTION */}
        <div className="px-5 py-3">
          <p className="text-blue-900 font-semibold mb-2 flex gap-1 items-center">Services <FaTools className="text-xs"/></p>
          <div className="sleek-scrollbar flex flex-nowrap gap-1.5 overflow-x-auto pb-2">
            {["AC Technician", "Fridge Repair", "Plumber", "Painter"].map((service) => (
              <span key={service} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs uppercase tracking-wide rounded-full font-semibold whitespace-nowrap">
                {service}
              </span>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-slate-100 mx-5" />
        
        {/* CONTACT SECTION */}
        <div className="p-5 flex flex-col gap-3">
          <a href="tel:+1234567890" className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-slate-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-500 border border-slate-100">
                <FaPhone className="text-xs" />
              </div>
              <span className="font-bold text-sm text-gray-700">+1 (234) 567-890</span>
            </div>
            <FaChevronRight className="text-xs text-gray-400 group-hover:text-blue-500" />
          </a>
          
          <a href="#" className="group flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-green-600 border border-slate-100">
                <FaWhatsapp className="text-lg" />
              </div>
              <span className="font-bold text-sm text-gray-700">+1 (234) 567-890</span>
            </div>
            <FaChevronRight className="text-xs text-green-600" />
          </a>
          
          <button 
            onClick={() => setIsChatOpen(true)}
            className="mt-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/20 hover:translate-y-[-2px] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
          >
            <FaCommentDots />
            Chat in App
          </button>
        </div>
      </div>

      {/* CHAT WIDGET - Fixed to viewport */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-[320px] h-[450px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden z-[9999] flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* CHAT HEADER */}
          <div className="bg-slate-800 p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-9 h-9 rounded-full border border-white/20" alt="Chat" />
              <div>
                <p className="font-bold text-xs">Michael Johnson</p>
                <p className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-3 rounded-full transition-colors">
              <FaTimes className="text-sm text-white/70" />
            </button>
          </div>
          
          {/* CHAT MESSAGES */}
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4 sleek-scrollbar">
            <div className="flex justify-start">
              <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                <p className="text-xs text-gray-700 leading-relaxed">Hello! How can I help you today?</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-md">
                <p className="text-xs text-white leading-relaxed">I need help with my AC</p>
              </div>
            </div>

            <div className="flex justify-start">
               <div className="bg-slate-200/50 px-3 py-2 rounded-full flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
               </div>
            </div>
          </div>
          
          {/* CHAT INPUT */}
          <form className="p-3 border-t border-slate-100 bg-white flex gap-2 shrink-0" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-slate-100 text-slate-700 rounded-full px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Type your message..." 
            />
            <button className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700 transition-colors shrink-0 shadow-md">
              <FaPaperPlane className="text-[10px]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}