import './navbar.css';
import { Button, Text, Icon, Box } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
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
                <Icon boxSize={8} as={FaFacebook}></Icon>
            </Button>
            <Button colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Icon boxSize={8} as={FaInstagram}></Icon>
            </Button>
            <Button colorScheme='instagram' as={motion.div} whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1 }}>
                <Icon boxSize={8} as={EmailIcon}></Icon>
            </Button>
        </div>
    )
}

export default Navbar