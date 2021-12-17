import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Button,
  Container,
  InputAdornment,
  createTheme,
  ThemeProvider,
  ButtonGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { BackgroundSVG } from "../BackgroundSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
export const CareerForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setMobile] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setFile] = useState("");
  

  async function submitForm() {
    console.warn(name, email, phone_number, technology, description, upload);
    const formData = {
      name,
      email,
      description,
      phone_number,
      technology,
      upload,
    };
    let result = await fetch("https://qoditdev.herokuapp.com/careerform", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved");
  }

  const classes = useStyles();
  const theme = createTheme({
    root: {
      color: "#FFFFFF",
    },
    typography: {
      fontSize: "2rem",
      color: "#fff",
      allVariants: {
        color: "#fff",
      },
    },
  });

  const style = {
    form: {
      backgroundColor: "#000",
      borderRadius: "2rem",
      padding: "60px 40px 10px 40px",
      // paddingTop:'10rem',
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="careerFormMainDiv">
      <BackgroundSVG />
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Apply Now</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="typographyCSS">
        <CssBaseline />
        <Container maxWidth="sm">
          <ThemeProvider theme={theme}>
            <Typography component="div" style={style.form}>
              {/* <h1 className="careerHeading"> APPLY NOW</h1> */}
              <form
                style={{
                  textAlign: "justify",
                  margin: "100px 54px 54px 80px ",
                }}
              >
                <div>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">Your Name</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setName(e.target.value)}
                      color="secondary"
                      autoFocus={true}
                      startAdornment={
                        <InputAdornment position="start">
                          Hello! I'm
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">Message</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setDescription(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          I would like to apply for
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">
                      Enter Your Email Id
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setEmail(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          You can reach me at
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">
                      Enter Your Mobile No.
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setMobile(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          and Mobile No.
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">
                      Technologies
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setMobile(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          Technologies
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <span style={{ verticalAlign: "bottom" }}>
                  {/* to chat and discuss next steps{" "} */}
                </span>
                {/* <div>
                  <span style={{fontSize:'1.5rem'}}>UPLOAD YOUR RESUME</span>
                </div> */}
                {/* <ButtonGroup size='small'> */}
                <div
                  id="drop_file_zone"
                  ondrop="upload_file(event)"
                  ondragover="return false"
                >
                  <div id="drag_upload_file">
                    <p className="upload-here">Upload your resume here</p>
                    <p>
                      <input onChange = {(e)=>setFile(e.target.files[0])}  type="file" className="upload-img"/>
                    </p>
                    {/* <div id="selectfile">
                    <input type="file" onChange = {(e)=>setFile(e.target.files[0])} />
                      </div> */}
                  </div>
                </div>
                {/* <Button  variant="contained" component="label">
                    Upload Resume
                    <input type="file" onChange = {(e)=>setFile(e.target.files[0])} />
                  </Button> */}
                <Button
                  variant="contained"
                  onClick={submitForm}
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            </Typography>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
};
