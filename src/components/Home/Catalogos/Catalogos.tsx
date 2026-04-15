import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { catalogoData } from './util/util';
import { getGradient } from '../../../util/gradients';
import { textGradient } from '../../../styles/StylesComun.style';
import { useNavigate } from 'react-router-dom';

export const Catalogo: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box component="section" sx={{ py: 10, textAlign: 'center', bgcolor: '#FFF5F5' }}>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, color: '#text.primary' }}>
                    CATÁLOGOS DA <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 500 }}>LI BEAUTY</Box>
                </Typography>
                <Typography  sx={{ color: '#353535', mb: 5, fontSize: 16.5  }}>
                    Procedimentos especializados para destacar sua beleza natural.
                </Typography>

                <Box sx={{ mb: 8 }}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={25}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.1 },
                        }}
                        style={{ padding: '30px' }}
                    >
                        {catalogoData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        height: '350px',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        backgroundImage: `url(${item.imagem})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        boxShadow: "6px 5px 15px #08080856",
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        cursor: "pointer",
                                        pb: 4,
                                        transition: '0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)'
                                        }
                                    }}
                                >
                                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 600, zIndex: 2, textShadow: '2px 4px 15px rgba(0, 0, 0, 0.45)' }}>
                                        {item.titulo}
                                    </Typography>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Button variant="contained" sx={{ background: getGradient('main'), borderRadius: '50px', px: 8, py: 1.2, fontSize: '1.05rem', textTransform: 'none', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.42)', }}>
                    Agendamento online
                </Button>
            </Container>
        </Box>
    );
};