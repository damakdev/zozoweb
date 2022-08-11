import React from "react";
import styles from "../../styles/UI.module.scss";
import { colors } from "./colors";

function Button({
	name,
	paddingY = 0,
	paddingX = 0,
	width,
	fontSize = 14,
	fontWeight = 500,
	isBoxShadow,
	bgColor=colors.accentColor,
	color="white",
	border="1px solid #743b96",
	onClick,
	type,
	className
}) {
	const boxShadow = " 5px 15px 20px rgba(0, 0, 0, 0.15)";

      
	const customStyle = {
		padding: `${paddingY} ${paddingX}`,
		width: width ? `${width}` : "fit-content",
		fontSize: `${fontSize}`,
		backgroundColor: bgColor,
		color:color,
		boxShadow: isBoxShadow === true ? boxShadow : "none",
		border: border,
		fontWeight: fontWeight,

	};

	return (
		
			<button className={`${styles.Button} ${className}`} style={customStyle} type={type} onClick={onClick}>
				{name}
			</button>
		
	);
}

export default Button;
