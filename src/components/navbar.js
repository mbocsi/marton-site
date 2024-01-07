import './navbar.css';
import { Button, Icon, Box, useClipboard, Link as ChakraLink, HStack, Text } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
    const { onCopy } = useClipboard("mvbocsi@gmail.com");
    return (
        <div className='navbar'>
            <Link className='navitem' to='/'>
                <Box className='navbox' borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                    <Text>Home</Text>
                </Box>
            </Link>
            <Link className='navitem' to='/hobbies'>
                <Box className='navbox' borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                    <Text>Hobbies</Text>
                </Box>
            </Link>
            <Link className='navitem' to='/experience'>
                <Box className='navbox' borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                    <Text>Experience</Text>
                </Box>
            </Link>
            <Link className='navitem' to='/projects'>
                <Box className='navbox' borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>
                    <Text>Projects</Text>
                </Box>
            </Link>
            <HStack className='socials' spacing='24px'>
                <Box onClick={onCopy} colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                    <Icon boxSize={8} as={EmailIcon}></Icon>
                </Box>
                <ChakraLink href='https://www.facebook.com/marton.bocsi'>
                    <Box className='social-link' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                        <Icon boxSize={8} as={FaFacebook}></Icon>
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
        </div>
    )
}

export default Navbar