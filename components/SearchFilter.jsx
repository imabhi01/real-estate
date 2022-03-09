import {Flex, Select ,Box, Text, Button, Icon, Spinner, Input} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {mdCancel} from 'react-icons/md'
import Image from 'next/image'
import { filterProps } from 'framer-motion'
import { filterData, getFilterValues} from '../utils/filterData'
import { baseUrl, fetchApi } from '../utils/fetchApi'

export default function SearchFilters(){
    const [filters, setfilters] = useState(filterData);
    const router = useRouter();
    const searchProperties = (filterValues) => {
        const path = router.pathName;
        const { query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]){
                query[item.name] = item.value
            }
        })
        router.push({ pathname: path, query: query });
    }

    return (
        <Flex bg="gray.100" justifyContent="center" flexWrap="wrap">
            {filters?.map((filterItem) => (
                <Box p="4" key={filterItem.queryName}>
                    <Select 
                        bg="white.200"
                        placeholder={filterItem.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={ (e) => searchProperties({[filterItem.queryName]: e.target.value})}
                    >
                        {filterItem?.items?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )

}