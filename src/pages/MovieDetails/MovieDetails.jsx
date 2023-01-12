import { Box, FilmCard, Img, MainTitle, Text, Title, StyledLink, AIBox, List, ListItem, BackBtn } from "./MoviesDetails.styled";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "Api";
import { Suspense } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [ movie, setMovie ] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        async function getMovie() {
            try {
                const result = await getMovieById(movieId);
                setMovie(result);
            } catch {
                toast.error('Ooops! Something went wrong!')
            }
        }
        getMovie();
    }, [movieId]);

    const { title, poster_path, vote_average, genres, overview } = movie;
    const percent = (vote_average * 100) / 10;
    const backHref = location.state?.from ?? '/movies'
    return (
        <Box>
            <BackBtn to={backHref}>Go back</BackBtn>
            <FilmCard>
            <Img src={poster_path ? `${BASE_IMG_URL}${poster_path}` : ''} alt="Poster card" />
            <div>
              <MainTitle>{title}</MainTitle>
              <Text><b>User Score: </b>{percent.toFixed()}%</Text>
              <Title>Overview</Title>
              <Text>{overview}</Text>
              <Title>Genres: {''}</Title>
              <Text>{genres && genres.map(genre => genre.name).join(", ")}</Text>
            </div>
            </FilmCard>
            <AIBox>
                <MainTitle>Additional information</MainTitle>
                <List>
                    <ListItem><StyledLink to={'cast'}>Cast</StyledLink></ListItem>
                    <ListItem><StyledLink to={'reviews'}>Reviews</StyledLink></ListItem>
                </List>
            </AIBox>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
            </Suspense>
            <ToastContainer />
        </Box>
    )
}

export default MovieDetails;