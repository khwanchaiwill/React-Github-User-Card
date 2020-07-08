import React from 'react'
import axios from 'axios'
import SearchResultCard from './SearchResult'

 const Search = props =>{
     
         return(
             <div>
                 <form onSubmit={props.searchSubmit}>
                     <input 
                        type="text"
                        name="userText"
                        value={props.userText}
                        onChange={props.handleChange}
                     />
                    <button > Search </button>
                   
                 </form>
             </div>
         )
     
 }
 export default Search;