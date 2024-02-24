import imgwix from '../assets/wixword.png'
import star from "../assets/star.png"
import diamond from "../assets/dimond.png"
import cup from "../assets/cup.png"
import circleTick from "../assets/circleTick.png"

const Card = ({ n, ch }: { n: number, ch?: string }) => {
    return (
        <div className="card">
            {
                (n === 1) && <div className='choices'>
                    <img src={cup} alt="" />
                    <span>{ch}</span>
                </div>
            }
            {
                (n === 2) && <div className='choices'>
                    <img src={diamond} alt="" />
                    <span>{ch}</span>
                </div>
            }

            <div className='counting'>
                <span>{n}</span>
            </div>
            <div className='first'>
                <img src={imgwix} alt="" />
                <span>Builder 1</span>
            </div>
            <div className='second'>
                <span><span>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                </span>
                <div>
                    <span>Main highlights</span>
                    {
                        n === 4 ? <>
                            <div className='main-highlight'>
                                <div>
                                    <span>9.9</span>
                                    <span>building responsive</span>
                                </div>
                                <div>
                                    <span>8.9</span>
                                    <span>Cool</span>
                                </div>
                                <div>
                                    <span>8.9</span>
                                    <span>Docs</span>
                                </div>
                            </div>

                            <div className='we-love'>
                                <span>Why we love it</span>
                                <div>
                                    <img src={circleTick} alt="" />
                                    <span>Documentation</span>
                                </div>
                                <div>
                                    <img src={circleTick} alt="" />
                                    <span>Documentation</span>
                                </div>
                                <div>
                                    <img src={circleTick} alt="" />
                                    <span>Documentation</span>
                                </div>
                            </div>
                        </> : <div>
                            <span>[What You Get]: Gain access to the SiteCraft design studio,
                                featuring a robust selection of design elements,
                                SEO optimization tools, and e-commerce integrations.</span>
                        </div>
                    }

                </div>
                <div>
                    <button>show more</button>
                </div>

            </div>
            <div className='third'>
                <div>
                    <span>9.8</span>
                    <span>Exceptional</span>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                <button>View</button>

            </div>

        </div>
    )
}

export default Card