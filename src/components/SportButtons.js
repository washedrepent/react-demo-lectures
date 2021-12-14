import { useState } from "react";
import SportButton from "./SportButton";

const SportButtons = function (props) {
    const [favouriteSport, setFavouriteSport] = useState(
        "Please select a favourite sport"
    );

    const generateButtons = function () {
        return props.favouriteSports.map(function (sport, index) {
            return (
                <SportButton
                    key={index}
                    btnName={sport}
                    onClick={() => {
                        setFavouriteSport(sport);
                    }}
                />
            );
        });
    };

    return (
        <>
            {generateButtons()}
            <h2 className='sport-prompt'>Favourite Sports</h2>
            <h3 className='sport-selected'>{favouriteSport}</h3>
        </>
    );
};

export default SportButtons;
