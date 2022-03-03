import Head from 'next/head'
import {Box} from '@chakra-ui/react'
// import { children } from 'react/cjs/react.production.min'
import Navbar from './Navbar.jsx'

const Layout = ({children}) => (
    <>
        <Box maxWidth="full" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Box>
    </>
)

export default Layout;