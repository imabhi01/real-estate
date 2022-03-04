import {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import {BsFilter} from 'react-icons/bs'
import SearchFilter from '../components/SearchFilter'
import Property from '../components/Property'
import { route } from 'next/dist/server/router'
import noResult from '../assets/images/noresult.png'
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Search = ({properties}) => {

    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex 
                cursor="pointer" 
                p="4" 
                justifyContent="center" 
                alignItems="center" 
                border="1px" 
                borderColor="gray.200" 
                bg="gray.100" 
                fontSize="lg" 
                fontWeight="bold" 
                textTransform="uppercase"
                onClick={ () => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>
                    Search Property by Filter
                </Text>
                <Icon paddingLeft="2" w="10" as={BsFilter} />
            </Flex>
            { searchFilters && <SearchFilter /> }
            <Text fontSize="2xl" fontWeight="gray.100">
                Properties {router.query.purpose}
            </Text>
            
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>

            {properties.length === 0  && 
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image src={noResult} alt="no result" />
                    <Text fontSize="3xl" marginTop="3">No Result Found</Text>
                </Flex>
            }
        </Box>
    );
};

export default Search;


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
      props: {
        properties: data?.hits,
      },
    };
}
  