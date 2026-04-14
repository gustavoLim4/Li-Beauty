import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { features } from './util/util';

export const Features: React.FC = () => {
    return (
        <Box component="section">
            <Container sx={{width: 1100}}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'stretch', }}>
                    {features.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                flex: 1,
                                borderRadius: '16px',
                                overflow: 'hidden',
                                textAlign: 'center',
                                background: "#ffffffe1",
                                boxShadow: "0 0 10px #0000007a",
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}  >
                                <Box
                                    component="img"
                                    src={item.icon}
                                    alt={item.title}
                                    sx={{ height: 60, width: 200, objectFit: 'contain', mt: 2 }}
                                />
                            </Box>

                            <Box sx={{ px: 3, backgroundColor: '#fff', flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ color: '#E88D8C', fontWeight: 700, mb: 1, fontSize: '1.25rem', }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, fontSize: '1rem', mb: 3 }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};