import './navbar.css';
import { Icon, Box, useClipboard, Link as ChakraLink, HStack, Text, Container, useToast } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
    const { onCopy } = useClipboard("mvbocsi@gmail.com");
    const toast = useToast();

    return (
        <Container className='navbar' bg='200' color='800' maxWidth='100%' boxShadow='lg'>
            <HStack spacing='24px'>
                {/*
                <Container className='navitem' to='/'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Home</Text>
                    </Box>
                </Container>
                <Container className='navitem' to='/hobbies'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Hobbies</Text>
                    </Box>
                </Container>
    */}
                <Container className='navitem'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Experience</Text>
                    </Box>
                </Container>
                <Container className='navitem'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>About me</Text>
                    </Box>
                </Container>
                <Container className='navitem'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Contact me</Text>
                    </Box>
                </Container>
            </HStack>
            <HStack className='socials' spacing='24px'>
                <Box 
                    onClick={() => {
                        onCopy(); 
                        toast({
                            title: 'Email copied to clipboard!',
                            description: "",
                            status: 'success',
                            duration: 5000,
                            isClosable: false
                        })
                    }} 
                        colorScheme='instagram' 
                        as={motion.div} 
                        whileHover={{ scale: 1.2}} 
                        whileTap={{ scale: 1.1 }}>
                    <Icon boxSize={8} as={EmailIcon}></Icon>
                </Box>
                <ChakraLink href='https://www.linkedin.com/in/marton-bocsi/'>
                    <Box className='social-link' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                        <Icon boxSize={8} as={FaLinkedin}></Icon>
                    </Box>
                </ChakraLink>
                <ChakraLink href='https://www.instagram.com/martonbocsi/'>
                    <Box className='social-link' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                        <Icon boxSize={8} as={FaInstagram}></Icon>
                    </Box>
                </ChakraLink>
                <ChakraLink href='https://github.com/mbocsi'>
                    <Box className='social-link' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                        <Icon boxSize={8} as={FaGithub}></Icon>
                    </Box>
                </ChakraLink>
            </HStack>
        </Container>
    )
}

export default Navbar