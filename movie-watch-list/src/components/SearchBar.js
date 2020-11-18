import { SearchBarStyled } from "../styles/styledComponents";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <SearchBarStyled
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type a movie to look up for it!"
      />
    </div>
  );
};

export default SearchBar;
