import { makeStyles } from '@material-ui/core/styles';
import Image from '../../img/portfolio.png';
import Image2 from '../../img/quiz.png';
import Image3 from '../../shapes/comdline.svg';
import Image4 from '../../shapes/socialMedia.png';

export default makeStyles((theme) => ({

typo: {
    color: '#fff37e',
    fontFamily: 'Dealerplate',
    fontWeight: 'bold',
    fontSize: '30px',
    letterSpacing: '2px'
  },
  
cardButton: {
    color: '#fff37e',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    padding: '15px',
    fontSize: '20px',
    fontFamily: 'Dealerplate',
    letterSpacing: '0.5px',
  },
  
media: {
    height: '200px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    
  },

media2: {
    height: '200px',
    backgroundImage: `url(${Image2})`,
    backgroundSize: 'cover',
    
},

media3: {
  height: '200px',
  backgroundImage: `url(${Image3})`,
  backgroundSize: 'cover',
  
},

media4: {
  height: '200px',
  backgroundImage: `url(${Image4})`,
  backgroundSize: 'cover',
  
},



}))