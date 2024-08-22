import { FiDownload } from "react-icons/fi";

export const QrCode = ({ qrCode }) => {
    return(
        <div className="result center"> 
		    <img src={qrCode} alt="qr code" /> 
		    <a className="downloadBtn" href={qrCode} download="QRCode" target="_blank" rel="noreferrer"> 
		    <FiDownload />
		    </a> 
	    </div> 
    )
}