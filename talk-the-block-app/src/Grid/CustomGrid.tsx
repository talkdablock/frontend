import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import '../fonts.css'
import { useMutation } from "react-query";
import { SubmitQuery } from '../api-client/client';
import { ResponseModel } from '../model';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    customPlaceholder: {
      color: 'red', // Set the color you want for the placeholder text
      fontStyle: 'italic', // You can add other CSS properties as needed
      fontFamily: 'Fira Code'
    },
  }));


export default function CustomGrid() 
{
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<ResponseModel[]>([]);
    const [inputs,setInputs]=useState({
        searchQuery:"",
        
      })

      const handleInputChange=(e: { target: { name: any; value: any; }; })=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }

  const handleSearch = async () => {
    // Implement your search logic here
    // For now, let's use sample data
    submitQuery({chain_id:784,query:searchQuery})
  };

  const { mutate: submitQuery } = useMutation(
    SubmitQuery,
    {
      onSuccess: (response: ResponseModel) => {
        if(response && response.response.length > 0){

setSearchResults([...searchResults,response])
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
        height: "100vh"
    }}
    >
    <Grid container spacing={2}>
<Grid item xs={2}></Grid><Grid item xs={8}><div style={{fontWeight:"bolder", fontSize:"xxx-large"}}>Talk the Block</div></Grid><Grid item xs={2}></Grid>        
<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}></Grid>        

<Grid item xs={2}></Grid>
<Grid item xs={8}>
<TextField
        variant="standard"
        style={{
          borderRadius:"24px", 
          border:"1px solid #ccc",
          padding:"5px",
          margin:"auto",
  fontFamily: 'Fira Code'

          // outline: "none"

        }}
        placeholder="You can talk to Sui"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
          classes:{
            input:classes.customPlaceholder
          }
        }}
      />
</Grid>
<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}></Grid>        

<Grid item xs={2}></Grid>
<Grid item xs={12}>{searchResults.map((res:ResponseModel) => (
      <Grid container spacing={2}>
        <Grid item xs={12}><div style={{fontWeight:"bold"}}>{res.query}</div></Grid>
        <Grid item xs={12}><div>{res.response}</div> </Grid>
      </Grid>
    ))}</Grid>        

<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}><div><a href='https://github.com/talkdablock' target='_blank'>What we do?</a></div></Grid>        

    </Grid>
  </div>
  );
}