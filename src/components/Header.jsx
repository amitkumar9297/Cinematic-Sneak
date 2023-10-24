import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import React, { useEffect, useState, memo } from 'react'
import '../styles/Header.css'
import { Input } from '@chakra-ui/input'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { IconButton } from '@chakra-ui/button'

const Header = (props) => {

    const screenWidth = props;
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
                            <Text className='gradient-text' fontSize={'2xl'} m={['2', '4']}>Cinematic Sneak</Text>
                        ) : (

                            <HStack justifyContent={'space-between'} w={'90%'}>
                                <Text className='gradient-text' fontSize={'2xl'} m={['2', '4']}>Cinematic Sneak</Text>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<HiOutlineMenuAlt3 />} />
                                    <MenuList>
                                        <MenuItem>About Us</MenuItem>
                                        <MenuItem>Help</MenuItem>
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
                                <Text>Home</Text>
                                <Text>Help</Text>
                                <Text>About</Text>

                            </HStack>

                        ) : (
                            <></>
                        )}
            </Box >
        </>
    )
}

export default memo(Header);