
import { Box, Button, HStack, Img, Stack, Text } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs'
import '../styles/Card.css'

const Card = (props) => {
    const { image, rating, title, original_title } = props;

    // console.log(image);
    return (
        <>
            <Box
                id='card'
                minH={'100%'}
                minW={['40%', '20%']}
                p={'10px'}
                borderRadius={'10px'}
                pos={'relative'}
            >
                <Img
                    id='poster_img'
                    src={`https://image.tmdb.org/t/p/w500/${image}`}
                    minW={'98%'}
                    minH={'75%'}
                    maxH={'75%'}
                    borderRadius={'10px'}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'10px'}>
                    <Text fontSize={'0.7rem'}>{`⭐ ${rating}`}</Text>
                    <Text
                        className='two-line-clamp'
                        h={'3rem'}
                        fontSize={'.9rem'}
                    >
                        {title ? (`${title}`) : (`${original_title}`)}
                    </Text>
                    <Stack>
                        <Button colorScheme='whatsapp'>
                            <HStack>
                                <BsFillPlayFill color='white' />
                                <Text>Trailer</Text>
                            </HStack>
                        </Button>
                    </Stack>
                </Box>
            </Box >
        </>
    )
}

export default Card