import './navbar.css';
import { Icon, Box, useClipboard, Link as ChakraLink, HStack, Text, Container } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
    const { onCopy } = useClipboard("mvbocsi@gmail.com");
    return (
        <Container className='navbar' bg='200' color='800' maxWidth='100%' boxShadow='lg'>
            <HStack spacing='24px'>
                <Link className='navitem' to='/'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Home</Text>
                    </Box>
                </Link>
                <Link className='navitem' to='/hobbies'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Hobbies</Text>
                    </Box>
                </Link>
                <Link className='navitem' to='/experience'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Experience</Text>
                    </Box>
                </Link>
                <Link className='navitem' to='/projects'>
                    <Box className='navbox' borderRadius={0} bg={false} as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                        <Text>Projects</Text>
                    </Box>
                </Link>
            </HStack>
            <HStack className='socials' spacing='24px'>
                <Box onClick={onCopy} colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
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