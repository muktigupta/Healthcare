import * as React from 'react';
import {useLocation} from 'react-router-dom';
import Logo from '../logo/AppIcon.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/joy/Checkbox';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Fab from '@mui/material/Fab';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import $ from 'jquery';

const settings = ['Profile', 'Logout'];

var countryName = (new Date()).toString().split('(')[1].split(" ")[0];

function HospitalHome() {

  const UID = useLocation();
  var email = UID.state.emailpass;
  var type = UID.state.type;
  var hospital_admin_id = UID.state.hospital_admin_id;

  let countryData = countries.filter((c) =>c.label === countryName);

 const names = [{name12:"Mukti", email12:"mukti@gmail.com"},
 {name12:"Murat", email12:"murat@gmail.com"}];

const HPatientListPass = [{patient_name:"Mukti", patient_number:"098765432109", patient_gender:"M",
patient_age:"100", date:"4557221204121514", treatment_date:"2022-Dec-04, 12:15 PM", Doctor_team_email:"doctor@gmail.com",
Doctor_team_id:""}];

  const [open, setDialogOpen] = React.useState(false);
  //const [ sx={{ width: 1 }}] = React.useState(true);
  const [maxWidth] = React.useState('sm');
  
  const [selected, setSelected] = React.useState([]);

  const [h_patient_name2, setH_patient_name2] = useState('')
  const [h_patient_countryCode , setH_patient_countryCode] = useState(countryData[0])
  const [h_patient_number2, setH_patient_number2] = useState('')
  const [h_patient_age2, setH_patient_age2] = useState('')
  const [h_patient_gender2, setH_patient_gender2] = useState('')
  const [hSelected_chip_group, setHSelected_chip_group] = useState([])
 

  const [value1, setValue1] = React.useState('1');
  
  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 function AppIconButton(e) {
   alert("Hello AppIconButton");
 }

 const handleClose = () => {
  setDialogOpen(false);
};

const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  function AddNewPatient(e) {
    e.preventDefault();

  var validFullname = /^[a-zA-Z]+[\s]?[a-zA-Z]+(?:[\s][a-zA-Z]+)?$/;
  var validMobilenumberregx = /^\d{10}$/;
  var validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  var validAgeRegex = /^([1-9]|[1-9][0-9]|1[0-2][0-9]|130)$/;

  if(!h_patient_name2 && !h_patient_countryCode.phone && !h_patient_number2 && !h_patient_age2 && !h_patient_gender2 && 
      hSelected_chip_group.length === 0) {
      alert("Please fill a form.");
    }
    else if(!h_patient_name2) {
      alert("Please add patient name.");
    }
    else if(h_patient_name2.length>30) {
      alert("Enter a valid patient name");
    }
    else if(!validFullname.test(h_patient_name2)){
      alert("Accourding to our guideline input name is not valid");
    }
     else if(validEmailRegex.test(h_patient_name2)) {
      alert("Email is not allowed in patient name.");
    }
    else if(h_patient_name2.includes("@gmail.com")) {
      alert("Enter a valid patient name");
    }
    else if(!h_patient_countryCode.phone){
      alert("Please select country");
    }
    else if(!h_patient_number2) {
      alert("Please add mobile number.");
    }
    else if(h_patient_number2.length < 10){
      alert("Mobile number must be of 10 digits.");
    }
    else if(h_patient_number2.length > 10) {
      alert("Mobile number must be of 10 digits.");
    }
    else if(!validMobilenumberregx.test(h_patient_number2)){
      alert("mobile number not valid");
    }
    else if(!h_patient_age2) {
      alert("Please add patient age.");
    }
    else if(h_patient_age2<0 || h_patient_age2>130) {
      alert("Patient age Must be between 1-130 year.");
    }
    else if(!validAgeRegex.test(h_patient_age2)){
      alert("Characters is not allowed in Patient age.");
    }
    else if(!h_patient_gender2) {
      alert("Please select patient gender.");
    }
    else if(hSelected_chip_group.length === 0) {
      alert("Please Select what patient need for checkup");
    }
    else {
      alert("Hello "+h_patient_name2+"\t"+h_patient_countryCode.phone+"\t"+h_patient_number2+"\t"+h_patient_age2+"\t"+
      h_patient_gender2+"\t"+hSelected_chip_group);
      {
        $.ajax({ 
          url: 'https://01c5-182-71-78-156.in.ngrok.io/MuktiApi/HAddNewPatient',
          type: 'POST',
          cache: false, 
           data: { hospital_admin_id:hospital_admin_id, h_patient_name2: h_patient_name2,
             h_patient_number2: "+"+h_patient_countryCode.phone+h_patient_number2, h_patient_age2: h_patient_age2,
            h_patient_gender2: h_patient_gender2, hSelected_chip_group: JSON.stringify(hSelected_chip_group)}, 
          success: function(data) {
            if(data.succesfull) {
              alert("Data send succesful");
            }
            else{
              alert("Unable to send data to server");
            }
          },
         error: function(_jqXHR, textStatus, err) {
            alert('error'+textStatus+', err '+err);
          }
       }) 
      }
    }
  }

function AddNewMember(e){
    setDialogOpen(true);
  }

function PatitentListlick(e, patient_name) {
  e.preventDefault();
  alert("Hello "+patient_name);
  }
 
return (
 <>       
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" >
    <Toolbar>
      <IconButton  sx={{ p: 0 }}>
      </IconButton>
       
       <IconButton onClick={AppIconButton}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}>
          <Avatar alt="Mukti Profile" src={Logo} />
       </IconButton>
       
       <Typography variant="h6" component="div" sx={{  flexGrow: 1, fontWeight: 'bold',fontSize: 20, color:"white"}}>
        Healthcare Monitor
       </Typography>

       <Box sx={{  flexGrow: 4, display: { xs: 'none', md: 'flex' } }}>
       <Box sx={{bgcolor: 'primary', width: 500 }}>
        <TabContext value={value1}>      
          <TabList onChange={handleChange} aria-label="simple tabs example" orientation="horizontal" visibleScrollbar="true"
           sx={{ height:55}}  variant=" sx={{ width: 1 }}" 
           textColor="inherit">
            <Tab  icon ={<HomeOutlinedIcon />} iconPosition="start" label="Home" value="1" />
            <Tab icon ={<GroupAddOutlinedIcon/>} iconPosition="start" label="Member" value="2" />
            <Tab icon ={<PersonOutlineOutlinedIcon/>} iconPosition="start" label="Patient" value="3" />
          </TabList>      
        </TabContext>
        </Box>
        </Box>

        <Box  sx={{ flexdirection: 'row-reverse' }}>
          <Tooltip title="Open settings">
            <IconButton onClick= {handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Mukti Profile" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textalign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>


    <Box sx={{ width: '100%', typography: 'body1', bgcolor: 'background.paper', }}>
      <TabContext value={value1}>
      <div style={{ width: '100%' }}>
      <Box display={{ xs: 'block', md: 'none' }} m={0}>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="simple tabs example" orientation="horizontal" visibleScrollbar="true"
           sx={{ height:55}} color="primary" variant=" sx={{ width: 1 }}" textalign="center">
            <Tab  icon ={<HomeOutlinedIcon />} iconPosition="start" label="Home" value="1" />
            <Tab icon ={<GroupAddOutlinedIcon/>} iconPosition="start" label="Member" value="2" />
            <Tab icon ={<PersonOutlineOutlinedIcon/>} iconPosition="start" label="Patient" value="3" />
          </TabList>
        </Box>
        </Box>
      </div>

   <TabPanel sx={{px: 1,pt:1}} value="1">

<div className="d-flex justify-content-center">

<div  sx={{ width: 1 }} className="col-lg-3">
  <Card>
    
  <Card.Body>    
    
    <Form onSubmit={AddNewPatient}>

    <div className="d-grid gap-2">
     <Form.Group className="mb-3" controlId="FormCountyCode">
     <FormControl sx={{ m: 0, width: 1 }}  variant="standard">
     <InputLabel htmlFor="PatientFullName"> Patient Name </InputLabel>
     <Input id="PatientFullName" type="text" onChange={event => setH_patient_name2(event.target.value)} inputProps={{ maxLength: 30 }}
       value={h_patient_name2}/>
     </FormControl>
     </Form.Group>
    </div>
 
  <div className="row">
  <div className="col-5">
  <Autocomplete
      id="country-select-demo"
      size='small'
      defaultValue={h_patient_countryCode}
      options={countries}
      onChange={(_event,value) => setH_patient_countryCode(value)}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li"  {...props}>     
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          variant='standard'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />

  </div>
    <div className="col-7">
    <FormControl   sx={{ m: 0 ,width: 1 }} variant="standard">
        <InputLabel htmlFor="HPatientmobilenumber"> Mobile number </InputLabel>
           <Input id="HPatientmobilenumber" inputProps = {{ maxLength: 10 }}
           onChange={event => setH_patient_number2(event.target.value)} value={h_patient_number2}/>
      </FormControl>
      </div>
  </div>

 <br/>


  <div className="row">
    <div className="col-5">
    <Form.Group className="mb-3" controlId="FormCountyCode">
    <FormControl  sx={{ width: 1 }}  variant="standard">
    <InputLabel htmlFor="PatientPatientAge"> Patient Age </InputLabel>
    <Input  sx={{ width: 1 }} id="PatientPatientAge" type="text" onChange={event => setH_patient_age2(event.target.value)}
                 value={h_patient_age2}/>
    </FormControl>
    </Form.Group> 
    </div>

    <div className="col-7">  
    <Autocomplete
      disablePortal
      id="combo-box-demo"
       sx={{ width: 1 }}
      onChange={(_event,value) => setH_patient_gender2(value.label)}
      options={GenderList}
      
      renderInput={(params) => <TextField {...params} label="Gender" variant="standard" />} />      
    </div>

  </div>



<h5 className="text-center"> <strong> <u>Full Body Screening.</u> </strong> </h5>

<div className="row">
<div className="col-sm-12">
<div className="card">
 <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Box>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Complete Blood Count',
            'Blood Sugar',
            'Kidney Function Test',
            'Liver Function Test',
            'Uric Acid',
            'X-Ray',
            'Eye Checkup',
          ].map((name) => {
            const checked = hSelected_chip_group.includes(name);
            return (
              <Chip
                key = {name}      
                variant = {checked ? 'soft' : 'plain'}
                color = {checked ? 'primary' : 'neutral'}
                startDecorator = {
                  checked && <CheckCircleOutlineIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Checkbox
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setHSelected_chip_group((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name)
                        : [...names, name],
                    );
                  }}
                />
              </Chip>
            );
          })}
        </Box>
      </Box>
    </Box>
 </div>
 </div>
 </div> 

 <br/>
  <Box display="flex" flexdirection="row-reverse" sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab type="submit" variant="extended" color="primary" aria-label="add"  flexdirection="right" >
      <PersonAddAltOutlinedIcon sx={{ mr: 1}} />
      Submit
    </Fab> 
  </Box>
