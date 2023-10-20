// src/SearchPage.tsx

import React, { useState } from 'react';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import "../Search/SearchPage.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = async () => {
    // Implement your search logic here
    // For now, let's use sample data
    setSearchResults([
      'Result 1',
      'Result 2',
      'Result 3',
      'Result 4',
      'Result 5',
    ]);
  };

  return (
    // <div className="search-page">
    <div
   
    >
      <label>
        <p>Talk the Block</p>
      </label>
      {/* <div className="search-bar"> */}
      <div
        style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          padding:"24px"
        }}
      
      >
       
        <TextField
        variant="standard"
        style={{
          borderRadius:"24px", 
          border:"1px solid #ccc",
          padding:"5px",
          margin:"auto"
          // outline: "none"

        }}
        placeholder="talk to Sui"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      </div>
      <Grid container spacing={2}>
        {searchResults.map((result, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="search-result">{result}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchPage;
