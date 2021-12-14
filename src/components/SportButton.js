const SportButton = function (props) {
    const onButtonClicked = function () {
        props.onClick(props.btnName);
    };
    return (
        <button className='myBtn' onClick={onButtonClicked}>
            {props.btnName}
        </button>
    );
};

export default SportButton;
