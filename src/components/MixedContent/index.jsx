import React from "react";


const MixedContent = (el) => (
    <div className="MixedContent">
        <h1>{el.title}</h1>
        <img src=`assets/images/${el.img}.jpg`/>
        <p>{el.text}</p>
    </div>
);

export default MixedContent;