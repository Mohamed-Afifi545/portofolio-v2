const journey = [
  {
    years: "2025 - Present",
    title: "Web Developer & Designer",
    company: "Freelance Projects",
  },
  {
    years: "2024 - 2025",
    title: "Web Developer",
    company: "Freelance Projects",
  },
  {
    years: "2022 - 2024",
    title: "Student",
    company: "Online Learning Platform",
  },
];

export default function Journey() {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => (
        <div key={index} className="flex items-center gap-12 w-full">
          <div className="flex flex-col w-max justify-center items-center">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-[1px] h-[180px] bg-white/10"></div>
          </div>
          <div className="max-w-[500px]  ">
            <p className="mb-6 text-lg text-white/50 ">{item.years}</p>
            <h4 className="h4 mb-2 ">{item.title}</h4>
            <p className="text-lg text-white/50">{item.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
