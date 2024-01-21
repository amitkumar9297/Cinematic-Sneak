import { Box, HStack, VStack, Text } from '@chakra-ui/layout'
import React, { memo } from 'react'
import '../styles/Header.css'
import { Input } from '@chakra-ui/input'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { IconButton } from '@chakra-ui/button'
import { useNavigate } from 'react-router-dom'




const Header = (props) => {

    const navigate = useNavigate();
    // console.log(screenWidth)

    return (
        <>
            <Box
                h={{ base: 'auto', sm: 'auto', md: '4rem' }}
                bgColor={'blackAlpha.900'}
                display={'flex'}
                flexDirection={['column', 'row']}
                justifyContent={['space-evenly', 'space-between']}
                alignItems={'center'}
                borderBottomRadius={'25px'}
                w={'100%'}
                pos={'fixed'}
                zIndex={'overlay'}
            >
                <VStack w={'100%'}>
                    <HStack w={'100%'} justifyContent={'space-between'}>
                        <Text
                            className='gradient-text'
                            fontSize={'2xl'}
                            m={['2', '4']}
                            onClick={() => navigate('/')}
                            cursor={'pointer'}
                        >
                            Cinematic Sneak
                        </Text>
                        <Box display={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                            <SearchBox />
                        </Box>
                        <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
                            <HeaderTabs />
                        </Box>
                        <Box display={{ base: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}>
                            <HeaderMenuTab />
                        </Box>
                    </HStack>
                    <HStack w={'90%'} justifyContent={'center'} display={{ base: 'block', sm: 'block', md: 'none' }} mb={'1rem'}>
                        <SearchBox />
                    </HStack>
                </VStack>
            </Box >

        </>
    )
}

export default memo(Header);

const SearchBox = () => {
    return (
        <Input
            placeholder='Search any Movie 🍿'
            w={{ base: '100%', sm: '100%', md: '15rem', lg: '15rem', xl: '15rem' }}
            border={'1px solid gray'}
            focusBorderColor={'aqua'}
            borderRadius={'50px'}
            mb={['2', '0']}
        />
    )
}

const HeaderTabs = () => {
    const navigate = useNavigate();
    return (
        <HStack
            color={'whiteAlpha.800'}
            m={['2', '6']}
            justifyContent={'space-between'}
            w={'15%'}
            mr={'15px'}
        >

            <Text onClick={() => navigate('/')} cursor={'pointer'}>Home</Text>
            <Text onClick={() => navigate('/help')} cursor={'pointer'} >Help</Text>
            <Text onClick={() => navigate('/aboutus')} cursor={'pointer'}>About</Text>


        </HStack>
    )
}

const HeaderMenuTab = () => {
    const navigate = useNavigate();
    return (
        <Menu>
            <MenuButton as={IconButton} icon={<HiOutlineMenuAlt3 />} mr={'1rem'} />
            <MenuList>
                <MenuItem onClick={() => navigate('/aboutus')} cursor={'pointer'}>About Us</MenuItem>
                <MenuItem onClick={() => navigate('/help')} cursor={'pointer'}>Help</MenuItem>
                <MenuItem>Color Mode</MenuItem>

            </MenuList>
        </Menu>
    )
}