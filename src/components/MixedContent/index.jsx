import React from "react";

import image1 from "assets/images/1.jpg";
import image2 from "assets/images/2.jpg";
import image3 from "assets/images/3.jpg";
import image4 from "assets/images/4.jpg";
import image5 from "assets/images/5.jpg";

const images = {
    weird : {image1},
    cat : {image2},
    paint : {image3},
    explosion : {image4},
    dog : {image5},
};

const MixedContent = (el) => (
    <div className="MixedContent">
        <h1>{el.title}</h1>
        <img src={(test[el.img])}/>
        <p>{el.text}</p>
    </div>
);

export default MixedContent;