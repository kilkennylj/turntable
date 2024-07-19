import React, { useState } from 'react';
import "../../styles/SearchBar.css";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch, onSuggestions }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    const handleSuggestions = (event) => {
        event.preventDefault();
        // Navigate to the desired page, e.g., '/suggestions'
        navigate('/suggestions');



    }

    return (
        <div className="searchbar_div">
            <form onSubmit={handleSubmit} className='searchbar_container'>
                <input
                    type="text"
                    placeholder="Search albums..."
                    value={searchQuery}
                    onChange={handleChange}
                    className="searchbar_input"
                />
                <button type="submit" className='searchbar_button'>Add</button>
                
            </form>
            <form onSubmit={handleSuggestions}>
      <button type="submit" className='suggestions_button'>Get suggestions</button>
    </form>
        </div>
    );
};

export default SearchBar;
