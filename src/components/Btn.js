function Btn({title, bgColor,color,border,padding, clickFunc }){
    const BtnStyle = {
            background: bgColor,
            color: color? color : "white",
            borderRadius: "5px",
            cursor: "pointer",
            padding: padding,
            border: border? border : "none",
            outline: "none",
            display: "inline-block",
            margin: "10px"
    }
    return(
        <button style={BtnStyle} onClick={clickFunc}>{title}</button>
    )
}

export default Btn;