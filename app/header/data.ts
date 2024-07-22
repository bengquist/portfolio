import { CodeIcon } from "../icons/CodeIcon";
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
	{
		name: "Contact",
		id: "contact",
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
];
