import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className="category-container">
            <Link to="#">Tools</Link>
            <Link to="#">AWS Builder</Link>
            <Link to="#">Start</Link>
            <Link to="#">Build Supplies</Link>
            <Link to="#">Tooling</Link>
            <Link to="#">BlueHosting</Link>
        </div>
    )
}

export default Category