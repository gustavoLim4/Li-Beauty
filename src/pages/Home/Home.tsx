import { Box } from '@mui/material'
import { Features } from '../../components/Home/Features/Features'
import { Banner } from '../../components/Home/Banner/Banner'
import { Sobre } from '../../components/Home/Sobre/Sobre'
import { Catalogo } from '../../components/Home/Catalogos/Catalogos'
import { LocalEstabelecimento } from '../../components/Home/LocalEstabelecimento/LocalEstabelecimento'
import { EntreContato } from '../../components/Home/EntreContato/EntreContato'


export const Home = () => {
    return (
        <Box>
            <Banner />
            <Box sx={{
                marginTop: { xs: '-50px', md: '-90px' },
                position: 'relative',
                zIndex: 1000
            }}>
                <Features />
                <Sobre />
                <Catalogo />
                <LocalEstabelecimento />
                <EntreContato />
            </Box>
        </Box>
    )
}
