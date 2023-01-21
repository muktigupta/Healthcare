import Logo from '../logo/logohealth.svg';
import $ from 'jquery'
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import validator from 'validator'
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { useState } from 'react';



const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});



function Login(props) {

  const [inputEmailValue, setEmailValue] = useState('');
  const [inputPasswordValue, setPasswordValue] = useState('');

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);


  const { classes } = props;

    const [values, setValues] = React.useState({
      email: "",
      password: "",
      showPassword: false,
  });
  
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
  };
  
  
  const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  
  
  const navigate = useNavigate();
  function Loginfunction(e) {
      e.preventDefault();

      var validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validpasswordRegex = /^.{8,14}$/;
     
      var email = inputEmailValue;
      var password = inputPasswordValue;
      if(!email && !password) { 
        alert("Empty box");
      }
      else if(!email){
        alert("Please enter your Email Address");
      }
      else if(!validEmailRegex.test(email)){
        alert("Email is not valid");
      }
      else if(!password){
        alert("Please enter your password");
      }
      else if(!validpasswordRegex.test(password)){
        alert("password must be 8 characters.");
      }
      else if(!validator.isEmail(email)) {
        alert("email is not Valid.");
      }
      else
      {

        if (!loading) {
          setSuccess(false);
          setLoading(true);
        }
        {
          $.ajax({ 
            url: 'https://01c5-182-71-78-156.in.ngrok.io/MuktiApi/login',
            type: 'POST',
            cache: false, 
            data: { email: e.target[0].value , password:e.target[1].value}, 
            success: function(data) {
              if(data.validation && data.type === "Hospital")
              {
                navigate('/HospitalHome',{state:{emailpass:email, hospital_admin_id:data.UID, type:data.type}});
              }
              else if(data.validation && data.type === "Doctor")
              {
                alert(data.validation +"\t"+ data.type);
              }
              else if(!data.validation && data.account === "AccNotExist"){
                alert("Account doesn’t exist");
              }
              else
              {
                alert("We couldn't find an account with that email and password combination.");
              }
              setSuccess(true);
              setLoading(false);
            },
           error: function(_jqXHR, textStatus, err){
              setSuccess(true);
              setLoading(false);
              alert('error'+textStatus+', err '+err);
            }
         }) 
        }
      
     /* console.log('You clicked.'+" username="+e.target[0].value+" password="+e.target[1].value); */
    }
    }

    function HDNewAccount(e) {
      e.preventDefault();
      navigate('/HDNewAccountPage');
    }

    function PatientRegister(e) {
      e.preventDefault();
      navigate("/PatientRegisterPage");
    }

    function ForgottenPassword(e) {
      e.preventDefault();
      navigate("/ForgottenPassword");
    }
  
    return (
      <>
  
  <div className="container p-lg-5">
    <div className="row">
      <div className="col-sm-6 d-flex p-2">
      
      <img src={Logo} className="img-fluid"  alt="..."/>
                
    </div>
  
  <div className="col-sm-6">
        
  <div className="card mb-3">
    <div className="card-body">

    <form onSubmit={Loginfunction}>
    <div className="mb-3">
    <FormControl fullWidth sx={{ m: 0 }}  variant="standard">
    <InputLabel htmlFor="exampleInputEmail1"> Email address </InputLabel>
    <Input id="exampleInputEmail1" type={"text"} value={inputEmailValue}
        onChange={e => setEmailValue(e.target.value)} />
    </FormControl>
  </div>
  
  <div className="mb-3">
   <FormControl fullWidth sx={{ m: 0 }} variant="standard">
   <InputLabel htmlFor = "standard-adornment-password">  Password </InputLabel>
   <Input id = "standard-adornment-password" type={values.showPassword ? "text":"password"} value={inputPasswordValue}
   onChange={e => setPasswordValue(e.target.value)}
   endAdornment = {
                    <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                       {values.showPassword 
                          ? <VisibilityOff /> 
                            : <Visibility />}
                      </IconButton>
                      </InputAdornment>
                    }
               />
    </FormControl>
  </div>

  <Box sx={{ position: 'relative' }}>
    <div className="d-grid gap-2">
    <button type="submit" className="btn btn-primary">
    <LoginIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
      Log in</button>
    </div>
    {loading && (
          <CircularProgress
          size={30}
          thickness = {6}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
 </form>
</div>
</div>

<br/>
  
  <div className="d-grid" >
  <div className="btn-group-vertical"  role="group" aria-label="Vertical button group">
    <button type="button" className="btn btn-outline-primary" onClick={HDNewAccount}>Sign up for Hospital and Doctor</button><br/>
    <button type="button" className="btn btn-outline-primary" onClick={PatientRegister}>Patient Register</button><br/>
    <button type="button" className="btn btn-outline-primary">Need Help?</button>
  </div>
  </div>
  <br/>
  
  <div className="text-center">
  <a onClick={ForgottenPassword} className="link-primary">Forgotten password</a>
  </div>
   
    
    </div>
    </div> 
  </div>
  </>
   )
}

  

  Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles) (Login);