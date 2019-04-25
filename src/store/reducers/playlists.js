const INITIAL_STATE = [
  {
    id: 1,
    title: 'Garota Safada',
    image: 'https://i.ytimg.com/vi/VE8AA2NMYP8/hqdefault.jpg',
  },
  {
    id: 2,
    title: 'Desejo de menina',
    image: 'http://www.revistafashionnews.com/dataweb/editor2/sociedade/2011/dezembro/desejodemenina.jpg'
  },
  {
    id: 3,
    title: 'Banda Encantus',
    image: 'https://www.kboing.com.br/fotos/imagens/528a02af3ef0e.jpg'
  },
  {
    id: 4,
    title: 'Forro pegado',
    image: 'https://www.kboing.com.br/fotos/imagens/528a02af3ef0e.jpg'
  },
  {
    id: 5,
    title: 'Aviões do forró',
    image: 'https://blogdafloresta.com.br/folhafl/wp-content/uploads/2016/10/avioes-do-forro.jpg'
  }
];

export default function playlists(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}
