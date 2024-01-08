import { Text, Heading, Container, VStack, StackDivider, HStack, Box, Image } from '@chakra-ui/react';
import './experience.css';

function Experience() {
    return (
        <Container className='Experience-page' maxW='100%' bg='50'>
            <Heading padding='5%'>Experience</Heading>
            <VStack spacing={4} divider={<StackDivider borderColor='500' />}>
                <HStack spacing={6}>
                    <Box w='30%'>
                        <Image src={'https://orbitntnu.com/static/3198cf2e6c64ee08372b55a55dce686a/8507e/orbitimage.png'}></Image>
                    </Box>
                    <Box bg='500' borderRadius={10} padding='1%'>
                        <Heading>Orbit NTNU - Devops Engineer</Heading>
                        <Text>August 2023 - December 2023</Text>
                    </Box>
                </HStack>
                <HStack spacing={6}>
                    <Box bg='500' borderRadius={10} padding='1%' marginLeft='auto'>
                        <Heading>Pierce Manufacturing - Software Engineer</Heading>
                        <Text>May 2023 - August 2023</Text>
                    </Box>
                    <Box w='30%' bg='white' borderRadius={10} padding='1%'>
                        <Image src={'https://piercemfg.csod.com/client/piercemfg/clp/01/images/2cTagWh.jpg'}></Image>
                    </Box>
                </HStack>
                <HStack spacing={6}>
                    <Box w='30%'>
                        <Image src={'https://avatars.githubusercontent.com/u/698510?s=280&v=4'}></Image>
                    </Box>
                    <Box bg='500' borderRadius={10} padding='1%'>
                        <Heading>SSEC - Student Programmer</Heading>
                        <Text>May 2022 - May 2023</Text>
                    </Box>
                </HStack>
                <HStack spacing={6}>
                    <Box bg='500' borderRadius={10} padding='1%' marginLeft='auto'>
                        <Heading>Badgerloop - Low Voltage Team</Heading>
                        <Text>September 2021 - September 2022</Text>
                    </Box>
                    <Box w='30%'>
                        <Image src={'https://badgersolarracing.org/images/logo.png'}></Image>
                    </Box>
                </HStack>
            </VStack>
        </Container>
    )
}

export default Experience;