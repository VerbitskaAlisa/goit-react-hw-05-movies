import { useLocation } from "react-router-dom";
import { Poster, Name, StyledLink } from "./MoviesGalleryItem.styled";
import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGalleryItem = ({poster, name, title, id}) => {
     const location = useLocation();

    return (
        <StyledLink to={`/movies/${id}`} state={{ from: location }}>
          <Poster src={poster ? `${BASE_IMG_URL}${poster}` : ''} alt="Movie poster" />
           <Name>{title || name}</Name>
        </StyledLink>
    )
}

MoviesGalleryItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    posterPath: PropTypes.string,
  };