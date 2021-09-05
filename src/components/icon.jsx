import shopping from "../public/img/shopping.svg";
import basketball from "../public/img/basketball.svg";
import drink from "../public/img/drink.svg";
import pin from "../public/img/pin.svg";
import sport from "../public/img/sport.svg";


export default function Icon({ shape, point }) {
    let style = {
        pointColor: {

        },
        imgColor: { },
        img: { }
    }


    switch (shape) {
        case "basketball":

            style.pointColor = { "--point-color": "#FE1E9A" }
            style.imgColor = { "--bg-color": "linear-gradient(#FE1E9A, #254DDE)" }
            style.img = basketball
            break;


        case "drink":

            style.pointColor = { "--point-color": "#00FFFF" }
            style.imgColor = { "--bg-color": "linear-gradient(#254DDE, #00FFFF)" }
            style.img = drink
            break;

        case "pin":

            style.pointColor = { "--point-color": "#254DDE" }
            style.imgColor = { "--bg-color": "linear-gradient(#254DDE, #181743)" }
            style.img = pin
            break;

        case "sport":
            style.pointColor = { "--point-color": "#FE1E9A" }
            style.imgColor = { "--bg-color": "linear-gradient(#FE1E9A, #254DDE)" }
            style.img = sport
            break;


        default:
            style.pointColor = { "--point-color": "#FEA64C" }
            style.imgColor = { "--bg-color": "linear-gradient(#FE1E9A, #FEA64C)" }
            style.img = shopping
            break;


    }
    return (
        <>
            {point ? <div className="left-point" style={style.pointColor}></div> : ""}

            <div className="img" style={style.imgColor}>
                <img src={style.img} alt="" />
            </div>
        </>
    )


}