import { Container, Heading } from "@chakra-ui/react";
import "./contact.css";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <Container className="contact" ref={ref}>
      <Heading> Contact me!</Heading>
    </Container>
  );
});

export default Contact;
