import { useState } from "react"
import { getMovieReviews } from "Api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Author, ReviewsCard, ReviewsList } from "./Reviews.styled";

const Reviews = () => {
    const [ reviews, setReviews ] = useState();
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        async function getReviews() {
             try {
                setIsLoading(true);
                const { results } = await getMovieReviews(movieId);
                setReviews(results);
                setIsLoading(false);
             } catch {
                toast.error('Ooops! Something went wrong!')
             }
        }
        getReviews();
    }, [movieId])

    return (
        <section>
           {reviews && reviews.length > 0 ? 
           (<ReviewsList>
              {reviews.map(({author, content, id}) => {
                return (
                    <ReviewsCard key={id}>
                        <Author>{author}</Author>
                        <p>{content}</p>
                    </ReviewsCard>
                )
              })}
           </ReviewsList>) : (<p>Sorry, nothing found.</p>)
        }
        {isLoading && <Loader />}
        <ToastContainer />
        </section>
       )
}

export default Reviews;