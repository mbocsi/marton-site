import { Container, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <Container
      bg="600"
      padding="5%"
      textAlign="center"
      maxWidth="100%"
      ref={ref}
    >
      <Heading color="white" paddingBottom="5%">
        About me
      </Heading>
      <Text fontSize="xl" color="white">
        Placeholder text describing me. The website is a work in progress!
      </Text>
      <div className="Tiles">
        <Box
          className="hobby"
          boxShadow="dark-lg"
          as={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          color="black"
          bg="white"
          borderRadius="lg"
          p={3}
        >
          <Heading className="Tile-header">Hobbies</Heading>
          <Box className="Image-tiles">
            <Image
              src={
                "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg"
              }
              borderRadius="lg"
              alt={"valorant"}
            />
            <Image
              src={
                "https://hips.hearstapps.com/autoweek/assets/s3fs-public/f1-abu-dhabi-gp-2017-f1-logo.jpg"
              }
              alt={"f1"}
            />
          </Box>
        </Box>
        {/*<Box
          className="experience"
          boxShadow="dark-lg"
          as={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          color="black"
          bg="white"
          borderRadius="lg"
          p={3}
        >
          <Heading>Experience</Heading>
          <Box className="Image-tiles">
            <Image
              src={
                "https://orbitntnu.com/static/3198cf2e6c64ee08372b55a55dce686a/8507e/orbitimage.png"
              }
            ></Image>
            <Image
              src={"https://badgersolarracing.org/images/logo.png"}
            ></Image>
            <Image
              src={"https://avatars.githubusercontent.com/u/698510?s=280&v=4"}
            ></Image>
            <Image
              src={
                "https://piercemfg.csod.com/client/piercemfg/clp/01/images/2cTagWh.jpg"
              }
            ></Image>
          </Box>
        </Box>
            */}
        <Box
          className="projects"
          boxShadow="dark-lg"
          as={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          color="black"
          bg="white"
          borderRadius="lg"
          p={3}
        >
          <Heading>Projects</Heading>
          <Box className="Image-tiles">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              }
            ></Image>
            <Image
              src={
                "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png"
              }
            ></Image>
            <Image
              src={
                "https://nl.mathworks.com/hardware-support/stm32/_jcr_content/mainParsys/band_1064257838_copy/mainParsys/columns_copy/2e914123-2fa7-423e-9f11-f574cbf57caa/image_copy_copy_copy.adapt.full.medium.svg/1699891188505.svg"
              }
            ></Image>
            <Image
              src={
                "https://img.freepik.com/premium-vector/blue-tube-vector-logo-template-illustration-design-vector-eps-10_822766-9547.jpg"
              }
            ></Image>
          </Box>
        </Box>
      </div>
    </Container>
  );
});

export default About;
