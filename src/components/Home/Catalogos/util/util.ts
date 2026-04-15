// Importando as imagens conforme sua estrutura de pastas
import imgCilios from '../../../../img/Img-Cilios.png';
import imgSobrancelhas from '../../../../img/Img-Sobrancelhas.png';
import imgMicropig from '../../../../img/Img-micropig.png';
import imgMake from '../../../../img/Img-make.png';

export interface CatalogoItem {
  titulo: string;
  imagem: string;
}

export const catalogoData = [
  { titulo: 'Cílios', imagem: imgCilios, path: '/servicos/cilios' },
  { titulo: 'Sobrancelhas', imagem: imgSobrancelhas, path: '/servicos/sobrancelhas' },
  { titulo: 'Micropigmentação', imagem: imgMicropig, path: '/servicos/micropigmentacao' },
  { titulo: 'Maquiagem', imagem: imgMake, path: '/servicos/maquiagem' },
];