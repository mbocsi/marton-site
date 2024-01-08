import { Text, Heading, Container, VStack, StackDivider, Box, Image, Center, Grid, GridItem, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './experience.css';

function Experience() {
    return (
        <Container className='Experience-page' maxW='100%' bg='50'>
            <Container minWidth='65%'>
            <VStack spacing={4} divider={<StackDivider borderColor='500' />}>
            <Heading paddingBottom='5%'>Experience</Heading>
            <Text>I am a computer engineering and CS undergrad at UW Madison's College of Engineering.</Text>
                <Grid gap={6} templateColumns='15% 85%'>
                    <GridItem>
                        <ChakraLink href='https://orbitntnu.com/'>
                            <Box bg='white' borderRadius={10} padding='1%' aspectRatio='1/1' display='flex' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                                <Center>
                                    <Image objectFit='contain' src={'https://orbitntnu.com/static/3198cf2e6c64ee08372b55a55dce686a/8507e/orbitimage.png'}></Image>
                                </Center>
                            </Box>
                        </ChakraLink>
                    </GridItem>
                    <GridItem>
                        <Container textAlign='left' margin={0}>
                            <Heading>Orbit NTNU</Heading>
                            <Text color='500'>Dev Ops Engineer, August 2023 - December 2023</Text>
                            <Text as='b'>Trondheim, Norway</Text>
                            <Text marginTop={5}>...</Text>
                        </Container>
                    </GridItem>
                </Grid>
                <Grid gap={6} templateColumns='15% 85%' w='100%'>
                    <GridItem>
                        <ChakraLink href='https://www.piercemfg.com/'>
                            <Box bg='white' borderRadius={10} padding='1%' aspectRatio='1/1' display='flex' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                                <Image objectFit='contain' src={'https://piercemfg.csod.com/client/piercemfg/clp/01/images/2cTagWh.jpg'}></Image>
                            </Box>
                        </ChakraLink>
                    </GridItem>
                    <GridItem>
                        <Container textAlign='left' margin={0}>
                            <Heading>Pierce Manufacturing</Heading>
                            <Text color='500'>Software Engineering Intern, May 2023 - August 2023</Text>
                            <Text as='b'>Oshkosh, WI USA</Text>
                            <Text marginTop={5}>...</Text>
                        </Container>
                    </GridItem>
                </Grid>
                <Grid gap={6} templateColumns='15% 85%' w='100%'>
                    <GridItem>
                        <ChakraLink href='https://www.ssec.wisc.edu/'>
                            <Box bg='white' borderRadius={10} padding='1%' aspectRatio='1/1' display='flex' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                                <Image objectFit='contain' src={'https://avatars.githubusercontent.com/u/698510?s=280&v=4'}></Image>
                            </Box>
                        </ChakraLink>
                    </GridItem>
                    <GridItem>
                        <Container textAlign='left' margin={0}>
                            <Heading>SSEC</Heading>
                            <Text color='500'>Student Programmer, May 2022 - May 2023</Text>
                            <Text as='b'>Madison, WI USA</Text>
                            <Text marginTop={5}>...</Text>
                        </Container>
                    </GridItem>
                </Grid>
                <Grid gap={6} templateColumns='15% 85%'>
                    <GridItem>
                        <ChakraLink href='https://badgersolarracing.org/'>
                            <Box bg='white' borderRadius={10} padding='1%' aspectRatio='1/1' display='flex' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                                <Image objectFit='contain' src={'https://badgersolarracing.org/images/logo.png'}></Image>
                            </Box>
                        </ChakraLink>
                    </GridItem>
                    <GridItem>
                        <Container textAlign='left' margin={0}>
                            <Heading>Badger Solar Racing UW</Heading>
                            <Text color='500'>Low Voltage Team Member, September 2021 - September 2022</Text>
                            <Text as='b'>Madison, WI USA</Text>
                            <Text marginTop={5}>...</Text>
                        </Container>
                    </GridItem>
                </Grid>
            </VStack>
            </Container>
        </Container>
    )
}

export default Experience;