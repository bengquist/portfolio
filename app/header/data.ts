import { AtIcon } from "../icons/At";
import { CodeIcon } from "../icons/Code";
import EmailIcon from "../icons/Email";
import { GithubIcon } from "../icons/Github";
import { LinkedInIcon } from "../icons/LinkedIn";
import { ResumeIcon } from "../icons/Resume";

export const navLinks = [
	{
		name: "About",
		id: "about",
	},
	{
		name: "Experience",
		id: "experience",
	},
];

export const profiles = [
	{
		Icon: GithubIcon,
		url: "https://github.com/bengquist",
	},
	{
		Icon: LinkedInIcon,
		url: "https://www.linkedin.com/in/blake-engquist",
	},
	{
		Icon: ResumeIcon,
		url: "/Blake_Engquist_-_Software_Engineer.pdf",
	},
	{
		Icon: CodeIcon,
		url: "https://github.com/bengquist/portfolio",
	},
	{
		Icon: EmailIcon,
		url: "mailto:blakeengquist@gmail.com",
	},
];
