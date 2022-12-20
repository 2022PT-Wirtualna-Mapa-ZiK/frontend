import React, { useState } from "react";
import './style.css';

type InputProps ={
   type : string;
   label : string;
}

function InputField (props : InputProps){
   
   const [style, setStyle] = useState("input");
   //props.type = "inputError"

   const changeStyle = () => {     
      setStyle("inputError");   
   };

   return (

         <div className={`${props.type}`} >

            {/* class names given in the parameter */}

            {/* to make Capitalize first letter */}
            <label >{props.label.charAt(0).toUpperCase() + props.label.slice(1)}</label>  
            <input type={`${props.type}`} className={style} name={`${props.type}`} 
                  onClick={changeStyle}/>
         </div>              
       
     );
    
}

export default InputField;
