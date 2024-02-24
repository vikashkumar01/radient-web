import info from "../assets/info.png"
import tick from "../assets/tick.png"
import down from "../assets/down.png"

const Header1 = () => {
    return (
        <div className="header1-container">
            <div>
                <span>Best Website builders in the US</span>
            </div>

            <div>
                <div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Last Updated - February 22, 2020</span>
                    </div>
                    <div>
                        <img src={info} alt="" />
                        <span>Advertising Disclosure</span>
                    </div>
                </div>
                <div>
                    <span>Top Relevant</span>
                    <img src={down} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header1