const ButtonPair = (props) => {
    return (
        <div className="buttonPair">
            <div
                id="on"
                onClick={() => {
                    props.setSwitch(!props.switch);
                }}
                className={props.switch === true ? "off" : "on"}
            >
                ON
            </div>
            <div
                id="off"
                onClick={() => {
                    props.setSwitch(!props.switch);
                }}
                className={props.switch === true ? "on" : "off"}
            >
                OFF
            </div>
        </div>
    );
};
export default ButtonPair;
