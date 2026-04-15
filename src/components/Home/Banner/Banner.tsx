import { Box, Typography, Container, Button, Avatar, Fab } from '@mui/material';
import videoFundo from "../../../img/Video-LiBeaty.mp4";
import FotoBanner from "../../../img/banner-foto.png";
import { getGradient } from '../../../util/gradients';
import { textGradient } from '../../../styles/StylesComun.style';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Banner: React.FC = () => {
    return (
        <Box component="section" sx={{ position: 'relative', height: { xs: "auto", md: "700px" }, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            >
                <source src={videoFundo} type="video/mp4" />
            </video>

            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(120, 55, 62, 0.84)", zIndex: 1 }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 10, mt: -7 }}>

                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, ml: 4 }}>
                        <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5.4rem' }, fontWeight: 500, letterSpacing: '6px', mb: 1, textShadow: '2px 5px 10px rgba(255, 255, 255, 0.42)', background: getGradient("texto-banner"), ...textGradient, }}>
                            LI BEAUTY
                        </Typography>

                        <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, color: '#fff', fontWeight: 600, mb: 4, lineHeight: 1.6, maxWidth: '550px', mx: { xs: 'auto', md: 0 } }}>
                            Realçando sua beleza natural com técnica, cuidado e um olhar profissional para cada detalhe.
                        </Typography>

                        <Button variant="contained"
                            sx={{
                                background: getGradient('main'),
                                borderRadius: '50px',
                                px: 12,
                                py: 1.3,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.42)',
                            }}
                        >
                            Agendamento online
                        </Button>
                    </Box>

                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        position: 'relative'
                    }}>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Avatar
                                src={FotoBanner}
                                alt="Profissional Li Beauty"
                                sx={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </Box>

                </Box>
            </Container>
            <Fab
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1300,
                    background: getGradient('texto-banner'),
                    color: '#fff',
                }}
            >
                <WhatsAppIcon fontSize='large' />
            </Fab>
        </Box>
    );
};