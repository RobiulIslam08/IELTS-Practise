// @ts-nocheck
import { Wifi, Bell, Menu } from "lucide-react";
import { FaVolumeHigh } from "react-icons/fa6";

export default function ExamHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 shrink-0 mb-2">
      <div className="flex items-center gap-6 sm:gap-10">
         <div className="flex items-center font-black">
              <img className="w-20 object-contain md:w-[96px]" src="/ielts.svg" alt="" />
            </div>

            <div className="grid gap-2 content-center  justify-items-start text-[17px] -mt-5 text-black font-bold">
              <span>Test taker ID</span>
            </div>
      </div>
      <div className="flex items-center gap-8 ">
        <Wifi className="h-7 w-7" />
        <Bell className="h-7 w-7" />
        <Menu className="h-7 w-7" />
      </div>
    </header>
  );
}
