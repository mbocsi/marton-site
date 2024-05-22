import "./title.css";
import {
  Heading,
  Container,
  shouldForwardProp,
  chakra,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: "#4299E1",
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
    }),
    [],
  );

  let particle;
  if (init) {
    particle = (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  } else {
    particle = <></>;
  }

  return (
    <>
      <Container
        bg="400"
        textAlign="center"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        maxWidth="100%"
        margin={0}
        padding={0}
      >
        {particle}
        <Container position="absolute">
          <Container
            position="relative"
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Heading size="4xl">Marton Bocsi</Heading>
            <ChakraBox
              animate={{ y: [0, 20, 0, 20, 0, 0] }}
              transition={{
                duration: 2,
                times: [0, 0.1, 0.2, 0.3, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              position="absolute"
              bottom={6}
            >
              <ChevronDownIcon boxSize={12} />
            </ChakraBox>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Home;
