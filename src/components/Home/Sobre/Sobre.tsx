import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import fundoSobre from '../../../img/fundo-sobre.png';
import logoCliente from '../../../img/Logo-Cliente.png';
import { getGradient } from '../../../util/gradients';
import { textGradient } from '../../../styles/StylesComun.style';

export const Sobre: React.FC = () => {
    return (
        <Box component="section" sx={{ width: '100%', backgroundImage: `url(${fundoSobre})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100% 100%', py: { xs: 5, md: 6 }, position: 'relative', overflow: 'hidden', marginTop: { xs: '-50px', md: '-125px' }, }}>
            <style>
                {`
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); } 
            }

            .float-animation {
                animation: float 3s ease-in-out infinite;
            }
            `}
            </style>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 1, mt: 12, ml: 7 }}>
                    <Box sx={{ flex: 1, }}>
                        <Typography variant="h3" sx={{ fontWeight: 500, mb: 3, color: 'text.primary' }}>
                            SOBRE A <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 500 }}>LI BEAUTY</Box>
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#353535', mb: 4, lineHeight: 1.8, textAlign: "justify" }}>
                            Na Li Beauty, cada atendimento é pensado para valorizar sua beleza e elevar sua autoestima. Aqui você encontra um espaço acolhedor, atendimento personalizado e procedimentos realizados com técnica, segurança e atenção aos detalhes. Especializado em extensão de cílios, design de sobrancelhas, micropigmentação e maquiagem, o studio oferece uma experiência única para mulheres que desejam se sentir ainda mais confiantes e bonitas. Mais do que estética, nosso propósito é proporcionar bem - estar, confiança e autoestima em cada atendimento. Agende seu horário e venha viver a experiência Li Beauty.
                        </Typography>

                        <Button variant="contained" sx={{ background: getGradient('texto-banner'), borderRadius: 16, px: 12, py: .9, textTransform: 'none', fontSize: 16 }}>
                            Ver mais
                        </Button>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={logoCliente}
                            alt="Li Beauty"
                            sx={{ width: '100%', animation: 'float 4.5s ease-in-out infinite' }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};