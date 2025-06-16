import { Link } from "react-router";
import { Card, CardContent, CardHeader } from "./components/ui/card";

export function About() {
	return (
		<div className="">
			{/* <header>
				<h1>About me!</h1>
			</header> */}
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
							performance, elegant infrastructure, building
							systems with minimal technical debt. I recently
							graduated from the University of Wisconsin-Madison
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
							<span>
								<Link
									to="https://www.typescriptlang.org/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									TypeScript
								</Link>
							</span>
							,{" "}
							<span>
								<Link
									to="https://go.dev/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Go
								</Link>
							</span>
							, and{" "}
							<span>
								<Link
									to="https://www.python.org/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Python
								</Link>
							</span>
							. I've shipped fullstack systems with{" "}
							<span>
								<Link
									to="https://workers.cloudflare.com/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Cloudflare Workers
								</Link>
							</span>
							,{" "}
							<span>
								<Link
									to="https://www.cloudflare.com/developer-platform/products/r2/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									R2
								</Link>
							</span>
							,{" "}
							<span>
								<Link
									to="https://developers.cloudflare.com/d1/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									D1
								</Link>
							</span>
							,and{" "}
							<span>
								<Link
									to="https://www.docker.com/"
									className="text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Docker
								</Link>
							</span>
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
							ever-evolving K-pop playlist. I also love to
							travel—whether it's for a conference or a
							spontaneous adventure halfway around the world.
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
