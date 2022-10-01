import {React, useState} from 'react'
import '../Styles/States.scss'


const States = () => {
    const [hello, setHello] = useState({
        text: "Zain",
        color: "red",
        className: "zain",
        myFatherName:"Mohammad Arshad",
    });

    const updateText = () => {
        setHello(previousState => {
          return { ...previousState, text: "Husnain", className:"husnain" }
        });
      }
  return (
    <div className={`${hello.className}`}>
      <h4>My Name is {hello.text} and My father name is {hello.myFatherName}!</h4>
      <button
        type="button"
        onClick={updateText}
      >Update My Name</button>
    </div>
  )
}

export default States