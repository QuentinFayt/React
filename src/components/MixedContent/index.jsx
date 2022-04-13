import React from "react";


const MixedContent = (el) => (
    <div className="MixedContent">
        <h1>{el.title}</h1>
        <img src={el.img}/>
        <p>{el.text}</p>
    </div>
);

export default MixedContent;