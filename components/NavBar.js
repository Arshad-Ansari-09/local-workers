import { MessageCircleMore } from 'lucide-react';
export default function NavBar() {

  return (
    <div>
      <nav class="w-full bg-white border-b border-slate-200">
                <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* <!-- Logo --> */}
                    <div class="flex items-center gap-2">
                        <div class="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
                            LW
                        </div>
                        <span class="text-xl font-bold text-slate-800">LocalWorkers</span>
                    </div>

                    {/* <!-- Menu --> */}
                    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
                        <a href="/dashboard" class="hover:text-blue-600">Home</a>
                        <a href="#" class="hover:text-blue-600">Services</a>
                        <a href="#" class="hover:text-blue-600">Workers</a>
                        <a href="/about" class="hover:text-blue-600">About</a>
                    </div>

                    {/* <!-- Buttons --> */}
                    <div class="flex items-center gap-3">
                        <a href='/inbox' class="px-4 py-2 cursor-pointer flex gap-2 justify-center items-center rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow">
                            <MessageCircleMore />
                            Chat
                        </a>
                    </div>

                </div>
            </nav>
    </div>
  );
}
