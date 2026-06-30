// @ts-nocheck
import { Wifi, Bell, Menu } from "lucide-react";
import { FaVolumeHigh } from "react-icons/fa6";

export default function ExamHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 py-3 shrink-0">
      <div className="flex items-center gap-6 sm:gap-10">
         <div className="flex items-center font-black">
              <img className="w-20 object-contain md:w-[96px]" src="/ielts.svg" alt="" />
            </div>

            <div className="grid gap-2 content-center justify-items-start text-[14px] text-stone-700">
              <span>Test Taker ID: 123456</span>
            </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-6 text-gray-600">
        <Wifi className="h-5 w-5" />
        <Bell className="h-5 w-5" />
        <Menu className="h-5 w-5" />
      </div>
    </header>
  );
}
