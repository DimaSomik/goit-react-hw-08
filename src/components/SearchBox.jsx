import { useId } from "react"
import css from './SearchBox.module.css';

const SearchBox = ({searchValue, updateSearch}) => {
    const id = useId();

    return (
        <div className={css.SearchContainer}>
            <label htmlFor={id}>Find contacts by name</label>
            <input type="text"
                   name="search"
                   id={id}
                   value={searchValue}
                   onChange={(e) => updateSearch(e.target.value)}  
            />
        </div>
    );
} 

export default SearchBox;