import { FaArrowCircleRight } from "react-icons/fa";

export const TextInput = ({ setInput, handleClick }) => {
    return(
		<div className="input-container"> 
		<input className="info"
        type="text"
        onChange={(e) => {setInput(e.target.value)}} 
			placeholder="Enter text or URL" /> 
		<span><FaArrowCircleRight className="generateBtn" onClick={handleClick} /></span>
		</div> 
    )
}