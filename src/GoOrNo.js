const GoOrNo = ({ switch1, switch2, switch3 }) => {
    return (
        <div className="right-block">
            <div
                id="noWay"
                className={switch1 && switch2 && switch3 ? "hidden" : ""}
            >
                NO WAY !
            </div>
            <div
                id="go"
                className={switch1 && switch2 && switch3 ? "" : "hidden"}
            >
                GO !{" "}
            </div>
        </div>
    );
};
export default GoOrNo;
