import './index.css';
import { Text, Heading, Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
      <>
        <Container bg='100' textAlign={['center']} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'} display='flex' flexDirection={'column'} maxWidth='100%' margin={0}>
          <Heading size='4xl'>Marton Bocsi</Heading>
          {/*
          <Text>Am I cool?</Text>
          <div className="Options">
            <Box className="Choice" as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }} bg='blue' color='white' p={4} borderRadius='lg' overflow='hidden'>
              Yes!
            </Box>
            <Box className="Choice" onHoverStart={() => {setX(Math.random() * 1000 - 500); setY(Math.random() * 800 - 400);}} as={motion.div} animate={{x, y}} bg='tomato' color='white' p={4} borderRadius='lg' overflow='hidden'>
              No!
            </Box>
          </div>
  */}
        </Container>
    </>
  );
}

export default Home;
