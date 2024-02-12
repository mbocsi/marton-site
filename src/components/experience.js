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
                  boxShadow="sm"
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
                  boxShadow="sm"
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
                  boxShadow="sm"
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
                  <Text>
                    After my first two semesters studying computer engineering,
                    I had the pleasure of working with researchers and
                    programmers alike. I learned many practical skills in web
                    development, database management, and scripting through my
                    time at SSEC.
                  </Text>
                  <Text>
                    During this experience, I learned SQL and database
                    management using Python SQLite. I used these skills to
                    populate databases with satellite image data using cronjobs
                    which were then queried and displayed by a website I
                    designed. This was my first look into frontend web
                    development using raw HTML, CSS, and Javascript hosted on a
                    server using Apache.
                  </Text>
                  <Text>
                    During my web dev research, I came across React and decided
                    to use it for my next project. The website enabled
                    scientists to submit a form containing geolocation data and
                    download an image that was generated via POST request to a
                    script on the server. For this utility to be viable and
                    convenient for users, I incorporated external APIs for
                    geolocation conversions.
                  </Text>
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
                  boxShadow="sm"
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
                  <Text>
                    I joined this student organization as a Freshman in
                    university, which enabled me to learn from amazing mentors
                    and explore my options in the diverse field of computer
                    engineering. Eager to start my journey, I joined the
                    low-voltage team which specialized in designing PCB for the
                    MCU and other logic for the vehicle.
                  </Text>
                  <Text>
                    With already some electrical engineering experience from
                    high school, I designed various schematics for the vehicle
                    using Altium Designer. I made circuits for main power bus
                    filters, sensors, and voltage/current telemetry. This is
                    also where I first used and learned how to effectively use
                    Git using Github.
                  </Text>
                  <Text>
                    Through my time at Badger Solar Racing, I had many
                    fulfilling experiences that allowed me to broaden my scope
                    of engineering. I got to learn about hardware design using
                    professional tools while also getting involved with other
                    teams, particularily the software teams.
                  </Text>
                  <Text>
                    While learning hardware design was certainly a valuable and
                    fun experience, I was ultimately drawn to the abstract
                    complexity of software, thus beginning my software
                    engineering journey.
                  </Text>
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
                  boxShadow="sm"
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
                  <Text>
                    3rd year undergraduate majoring in Computer Engineering:
                    Machine Learning and Data Science Option and Computer
                    Science.
                  </Text>
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
