import React from "react";
import { Box, Typography, Button } from "@mui/material";

import imgLocal from "../../../img/Img-local.png";
import IconLocal from "../../../img/iconlocal.png";
import { textGradient } from "../../../styles/StylesComun.style";
import { getGradient } from "../../../util/gradients";

export const LocalEstabelecimento: React.FC = () => {
  return (
    <Box sx={{ py: 2, width: "100%", backgroundColor: "background.default", overflow: "hidden", display: "flex", flexDirection: { xs: "column", md: "row" }, }}>
      <Box sx={{ width: { xs: "100%", md: "50%" }, pl: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center", }}>
        <Typography sx={{ fontSize: "38px", color: "text.primary", mb: 4, fontWeight: 500 }}>
          ESTABELECIMENTO{" "}
          <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 500 }}>
            LI BEAUTY
          </Box>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
          <Box
            component="img"
            src={IconLocal}
            alt="Icon Estabelecimento"
            sx={{ width: 50, mr: 2 }}
          />
          <Typography sx={{ fontSize: "30px", color: "text.primary" }}>
            Av. Cel. Sezefredo Fagundes, 2788 - Sl 03 - Jardim Tremembe, São Paulo
          </Typography>
        </Box>

        <Button sx={{ width: "fit-content", background: getGradient('texto-banner'), color: "#fff", borderRadius: "25px", px: 10, py: 1, boxShadow: "0 3px 10px #00000038", fontSize: 19 }}>
          Ver estabelecimento
        </Button>
      </Box>

      <Box sx={{ width: { xs: "100%", md: "50%" }, height: { xs: "250px", md: "auto" }, }}>
        <Box
          component="img"
          src={imgLocal}
          alt="Estabelecimento"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};