import MyButton from "./MyButton";

const Buttons = function (props) {
    const generateButtons = function () {
        return props.btnArr.map(function (btn, index) {
            return (
                <MyButton key={index} btnName={btn} onClick={props.onClick} />
            );
        });
    };

    return <>{generateButtons()}</>;
};

export default Buttons;
