import {Link} from "react-router-dom"
import searchImg from '../assets/search.png'

const Header = () => {
  return (
    <div className="header-container">
        <div>
            <div>
                <img src={searchImg} alt="" />
                <input type="text" />
            </div>
        </div>
        <div>
            <Link to="/#">Categories</Link>
            <Link to="/#">Website Builders</Link>
            <Link to="/#">Today's deals</Link>
        </div>
    </div>
  )
}

export default Header