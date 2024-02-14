import { Container, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
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
      <div className="Tiles">
        <Box
          className="hobby"
          boxShadow="dark-lg"
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          color="black"
          bg="white"
          borderRadius="lg"
          p={3}
        >
          <Heading className="Tile-header">Hobbies</Heading>
          <Box className="Image-tiles">
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"
              }
              alt={"soccer"}
            />
            <Image
              boxSize="150px"
              objectFit="contain"
              src={
                "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg"
              }
              borderRadius="lg"
              alt={"valorant"}
            />
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://hips.hearstapps.com/autoweek/assets/s3fs-public/f1-abu-dhabi-gp-2017-f1-logo.jpg"
              }
              alt={"f1"}
            />

            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-black-camera-photography-icon-logo-png-image_6007177.png"
              }
              alt={"photography"}
            />
          </Box>
        </Box>
        <Box
          className="projects"
          boxShadow="dark-lg"
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          color="black"
          bg="white"
          borderRadius="lg"
          p={3}
        >
          <Heading>Projects</Heading>
          <Box className="Image-tiles">
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              }
            ></Image>
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png"
              }
            ></Image>
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://nl.mathworks.com/hardware-support/stm32/_jcr_content/mainParsys/band_1064257838_copy/mainParsys/columns_copy/2e914123-2fa7-423e-9f11-f574cbf57caa/image_copy_copy_copy.adapt.full.medium.svg/1699891188505.svg"
              }
            ></Image>
            <Image
              boxSize="100px"
              objectFit="contain"
              src={
                "https://img.freepik.com/premium-vector/blue-tube-vector-logo-template-illustration-design-vector-eps-10_822766-9547.jpg"
              }
            ></Image>
          </Box>
        </Box>
      </div>
      {/* <Heading>MBTI</Heading>
      <Container
        display="flex"
        flexDir="row"
        justifyContent={"center"}
        gap={2}
        bg="white"
        borderRadius="lg"
      >
        <Heading fontSize={72} color="blue">
          I
        </Heading>
        <Heading fontSize={72} color="orange">
          N
        </Heading>
        <Heading fontSize={72} color="green">
          T
        </Heading>
        <Heading fontSize={72} color="brown">
          P
        </Heading>
      </Container> */}
    </Container>
  );
});

export default About;
