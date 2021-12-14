import SportButton from "./SportButton";

const SportButtons = function (props) {
    const generateButtons = function () {
        return props.btnArr.map(function (btn, index) {
            return (
                <SportButton
                    key={index}
                    btnName={btn}
                    onClick={props.onClick}
                />
            );
        });
    };

    return <>{generateButtons()}</>;
};

export default SportButtons;
