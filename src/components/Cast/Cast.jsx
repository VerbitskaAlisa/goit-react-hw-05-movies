import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits} from "Api";
import { Actors, ActorFoto, ActorCard } from "./Cast.styled";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
    const { movieId } = useParams();
    const [ actors, setActors ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function getMovie() {
            try {
                setIsLoading(true);
                const result = await getMovieCredits(movieId);
                setActors(result);
                setIsLoading(false);
            } catch {
                toast.error('Ooops! Something went wrong!')
            }
        }
        getMovie();
    }, [movieId]);

    const { cast } = actors;
    return (
    <section> 
          {cast && cast.length > 0 ? (
             <Actors>
           {cast.map(({name, profile_path, id }) => {
                return (<ActorCard key={id}>
                        <ActorFoto src={profile_path ? `${BASE_IMG_URL}${profile_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt="Actor foto" />
                        <p>{name}</p>
                        </ActorCard>
                        );
                        })}
                        </Actors>)
                         : (<div>Sorry, we don't have any information about actors!</div>
                         )}  
                         {isLoading && <Loader />}
                         <ToastContainer />
    </section> );
};

export default Cast;