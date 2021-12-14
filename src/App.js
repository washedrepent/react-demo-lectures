import "./App.css";
import { useState } from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import MyButton from "./components/MyButton";

function App() {
    const [sportText, setSportText] = useState("Please select a sport");
    const onButtonClick = function (activity) {
        setSportText(activity);
    };

    return (
        <div className='App'>
            <Header
                title='Canadian Sports'
                subtitle='The best sports in Canada'
            />
            <MainImage
                src='https://upload.wikimedia.org/wikipedia/commons/0/0d/Transparentcanadacultureicon.png'
                alt='Canadian Sports'
            />
            <Description
                description='Canada has a wide variety of games. It ranges from summer to winter
            sports. The most common sports are ice hockey, lacrosse, soccer,
            basketball, and ice hockey.'
            />
            <MyButton btnName='Ice Hockey' onClick={onButtonClick} />
            <MyButton btnName='Basketball' onClick={onButtonClick} />
            <MyButton btnName='Soccer' onClick={onButtonClick} />

            <h2 className='sport-prompt'>Favourite Sports</h2>
            <h3 className='sport-selected'>{sportText}</h3>
        </div>
    );
}

export default App;
