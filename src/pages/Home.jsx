import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'
import axios from 'axios'
import '../styles/Home.css'
import CardBlock from '../components/CardBlock'

const Home = () => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const apiKey = 'd34aefaaef028e956abef86210016319'

    const [tranding, setTranding] = useState([]);
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [documentary, setDocumentary] = useState([]);
    const [scienceFiction, setScienceFiction] = useState([]);
    const [thriller, setThriller] = useState([]);

    const [loading, setLoading] = useState(true);
    // const [data, setData] = useState(true)

    useEffect(() => {
        const fetchingData = async () => {
            try {

                const trendingResponse = await axios.get(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
                const actionResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`);
                const adventureResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=12`);
                const animationResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=16`);
                const comedyResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`);
                const documentaryResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`);
                const scienceFictionResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=878`);
                const thrillerResponse = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=53`);

                setTranding(trendingResponse.data);
                setAction(actionResponse.data);
                setAdventure(adventureResponse.data);
                setAnimation(animationResponse.data);
                setComedy(comedyResponse.data);
                setDocumentary(documentaryResponse.data);
                setScienceFiction(scienceFictionResponse.data);
                setThriller(thrillerResponse.data);

                console.log(trendingResponse.data);
                // console.log(actionResponse.data);
                // console.log(adventureResponse.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        }
        fetchingData();
    }, [])

    return (<>
        <VStack top={['8rem', '4rem']}
            pos={'relative'}
        // minH={'220px'}
        >
            {
                loading ? (
                    <p>Loading</p>
                ) : (
                    <>

                        <CardBlock responseData={tranding} category={'Trending'} />
                        <CardBlock responseData={action} category={'Action'} />
                        <CardBlock responseData={adventure} category={'Adventure'} />
                        <CardBlock responseData={animation} category={'Animation'} />
                        <CardBlock responseData={comedy} category={'Comedy'} />
                        <CardBlock responseData={documentary} category={'Documentary'} />
                        <CardBlock responseData={scienceFiction} category={'Science-Fiction'} />
                        <CardBlock responseData={thriller} category={'Thriller'} />

                    </>
                )
            }
        </VStack>
    </>
    )
}

export default Home