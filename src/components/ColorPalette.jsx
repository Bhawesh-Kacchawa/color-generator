import values from "values.js"
// import {v4 as uuidv4} from "uuid"
const ColorPalette = ({color})=>{
    const colorvals = new values(color).all(10)
    console.log(colorvals);
    return <div className="colorBlocks">
        {colorvals.map((item)=>{
            return <div className="blocks" style={{backgroundColor : `#${item.hex}`}}>{item.hex}</div>
        })}
    </div>
}

export default  ColorPalette