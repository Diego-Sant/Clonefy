import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Electrônica', value: 'ELECTRONIC' },
  { title: 'Alternativa', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latina', value: 'LATIN' },
  { title: 'Filmes', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'K-Pop', value: 'K_POP' },
  { title: 'Solo', value: 'SINGER_SONGWRITER' },
];

export const links = [
  { name: 'Início', to: '/', icon: HiOutlineHome },
  {
    name: 'Populares no Brasil',
    to: '/perto-de-voce',
    icon: HiOutlinePhotograph,
  },
  { name: 'Top Artistas', to: '/top-artistas', icon: HiOutlineUserGroup },
  { name: 'Mais populares', to: '/mais-populares', icon: HiOutlineHashtag },
];
