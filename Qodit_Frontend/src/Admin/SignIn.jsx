import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../app/UserAuth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://qodit.io /">
        Qodit.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createTheme({
  typography: {
    fontSize: 20,
  },
});

const { location } = window;

export default function AdminSignIn() {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState({});
  const API = "https://qoditdev.herokuapp.com";
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [emailError] = useState(null);
  const [passwordError] = useState(null);


  // function validate(obj) {
  //   emailError = "";
  //   passwordError = "";
  //   console.log(obj);
  //   if (!obj.email.toString().trim().length) {
  //     const emailError = "Enter email or invalid";
  //   }
  //   if (!obj.password.toString().trim().length) {
  //     const passwordError = "Enter email or invalid";
  //   }

  //   if(emailError || passwordError){
  //     console.log(emailError, passwordError);
  //     return false;
  //   }
  //   return true;
  // }

  const LogInHandle = async (event) => {
    // if (validate({ email, password })) {
    //   // hit login api
    // }

    event.preventDefault();
    if (!email.toString().trim().length) return console.log("enter email");
    if (!password) return console.log("enter password");

    let loginApi = await axios
      .post(`${API}/api/auth/login`, { email, password })
      .then(({ data }) => {
        console.log(data);
        setMessage(data.message);
        setData(data.data);
        setError(false);
        roleBaseAccess(data.data);
      })
      .catch(function (error) {
        setError(true);
        console.log("invalid username or password");
        return Promise.reject(error);
      });
  };

  function roleBaseAccess(data) {
    let pathAdmin = `/admin/dashboard`;
    let pathHR = `/hr/dashboard`;
    let pathSales = `/sales/dashboard`;
    console.log(data);
    if (data) {
      switch (data.roleName) {
        case "admin":
          history.push(pathAdmin);
          break;
        case "hr":
          history.push(pathHR);
          break;
        case "sales":
          history.push(pathSales);
          break;
        default:
          console.log("err");
      }
      dispatch(
        login({
          roleName: data.roleName,
          loggedIn: true,
          data: data,
        })
      );
    }
    location.reload();
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              error={error ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onFocus= {(e) => setError(false)}
              onChange={(e) => setEmail(e.target.value)}
              helperText={error ? "Incorrect email." : null}
              required
            />

            <TextField
              error={error ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onFocus= {(e) => setError(false)}
              onChange={(e) => setPassword(e.target.value)}
              helperText={error ? "Incorrect password." : null}
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={LogInHandle}
              >
                Sign In
              </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
