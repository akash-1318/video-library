import './home.css'
import {Link} from "react-router-dom"

function Home(){
    return(
        <main className="main">
            <div className="main__text-div">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">DevTube</span>
                    <span className="heading-primary--sub">is where learners belong</span>
                </h1>
                <Link to="/videolisting" className="btn btn--white btn--animated">Explore learning</Link>
            </div>
        </main>
    )
}

export {Home}