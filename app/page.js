
'use client'

import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <div className="bg-[#F7F8FC] min-h-screen flex flex-col">

        {/* Main Hero Section Content */}
        <div className="bg-slate-100 w-full px-4 sm:px-6 lg:px-18 font-serif py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Left Content: Text, Buttons, and Features */}
          <div className="lg:w-1/2 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-[#212130]">Connect with</span>
              <br />
              <span className="text-[#3B5BDB] lg:text-5xl">Local Service Experts</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] mb-8 max-w-lg mx-auto lg:mx-0">
              Find trusted workers in your area for home repairs, maintenance,
              and services. Real people, real solutions, right in your
              neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a href="/auth" className="bg-[#3B5BDB] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Get Started
              </a>
              <a href='/about' className="border border-[#3B5BDB] text-[#3B5BDB] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Learn More
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center lg:justify-start">
              {/* Feature 1: Verified Workers */}
              <div className="flex items-center gap-2 text-[#212130] font-medium text-base">
                {/* Heroicon: User Group */}
                <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Verified Workers
              </div>
              {/* Feature 2: Secure Platform */}
              <div className="flex items-center gap-2 text-[#212130] font-medium text-base">
                {/* Heroicon: Shield Check */}
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>
                Secure Platform
              </div>
              {/* Feature 3: Rated Services */}
              <div className="flex items-center gap-2 text-[#212130] font-medium text-base">
                {/* Heroicon: Star */}
                <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.176l1.519 4.674c.3.921-.755 1.688-1.539 1.176l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.512-1.838-.255-1.539-1.176l1.519-4.674a1 1 0 00-.329-1.176l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"></path></svg>
                Rated Services
              </div>
            </div>
          </div>

          {/* Right Content: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 max-w-2xl">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVJk_99VGTYN76b0f3ImRSZ2z0IeIOrdaQ&s" alt="Service expert repairing a machine" className="rounded-3xl  shadow-2xl max-w-full h-98 object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
