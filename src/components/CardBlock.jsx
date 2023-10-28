import React from 'react'
import { HStack, Text } from '@chakra-ui/react'
import Card from './Card';

const CardBlock = (props) => {
    const { responseData, category } = props;
    // console.log("propp------>>>>>", responseData)
    return (
        <>
            <Text
                colorScheme={'blackAlpha.600'}
                fontWeight={'bold'}
                fontSize={'1.5rem'}
                m={'8'}
                width={'90%'}
            >{category}</Text>
            <HStack className='scroll'
                w={'95%'}
                h={'30%'}
                css={{
                    overflowX: 'scroll',
                    scrollbarWidth: 'none'
                }}
            >
                {
                    responseData.results.map((i) => (<Card
                        image={i.poster_path}
                        rating={i.vote_average}
                        title={i.title}
                        original_title={i.original_title}
                        key={i.id}
                    />))
                }
            </HStack>
        </>
    )
}

export default CardBlock