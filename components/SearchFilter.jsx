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
    console.log(filters);
    return (
        <Flex bg="gray.100" justifyContent="center" alignItems="center">
            {filters.map((filterItem) => (
                <Box p="4" key={filterItem.queryName}>
                    <Select bg="white.200">
                        <option value="">{filterItem.placeholder}</option>
                    </Select>
                </Box>
            ))}
        </Flex>
    )

}