</Form>

   
  </Card.Body>

     
    </Card>    


 </div>
 </div>
  </TabPanel>


  <TabPanel sx={{pl: 1,pt:1}} value="2">
    <div className="d-flex justify-content-center">

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" variant="extended" onClick={AddNewMember}>
        <AddOutlinedIcon sx={{ mr: 1 }} />
        ADD NEW MEMBER
      </Fab>
      </Box>
    </div>

<br/>

<h5 className="text-center"><strong><u>Doctors Team List..</u></strong></h5>
      
<div className="d-flex justify-content-center">     
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{
names.map(NaMe=>
<ListItemButton>
  <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary= {NaMe.name12}
        
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {NaMe.email12}
              </Typography>
              {"  Qualification"}
            </React.Fragment>
          }
        />
      </ListItem>    
      </ListItemButton>     
  )
  }
  <Divider variant="inset" component="li" />
  </List>
  </div>
  </TabPanel>


  <TabPanel sx={{pl: 1,pt:1}} value="3">
  <div className="d-flex justify-content-center">
  <List sx={{  maxWidth: 360, bgcolor: 'background.paper' }}>{
    HPatientListPass.map(HPatientListPass12=>
      <ListItemButton >
      <ListItem alignItems="flex-start" onClick={(event)=>PatitentListlick(event,HPatientListPass12.patient_name)}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={HPatientListPass12.patient_name}
          secondary = {
            <React.Fragment>
              <Typography
                sx={{pl:7, display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {HPatientListPass12.treatment_date}
              </Typography><br/>
              {HPatientListPass12.patient_number}
              <Typography
                sx={{pl:15, display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >{HPatientListPass12.patient_gender}</Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </ListItemButton>   
      )
  }
  <Divider variant="inset" component="li" />
  </List>
   </div>
  </TabPanel>
    </TabContext>
    </Box>
    

    <Dialog open={open} onClose={handleClose}   sx={{ width: 1 }}
        maxWidth={maxWidth}>
        <DialogTitle>Add New Member</DialogTitle>
        <DialogContent>


      <Form.Group className="mb-3" controlId="FormFullName">
        <FormControl   sx={{ m: 0 ,width: 1}}  variant="standard">
        <InputLabel htmlFor="FullName">Full Name</InputLabel>
        <Input id="FullName"  type="text" />
        </FormControl>
      </Form.Group>


      <div className="row">
  <div className="col-5">
  <Autocomplete
      id="country-select-demo"
      size='small'
      options={countries}
      onChange={(_event,value) => setH_patient_countryCode(value.phone)}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li"  {...props}>     
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          variant='standard'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />

  </div>
    <div className="col-7">
    <FormControl   sx={{ m: 0 , width: 1}} variant="standard">
        <InputLabel htmlFor="HPatientmobilenumber"> Mobile number </InputLabel>
           <Input id="HPatientmobilenumber" onChange={event => setH_patient_number2(event.target.value)} value={h_patient_number2}/>
      </FormControl>
      </div>
  </div>

     
    
 

    <FormControl   sx={{ m: 1 , width: 1}}  variant="standard">
    <InputLabel htmlFor="exampleInputEmail1"> Email address </InputLabel>
    <Input id="exampleInputEmail1"  />
    </FormControl>


    <FormControl  sx={{ m: 1, width: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>ADD</Button>
        </DialogActions>
      </Dialog>
    </>  
  );  
  
}
export default HospitalHome;



// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Republic of China',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];

const GenderList=[
  {label:'Male'},
  {label:'Female'}
];
