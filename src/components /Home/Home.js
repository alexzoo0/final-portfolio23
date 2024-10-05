import React from 'react';
import { Grid, Container } from '@material-ui/core';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TerminalIcon from '@mui/icons-material/Terminal';


import Navbar from '../Navbar/navbar.js';
import Card from '../Cards/Card.js';
import Card2 from '../Cards/Card2.js';
import Card3 from '../Cards/Card3.js';
import Card4 from '../Cards/Card4.js';
import HomeButtons from '../HomeButtons/hButtons.js';
import Form from '../Form/form.js';
import Footer from '../Footer/footer.js';
import Featured from '../Featured/Feature.js';
import FTimeline from '../Timeline/Timeline.js';
import ThreeD from '../3dDesign/3d.js';










const Home = () => {

 


  return (

  <Grid>
    <div> <Navbar /> </div>
    <div> <HomeButtons /> </div>
    <div className='three'> <ThreeD /></div>
    <Featured />
    <div className='layer3 spacer'>
    <Container className='cards'>
    <Grid className='grid' container spacing={7}>
      <Grid item md={4}>
        <Card />
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
    </Grid>
    </Container>
    </div>
    <div className='layer5'></div>
    <h1 className='layer6con'>Alexis Velasquez</h1>
    <div className='layer6'>
      <div className='alexisContent'>
        <div className='aboutmeGroup'>
          <div className='aboutMe'>
            <p>Everyday I strive to be better than the day before.  I consider myself enthused and motivated to program, debug, and refactor projects on a daily basis. As your next programer  I am obligated not only deliver my work to you but to always provide more than what was asked. One major part that stands out is my work ethic, completing a project earlier than expect is always the priority. Hiring me would be a a great benefit to your team for completing a deadline on time, adding remarkable features to web applications, and to further innovate the process on building scalable projects. My name is Alexis Velasquez and I am a Full Stack Developer.</p>
          </div>
        </div>
      </div>
      <div className='divImg'>
        <div className='alexis'></div>
      </div>
      <div className='time'><FTimeline /></div>
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
          <p>One of the characteristics I have is when I start a project I can’t stop thinking about my process, making it as efficient as possible to get from point A to point B. I use efficiency to get my projects done on time as well as time management. </p>
          <p>One of the characteristics I have is when I start a project I can’t stop thinking about my process, making it as efficient as possible to get from point A to point B. I use efficiency to get my projects done on time as well as time management. </p>
          <p>This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and  emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions. This particular project i worked on to get a better undertsanding on how to program one data and connect to two client sides a management and emplyee interfaces. The project is an employee clock in system for jobs which can be used in real life jobs just install this project from github and follow instructions.</p>
      </div>
    </div>
    <div> <Form /> </div>
    <div className='logo2div'>
      <div className='logo2'></div>
    </div>
    <div className='layer2'></div>
    <div> <Footer /> </div>
  </Grid>
  )

}

export default Home;