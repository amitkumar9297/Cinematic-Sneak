import { Box, HStack, Text } from '@chakra-ui/layout'
import React, { memo } from 'react'
import '../styles/Header.css'
import { Input } from '@chakra-ui/input'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { IconButton } from '@chakra-ui/button'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

    const screenWidth = props;
    const navigate = useNavigate();
    // console.log(screenWidth)

    return (
        <>
            <Box
                h={['8rem', '4rem']}
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
                {
                    `${screenWidth.screenWidth}` > 500 ?
                        (
                            <Text
                                className='gradient-text'
                                fontSize={'2xl'}
                                m={['2', '4']}
                                onClick={() => navigate('/')}
                                cursor={'pointer'}
                            >
                                Cinematic Sneak
                            </Text>
                        ) : (

                            <HStack justifyContent={'space-between'} minW={'95%'}>
                                <Text
                                    className='gradient-text'
                                    fontSize={'2xl'}
                                    m={['2', '4']}
                                    onClick={() => navigate('/')}
                                    cursor={'pointer'}
                                >
                                    Cinematic Sneak
                                </Text>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<HiOutlineMenuAlt3 />} />
                                    <MenuList>
                                        <MenuItem onClick={() => navigate('/aboutus')} cursor={'pointer'}>About Us</MenuItem>
                                        <MenuItem onClick={() => navigate('/help')} cursor={'pointer'}>Help</MenuItem>
                                        <MenuItem>Color Mode</MenuItem>

                                    </MenuList>
                                </Menu>
                            </HStack>

                        )
                }
                <Input
                    placeholder='Search any Movie 🍿'
                    w={['90%', '15rem']}
                    border={'1px solid gray'}
                    focusBorderColor={'aqua'}
                    borderRadius={'50px'}
                    mb={['2', '0']}
                />
                {
                    `${screenWidth.screenWidth}` > 500 ?
                        (

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

                        ) : (
                            <></>
                        )}
            </Box >
        </>
    )
}

export default memo(Header);