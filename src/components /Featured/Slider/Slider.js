import Image from "../Slider/ImageSlider.js";
import Mad from "../../../img/FIAT-SAMPLE-1.png";
import Mad2 from "../../../img/FIAT-SAMPLE-2.png";
import Mad3 from "../../../img/FIAT-SAMPLE-3.png";



const Slider = () => {

    const slides = [
        { url: Mad3, title: "Madness Autoworks3" },
        { url: Mad, title: "Madness Autoworks" },
        { url: Mad2, title: "Madness Autoworks2" },
    ]

    const conttainerStyles = {
        width: "730px",
        height: "350px",
        marginTop: "180px"
    }

    return (
        <div>
            <div style={conttainerStyles}>
                <Image slides={slides} />
            </div>
        </div>
    );
};

export default Slider;