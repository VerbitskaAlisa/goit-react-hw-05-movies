import { Box } from "./Movies.styled";
import { useSearchParams } from 'react-router-dom';
import { getMoviesByKeyword } from 'Api';
import { SearchBox } from "components/SearchBox/SearchBox";
import { MoviesGallery } from "components/MoviesGallery/MoviesGallery";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [films, setFilms] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const query = searchParams.get('query');
    
    useEffect(() => {
       if(!query) {
        return;
       }
       async function getMovie() {
        try {
            setIsLoading(true);
            const { results } = await getMoviesByKeyword(query);
            results.length > 0 ? setFilms(results) : console.log('toster');
            setIsLoading(false);
        } catch {
            toast.error('Ooops! Something went wrong!')
       }}
       getMovie();
    }, [query]);

    const onSubmit = query => {
      setSearchParams({ query: query });
    }

    return (
        <Box>
         <SearchBox onSubmit={onSubmit}/>
         {isLoading&& <Loader />}
         {films && <MoviesGallery movies={films}/>}
         <ToastContainer />
        </Box>
    )
}

export default Movies;