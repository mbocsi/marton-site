import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Flex,
  Box,
  Container,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

const Projects = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/mbocsi/repos")
      .then((response) => response.json())
      .then((result) =>
        result
          .map((project) => {
            return {
              name: project.name,
              url: project.html_url,
              description: project.description,
              topics: project.topics,
              lastPush: project.pushed_at,
            };
          })
          .sort((a, b) => a.lastPush < b.lastPush)
      )
      .then((result) => setProjects(result));
  });
  // const projects = data;
  return (
    <Container maxWidth="100%" p="5%" ref={ref}>
      <Heading paddingY="8">Projects</Heading>
      <Container maxWidth="80%">
        <Flex
          flexDir="row"
          flexWrap={"wrap"}
          gap="5%"
          justifyContent="space-between"
        >
          {projects.map((project) => (
            <Card
              flexBasis={300}
              minW="72"
              maxWidth="30%"
              marginY={8}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              key={project.name}
            >
              <ChakraLink href={project.url}>
                <CardHeader>
                  <Heading size="md">{project.name}</Heading>
                  <p>
                    Last push at{" "}
                    {new Date(project.lastPush).toLocaleString("us-en", {
                      month: "2-digit",
                      year: "2-digit",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                </CardHeader>
                <CardFooter flex flexDir="column">
                  <p>{project.description}</p>
                  <Flex flexDir="row" gap="2" flexWrap={"wrap"} w="100%">
                    {project.topics.map((topic) => (
                      <Text
                        borderRadius="lg"
                        bg="orange"
                        p="1"
                        fontSize={12}
                        key={topic}
                        whiteSpace={"nowrap"}
                        m="0"
                      >
                        {topic}
                      </Text>
                    ))}
                  </Flex>
                </CardFooter>
              </ChakraLink>
            </Card>
          ))}
        </Flex>
      </Container>
    </Container>
  );
});

export default Projects;
