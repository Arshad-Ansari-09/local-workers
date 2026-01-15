"use client";

import React, { useState } from "react";
import { 
  Send, 
  Phone, 
  Video, 
  Info, 
  Smile, 
  Image as ImageIcon, 
  Heart, 
  ArrowLeft,
  Edit
} from "lucide-react";

// --- Mock Data ---
const CURRENT_USER_ID = 0;

const mockUsers = [
  { id: 1, username: "jane_doe", fullName: "Jane Doe", avatar: "https://i.pravatar.cc/150?u=1", lastMessage: "Sent you a post", time: "2h", hasStory: true },
  { id: 2, username: "alex_smith", fullName: "Alex Smith", avatar: "https://i.pravatar.cc/150?u=2", lastMessage: "See you tomorrow! 👋", time: "5h", hasStory: false },
  { id: 3, username: "mike_tyson", fullName: "Mike T", avatar: "https://i.pravatar.cc/150?u=3", lastMessage: "Liked a message", time: "1d", hasStory: true },
  { id: 4, username: "sarah_j", fullName: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?u=4", lastMessage: "lol that was funny", time: "2d", hasStory: false },
  { id: 5, username: "dev_guy", fullName: "Developer Guy", avatar: "https://i.pravatar.cc/150?u=5", lastMessage: "Is the PR ready?", time: "1w", hasStory: false },
  { id: 6, username: "travel_guru", fullName: "Travel Buddy", avatar: "https://i.pravatar.cc/150?u=6", lastMessage: "Check out this view!", time: "2w", hasStory: true },
  { id: 7, username: "fitness_jim", fullName: "Jim Fitness", avatar: "https://i.pravatar.cc/150?u=7", lastMessage: "Gym time?", time: "3w", hasStory: false },
];

const mockMessages = [
  { id: 1, senderId: 0, text: "Hey, how are you doing?" },
  { id: 2, senderId: 1, text: "I'm good! Just working on that project." },
  { id: 3, senderId: 0, text: "That sounds great. Need any help?" },
  { id: 4, senderId: 1, text: "Maybe later. I'll let you know!", isLiked: true },
  { id: 5, senderId: 0, text: "Cool, catch you later." },
];

export default function Page() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen bg-white md:bg-gray-50 max-h-screen overflow-hidden">
      
      {/* --- LEFT SIDEBAR (User List) --- */}
      {/* UPDATE: Increased width classes here (md:w-[400px] lg:w-[450px]) */}
      <div 
        className={`
          flex flex-col border-r border-gray-300 bg-white
          w-full md:w-[400px] lg:w-[450px] xl:w-[500px] 
          ${selectedUser ? "hidden md:flex" : "flex"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 md:border-none sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-xl font-bold">my_username</h1>
            <svg aria-label="Down Chevron" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1 1 0 0 1 1.414 0l9 9.004a1 1 0 0 1-.707 1.707Z"></path></svg>
          </div>
          <Edit className="w-6 h-6 text-gray-800 cursor-pointer" />
        </div>

        {/* User List Scroll Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col pb-4">
            
            {/* Mobile Tabs (Messages/Requests) */}
            <div className="flex justify-between px-6 py-4 md:hidden">
              <span className="font-semibold text-base">Messages</span>
              <span className="text-gray-500 font-semibold text-sm">Requests</span>
            </div>

            {/* Desktop Section Header */}
            <div className="hidden md:flex justify-between px-6 py-2 pb-4">
               <span className="font-bold text-base">Messages</span>
               <span className="text-gray-500 font-semibold text-sm cursor-pointer">Requests</span>
            </div>

            {mockUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`
                  flex items-center gap-4 px-6 py-3 cursor-pointer hover:bg-gray-50 transition
                  ${selectedUser?.id === user.id ? "bg-gray-100" : ""}
                `}
              >
                {/* Avatar: Increased size to w-14 h-14 for wider layout */}
                <div className={`p-[2px] rounded-full flex-shrink-0 ${user.hasStory ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600" : ""}`}>
                   <div className="p-[2px] bg-white rounded-full">
                     <img src={user.avatar} alt={user.username} className="w-14 h-14 rounded-full object-cover" />
                   </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-normal text-gray-900 truncate">{user.fullName}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <p className="truncate max-w-[180px]">{user.lastMessage}</p>
                    <span>•</span>
                    <span className="whitespace-nowrap">{user.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- RIGHT PANEL (Chat Window) --- */}
      <div 
        className={`
          flex-col bg-white w-full h-full
          ${selectedUser ? "flex" : "hidden md:flex"}
        `}
      >
        {selectedUser ? (
          // Active Chat View
          <>
            {/* Chat Header */}
            <div className="h-20 border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-4">
                {/* Back Button (Mobile Only) */}
                <button onClick={() => setSelectedUser(null)} className="md:hidden">
                  <ArrowLeft className="w-6 h-6 text-gray-800" />
                </button>

                <div className="flex items-center gap-3 cursor-pointer">
                  <img src={selectedUser.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-base text-gray-900">{selectedUser.fullName}</p>
                    <p className="text-xs text-gray-500">Active {selectedUser.time} ago</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-gray-800">
                <Phone className="w-7 h-7 cursor-pointer hover:text-gray-500" />
                <Video className="w-8 h-8 cursor-pointer hover:text-gray-500" />
                <Info className="w-7 h-7 cursor-pointer hover:text-gray-500" />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Dummy "Beginning of chat" filler */}
              <div className="flex flex-col items-center justify-center py-10 mt-4">
                <img src={selectedUser.avatar} alt="profile" className="w-24 h-24 rounded-full object-cover mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900">{selectedUser.fullName}</h3>
                <p className="text-gray-500 text-sm mt-1">{selectedUser.username} • Instagram</p>
                <button className="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition">
                  View Profile
                </button>
              </div>

              {mockMessages.map((msg) => {
                const isMe = msg.senderId === CURRENT_USER_ID;
                return (
                  <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                    {!isMe && (
                      <img src={selectedUser.avatar} alt="avatar" className="w-7 h-7 rounded-full object-cover mr-2 self-end mb-1" />
                    )}
                    <div 
                      className={`
                        max-w-[65%] px-4 py-3 text-sm rounded-[22px] relative group leading-relaxed
                        ${isMe ? "bg-[#3797f0] text-white" : "bg-gray-100 text-black"}
                      `}
                    >
                      {msg.text}
                      {msg.isLiked && (
                        <div className="absolute -bottom-1 -right-1 bg-gray-100 border-2 border-white rounded-full p-0.5">
                           <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white">
              <div className="flex items-center gap-4 p-2 pl-4 pr-3 border border-gray-300 rounded-[26px] min-h-[50px]">
                <div className="bg-blue-500 p-1.5 rounded-full cursor-pointer hidden md:block hover:bg-blue-600">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
                <input 
                  type="text" 
                  placeholder="Message..." 
                  className="flex-1 bg-transparent focus:outline-none text-sm text-gray-900"
                />
                {/* Input Actions */}
                <div className="flex items-center gap-4 text-gray-800 font-semibold text-sm">
                  <button className="hover:text-gray-500">
                     <Smile className="w-7 h-7" />
                  </button>
                  <button className="hover:text-gray-500">
                     <Heart className="w-7 h-7 hover:scale-110 transition" />
                  </button>
                </div>
              </div>
            </div>

          </>
        ) : (
          // Empty State (Desktop only)
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center mb-4">
              <Send className="w-12 h-12 -ml-2 mt-1" />
            </div>
            <h2 className="text-xl font-normal mb-2">Your Messages</h2>
            <p className="text-gray-500 text-sm mb-6">Send private photos and messages to a friend or group.</p>
            <button className="bg-[#0095f6] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}