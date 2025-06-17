import { MdFileDownload } from "react-icons/md";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function MainNav() {
  return (
    <nav className=" w-full pt-16 ">
      <div className="flex flex-col h-full items-center justify-between ">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <button className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
            <span>Download CV</span>
            <MdFileDownload className="text-xl" />
          </div>
        </button>
      </div>
    </nav>
  );
}
