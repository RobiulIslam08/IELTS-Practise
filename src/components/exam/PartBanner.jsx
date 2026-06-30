// @ts-nocheck
export default function PartBanner({ title, intro }) {
  return (
    <div className="bg-[#eeeae3] mx-4 my-2 sm:px-8 py-1 border-b border-gray-300 shrink-0 ">
      <div className="font-bold text-[15px]">{title}</div>
      <div className="text-[14px] mt-0.5">{intro}</div>
    </div>
  );
}
