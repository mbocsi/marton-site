import "./navbar.css";
import {
  Icon,
  Box,
  useClipboard,
  Link as ChakraLink,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import { default as BootNavbar } from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ experienceRef, aboutRef, contactRef, projectsRef }) {
  const { onCopy } = useClipboard("mvbocsi@gmail.com");
  const toast = useToast();

  return (
    <BootNavbar
      data-bs-theme="light"
      expand="lg"
      fixed="top"
      className="bg-body-tertiary"
    >
      <Container>
        <BootNavbar.Brand href="/">Marton Bocsi</BootNavbar.Brand>
        <BootNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Box
                className="navbox"
                borderRadius={0}
                bg={false}
                as={motion.div}
                onClick={() =>
                  experienceRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <Text margin="auto">Experience</Text>
              </Box>
            </Nav.Link>
            <Nav.Link>
              <Box
                className="navbox"
                borderRadius={0}
                bg={false}
                as={motion.div}
                onClick={() =>
                  projectsRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <Text margin="auto">Projects</Text>
              </Box>
            </Nav.Link>
            {/* <Nav.Link> */}
            {/*   <Box */}
            {/*     className="navbox" */}
            {/*     borderRadius={0} */}
            {/*     bg={false} */}
            {/*     onClick={() => */}
            {/*       aboutRef.current.scrollIntoView({ behavior: "smooth" }) */}
            {/*     } */}
            {/*     as={motion.div} */}
            {/*     whileHover={{ scale: 1.1 }} */}
            {/*     whileTap={{ scale: 1 }} */}
            {/*   > */}
            {/*     <Text margin="auto">About me</Text> */}
            {/*   </Box> */}
            {/* </Nav.Link> */}
            <Nav.Link>
              <Box
                className="navbox"
                borderRadius={0}
                bg={false}
                onClick={() =>
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <Text margin="auto">Contact me</Text>
              </Box>
            </Nav.Link>
          </Nav>

          <HStack className="socials" spacing="24px">
            <button>
              <Box
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
                colorScheme="instagram"
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <Icon boxSize={8} as={EmailIcon}></Icon>
              </Box>
            </button>
            <ChakraLink href="https://www.linkedin.com/in/marton-bocsi/">
              <Box
                className="social-link"
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <Icon boxSize={8} as={FaLinkedin}></Icon>
              </Box>
            </ChakraLink>
            <ChakraLink href="https://www.instagram.com/martonbocsi/">
              <Box
                className="social-link"
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <Icon boxSize={8} as={FaInstagram}></Icon>
              </Box>
            </ChakraLink>
            <ChakraLink href="https://github.com/mbocsi">
              <Box
                className="social-link"
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <Icon boxSize={8} as={FaGithub}></Icon>
              </Box>
            </ChakraLink>
          </HStack>
        </BootNavbar.Collapse>
      </Container>
    </BootNavbar>
  );
}

export default Navbar;
