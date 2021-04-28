const ButtonPair = (props) => {
    console.log(props.switch);
    return (
        <div className="buttonPair">
            <div
                id="on"
                onClick={() => {
                    props.setSwitch(true);
                }}
                className={props.switch === true ? "on" : "off"}
            >
                ON
            </div>
            <div
                id="off"
                onClick={() => {
                    props.setSwitch(false);
                }}
                className={props.switch === true ? "off" : "on"}
            >
                OFF
            </div>
        </div>
    );
};
export default ButtonPair;
