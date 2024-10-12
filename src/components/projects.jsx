import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Container,
  Link as ChakraLink,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import careerBridgeAi from "../images/careerbridgeai.jpeg";
import marketApp from "../images/item_page.png";
import goApi from "../images/goapi.png";
import "./projects.css";
import javascriptApi from "../images/javascriptapi.png";
import spotifyApp from "../images/spotifyApp.png";
import springApi from "../images/springApi.png";
import fileRouter from "../images/file_router.png";
import demoFrontend from "../images/demoFrontend.png";

const projects = [
  {
    title: "CareerBridge AI",
    github_url: "https://github.com/JIHONGKING/Ideation-Frontend",
    image: careerBridgeAi,
    description:
      "An AI-powered NextJS application that connects Korean job seekers with U.S. job opportunities. Utilizes AI for OCR, career recommendations, and translations.",
    languages: ["Typescript", "Python"],
    tech: ["React", "NextJS", "Flask", "Tailwind CSS", "Upstage API"],
  },
  {
    title: "File-based Router",
    github_url: "https://github.com/mbocsi/file-based-router",
    image: fileRouter,
    description:
      "An HTTP server written in Golang using the standard net/http package. It accepts HTTP requests and serves responses from a root file system that contains, html, js, css, and cgi files.",
    languages: ["Golang"],
    tech: ["net/http"],
  },
  {
    title: "Steam Market Stats",
    github_url: "https://github.com/mbocsi/steam-market-stats",
    image: marketApp,
    description:
      "A Next.js app that lets the user search for price trends and market statistics on items that are listed on the Steam Marketplace.",
    languages: ["Typescript", "Python"],
    tech: ["React", "MySQL", "Next.js", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Spotify Autoplaylist App",
    github_url: "https://github.com/mbocsi/Spotify-Autoplaylist-App",
    image: spotifyApp,
    description:
      "A python package that lets the user automatically generate Spotify playlists based on an input config file using the Spotify API.",
    languages: ["Python"],
    tech: ["Spotipy", "Pytest", "Github Actions"],
  },
];
const technical_projects = [
  {
    title: "Backend API Demo",
    description:
      "A project for building my experience in different languages, frameworks, and patterns. Contains multiple repositories for multiple backends (with the same behavior) and a single frontend for testing.",
    repos: [
      {
        title: "Go API",
        github_url: "https://github.com/mbocsi/go-api-demo",
        image: goApi,
      },
      {
        title: "JavaScript API",
        github_url: "https://github.com/mbocsi/javascript-api-demo",
        image: javascriptApi,
      },
      {
        title: "Java API",
        github_url: "https://github.com/mbocsi/java-api-demo",
        image: springApi,
      },
      {
        title: "Frontend Demo",
        github_url: "https://github.com/mbocsi/api-demo-frontend",
        image: demoFrontend,
      },
    ],
  },
];
const Projects = forwardRef((_, ref) => {
  return (
    <Container maxWidth="100%" p="5%" ref={ref}>
      <Heading paddingY="8">Featured Projects</Heading>
      <Container maxWidth="100%">
        <Grid gap={12} templateColumns="repeat(2, 1fr)">
          {projects.map((project, idx) => (
            <GridItem key={idx}>
              <Card minW="20rem" height="100%" className="project">
                <ChakraLink href={project.github_url} className="ghub-link">
                  <CardHeader>
                    <Heading size="md">{project.title}</Heading>
                  </CardHeader>
                  <CardFooter flex flexDir="column">
                    <p>{project.description}</p>
                    <Heading size="sm">Languages</Heading>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {project.languages.map((lang) => (
                        <p
                          style={{
                            marginRight: "12px",
                            backgroundColor: "cyan",
                            padding: "4px",
                          }}
                        >
                          {lang}
                        </p>
                      ))}
                    </div>
                    <Heading size="sm">Technologies</Heading>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {project.tech.map((lang) => (
                        <p
                          style={{
                            marginRight: "12px",
                            backgroundColor: "yellow",
                            padding: "4px",
                          }}
                        >
                          {lang}
                        </p>
                      ))}
                    </div>
                    <Image src={project.image} />
                  </CardFooter>
                </ChakraLink>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Heading paddingY="8">Technical Projects</Heading>
      <Container maxWidth="100%">
        <Grid gap={12} templateColumns="repeat(1, 1fr)">
          {technical_projects.map((project, idx) => (
            <GridItem key={idx}>
              <Card minW="20rem" height="100%">
                <CardHeader>
                  <Heading size="md">{project.title}</Heading>
                </CardHeader>
                <CardFooter flex flexDir="column">
                  <p>{project.description}</p>
                  <Image src={project.image} />
                  <Grid
                    templateColumns="repeat(4, 1fr)"
                    templateRows="repeat(1, 1fr)"
                    gap={8}
                  >
                    {project.repos.map((repo, idx) => (
                      <Card key={idx}>
                        <ChakraLink
                          href={repo.github_url}
                          className="ghub-link project"
                          height="100%"
                          p={4}
                        >
                          <Heading size="sm">{repo.title}</Heading>
                          {repo.image ? (
                            <Image src={repo.image} objectFit="contain" />
                          ) : (
                            ""
                          )}
                        </ChakraLink>
                      </Card>
                    ))}
                  </Grid>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Heading paddingY="8" width="100%" textAlign="center">
        Visit my other projects on Github!
      </Heading>
    </Container>
  );
});

export default Projects;
