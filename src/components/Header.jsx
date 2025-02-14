import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


export const Header = () => {
    const headerStyle = {marginBottom: "2px", marginTop: "2px", color: "#dcdfef"}

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <Face imageUrl="me.jpg" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
                <h1 style={{marginBottom: "5px", color: "#ACD7EC"}}>Cameron Mohne</h1>
                <h2 style={headerStyle}>M.S. Student at Stanford University</h2>
                <h3 style={headerStyle}>mohnec1 /at/ stanford.edu</h3>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://github.com/icl0ud" aria-label="Github Link" target="_blank"><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "#84DCC6"}}/></a>
                    <a href="https://www.linkedin.com/in/cameron-mohne/" aria-label="LinkedIn Link" target="_blank"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "#8B95C9"}}/></a>                </div>
            </div>
        </div>
    )

}