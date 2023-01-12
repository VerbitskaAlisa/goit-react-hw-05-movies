import { GalleryBox } from "./MoviesGallery.styled";
import { MoviesGalleryItem } from './MoviesGalleryItem';
import { StyledItem } from "./MoviesGallery.styled";
import PropTypes from 'prop-types';

export const MoviesGallery = ({movies}) => {
   return (
         <GalleryBox>
            {movies.map(({id, poster_path, name, title}) => {
                return <StyledItem key={id}>
                    <MoviesGalleryItem id={id} poster={poster_path} name={name} title={title} />
                       </StyledItem>
            })}
        </GalleryBox>
   )
}

MoviesGallery.propTypes = {
    movies: PropTypes.array.isRequired,
  };

