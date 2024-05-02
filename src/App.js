import { useEffect, useState } from 'react'; 
import './App.css'; 
import { FaArrowCircleRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function App() { 
const [input, setInput] = useState(""); 
const [word, setWord] = useState(""); 
const [size, setSize] = useState(250); 
const [bgColor, setBgColor] = useState("ffffff"); 
const [qrCode, setQrCode] = useState(""); 

useEffect(() => { 
	setQrCode 
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
}, [word, size, bgColor]); 

function handleClick() { 
	setWord(input); 
} 

return (
  <motion.div className="container center"
  initial={{ opacity:0 }}
  animate={{ opacity:1 }}
  transition={{ duration: 2, delay: 1.5 }}
>
	<h1>QR Code Generator</h1> 
	<div className="center"> 
		<div className="input-container"> 
		<input className="info"
      type="text"
      onChange={(e) => {setInput(e.target.value)}} 
			placeholder="Enter text or URL" /> 
		<FaArrowCircleRight className="generateBtn" onClick={handleClick} /> 
		</div> 
		<div className="bgColor-size"> 
		<p>Background Color:</p> 
		<input className="bg-input"
    type="color" 
    onChange={(e) => 
		{ setBgColor(e.target.value.substring(1)) }} /> 
		<p>Size:</p> 
		<input className="size-input"
    type="range" 
    min="100" 
    max="300"
		value={size}
    onChange={(e) => 
		{setSize(e.target.value)}} /> 
		</div> 
	</div> 
	<div className="result center"> 
  <img src={qrCode} alt="qr code" /> 
		<a className="downloadBtn" href={qrCode} download="QRCode" target="_blank" rel="noreferrer"> 
		<FiDownload />
		</a> 
	</div> 
	</motion.div>
); 
} 

export default App;
