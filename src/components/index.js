import "./index.css";
import { Heading, Container } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
            distance: 200,
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
    []
  );

  let particle;
  if (init) {
    particle = (
      <Particles
        id="tsparticles"
        position="absolute"
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
        bg={false}
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
        <Heading position="absolute" size="4xl">
          Marton Bocsi
        </Heading>
      </Container>
    </>
  );
}

export default Home;
