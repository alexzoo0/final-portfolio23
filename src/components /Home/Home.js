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
import ThreeMobile from '../3dDesign/3dMoblie.js';



const Home = () => {




  return (

    <Grid>
      <div> <Navbar /> </div>
      <div> <HomeButtons /> </div>
      <div className='three'> <ThreeD /></div>
      <div className='threeM'> <ThreeMobile /></div>
      <Featured />
      <div className='layer3 spacer2'>
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
      <div className='layer6'>
        <h1 className='layer6con'>Alexis Velasquez</h1>
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
          <SpeedIcon className='speedIcon' style={{
            color: '#fff37e',
            fontSize: '100px'
          }} />
          <AccessTimeIcon className=''  style={{
            color: '#fff37e',
            fontSize: '100px'
          }} />
          <TerminalIcon className='' style={{
            color: '#fff37e',
            fontSize: '100px'
          }} />
        </div>
        <div className='iconContent'>
          <p>If i start a project I can’t stop thinking about the process, making it as efficient as possible to get from point A to point B. I use my time very wisley to get my projects done on time. Hit me with your deadline! </p>
          <p>I am confident that producing quality websites will deliver a high professional impression to customers. Working with me will make you web services easier and stress free.</p>
          <p>Starting and planing to develop a website is great start but what about plans to maintain/update your website? Well I’m here for that as well. Let's schedule time ahead to innovate your website. </p>
        </div>
      </div>
      <div className='logo2div'>
        <div> <Form /> </div>
        <div className='logo2 logoMobile'></div>
      </div>
      <div className='logo2div2'>
        <div className='logo2'></div>
      </div>
      <div className='layer2'></div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default Home;