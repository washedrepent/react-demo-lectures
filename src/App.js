import "./App.css";
import Description from "./components/Description";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import SportButtons from "./components/SportButtons";

function App() {
    const favouriteSportsArr = ["Football", "Basketball", "Baseball", "Hockey"];

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
            <SportButtons favouriteSports={favouriteSportsArr} />
        </div>
    );
}

export default App;
