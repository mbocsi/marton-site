import './navbar.css';
import { Button, Icon, Box, useClipboard } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
    const { onCopy } = useClipboard("mvbocsi@gmail.com");
    return (
        <div className='navbar'>
            <Link className='navitem' to='/'>
                <Box borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>Home</Box>
            </Link>
            <Link className='navitem' to='/hobbies'>
                <Box borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>Hobbies</Box>
            </Link>
            <Link className='navitem' to='/experience'>
                <Box borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>Experience</Box>
            </Link>
            <Link className='navitem' to='/projects'>
                <Box borderRadius={0} bg={false} color='white' as={motion.div} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}>Projects</Box>
            </Link>
            
            <Button className='socialitem' colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Link to='https://www.facebook.com/marton.bocsi'>
                    <Icon boxSize={8} as={FaFacebook}></Icon>
                </Link>
            </Button>
            <Button colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Link to='https://www.instagram.com/martonbocsi/'>
                    <Icon boxSize={8} as={FaInstagram}></Icon>
                </Link>
            </Button>
            <Button onClick={onCopy} colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Icon boxSize={8} as={EmailIcon}></Icon>
            </Button>
            <Button colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Link to='https://github.com/mbocsi'>
                    <Icon boxSize={8} as={FaGithub}></Icon>
                </Link>
            </Button>
        </div>
    )
}

export default Navbar