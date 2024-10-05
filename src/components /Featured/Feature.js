import { Grid } from '@material-ui/core';
import Mad from '../../img/madness-logo.png';
import Slider from "./Slider/Slider.js";





const Featured = () => {

    return(
        <Grid>
            <div className='featuredbg'>
                <div className='featuredTitle'><p>Featured</p></div>
                    <div className='featuredList'>
                        <div className='ftitle'>
                            <h3>MADNESS AUTOWORKS</h3>
                            <p>I decided to take it a step further and decided to <br/>combine illustartion with imagery.<br/> <br/>The Process<br/>
                            - Research (competitors, clients)<br/>
                            - Target demographic (age, gender) <br/>
                            - Brand identity (logo, colors, typography) <br/>
                            - Color theory (grayscale, color scheme) <br/><br/>

                            I start on my three sample sketches based on the process above. <br/><br/>

                            The process: 2hrs <br/>
                            3 samples + mobile versions: 9hrs  </p>
                        </div>
                        <div className='flogo'>
                        <img src={Mad} alt='fiat' width='500px' height='100px'/>
                        </div>
                    </div>
                </div>
                <div className='productCard'>
                <Slider />
            </div>
            <div className='bgShape'>
            <img src={Mad} alt='fiat' width='500px' height='100px'/>    
            </div>
        </Grid>
        
    )

}

export default Featured;