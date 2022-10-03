import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateEvent = () => {
  const [text, setText] = useState({});
  const navigation = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    if (localStorage.getItem("EventList") === null) {
        localStorage.setItem("EventList", JSON.stringify([]));
      }
  
      let EventListPro = JSON.parse(localStorage.getItem("EventList"));
      EventListPro.push(text);
      localStorage.setItem("EventList", JSON.stringify(EventListPro));
   

    navigation("/event");
  
  };
  return (
    <>
      <h1 className="head">CreateEvent</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch", height: "7ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
          name="eventName"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Host Name"
          variant="outlined"
          name="hostName"
          onChange={handleChange}
        />
        <br />
        <label style={{marginRight:"150px"}}>Start Date</label>
        <br />
        <TextField
          id="outlined-basic"
          type="date"
          variant="outlined"
          name="startDate"
          onChange={handleChange}
        />
        <br />
        <label style={{marginRight:"150px"}}>End Date</label>
        <br />
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="endDate"
          type="date"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          name="location"
          onChange={handleChange}
        />
        <br />
        <label style={{marginRight:"150px"}} >Event Photo</label>
        <br />
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="photo"
          type="file"
          onChange={handleChange}
        />
        <br />
        <Button onClick={handleSubmit} className="btn" variant="contained">
          Create  Event
        </Button>
      </Box>

      <br />
    </>
  );
};
