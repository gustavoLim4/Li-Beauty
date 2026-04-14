import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Container, Menu, MenuItem, IconButton, useMediaQuery, useTheme as useMuiTheme, } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { getGradient } from '../../util/gradients';
import Logo from "../../img/Logo.png"
import { navItems } from './util/util';


export const Navbar = () => {
    const theme = useMuiTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpenServices = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
    const handleCloseServices = () => { setAnchorEl(null); };

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #f0f0f0', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', top: 0, zIndex: 1100, }} >
            <Container maxWidth={false} sx={{ maxWidth: '1300px', px: { xs: 3, md: 5 } }}>
                <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important', height: '90px' }}>
                    <RouterLink to="/">
                        <Box
                            component="img"
                            src={Logo}
                            alt="Li Beauty Logo"
                            sx={{ height: 60, width: 'auto', display: 'block' }}
                        />
                    </RouterLink>

                    {isMobile ? (
                        <IconButton color="primary">
                            <MenuIcon fontSize='large' />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Box key={item.label}>
                                        <Button
                                            component={item.hasDropdown ? 'button' : RouterLink}
                                            to={item.hasDropdown ? undefined : item.path}
                                            onClick={item.hasDropdown ? handleOpenServices : undefined}
                                            endIcon={item.hasDropdown ? <KeyboardArrowDownIcon /> : null}
                                            sx={{
                                                color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                                                textTransform: 'none',
                                                fontSize: '.9rem',
                                                fontWeight: isActive ? 700 : 500,
                                                padding: '6px 14px',
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                    color: theme.palette.primary.main
                                                },
                                                borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                                                borderRadius: 0,
                                            }}
                                        >
                                            {item.label}
                                        </Button>

                                        {item.hasDropdown && (
                                            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseServices} elevation={2}>
                                                <MenuItem onClick={handleCloseServices} component={RouterLink} to="/servicos/cilios">Cílios</MenuItem>
                                                <MenuItem onClick={handleCloseServices} component={RouterLink} to="/servicos/sobracelhas">Sobracelhas</MenuItem>
                                                <MenuItem onClick={handleCloseServices} component={RouterLink} to="/servicos/micropigmentacao">Micropigmentação</MenuItem>
                                                <MenuItem onClick={handleCloseServices} component={RouterLink} to="/servicos/maquiagem">Maquiagem</MenuItem>
                                            </Menu>
                                        )}
                                    </Box>
                                );
                            })}

                            <Button
                                variant="contained"
                                sx={{
                                    background: getGradient('main'),
                                    color: '#ffffff',
                                    borderRadius: '50px',
                                    px: 2,
                                    py: 1,
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    transition: '0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.01)'
                                    }
                                }}
                            >
                                Agendamento online
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
