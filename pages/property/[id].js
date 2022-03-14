import {Box, Flex, Text, Spacer, Avatar} from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import millify from 'millify'
import DefaultImage from '../assets/images/home.jpg'
import {baseUrl, fetchApi} from '../../utils/fetchApi'

const propertyDetails = ({propertyDetails : {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, amenities, furnishingStatus, photos}}) => (
    <Box maxWidth='1000px' margin="auto" p="4">
        { photos && 
            <ImageScrollbar></ImageScrollbar>
        }
    </Box>
);

export async function getServerSideProps({params: {id}}){
    const {data} = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}

export default propertyDetails;