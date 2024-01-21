
import { Box, Button, HStack, Img, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import YouTube from 'react-youtube';

import { BsFillPlayFill } from 'react-icons/bs'
import '../styles/Card.css'

import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const Card = (props) => {
    const { image, rating, title, original_title, id, release } = props;

    const [loading, setLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [videoLink, setVideoLink] = useState('');
    const [movieData, setMovieData] = useState({});
    const [movieCast, setMovieCast] = useState({});
    const customStyles = {
        maxW: "93%", // Adjust the maximum width as needed
        maxH: "93%",
        margin: 'auto',
        borderRadius: '16px',
        background: 'rgba(0, 0, 0, 0.75)'
    };

    const baseUrl = 'https://api.themoviedb.org/3/movie/';
    const apikey = 'd34aefaaef028e956abef86210016319';

    const movieDetails = async (id) => {
        try {
            setLoading(true);
            const details = await axios.get(`${baseUrl}${id}?api_key=${apikey}`)
            const creadits = await axios.get(`${baseUrl}${id}/credits?api_key=${apikey}`)
            // console.log(details.data);
            setMovieData(details.data)
            setMovieCast(creadits.data.cast);
            // console.log(movieData)
            console.log(creadits.data.cast)
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }


    const fetchvideo = async (id) => {
        try {
            const data = await axios.get(`${baseUrl}${id}/videos?api_key=${apikey}`);
            setVideoLink(data.data.results[0].key);
            // console.log(data.data.results[0].key);

        } catch (err) {
            console.log(err);
        }
    }

    // fetchvideo();


    // console.log(image);
    return (
        <>
            <Box
                id='card'
                minH={'100%'}
                minW={['40%', '20%']}
                p={'10px'}
                // m={'auto'}
                borderRadius={'10px'}
                pos={'relative'}
                mr={'1rem'}
                style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
                }}
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
                    <HStack justifyContent={'space-between'}>
                        <Text fontSize={'0.7rem'} fontWeight={400}>{`⭐ ${rating}`}</Text>
                        <Text fontSize={'0.7rem'} fontWeight={400}>{`📅  ${release}`}</Text>
                    </HStack>
                    <Text
                        className='two-line-clamp'
                        h={'3rem'}
                        fontSize={'.9rem'}
                        fontWeight={600}
                    >
                        {title ? (`${title}`) : (`${original_title}`)}
                    </Text>
                    <Stack>
                        <Button onClick={() => { onOpen(); fetchvideo(id); movieDetails(id); }} colorScheme='whatsapp'>
                            <HStack>
                                <BsFillPlayFill color='white' />
                                <Text>Trailer</Text>
                            </HStack>
                        </Button>
                        {
                            loading ? (<>
                                <Text>Loading</Text>
                            </>) : (
                                <Modal size={{ base: 'sm', sm: 'lg', md: '2xl', lg: '6xl', xl: '6xl' }} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent style={customStyles}>
                                        <Trailer urll={videoLink} detail={movieData} cast={movieCast} />
                                    </ModalContent>
                                </Modal>
                            )
                        }
                    </Stack>
                </Box>
            </Box >
        </>
    )
}

export default Card

export const MovieInfo = () => {
    return (
        <Stack>
            <h1>hello</h1>
        </Stack>
    )
}

export const Trailer = ({ urll, detail, cast }) => {
    // const [loading, setLoading] = useState(false);
    return (
        <Stack h={'100%'} w={'100%'} bg={'transparent'} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'space-between' }} alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-start' }} p={'1rem'} color={'white'}>
            <VideoPlayer videoId={urll} />
            <VStack w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%' }}>
                <VStack w={'100%'}>
                    <Text fontSize={'2rem'} fontWeight={700}>{detail.title}</Text>
                </VStack>
                <Text fontSize={'1rem'} fontWeight={400}><span style={{ fontSize: '1.3rem' }}>Overview</span> :- {detail.overview}</Text>
                <HStack w={'100%'}>
                    <Text fontSize={'1.3rem'}>Categories:-</Text>
                    {
                        detail.genres.map((i) => (<Text key={i.id}>{`${i.name},  `}</Text>))
                    }
                </HStack>
                <HStack w={'100%'}>
                    <Text><span style={{ fontSize: '1.3rem' }}>Rating:</span> {detail.vote_average}⭐</Text>
                    <Text fontWeight={400} ml={'10%'}>{`📅  ${detail.release_date}`}</Text>
                </HStack>
                <HStack w={'100%'}>
                    <Text>Budget: {detail.budget}</Text>
                    <Text ml={'5%'}>Revenue: {detail.revenue}</Text>
                </HStack>
                <HStack
                    className='scroll'
                    w={'95%'}
                    // h={'80%'}
                    css={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none'
                    }}
                >
                    {
                        cast.map((i) => (
                            <CastCard pic={i.profile_path} ori_name={i.original_name} character={i.character} key={i.id} />
                        ))
                    }
                </HStack>
            </VStack>
        </Stack>
    )
}

const CastCard = ({ pic, ori_name, character }) => {
    return (
        <VStack minH={'19rem'} minW={'9rem'} bg={'rgba(0, 0, 0, 0.10)'}>
            <Img src={`https://image.tmdb.org/t/p/w200/${pic}`} minH={'70%'} minW={'90%'} />
            <Text fontWeight={'500'} fontSize={'0.8rem'} wrap={'wrap'}>{ori_name}</Text>
            <HStack w={'90%'} wrap={'wrap'}>
                <Text fontSize={'0.8rem'} fontWeight={'400'}>Character:- </Text>
                <Text fontWeight={300} fontSize={'0.7rem'}>{character}</Text>
            </HStack>
        </VStack>
    )
}


export const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: '450px',
        width: '400px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 1,
            showinfo: 1,
            loop: 1,
            rel: 0,
            mute: 0,
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    return (
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    );
};