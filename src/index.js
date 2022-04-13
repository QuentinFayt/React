import React from 'react';
import ReactDOM from 'react-dom';
import MixedContent from "components/MixedContent";

import Image1 from "assets/images/1.jpg";
import Image2 from "assets/images/2.jpg";
import Image3 from "assets/images/3.jpg";
import Image4 from "assets/images/4.jpg";
import Image5 from "assets/images/5.jpg";

const App = () => (
    <div>
        <MixedContent title="Voici la première image" img={Image1} text="Incroyable, non?"/>
        <MixedContent title="Voici la deuxième image" img={Image2} text="Un chat!"/>
        <MixedContent title="Voici la troisième image" img={Image3} text="C bo"/>
        <MixedContent title="Voici la quatrième image" img={Image4} text="Ça explose"/>
        <MixedContent title="Voici la cinquième image" img={Image5} text="Un chieng!"/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('root'));

