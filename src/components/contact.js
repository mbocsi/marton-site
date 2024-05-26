import {
  Container,
  Heading,
  Text,
  Icon,
  useClipboard,
  useToast,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { EmailIcon } from "@chakra-ui/icons";
import "./contact.css";
import { forwardRef } from "react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Contact = forwardRef((_, ref) => {
  const { onCopy } = useClipboard("mvbocsi@gmail.com");
  const toast = useToast();
  return (
    <Container className="contact" ref={ref} maxW="100%" bg="50">
      <Heading> Contact me</Heading>
      <Text>Email is the best way to get in touch with me!</Text>
      <button>
        <ChakraBox
          onClick={() => {
            onCopy();
            toast({
              title: "Email copied to clipboard!",
              description: "",
              status: "success",
              duration: 5000,
              isClosable: false,
            });
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
        >
          <Icon boxSize={40} as={EmailIcon}></Icon>
        </ChakraBox>
      </button>
    </Container>
  );
});

export default Contact;
