import Form from "./course-components/Form";
import ColorList from "./course-components/ColorList";
import Values from "values.js"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10))
  
  const addColor = (color)=>{
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return <main>
    <Form addColor = {addColor}/>
    <ColorList colors={colors} />
    <ToastContainer position="top-center"/> 
  </main>
};
export default App;




// import { useState } from "react";
// import ColorPalette from "./components/ColorPalette";

// const App = () => {
//   const [selectedColor , setSelectedColor] = useState("#1dcdff")
//   const [color, setColor] = useState("#1dcdff")

//   const giveColor = (e) => {
//     setSelectedColor(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setColor(selectedColor)
//   }

//   return <div className="container">
//     <div className="header">
//       <form onSubmit={handleSubmit} >
//         <label >Select color :</label>

//         <input type="color" value={color} style={{ height: "30px" }} onChange={giveColor} />

//         <input type="text" value={selectedColor} name="colorName" />

//         <button className="btn">Generate</button>
//       </form>
//       <ColorPalette color={color} />
//     </div>
//   </div>
// };
// export default App;