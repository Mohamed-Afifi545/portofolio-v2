import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiGithubFill,
} from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiGithubFill />,
    name: "GitHub",
  },
  {
    icon: <RiBootstrapFill />,
    name: "Bootstrap",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS3",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML5",
  },
];

export default function Skills() {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                <div className="text-3xl group-hover:text-accent transition-all duration-300 ">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-lg">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
