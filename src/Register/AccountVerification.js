import React from 'react'
import {useLocation} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Divider from '@mui/material/Divider';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function AccountVerification() {
    const NewAccountData = useLocation();
    var FirstMiddleLastName1 = NewAccountData.state.FirstMiddleLastName1;
    var countryCode = NewAccountData.state.countryCode;
    var MobileNumber = NewAccountData.state.MobileNumber;
    var EmailAddress = NewAccountData.state.EmailAddress;
    var NewPassword = NewAccountData.state.NewPassword;
    var ConfirmPassword = NewAccountData.state.ConfirmPassword;
    var Type = NewAccountData.state.Type;

    const [EmailVerificationCode, setEmailVerificationCode] = React.useState('')
    const [MobileVerificationCode, setMobileVerificationCode] = React.useState('')


    function HDVerifyAccount(e){
        e.preventDefault();
        if(!EmailVerificationCode && !MobileVerificationCode) {
            alert("Please enter your email & SMS Verification Code");
        }
        else if(!EmailVerificationCode){
            alert("Please enter your email Verification Code");
        }
        else if(!MobileVerificationCode){
            alert("Please enter your SMS Verification Code");
        }
        else{
            alert(EmailVerificationCode +"\t"+ MobileVerificationCode);
        }
    }
    
  return (
    <>
   <div class="card text-center">
   <h1 class="text-primary"><strong>Healthcare Monitor</strong></h1>
  </div>
    <div class="d-flex justify-content-center p-3">
    <Card className="text-center p-2 col-lg-4">
    <Card.Header ><h4 class="text-primary"><strong>New account for Hospital or Doctor.
    </strong></h4></Card.Header>

    <Card.Body>
    <div className="d-grid gap-2">
        <Card.Title><h6>Let us know that your email address and Mobile Number belongs to you.
        Enter the code from your email and SMS sent to <strong>{EmailAddress}</strong> and <strong>{MobileNumber}</strong></h6></Card.Title>
        </div>
        <Divider />
        <br/>
    <Form onSubmit={HDVerifyAccount}>
    <div className="d-grid gap-2">
      <Form.Group className="mb-3" controlId="FormEmailVerificationCode">
        <FormControl fullWidth sx={{ m: 0 }}  variant="standard">
        <InputLabel htmlFor="EmailVerificationCode">Email Verification Code</InputLabel>
        <Input id="EmailVerificationCode"  type="text" onChange={event => setEmailVerificationCode(event.target.value)}
                 value={EmailVerificationCode}/>
        </FormControl>
      </Form.Group>
      </div>

      <div className="d-grid gap-2">
      <Form.Group className="mb-3" controlId="FormMobileVerificationCode">
        <FormControl fullWidth sx={{ m: 0 }}  variant="standard">
        <InputLabel htmlFor="MobileVerificationCode">Mobile Verification Code</InputLabel>
        <Input id="MobileVerificationCode" type="text" onChange={event => setMobileVerificationCode(event.target.value)}
                 value={MobileVerificationCode}/>
        </FormControl>
      </Form.Group>
      </div>

      <div className="d-grid gap-2">
      <Button variant="primary" className="btn btn-primary" type="submit">
        Verify</Button>
      </div>

        </Form>

        <Divider />
<br/>
<div class="card-footer text-muted">
    <p>By clicking <strong>Verify</strong>, you agree to out <Link>Terms</Link>, <Link>Data Policy</Link></p>
  </div>
        </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default AccountVerification