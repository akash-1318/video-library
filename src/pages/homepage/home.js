import './home.css'
import {Link} from "react-router-dom"

function Home(){
    return(
        <main class="main">
            <div class="main__text-div">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">DevTube</span>
                    <span class="heading-primary--sub">is where learners belong</span>
                </h1>
                <Link to="/" class="btn btn--white btn--animated">Explore learning</Link>
            </div>
        </main>
    )
}

export {Home}