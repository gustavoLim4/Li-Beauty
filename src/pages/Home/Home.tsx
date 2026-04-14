import { Box } from '@mui/material'
import { Banner } from '../../components/Banner/Banner'
import { Features } from '../../components/Features/Features'

export const Home = () => {
    return (
        <Box>
            <Banner />
            <Box sx={{
                marginTop: { xs: '-50px', md: '-90px' },
                position: 'relative',
                zIndex: 10
            }}>
                <Features />
            </Box>
        </Box>
    )
}
