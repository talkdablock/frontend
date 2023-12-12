import Grid from '@mui/material/Grid';
import { TextField, IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import '../fonts.css'
import { useMutation } from "react-query";
import { SubmitQuery } from '../api-client/client';
import { ResponseModel } from '../model';

export default function CustomGrid() 
{
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      // Implement your search logic here
      // For now, let's use sample data
      setIsLoading(true)
      setSearchResults([])
      searchQuery && submitQuery({address:searchQuery})
    };

  const { mutate: submitQuery } = useMutation(
    SubmitQuery,
    {
      onSuccess: (r: ResponseModel) => {
        if(r && r.response.length > 0){
          setSearchResults([...r.response])
          setIsLoading(false)
        }
      },
    }
  );

  return (
    <div
    style={{
        display: "flex",
        flex: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        height: "100vh",
        backgroundColor:"#83C9F4",
        boxShadow: "10px 10px 8px #888888"
    }}
    >
    <Grid container spacing={2}>
<Grid item xs={2}></Grid><Grid item xs={8}><div style={{fontWeight:"bolder", fontSize:"xxx-large", textShadow:"2px 2px"}}>Talk the Block</div></Grid><Grid item xs={2}></Grid>        
<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}></Grid>        

<Grid item xs={2}></Grid>
<Grid item xs={8}>

<form onSubmit={handleSearch}>
<TextField
        variant="outlined"
        placeholder="Ask me anything about Ethereum Network!"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          style: {
            borderRadius: "30px",
            fontFamily: 'Fira Code',
            padding:"5px",
            margin:"auto",
            backgroundColor:"#FFFFFF",
            boxShadow: "10px 10px 8px #888888",
          },
          endAdornment: (
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
</form>

</Grid>
<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}></Grid>        

<Grid item xs={2}></Grid>
 <Grid item xs={12}>
      <Grid container spacing={2}>
      
      <Grid item xs={12}><div>{isLoading && <CircularProgress />}</div></Grid>
        <Grid item xs={12}><div>{searchResults.join(", ")}</div></Grid>
      </Grid>
    </Grid>

<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}><div><a href='https://github.com/talkdablock' target='_blank' rel="noreferrer">What we do?</a></div></Grid>        

    </Grid>
  </div>
  );
}