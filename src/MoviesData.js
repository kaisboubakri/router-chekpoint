import img1 from './shawshank.jpg'
import img2 from './darkknight.jpg'
import img3 from './interstellar.jpg'
const moviesData = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    posterURL: img1,
    rating: 9.3,
    trailer:'https://www.youtube.com/embed/watch?v=EXeTwQWrcwY',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: img2,
    rating: 9.0,
    trailer: 'https://www.youtube.com/embed/watch?v=EXeTwQWrcwY',
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    posterURL: img3,
    rating: 8.7,
    trailer:'https://www.imdb.com/video/vi1586278169/?playlistId=tt0816692&ref_=tt_ov_vi',
  },
  
    // Add more movies as needed
  
  ];
  
  export default moviesData;