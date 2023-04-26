import "./style.css"
export default function FirstPage(){
    return(
        <div className="FirstPage">
            <h1 className="save-earth">Save Earth</h1>
            <img className="earth-pic" src={require("./Earth2.png")} alt="earth-pic"/>
        </div>
    )
}