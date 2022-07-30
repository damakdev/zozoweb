import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Modal from "../../components/modal/modal";
import Table from "../../components/Table/Table";
import Button from "../../components/ui/Button";
import { DeleteIcon, EditIcon } from "../../public/svg/icons";

function UserMgt() {
	const [tab, setTab] = useState("all");
	const [modalDisplay, setModalDisplay] = useState(false);
	const [createRole, setCreateRole] = useState(false);
	const [createAcct, setCreateAcct] = useState(false);
	const [viewRole, setViewRole] = useState(false);
	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	const openCreateRole = () => {
		setCreateRole(!createRole);
	};

	const openCreateAcct = () => {
		setCreateAcct(!createAcct);
	};

	const openViewRole = () => {
		setViewRole(!viewRole);
	};

	const thead = ["First Name", "Last Name", "Email", "Role"];
	const subNav = [
		{
			name: "All",
			number: "12",
		},
		{
			name: "Super Admin",
			number: "8",
		},
		{
			name: "Sub Admin",
			number: "3",
		},
		{
			name: "Manager",
			number: "2",
		},
	];
	const data = [
		{
			first: "Oshinbajo",
			last: "Buhari",
			email: "user@gmail.com",
			role: "Super Admin",
		},
		{
			first: "Oshinbajo",
			last: "Buhari",
			email: "user@gmail.com",
			role: "Super Admin",
		},
		{
			first: "Oshinbajo",
			last: "Buhari",
			email: "user@gmail.com",
			role: "Super Admin",
		},
	];

	const roles = ["Super Admin", "Sub Admin", "Manager", "Customer"];

	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<div className="w-11/12 mx-auto pb-20">
					<div className="flex items-center justify-between ">
						<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
							User Management
						</h3>

						<div className="">
							<Button
								bgColor="#743B96"
								name="Create Role"
								border="none"
								paddingX={"20px"}
								paddingY="10px"
								onClick={openCreateRole}
							/>

							<Button
								bgColor="#743B96"
								name="View Roles"
								border="none"
								paddingX={"20px"}
								paddingY="10px"
								onClick={openViewRole}
								className="ml-4"
							/>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-10 pb-20">
						<div className="bg-red-400 py-10 text-white text-center rounded-lg shadow-lg ">
							<h5 className="text-5xl mb-10 t">Super Admin</h5>
							<p className="text-3xl">4 Accounts</p>
						</div>

						<div className="bg-violet-600 py-10  text-white text-center rounded-lg shadow-lg ">
							<h5 className="text-5xl mb-10">Sub Admin</h5>
							<p className="text-3xl">4 Accounts</p>
						</div>

						<div className="bg-teal-500 text-white py-10  text-center rounded-lg shadow-lg ">
							<h5 className="text-5xl mb-10">Manager</h5>
							<p className="text-3xl">3 Accounts</p>
						</div>
					</div>

					<div
						className="mt-20  mb-10 flex justify-between "
						style={{ borderBottom: "1px solid grey" }}
					>
						<ul className=" flex  text-3xl ml-10">
							{subNav.map((item, index) => {
								return (
									<li
										key={index}
										className={`${
											tab == item.name.toLocaleLowerCase()
												? "border-b-2 border-violet-700 px-10 pb-5 text-black "
												: ""
										} mr-20 cursor-pointer`}
										onClick={() => setTab(item.name.toLocaleLowerCase())}
									>
										{item.name} ({item.number})
									</li>
								);
							})}
						</ul>

						<div className=" pb-7" style={{ marginTop: "-19px" }}>
							<Button
								bgColor="#743B96"
								name="Create Account"
								border="none"
								paddingX={"20px"}
								paddingY="10px"
								onClick={openCreateAcct}
							/>
						</div>
					</div>

					<Table
						name="userMgt"
						thead={thead}
						data={data}
						viewDetails={viewDetails}
					/>
				</div>
			</div>

			<Modal title="Create Role" display={createRole} close={openCreateRole}>
				<div className={`overflow-y-auto w-10/12 mx-auto pb-20`}>
					<div>
						<label className="block text-black text-3xl mb-5 mt-10">
							Account name
						</label>
						<input className="w-full rounded-xl bg-slate-200 py-4 outline-none px-10" />
					</div>

					<div>
						<label className="block text-black text-3xl mb-5 mt-10">Role</label>
						<select className="w-full rounded-xl mb-10 bg-slate-200 py-6 outline-none px-10 pr-10">
							<option>Role</option>
						</select>
					</div>

					<div>
						<label className="block text-black text-3xl mb-5 mt-10">
							Access Priviledges
						</label>
						<select className="w-full rounded-xl mb-20 bg-slate-200 py-6 outline-none px-10 pr-10">
							<option>Role</option>
						</select>
					</div>

					<Button
						name="Submit"
						width="100%"
						isBoxShadow={true}
						paddingY="13px"
					/>
				</div>
			</Modal>

			<Modal title="Create Account" display={createAcct} close={openCreateAcct}>
				<div className={`overflow-y-auto w-10/12 mx-auto pb-20`}>
					<div>
						<label className="block text-black text-3xl mb-5 mt-10">
							Account name
						</label>
						<input className="w-full rounded-xl bg-slate-200 py-4 outline-none px-10" />
					</div>

					<div>
						<label className="block text-black text-3xl mb-5 mt-10">
							Email
						</label>
						<input className="w-full rounded-xl bg-slate-200 py-4 outline-none px-10" />
					</div>

					<div>
						<label className="block text-black text-3xl mb-5 mt-10">Role</label>
						<select className="w-full rounded-xl mb-10 bg-slate-200 py-6 outline-none px-10 pr-10">
							<option>Role</option>
						</select>
					</div>

					<Button
						name="Submit"
						width="100%"
						isBoxShadow={true}
						paddingY="13px"
					/>
				</div>
			</Modal>

			<Modal title="Roles" display={viewRole} close={openViewRole}>
				<div className={`overflow-y-auto w-10/12 mx-auto pb-20`}>
					<ul className="list-disc">
						{roles.map((item, index) => {
							return (
								<li
									key={index}
									className="flex justify-between p-5 even:bg-gray-100 hover:bg-gray-100"
								>
									{" "}
									{item}
									<span className="flex justify-around">
										<EditIcon className="cursor-pointer" />{" "}
										<DeleteIcon className="ml-9 cursor-pointer" />
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default UserMgt;
