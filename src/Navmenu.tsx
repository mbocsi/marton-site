import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import { Link, NavLink } from "react-router";
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
				<Button variant="ghost" asChild>
					<Link to="">
						<SiGithub />
					</Link>
				</Button>
				<Button variant="ghost" asChild>
					<Link to="">
						<SiLinkerd />
					</Link>
				</Button>
			</div>
		</div>
	);
}
