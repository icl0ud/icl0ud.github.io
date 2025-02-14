import { Header } from "../components/Header"
import { About } from "../components/About"
import { Teaching } from "../components/Teaching"
import { PaperList } from "../components/PaperList"
import { ProjectList } from "../components/ProjectList"

export const Home = () => {


    return <div className="home">
        <div className="subhome">
        <Header/>
        <About/>
        <hr/>
        {/* <Teaching/> */}
        {/* <hr/> */}
        {/* <PaperList/> */}
        <ProjectList />

        </div>
    </div>

}