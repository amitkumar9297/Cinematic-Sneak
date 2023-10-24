
import { Box, Img, VStack } from '@chakra-ui/react';
import '../styles/Card.css'

const Card = (props) => {
    const { image } = props
    // console.log(image);
    return (
        <>
            <Box id='card' h={'100%'} minW={'18%'} p={'10px'} borderRadius={'10px'}>
                <Img src={`https://image.tmdb.org/t/p/original/${image}`} minW={'98%'} minH={'98%'} borderRadius={'10px'} />
            </Box>
        </>
    )
}

export default Card