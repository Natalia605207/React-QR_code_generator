export const BgColorAndSize = ({ setBgColor, size, setSize }) => {
    return(
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
    )
}