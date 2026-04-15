import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import fundoContato from "../../../img/Funco-entreContao.png";
import { getGradient } from "../../../util/gradients";

export const EntreContato: React.FC = () => {
    return (
        <Box sx={{ width: "100%", height: { xs: "350px", md: "450px" }, position: "relative", backgroundImage: `url(${fundoContato})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", }}>

            <Container sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between",}}>
                    <Box sx={{ maxWidth: "600px" }}>
                        <Typography sx={{ fontSize: "24px", letterSpacing: "2px", color: "background.default", }} >
                            REALCE SUA
                        </Typography>

                        <Typography sx={{ fontSize: { xs: "28px", md: "45px" }, fontWeight: 700, color: "#FFCBCA", mb: 1, }}>
                            BELEZA NATURAL
                        </Typography>

                        <Typography sx={{ color: "background.default", lineHeight: 1.6, fontSize: "17px", }}>
                            No Li Beauty, cada atendimento é pensado para valorizar sua beleza
                            e elevar sua autoestima, com técnica, cuidado e atenção aos
                            detalhes.
                        </Typography>
                    </Box>

                    <Button
                        sx={{
                            background: getGradient("texto-banner"),
                            color: "background.default",
                            fontSize: "16px",
                            borderRadius: "12px",
                            px: 8,
                            py: 1.4,
                            boxShadow: "0 0 10px #ffffff4d",
                            fontWeight: 700,
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "#E88D8C",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Entre em contato
                    </Button>
                </Box>
            </Container >
        </Box >
    );
};