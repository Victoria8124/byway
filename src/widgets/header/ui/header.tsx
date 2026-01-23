import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#111113]">
      <div className="flex items-center justify-between px-40 py-4 gap-10 rounded-3xl">
        <img src="/public/byway.svg" alt="" />
        <div className="w-full bg-[#212225] h-12 flex items-center rounded-3xl">
          <input
            className="w-full h-full rounded-3xl px-3 text-white"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-6 text-white items-center">
          <button className="h-10 w-10 cursor-pointer group">
            <ShoppingCart className="size-6 group-hover:size-7 transition-all duration-300 ease-in-out" />
          </button>
          <button className="text-nowrap text-xl rounded-3xl border-2 border-[#9EB1FFB8] px-6 py-3 hover:border-[#ccc] cursor-pointer">
            Log in
          </button>
          <button className="text-nowrap text-xl rounded-3xl border-2 border-[#4CCCE6B8] px-6 py-3 hover:border-[#ccc] cursor-pointer">
            Sing in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
