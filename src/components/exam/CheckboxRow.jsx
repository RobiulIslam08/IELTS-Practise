// @ts-nocheck
// Inspera-style checkbox: magenta fill when checked, light pink row bg.
export default function CheckboxRow({ label, checked, onToggle }) {
  return (
    <label
      className={`relative flex items-center gap-2 px-3 py-[6px] cursor-pointer text-[13px] leading-tight mb-1 transition-colors duration-150 ${
        checked ? "bg-[#f6e3ed] border-l-[3px] border-[#c2185b]" : "hover:bg-gray-50 border-l-[3px] border-transparent"
      }`}
    >
      <input
        type="checkbox"
        className="w-[13px] h-[13px] cursor-pointer mt-px accent-[#c2185b]"
        checked={checked}
        onChange={onToggle}
      />
      <span>{label}</span>
    </label>
  );
}
