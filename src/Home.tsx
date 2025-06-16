import { Link } from "react-router";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
	return (
		<div className="space-y-8">
			<header className="flex space-x-4 items-stretch">
				<div className="w-16 bg-accent aspect-square"></div>
				<div>
					<h1 className="text-4xl font-bold tracking-tight">
						Marton Bocsi
					</h1>
					<p className="text-lg text-accent-foreground">
						Backend & Systems Engineer · Fullstack Developer
					</p>
				</div>
			</header>
			<Card>
				<CardHeader className="text-xl font-semibold">
					Hey, I'm Marton!
				</CardHeader>
				<CardContent className="text-base leading-relaxed">
					I'm a fullstack software engineer and recent graduate from
					the University of Wisconsin-Madison with a degree in
					Computer Engineering. I'm passionate about backend systems,
					distributed infrastructure, and building tools that scale.
				</CardContent>
			</Card>
			<section className="space-y-3">
				<p>
					Recently launched{" "}
					<Link
						to="https://genimix.dev"
						className="underline underline-offset-4 hover:opacity-80 transition text-primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Genimix
					</Link>
					—an AI image generation platform for developers. It bundles
					model APIs and optimized image storage, powered by
					Cloudflare Workers, R2, and Clerk.
				</p>
				<p>
					Currently building an IoT data pipeline with an MCP server,
					distributed messaging, and real-time analytics for sensor
					networks.
				</p>
			</section>
			<div className="flex flex-wrap gap-4 pt-2">
				<Button asChild variant="outline">
					<Link to="/projects">Explore Projects</Link>
				</Button>
				<Button asChild variant="outline">
					<Link to="/resume">View Resume</Link>
				</Button>
				<Button asChild variant="outline">
					<Link
						to="https://github.com/mbocsi"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default App;
