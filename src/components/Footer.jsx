
import ok_btn from "../public/img/ok.svg";
import calender_btn from "../public/img/calender.svg";
import plus_btn from "../public/img/plus.svg";

export default function Footer(){
    return(
        <footer>
        <div className="menu">
            <div className="ok-btn-container">
                <div className="ok-btn">
                    <a href="#">
                        <img src={ok_btn} alt=""/>
                    </a>
                </div>

            </div>
            <div className="calender-btn-container">
                <div className="calender-btn">
                    <a href="#">
                    <img src={calender_btn} alt="" />
                     
                    </a>
                </div>
            </div>
            <div className="plus-btn-container">
                <div className="plus-btn">
                    <a href="#">
                    <img src={plus_btn} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}