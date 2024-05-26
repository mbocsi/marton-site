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

const Experience = forwardRef((_, ref) => {
  return (
    <Container
      boxShadow="lg"
      className="Experience-page"
      maxW="100%"
      bg="50"
      ref={ref}
    >
      <Container minWidth="65%">
        <VStack spacing={4} divider={<StackDivider borderColor="500" />}>
          <Heading paddingY="5%">My Experience</Heading>
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
                  <Text>
                    Orbit NTNU is an organization that makes mini satellites
                    that are typically 2 units (10 cm x 10 cm x 20 cm) in size.
                    By joining the new Dev Ops team at Orbit, I had the
                    opportunity to improve the software development experience
                    across the organization.
                  </Text>
                  <Text>
                    One of the biggest components to contributing to Orbit as a
                    Dev Ops engineer was communication with the other
                    engineering teams. As a new team, initial establishment and
                    outreach was a big part of the work as a team member. As a
                    foreigner in Norway, communication and collaboration was a
                    challenging but extremely valuable experience as an
                    engineer.
                  </Text>
                  <Text>
                    On the technical side of things, we implemented many
                    different things from pipelines to slack bots; essentially
                    anything that improves productivity. I learned a lot about
                    CI/CD as a result of this and have started incorporating it
                    into my personal projects.
                  </Text>
                  <Text>
                    I wrote a script for the mechanical team for solving
                    physical constraint satisfaction problems for populating the
                    satellite frame with all the necessary PCBs and sensors. I
                    also wrote interfaces for different online work spaces such
                    as Valispace and Partsbox for automated integration into
                    Orbits' existing workflow.
                  </Text>
                  <Text>
                    This experience made me appreciate the value of Dev Ops in a
                    large organization and even in smaller projects. At the end,
                    I made many valuable connections and discovered a field I
                    had no knowledge about before.
                  </Text>
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
                  <Text>
                    I got to work with the engineers in charge of the embedded
                    hardware for fire trucks as well as electrical and
                    mechanical engineers. On boarding was a great and smooth
                    experience and the skill development process went rapid-fire
                    from that point.
                  </Text>
                  <Text>
                    Thanks to my supportive mentors, I learned the ins and outs
                    of Python application development from conforming to PEP
                    standards to understanding package build and publishing
                    process.
                  </Text>
                  <Text>
                    I built the backend of a testing system that modelled the
                    behavior of an entire trucks' electrical system. It was
                    important that this simulator is as modular and maintainable
                    as possible so we utilized a more robust version control
                    workflow using Gitbucket since the project was a
                    collaboration with other developers.
                  </Text>
                  <Text>
                    Upon finishing the simulator, I was tasked to create a
                    frontend for a part of the test-suite for the ladder
                    controls. I used Electron create a desktop application that
                    displays 3D truck movements in response to real CAN BUS
                    signals. The entire frontend was wrapped in a Python package
                    with a script that executes the application.
                  </Text>
                  <Text>
                    By the end of the summer, my ability to write quality Python
                    code rose significantly; I learned documentation, typing,
                    async processes, OOP, packaging, and basic dev ops
                    workflows. Through working with engineers of different
                    disciplines, I also became a better communicator - a skill a
                    look forward to continue improving.
                  </Text>
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
                  <Text>
                    I learned how to navigate and work on Linux servers along
                    with basic web dev and scripting, giving me a solid
                    foundation in my software engineering career.
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
                    low-voltage team which specialized in designing PCBs for the
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
