import React from "react";
import { EditIcon } from "../../../public/svg/icons";
import styles from "../../../styles/merchant-profile.module.scss";
import Button from "../../ui/Button";

function AccountDetails({ canEdit, isEdit }) {
	return (
		<div className={`${styles.profile_form} w-11/12 mx-auto`}>
			<div className="flex items-center justify-between w-1/5">
				<h4> Account Information</h4>
				<span
					className="flex items-center mt-8 cursor-pointer"
					onClick={canEdit}
				>
					<p className="mr-3">Edit</p>
					<EditIcon />
				</span>
			</div>

			<div className="flex items-center">
				<div className={styles.labels}>
					<p>Account name:</p>
					<p>Account number:</p>
					<p>Bank name: </p>
					<p>Bank email:</p>
				</div>

				<div className={styles.details}>
					<input
						defaultValue="Akinpelumi Lade"
						className={`${!isEdit ? "border-b-2 border-black mt-5" : ""}`}
						disabled={isEdit}
					/>

					<input
						defaultValue="003747665155"
						className={`${!isEdit ? "border-b-2 border-black mt-3" : ""}`}
						disabled={isEdit}
					/>
					<input
						defaultValue="First bank"
						className={`${!isEdit ? "border-b-2 border-black mt-3" : ""}`}
						disabled={isEdit}
					/>
					<input
						defaultValue="AkinpelumiLade23@gmail.com"
						className={`${!isEdit ? "border-b-2 border-black mt-3" : ""} mb-5`}
						disabled={isEdit}
					/>
				</div>
			</div>
	{ !isEdit &&		<div className="mt-10">
				<Button
					name="Cancel"
					bgColor="#7D7D7D"
					isBoxShadow={true}
					paddingX="50px"
					paddingY="8px"
					border="none"
				/>

				<span className="ml-5">
					<Button
						name="Save"
						isBoxShadow={true}
						paddingX="60px"
						paddingY="8px"
						border="none"
					/>
				</span>
			</div>}
		</div>
	);
}

export default AccountDetails;
