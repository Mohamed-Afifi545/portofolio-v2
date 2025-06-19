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

import { useEffect, useState } from "react";

function useIsMobile(breakpoint = 1130) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return { isMobile, mounted };
}

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
  const { isMobile, mounted } = useIsMobile();

  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-20 xl:gap-8 mt-20 xl:mt-0 max-w-sm xl:max-w-none">
        {skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip open={mounted && isMobile ? true : undefined}>
              <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                <div className="text-3xl group-hover:text-accent transition-all duration-300 ">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent className="pointer-events-none">
                <p className="text-lg pointer-events-auto">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
