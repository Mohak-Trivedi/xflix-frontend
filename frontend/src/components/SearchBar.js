import { Box, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export function SearchBar({ search, setSearch, performSearch }) {
  return (
    <Box>
      <TextField
        size="small"
        type="text"
        name="search-box"
        className="search-desktop"
        placeholder="Search"
        focused
        sx={{ width: 800 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        size="large"
        onClick={() => performSearch(search)}
      ></Button>
    </Box>
  );
}
