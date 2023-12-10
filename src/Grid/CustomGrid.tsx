import Grid from '@mui/material/Grid';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import '../fonts.css'
import { useMutation } from "react-query";
import { SubmitQuery } from '../api-client/client';
import { ResponseModel } from '../model';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//     customPlaceholder: {
//       color: 'red', // Set the color you want for the placeholder text
//       fontStyle: 'italic', // You can add other CSS properties as needed
//       fontFamily: 'Fira Code'
//     },
//   }));


export default function CustomGrid() 
{
    // const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // const [inputs,setInputs]=useState({
    //     searchQuery:"",
        
    //   })


    useEffect(() => {
      if (formSubmitted) {
        setSearchResults([]);
        setFormSubmitted(false); // Reset formSubmitted after clearing searchResults
      }
     }, [formSubmitted,searchResults,searchQuery]);


    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setFormSubmitted(true);

      // Implement your search logic here
      // For now, let's use sample data
      // setSearchResults([]);
      searchQuery && submitQuery({address:searchQuery})
    };

  const { mutate: submitQuery } = useMutation(
    SubmitQuery,
    {
      onSuccess: (r: ResponseModel) => {
        console.log("response: ", r);
        
        if(r && r.response.length > 0){
          setSearchResults([...r.response])
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

<form onSubmit={handleSearch}>
<TextField
        variant="outlined"
  //       style={{
  //         borderRadius:"24px", 
  //         border:"1px solid #ccc",
  //         padding:"5px",
  //         margin:"auto",
  // fontFamily: 'Fira Code'

  //         // outline: "none"

  //       }}
        placeholder="Ask me anything about Ethereum Network!"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          style: {
            borderRadius: "30px",
            fontFamily: 'Fira Code',
            padding:"5px",
            margin:"auto",
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
        {/* <Grid item xs={12}><div style={{fontWeight:"bold"}}>{adj}</div></Grid> */}
        <Grid item xs={12}><div>{searchResults.join(", ")}</div></Grid>
      </Grid>
    </Grid>

<Grid item xs={2}></Grid><Grid item xs={8}></Grid><Grid item xs={2}><div><a href='https://github.com/talkdablock' target='_blank' rel="noreferrer">What we do?</a></div></Grid>        

    </Grid>
  </div>
  );
}