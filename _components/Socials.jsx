import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/Mo.Afifi545",
    name: "Facebook",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/m7md__afifi",
    name: "Instagram",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/mohamed--afifi",
    name: "Linkedin",
  },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <div
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
          aria-label={item.name}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
