import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TerminalIcon from '@mui/icons-material/Terminal';


import Navbar from './components /Navbar/navbar.js';
import Card1 from './components /Cards/Card.js';
import Card2 from './components /Cards/Card2.js';
import Card3 from './components /Cards/Card3.js';
import Card4 from './components /Cards/Card4.js';
import Blob from './components /Blob/blobs.js';
import Blob2 from './components /Blob/blobs2.js';
import Blob3 from './components /Blob/blobs3.js';
import HomeButtons from './components /HomeButtons/hButtons.js';
import Form from './components /Form/form.js';
import Footer from './components /Footer/footer.js';








const App = () => {


  return (

  <BrowserRouter>
    <div> <Navbar /> </div>
    <div> <HomeButtons /> </div>
    
    <div class='question'>
        <button class='dropbtn2'>Why Hire Me?</button>
        <div class='dropdown2'>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
        </div>
    </div>
    <div class='question2'>
        <button class='dropbtn3'>What Can I Do?</button>
        <div class='dropdown3'>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
        </div>
    </div>
    <div className='layer7'>
    <div className='blobGroup'>
      <Blob />
      <Blob2 />
      <Blob3 />
    </div>
    </div>
    <div className='featuredbg'>
    <div className='featuredTitle'><p>Featured</p></div>
    <div className='featuredList'>
      <h3>Employee Clock In System</h3>
      <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>

    </div>
    </div>
    <div className='productCard'>
      <div className='bgShape'>
        <div className='webImg'></div>
      </div>
    </div>
    <div className='layer3 spacer'>
    <Container className='cards'>
    <Grid className='grid' container spacing={7}>
      <Grid item md={4}>
        <Card1 />
      </Grid>
      <Grid item md={4}>
        <Card2 />
      </Grid>
      <Grid item md={4}>
        <Card3 />
      </Grid>
      <Grid item md={4}>
        <Card4 />
      </Grid>
      <Grid item md={4}>
        <Card2 />
      </Grid>
      <Grid item md={4}>
        <Card2 />
      </Grid>
      <Grid item md={4}>
        <Card1 />
      </Grid>
      <Grid item md={4}>
        <Card2 />
      </Grid>
      <Grid item md={4}>
        <Card2 />
      </Grid>
    </Grid>
    </Container>
    </div>
    <div className='layer5'></div>
    <h1 className='layer6con'>Alexis Velasquez</h1>
    <div className='layer6'>
      <div className='alexisContent'>
        <div className='aboutmeGroup'>
          <div className='aboutMe'>
            <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and  emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions. This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
          </div>
        </div>
      </div>
      <div className='divImg'>
        <div className='alexis'></div>
      </div>
      <div className='aboutmeIcons'>
        <SpeedIcon className='speedIcon' fontSize='large' style={{ 
          color: 'white'
          }} />
        <AccessTimeIcon className='' fontSize='large' style={{ 
          color: 'white'
          }} />
        <TerminalIcon className='' fontSize='large' style={{ 
          color: 'white'
          }} />
      </div>
      <div className='iconContent'>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and  emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions. This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and  emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions. This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and  emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions. This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
      </div>
    </div>
    <div> <Form /> </div>
    <div className='logo2div'>
      <div className='logo2'></div>
    </div>
    <div className='layer2'></div>
    <div> <Footer /> </div>
    
  </BrowserRouter>
  )

}

export default App;
