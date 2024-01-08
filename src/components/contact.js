import { Container, Heading, Text } from "@chakra-ui/react";
import "./contact.css";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <Container className="contact" ref={ref} maxW="100%" bg="50">
      <Heading> Contact me!</Heading>
      <Text>This is a placeholder section.</Text>
    </Container>
  );
});

export default Contact;
