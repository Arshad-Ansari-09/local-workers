"use client"

import React, { useState } from 'react';
import { ArrowLeft, MapPin, User, Briefcase, LogIn } from 'lucide-react';

const Page = () => {
  const [view, setView] = useState('role');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    whatsapp: ''
  });

  const [locationStatus, setLocationStatus] = useState({ msg: '', coords: null });

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleLocation = () => {
    setLocationStatus({ msg: 'Locating...', coords: null });

    if (!navigator.geolocation) {
      setLocationStatus({ msg: 'Geolocation is not supported.', coords: null });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus({
          msg: 'Location Access Granted! ✅',
          coords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      },
      () => {
        setLocationStatus({ msg: 'Error: Location denied. ❌', coords: null });
      }
    );
  };

  const handleBackToRole = () => {
    setView('role');
    setLocationStatus({ msg: '', coords: null });
  };

  return (
    <div className="bg-[#f6f5f7] min-h-screen flex flex-col justify-center items-center font-['Montserrat'] p-4">

      {/* ROLE SELECTION */}
      {view === 'role' && (
        <div className="bg-white rounded-xl shadow-2xl p-10 w-[400px] max-w-full text-center flex flex-col items-center animate-fadeIn relative">
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="text-sm text-gray-500 mb-8 tracking-wider">Please select how to continue</p>

          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={() => setView('worker-1')}
              className="group hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 bg-[#FF4B2B] text-white rounded-[20px] border border-[#FF4B2B] px-8 py-4 text-xs font-bold uppercase tracking-widest active:scale-95 shadow-md hover:shadow-lg"
            >
              <Briefcase size={16} /> I am a Worker
            </button>

            <button
              onClick={() => setView('customer')}
              className="group hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 bg-[#333] text-white rounded-[20px] px-8 py-4 text-xs font-bold uppercase tracking-widest active:scale-95 shadow-md hover:shadow-lg"
            >
              <User size={16} /> I am a Customer
            </button>

            <div className="flex items-center w-full my-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-3 text-xs text-gray-400">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <button
              onClick={() => setView('login')}
              className="text-[#FF4B2B] font-bold text-sm hover:underline flex items-center justify-center gap-1"
            >
              <LogIn size={16} /> Already have an account? Login
            </button>
          </div>
        </div>
      )}

      {/* LOGIN */}
      {view === 'login' && (
        <div className="bg-white rounded-xl shadow-2xl p-10 w-[400px] text-center animate-fadeIn relative">
          <div onClick={handleBackToRole} className="absolute top-5 left-5 text-gray-400 cursor-pointer flex items-center gap-1 text-xs font-bold">
            <ArrowLeft size={14} /> Back
          </div>

          <h1 className="text-2xl font-bold mb-6 mt-4">Portal Login</h1>

          <input onChange={e => updateForm('email', e.target.value)} type="email" placeholder="Email Address" className="bg-[#eee] p-3 my-2 w-full rounded" />
          <input onChange={e => updateForm('password', e.target.value)} type="password" placeholder="Password" className="bg-[#eee] p-3 my-2 w-full rounded" />

          <button className="bg-[#333] text-white rounded-[20px] py-3 text-xs font-bold uppercase mt-4 tracking-widest shadow-lg w-full">
            Sign In
          </button>
        </div>
      )}

      {/* CUSTOMER */}
      {view === 'customer' && (
        <div className="bg-white rounded-xl shadow-2xl p-10 w-[400px] text-center animate-fadeIn relative">
          <div onClick={handleBackToRole} className="absolute top-5 left-5 text-gray-400 cursor-pointer flex items-center gap-1 text-xs font-bold">
            <ArrowLeft size={14} /> UNDO
          </div>

          <h1 className="text-2xl font-bold mt-4">Customer Signup</h1>

          <input onChange={e => updateForm('name', e.target.value)} placeholder="Full Name" className="bg-[#eee] p-3 my-2 w-full rounded" />
          <input onChange={e => updateForm('email', e.target.value)} placeholder="Email Address" className="bg-[#eee] p-3 my-2 w-full rounded" />
          <input onChange={e => updateForm('password', e.target.value)} type="password" placeholder="Password" className="bg-[#eee] p-3 my-2 w-full rounded" />

          <button className="bg-[#FF4B2B] text-white rounded-[20px] py-3 text-xs font-bold uppercase mt-6 shadow-lg w-full">
            Create Account
          </button>
        </div>
      )}

      {/* WORKER STEP 3 */}
      {view === 'worker-3' && (
        <div className="bg-white rounded-xl shadow-2xl p-10 w-[400px] text-center animate-fadeIn">
          <MapPin
            size={40}
            className={`mb-3 ${locationStatus.coords ? 'text-green-500' : 'text-[#FF4B2B]'}`}
          />

          <button
            onClick={handleLocation}
            className={`rounded-[20px] px-6 py-2 text-xs font-bold uppercase ${
              locationStatus.coords ? 'bg-green-100 text-green-700' : 'bg-[#FF4B2B] text-white'
            }`}
          >
            {locationStatus.coords ? 'Location Captured' : 'Fetch Location'}
          </button>

          <div className={`mt-3 font-bold text-xs ${
            locationStatus.msg.includes('Error') ? 'text-red-500' : 'text-green-600'
          }`}>
            {locationStatus.msg}
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
        .animate-fadeIn { animation: fadeIn 0.4s ease-in forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Page;
