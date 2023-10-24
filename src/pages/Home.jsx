import React, { useEffect, useState } from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import axios from 'axios'
import Card from '../components/Card'
import '../styles/Home.css'

const Home = () => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const apiKey = 'd34aefaaef028e956abef86210016319'

    const [tranding, setTranding] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/day?api_key=${apiKey}`).then((trending) => {
            setTranding(trending.data);
        });
        console.log(tranding.results)
        // console.log(tranding);
    }, [])



    return (
        <VStack top={['8rem', '6rem']}
            pos={'relative'}
            minH={'100px'}
        >
            <HStack className='scroll'
                w={'95%'}
                h={'20%'}
                css={{
                    overflowX: 'scroll',
                    scrollbarWidth: 'none'
                }}
            >
                {
                    tranding.results.map((i) => (<Card
                        image={i.poster_path}
                        key={i.id}
                    />))
                }
            </HStack>

        </VStack>
    )
}

export default Home