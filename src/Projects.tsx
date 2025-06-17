import { Link } from "react-router";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";

const projects = [
	{
		title: "Home IoT Sensor and Controls Platform",
		description:
			"A distributed system for real-time sensor data and controls using an MCP server, message queues, and embedded devices.",
		tech: ["Go", "C", "TCP", "ESP32", "Raspberry Pi", "Grafana"],
		date: "Summer 2025",
		status: "In Progress",
	},
	{
		title: "Genimix",
		description:
			"An AI image generation platform for developers. Offers API access to multiple image models, automatic storage, and CDN delivery.",
		tech: [
			"TypeScript",
			"Next.js",
			"Cloudflare Workers",
			"R2",
			"D1",
			"KV",
			"Clerk",
			"OpenAI API",
			"Google AI API",
		],
		status: "Live",
		date: "Spring 2025",
		link: "https://genimix.dev",
	},
	{
		title: "Magmattic",
		description:
			"Senior design project: A hand-held induction magnetometer for detecting the magnetic field of volcanic rocks.",
		tech: [
			"Python",
			"C",
			"TypeScript",
			"Publisher/Subscriber",
			"React",
			"WebSocket",
			"Raspberry Pi",
		],
		date: "Spring 2025",
		link: "https://github.com/mbocsi/magmattic",
	},
	{
		title: "Vyltix",
		description:
			"A web platform for event ticket distribution and store for complimentary event purchases (Merch, VIP, etc.).",
		tech: [
			"Go",
			"TypeScript",
			"React-router",
			"Docker Compose",
			"PostgreSQL",
			"Figma",
		],
		date: "Fall 2024",
		status: "In Progress",
		link: "",
	},
	{
		title: "CareerBridge AI",
		description:
			"A job board and career development platform that uses AI services for OCR, translations, and recommendation tasks.",
		tech: [
			"TypeScript",
			"Python",
			"Next.js",
			"Flask",
			"Docker Compose",
			"PostgreSQL",
		],
		date: "Summer 2024",
		link: "https://github.com/JIHONGKING/Ideation-Frontend",
	},
	{
		title: "File-based Router",
		description:
			"A file-based HTTP router implemented using Golang. Returns HTML, CSS, Javascript files and runs CGI files",
		tech: ["Go", "HTTP server"],
		date: "Spring 2024",
		link: "https://github.com/mbocsi/file-based-router",
	},
	{
		title: "Steam Market Stats",
		description:
			"A web application that displays market statistics for items listed on the Steam community market.",
		tech: ["TypeScript", "Next.js", "Prisma", "MySQL", "Web scraping"],
		date: "Spring 2024",
		link: "https://github.com/mbocsi/steam-market-stats",
	},
	{
		title: "Spotify Autoplaylist",
		description:
			"A python package for creating and updating personalized Spotify playlists.",
		tech: ["Python", "Pytest", "setuptools", "Spotify API"],
		date: "Winter 2022",
		link: "https://github.com/mbocsi/Spotify-Autoplaylist-App",
	},
	// Add more projects here
];

export function Projects() {
	return (
		<div className="space-y-6">
			<title>Marton Bocsi - Projects</title>
			<h1 className="text-3xl font-bold tracking-tight">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
				{projects.map((project, idx) => (
					<Card key={idx} className="flex flex-col justify-between">
						<div>
							<CardHeader>
								<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
									<CardTitle>{project.title}</CardTitle>
									<div className="flex items-center gap-2 text-xs text-muted-foreground">
										{project.date && (
											<span className="whitespace-nowrap">
												{project.date}
											</span>
										)}
										{project.status && (
											<span
												className={cn(
													"px-2 py-0.5 rounded font-medium whitespace-nowrap",
													project.status === "Live" &&
														"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
													project.status ===
														"In Progress" &&
														"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
													project.status ===
														"Archived" &&
														"bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
												)}
											>
												{project.status}
											</span>
										)}
									</div>
								</div>
							</CardHeader>

							<CardContent className="text-sm text-muted-foreground space-y-2">
								<p>{project.description}</p>
								<ul className="text-xs flex flex-wrap gap-2 pt-2">
									{project.tech.map((t, i) => (
										<li
											key={i}
											className="px-2 py-0.5 bg-muted rounded text-secondary-foreground"
										>
											{t}
										</li>
									))}
								</ul>
							</CardContent>
						</div>

						<CardFooter>
							<Button
								asChild
								variant="outline"
								className="w-full"
								disabled={!project.link}
							>
								<Link
									to={project.link!}
									target={
										project.link?.startsWith("http")
											? "_blank"
											: undefined
									}
									rel="noopener noreferrer"
								>
									View Project
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
