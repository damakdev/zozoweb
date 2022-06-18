import React from "react";
import styles from "../../styles/UI.module.scss";

function PurpleButton({
	name,
	paddingY = 0,
	paddingX = 0,
	width,
	fontSize = 14,
	isBoxShadow,
}) {
	const boxShadow = " 5px 15px 20px rgba(0, 0, 0, 0.15)";

      
	const customStyle = {
		padding: `${paddingY} ${paddingX}`,
		width: width ? `${width}` : "fit-content",
		fontSize: `${fontSize}px`,
		boxShadow: isBoxShadow === true ? boxShadow : "none",
	};

	return (
		<>
			<button className={styles.purpleButton} style={customStyle}>
				{name}
			</button>
		</>
	);
}

export default PurpleButton;
