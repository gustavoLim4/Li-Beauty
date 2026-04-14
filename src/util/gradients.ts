const COLOR_PRINCIPAL = '#E88D8C';
const COLOR_SECUNDARIA = '#702626';
const COLOR_SECUNDARIA_CLARA = '#FFCBCA';

export const getGradient = (
  type: 'main' | 'dark' | 'texto-banner' | 'transparent-mid' | 'transparent-sharp' = 'main'
) => {
  switch (type) {
    case 'main':
      return `linear-gradient(90deg, ${COLOR_PRINCIPAL} 0%, ${COLOR_SECUNDARIA} 100%)`;

    case 'dark':
      return `linear-gradient(90deg, ${COLOR_SECUNDARIA} 0%, ${COLOR_PRINCIPAL} 100%)`;

    case 'transparent-mid':
      return `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(162, 38, 38, 0.7) 52%, ${COLOR_PRINCIPAL} 100%)`;

    case 'transparent-sharp':
      return `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${COLOR_PRINCIPAL} 85%)`;

    case 'texto-banner':
      return `linear-gradient(90deg, ${COLOR_PRINCIPAL} 5%, ${COLOR_SECUNDARIA_CLARA} 100%)`;

    default:
      return `linear-gradient(90deg, ${COLOR_PRINCIPAL} 0%, ${COLOR_SECUNDARIA} 100%)`;
  }
};