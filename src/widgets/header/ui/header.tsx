import { ShoppingCart } from "lucide-react";
import Button from "../../../shared/button/ui/button";
import Input from "../../../shared/input/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#111113] mb-10">
      <div className="flex items-center justify-between px-40 py-4 gap-10 rounded-3xl">
        <img src="/public/byway.svg" alt="" />
        <Input
          type="text"
          leftIcon={<Search />}
          rightIcon={<Search />}
          placeholder="Search..."
        />
        <div className="flex gap-6 text-white items-center">
          <Button className="h-10 w-10 group">
            <ShoppingCart className="size-6 group-hover:size-7 transition-all duration-300 ease-in-out" />
          </Button>
          <Button className="text-nowrap text-xl rounded-3xl border-2 border-[#9EB1FFB8] px-6 py-3 hover:border-[#ccc]">
            Log in
          </Button>
          <Button className="text-nowrap text-xl rounded-3xl border-2 border-[#4CCCE6B8] px-6 py-3 hover:border-[#ccc]">
            Sing in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
