import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div>
          <span>Category</span>
          <Link to="#">Web Builder</Link>
          <Link to="#">Hosting</Link>
          <Link to="#">Data Center</Link>
          <Link to="#">Robotic-Automation</Link>
        </div>

      </div>
      <div>
        <div>
          <span>Contact</span>
          <Link to="#">Contact</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms Of Service</Link>
          <Link to="#">Category</Link>
          <Link to="#">About</Link>
        </div>

      </div>
      <div>
        <div>
          <Link to={"#"}>United State</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer