import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from './Home.styled';
import { getTrendingMovies } from 'Api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
       async function getMovies () {
        try {
            setIsLoading(true);
            const { results } = await getTrendingMovies();
            setMovies(results);
            setIsLoading(false);
        } catch {
            toast.error('Ooops! Something went wrong!')
        }
       }
       getMovies();
    }, [])

    return (
    <Box>
        <MoviesGallery movies={movies}/>
        {isLoading && <Loader />}
        <ToastContainer />
    </Box>
    )
}

export default Home;