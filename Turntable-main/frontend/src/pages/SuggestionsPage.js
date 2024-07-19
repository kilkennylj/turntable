
import React, { useState, useEffect} from "react";
import AlbumCarousel from '../components/landing/AlbumCarousel';
import Topbar from '../components/landing/Topbar';
import SearchBar from "../components/landing/SearchBar";
import RippleBackground from "../components/landing/RippleBackground";
import AlbumFunctions from "../frontAPI/AlbumFunctions";

import "../styles/LandingPage.css"


import "../styles/LandingPage.css"


const SuggestionsPage = () => {

    useEffect(() => {
        document.body.style.background = "#1E1E1E";
    }, []);


    const [albums, setAlbums] = useState([]);
    const { searchAlbums, deleteAlbum, getsuggestions } = AlbumFunctions();

    const handleSuggestions = ({query}) => {
      const  albums = getsuggestions(query);
        console.log(albums);
        setAlbums(albums);
    }



  



 


    return (
        <div className="main">
              <button onClick={() => handleSuggestions({query: ""})}>Get Suggestions</button>
 
        </div>
    );
}
export default SuggestionsPage;