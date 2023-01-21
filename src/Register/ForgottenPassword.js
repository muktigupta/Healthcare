import React from 'react'
import Card from 'react-bootstrap/Card';
import Divider from '@mui/material/Divider';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

export default function ForgottenPassword() {
    const [EmailAddress, setEmailAddress] = useState('');

    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function ForgetPassword(e) {
        e.preventDefault();
        if(!EmailAddress) {
          alert("Please enter your Email Address.");
        }
        else if(!validEmailRegex.test(EmailAddress)) {
          alert("Please enter a valid email address.");
        }
        else if(!EmailAddress.includes("@gmail.com")) {
          alert("Email is not Valid.");
        }
        else {
          alert("I'm OKKKK");
        }
    }

return (
  <>
  <div className="card text-center">
  <h1 className="text-primary"><strong>Healthcare Monitor</strong></h1>
  </div>
    <div className="d-flex justify-content-center p-3">
    <Card className="text-center p-3">
    <Card.Header ><h5 className="text-primary"><strong>
      Did you forget your password?</strong></h5></Card.Header>
        <Card.Body>
        <div className="d-grid gap-2">
        <Card.Title>Please enter your email address to search for your account.</Card.Title>
        </div>
        <Divider />
        <br/>

        <Form onSubmit={ForgetPassword}>
        <div className="d-grid gap-2">
      <FormControl fullWidth sx={{ m: 0 }} variant="standard">
        <InputLabel htmlFor="exampleInputEmail1"> Email address </InputLabel>
          <Input id="exampleInputEmail1" onChange={event => setEmailAddress(event.target.value)}
                 value={EmailAddress}/>
    </FormControl>
    </div>
    <Divider />
    <br/>
    <div className="d-grid gap-2">
      <Button variant="primary" className="btn btn-primary" type="submit">
      
        Confirm</Button>
      </div>
      </Form>

        </Card.Body>
        </Card>
        </div>
    </>
  )
}
