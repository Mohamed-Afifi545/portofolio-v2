import { Phone } from "lucide-react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Info() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[200px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg ">Date of Birth</p>
            <p>02/08/1991</p>
          </div>
        </div>

        <div className="w-[240px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg ">Email Address</p>
            <p>mada2010545@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[200px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg ">Phone</p>
            <p>+201061989545</p>
          </div>
        </div>

        <div className="w-[240px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg ">Location</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
