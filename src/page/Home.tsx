import Category from "../component/Category"
import Header1 from "../component/Header1"
import LinkContainer from "../component/LinkContainer"
import Card from "../component/Card"
import RelatedDeals from "../component/RelatedDeals"
import SignupContainer from "../component/SignupContainer"



const Home = () => {
    return (
        <div className="home-container">
            <Header1 />
            <Category />
            <LinkContainer />
            <div className="card-container">
                <Card n={1} ch={"Best Choice"} />
                <Card n={2} ch={"Best Value"} />
                <Card n={3} />
                <Card n={4} />
            </div>
            <RelatedDeals />
            <SignupContainer />
        </div>
    )
}

export default Home
