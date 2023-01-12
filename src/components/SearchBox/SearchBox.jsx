import { StyledInput, SearchButton, SearchForm } from "./SearchBox.styled";
import { useState } from "react";
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
    const [query, setQuery ] = useState('');

    const inputChange = (e) => {
       const value = e.target.value.toLowerCase();
       setQuery(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
      if(query.trim() === '') {
        return console.log('toster')
      }
      onSubmit(query);
      setQuery('');
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Movie search..." value={query} onChange={inputChange}/>
            <SearchButton type="submit"><FcSearch size='26'/></SearchButton>
        </SearchForm>
    )
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};