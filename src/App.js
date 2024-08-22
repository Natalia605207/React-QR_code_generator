import { useEffect, useState } from 'react'; 
import './App.css'; 
import { motion } from "framer-motion";
import { TextInput } from './components/TextInput';
import { BgColorAndSize } from './components/BgColorAndSize';
import { QrCode } from './components/QrCode';

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
	<div className="settings center"> 
		<TextInput setInput={setInput} handleClick={handleClick} />
		<BgColorAndSize setBgColor={setBgColor} size={size} setSize={setSize} />
	</div> 
	<QrCode qrCode={qrCode} />
	</motion.div>
); 
} 

export default App;
