const MainImage = (props) => {
    return (
        <>
            <img className='mainImage' src={props.src} alt='{props.alt}' />
        </>
    );
};

export default MainImage;
