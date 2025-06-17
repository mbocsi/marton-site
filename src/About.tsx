import { Card, CardContent, CardHeader } from "./components/ui/card";

export function About() {
	return (
		<div className="">
			<title>Marton Bocsi - About</title>
			<section className="space-y-4">
				<Card>
					<CardHeader>
						<h2 className="text-2xl font-bold tracking-tight">
							About Me
						</h2>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-base leading-relaxed text-muted-foreground">
							Hi! I'm Marton—a backend systems engineer who values
							performance, elegant infrastructure, and building
							systems with minimal technical debt. I recently
							graduated from the{" "}
							<a
								href="https://www.wisc.edu/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								University of Wisconsin-Madison
							</a>{" "}
							with degrees in Computer Engineering and Computer
							Science, along with a certificate in Physics.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							I love building software that scales—whether that's
							API service platforms, distributed data pipelines,
							or home IoT applications. I'm especially drawn to
							backend architecture: making systems observable,
							resilient, and efficient from the ground up.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							My primary tools are{" "}
							<a
								href="https://www.typescriptlang.org/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								TypeScript
							</a>
							,{" "}
							<a
								href="https://go.dev/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Go
							</a>
							, and{" "}
							<a
								href="https://www.python.org/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Python
							</a>
							. I've shipped fullstack systems with{" "}
							<a
								href="https://workers.cloudflare.com/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cloudflare Workers
							</a>
							,{" "}
							<a
								href="https://www.cloudflare.com/developer-platform/products/r2/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								R2
							</a>
							,{" "}
							<a
								href="https://developers.cloudflare.com/d1/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								D1
							</a>
							, and{" "}
							<a
								href="https://www.docker.com/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Docker
							</a>
							. I'm also comfortable working closer to the
							wire—whether that means low level networking or
							integrating with hardware like servers, Raspberry
							Pis, and microcontrollers.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Beyond code, I've contributed to student CubeSat
							missions, developed IoT tools for sensor analytics,
							and enjoyed the challenge of getting hardware and
							software to cooperate. I'm fascinated by the
							intersection of embedded systems and high-level
							infrastructure.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							When I'm not coding, you'll probably find me deep in
							a side project (usually involving too many wires),
							geeking out over Formula 1 strategy, or curating my
							ever-evolving K-pop playlist. I also love to travel:
							Check out my{" "}
							<a
								href="https://www.instagram.com/martonbocsi/"
								className="hover:opacity-80 transition text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>{" "}
							profile for photos from my travels.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							- Marton
						</p>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
