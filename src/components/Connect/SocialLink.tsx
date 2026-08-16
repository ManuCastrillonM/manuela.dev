import type { Social } from "../../data/socials";
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon, XIcon, MailIcon } from "../Icons/Icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  x: XIcon,
  email: MailIcon,
};

export function SocialLink({ social }: { social: Social }) {
  const Icon = iconMap[social.icon];
  const isEmail = social.icon === "email";

  return (
    <a
      href={social.url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="social-link"
    >
      <span className="social-link-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="social-link-label">{social.label}</span>
    </a>
  );
}
