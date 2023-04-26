import "./style.css"
export default function Icons(){
    return(
        <div className="Icons">
        <div className="qr iconcontainer">
            <img className="QR" src={require("./QR.png")} alt="qr code" />
            <h2 className="icon_text"> Scan the code on CanRevive bag</h2>
        </div>
        <div className="trash iconcontainer">
            <img className="Trash" src={require("./Trash.png")} alt="qr code" />
            <h2 className="icon_text">Recycle the plastic bottles/ tin cans in the nearest recycling bin</h2>
        </div>
        <div className="wallet iconcontainer">
            <img className="Wallet" src={require("./Wallet.png")} alt="qr code" />
            <h2 className="icon_text">Sit back and relax while you get cash-back for the number of bottles recycled</h2>
        </div>          
        </div>
    )
}