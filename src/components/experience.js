import {
  Text,
  Heading,
  Container,
  VStack,
  Stack,
  StackDivider,
  Box,
  Image,
  Center,
  Grid,
  GridItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./experience.css";
import { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  return (
    <Container className="Experience-page" maxW="100%" bg="50" ref={ref}>
      <Container minWidth="65%">
        <VStack spacing={4} divider={<StackDivider borderColor="500" />}>
          <Heading paddingBottom="5%">Experience</Heading>
          <Text as="b" fontSize="lg">
            I am a computer engineering and CS undergrad at UW Madison's College
            of Engineering, dedicated to advancing my knowledge and skills in
            the dynamic field of technology.
          </Text>
          <Grid gap={6} templateColumns="15% 85%">
            <GridItem>
              <ChakraLink href="https://orbitntnu.com/">
                <Box
                  bg="white"
                  borderRadius={10}
                  padding="5%"
                  aspectRatio="1/1"
                  display="flex"
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Center>
                    <Image
                      objectFit="contain"
                      src={
                        "https://orbitntnu.com/static/3198cf2e6c64ee08372b55a55dce686a/8507e/orbitimage.png"
                      }
                    ></Image>
                  </Center>
                </Box>
              </ChakraLink>
            </GridItem>
            <GridItem>
              <Container textAlign="left" margin={0} minWidth="100%">
                <Heading>Orbit NTNU</Heading>
                <Text color="500">
                  Dev Ops Engineer, August 2023 - December 2023
                </Text>
                <Text as="b">Trondheim, Norway</Text>
                <Stack spacing={3} marginTop={3}>
                  <Text>
                    During the fall of 2023, I attended the Norwegian University
                    of Technology (NTNU) in Trondheim, where I had the
                    opportunity to engage with numerous impressive
                    technology-focused student organizations.
                  </Text>
                  <Text>...</Text>
                </Stack>
              </Container>
            </GridItem>
          </Grid>
          <Grid gap={6} templateColumns="15% 85%" w="100%">
            <GridItem>
              <ChakraLink href="https://www.piercemfg.com/">
                <Box
                  bg="white"
                  borderRadius={10}
                  padding="5%"
                  aspectRatio="1/1"
                  display="flex"
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Image
                    objectFit="contain"
                    src={
                      "https://piercemfg.csod.com/client/piercemfg/clp/01/images/2cTagWh.jpg"
                    }
                  ></Image>
                </Box>
              </ChakraLink>
            </GridItem>
            <GridItem>
              <Container textAlign="left" margin={0} minWidth="100%">
                <Heading>Pierce Manufacturing</Heading>
                <Text color="500">
                  Software Engineering Intern, May 2023 - August 2023
                </Text>
                <Text as="b">Oshkosh, WI USA</Text>
                <Stack spacing={3} marginTop={3}>
                  <Text>
                    With a little bit of experience under my belt, I decided to
                    expand the scope of my career prospects and explore the
                    vehicle manufacturing industry.
                  </Text>
                  <Text>...</Text>
                </Stack>
              </Container>
            </GridItem>
          </Grid>
          <Grid gap={6} templateColumns="15% 85%" w="100%">
            <GridItem>
              <ChakraLink href="https://www.ssec.wisc.edu/">
                <Box
                  bg="white"
                  borderRadius={10}
                  padding="5%"
                  aspectRatio="1/1"
                  display="flex"
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Image
                    objectFit="contain"
                    src={
                      "https://avatars.githubusercontent.com/u/698510?s=280&v=4"
                    }
                  ></Image>
                </Box>
              </ChakraLink>
            </GridItem>
            <GridItem>
              <Container textAlign="left" margin={0} minWidth="100%">
                <Heading>SSEC</Heading>
                <Text color="500">Student Programmer, May 2022 - May 2023</Text>
                <Text as="b">Madison, WI USA</Text>
                <Stack spacing={3} marginTop={3}>
                  <Text>
                    My internship at the Space Science and Engineering Center
                    was my first real look at software development and IT in a
                    professional setting.
                  </Text>
                  <Text>...</Text>
                </Stack>
              </Container>
            </GridItem>
          </Grid>
          <Grid gap={6} templateColumns="15% 85%">
            <GridItem>
              <ChakraLink href="https://badgersolarracing.org/">
                <Box
                  bg="white"
                  borderRadius={10}
                  padding="5%"
                  aspectRatio="1/1"
                  display="flex"
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Image
                    objectFit="contain"
                    src={"https://badgersolarracing.org/images/logo.png"}
                  ></Image>
                </Box>
              </ChakraLink>
            </GridItem>
            <GridItem>
              <Container textAlign="left" margin={0} minWidth="100%">
                <Heading>Badger Solar Racing UW</Heading>
                <Text color="500">
                  Low Voltage Team Member, September 2021 - May 2022
                </Text>
                <Text as="b">Madison, WI USA</Text>
                <Stack spacing={3} marginTop={3}>
                  <Text>
                    Badger Solar Racing (Badgerloop at the time) was the first
                    step in my computer engineering journey at UW Madison.
                  </Text>
                  <Text>...</Text>
                </Stack>
              </Container>
            </GridItem>
          </Grid>
          <Grid gap={6} templateColumns="15% 85%">
            <GridItem>
              <ChakraLink href="https://engineering.wisc.edu/">
                <Box
                  bg="white"
                  borderRadius={10}
                  padding="5%"
                  aspectRatio="1/1"
                  display="flex"
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Image
                    objectFit="contain"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/2171px-Wisconsin_Badgers_logo.svg.png"
                    }
                  ></Image>
                </Box>
              </ChakraLink>
            </GridItem>
            <GridItem>
              <Container textAlign="left" margin={0} minWidth="100%">
                <Heading>UW Madison College of Engineering</Heading>
                <Text color="500">
                  Computer Engineering & Computer Science BS., September 2021 -
                  May 2025
                </Text>
                <Text as="b">Madison, WI USA</Text>
                <Stack spacing={3} marginTop={3}>
                  <Text>...</Text>
                </Stack>
              </Container>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Container>
  );
});

export default Experience;
