import React from 'react';
import ReactDOM from 'react-dom';
import MixedContent from "components/MixedContent";


const App = () => (
    <div>
        <MixedContent title="Voici la première image" img="weird" text="Incroyable, non?"/>
        <MixedContent title="Voici la deuxième image" img="cat" text="Un chat!"/>
        <MixedContent title="Voici la troisième image" img="paint" text="C bo"/>
        <MixedContent title="Voici la quatrième image" img="explosion" text="Ça explose"/>
        <MixedContent title="Voici la cinquième image" img="dog" text="Un chieng!"/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('root'));

