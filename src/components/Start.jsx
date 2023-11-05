import { useRef } from "react";
import { Button, Col,Row } from "react-bootstrap";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (

        <div className="start d-flex flex-column justify-content-center">
            <h1 className=" mb-5 text-light"><i class="fa-brands fa-buffer fa-beat-fade fa-2xl"></i>QuiZZinn</h1>
            <h3 className="word text-center mt-5">Lets Begin the Shot!!!</h3>
    <div className="ms-5">
              <input
                className="startInput mt-5"
                placeholder="Enter your name"
                ref={inputRef}
              />
              <Button className="startButton mt-3 p-1 pb-2" onClick={handleClick}>
               START
              </Button>
        
    </div>    
    </div>

);
}
