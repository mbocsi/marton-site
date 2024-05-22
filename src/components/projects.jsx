import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Container,
  Heading,
} from "@chakra-ui/react";
const data = [
  {
    name: "Marton Site",
    desc: "This website that you are looking at right now!",
    github: "https://github.com",
  },
  {
    name: "Steam Market Tracker",
    desc: "A website that displays market statistics for steam items.",
    github: "https://github.com",
  },
  {
    name: "Spotify Script",
    desc: "A Python package for automatically generating Spotify playlists.",
    github: "https://github.com",
  },
  {
    name: "Vyltix",
    desc: "A website for distributing tickets for small events.",
    github: "https://github.com",
  },
];
export default function Projects() {
  const projects = data;
  return (
    <div>
      <Heading>Projects</Heading>
      <Container flex flexDir={"row"} flexWrap={"wrap"} w="max-content">
        {projects.map((project) => (
          <Card>
            <CardHeader>
              <p>{project.name}</p>
            </CardHeader>
            <CardFooter>
              <p>{project.desc}</p>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </div>
  );
}
