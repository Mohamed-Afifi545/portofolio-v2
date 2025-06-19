import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={2} duration={3} delay={2} className="block w-fit" />
          <div>+</div>
        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>

      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={4} duration={5} delay={2} className="block w-fit" />
        </div>
        <span>
          Clients <br /> Worldwide
        </span>
      </div>
    </div>
  );
}
