import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { NavLink } from "react-router";
import { Button } from "./components/ui/button";
import { Linkedin } from "lucide-react";

export function NavMenu() {
	return (
		<div className="flex flex-row items-center justify-between">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to="/">Home</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to="/about">About me</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to="/projects">Projects</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to="/resume">Resume</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div>
				<Button variant="ghost" size="icon" asChild>
					<a
						href="https://github.com/mbocsi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiGithub />
					</a>
				</Button>
				<Button variant="ghost" size="icon" asChild>
					<a
						href="https://www.linkedin.com/in/marton-bocsi/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin />
					</a>
				</Button>
			</div>
		</div>
	);
}
