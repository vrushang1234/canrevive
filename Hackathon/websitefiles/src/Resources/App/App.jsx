import "./style.css"
import  ReactDOM  from "react-dom"
import FirstPage from "../FirstPage/FirstPage"
import SecondPage from "../SecondPage/SecondPage"
import ThirdPage from "../ThirdPage/ThirdPage"
import FourthPage from "../FourthPage/FourthPage"

function earth_translate(){
    const node_earth_pic=document.getElementsByClassName("earth-pic")[0]
    const earth_pic=ReactDOM.findDOMNode(node_earth_pic)
    if(((-30/window.innerHeight)*window.pageYOffset+50)>=25){
        earth_pic.style.marginTop=""
        earth_pic.style.position="fixed"
        earth_pic.style.left=`${(-28/window.innerHeight)*window.pageYOffset+50}%`
    }
    else{
        earth_pic.style.marginTop="87vh"
        earth_pic.style.position="absolute"
    }

}
function textfade(){
    const node_save_earth=document.getElementsByClassName("save-earth")[0]
    const save_earth=ReactDOM.findDOMNode(node_save_earth)
    if(((-1/window.innerHeight)*window.pageYOffset+1)>=0){
        save_earth.style.display="block"
        save_earth.style.opacity=`${(-1.2/window.innerHeight)*window.pageYOffset+1}`
    }
    else{
        save_earth.style.display="none"
    }
}

function scrolled(){
    earth_translate()
    textfade()
}

export default function App(){
    window.addEventListener('scroll',scrolled)
    return(
        <div >
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
        </div>
    )
}