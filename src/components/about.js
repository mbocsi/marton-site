import { Container, Heading, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const About = forwardRef((_, ref) => {
  return (
    <Container
      color="white"
      bg="600"
      padding="5%"
      textAlign="center"
      maxWidth="100%"
      ref={ref}
    >
      <Heading paddingBottom="5%">About me</Heading>
      <Text fontSize="xl" color="white">
        Here's a little preview about myself!
      </Text>
    </Container>
  );
});

export default About;
