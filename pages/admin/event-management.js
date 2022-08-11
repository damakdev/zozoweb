import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import { Widget } from "@uploadcare/react-widget";
import {
	adminAddProduct,
	adminSingleEvent,
	getAllEventsList,
	createBidEvent,
} from "../../services/admin";
import {
	getAllEvents,
	getSingleEvent,
	startBid,
	stopBid,
	cancelBid,
	_createCategory,
} from "../../store/slices/adminSlice/adminEventSlice";
import { formatNumber } from "../../utils";
import styles from "../../styles/merchant-events.module.scss";
import { DeleteIcon, Plus } from "../../public/svg/icons";
import { getAllCategories } from "../../services/customer";
import { toast } from "react-toastify";

function Bids() {
	const dispatch = useDispatch();
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);
	const { user } = useSelector((state) => state.auth.admin);
	const [viewBid, setViewBid] = useState(false);
	const [createEventModal, setCreateEventModal] = useState(false);
	const [eventForm, setEventForm] = useState({
		productName: "",
		description: "",
		category: "",
		price: "",
		width: "",
		height: "",
		color: "",
		weight: "",
		modelNo: "",
		image: "",
		productId: "",
		startDate: "",
		startTime: "",
		endDate: "",
		endTime: "",
		accessFee: "",
		minimumBid: "",
	});
	const [addNewProduct, setAddNewProduct] = useState(false);
	const [products, setProducts] = useState(null);
	const [categories, setCategories] = useState(null);
	const [categoryModal, setCategoryModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const categoryName = useRef("");
	const description = useRef("");
	const customStyles = {
		container: (provided) => ({
			...provided,
			width: "100%",
			position: "relative",
			backgroundColor: "rgba(202, 201, 201, 0.4)",
			// marginBottom: "1rem",
		}),
		control: (provided) => ({
			...provided,
			width: "100%",
		}),
		menuList: (provided) => ({
			...provided,
			textTransform: "capitalize",
		}),
		singleValue: (provided) => ({
			...provided,
			textTransform: "capitalize",
		}),
	};
	const categoryOptions = categories?.map((category) => {
		return { value: category.id, label: category.name };
	});
	const productOptions = products?.map((product) => {
		return { value: product.id, label: product.name };
	});
	function updateEventForm(e) {
		const { name, value } = e.target;
		setEventForm({
			...eventForm,
			[name]: value,
		});
	}
	function uploadImage(e) {
		const { cdnUrl } = e;
		setEventForm({ ...eventForm, image: cdnUrl });
	}

	const { singleEventLoading, event } = useSelector(
		(state) => state.adminEvent.singleEvent
	);

	const viewBidModal = (id) => {
		dispatch(getSingleEvent(id));
		setViewBid((viewBid) => !viewBid);
	};

	const openCreateEventModal = () => {
		setCreateEventModal(!createEventModal);
	};

	const beginBidEvent = (id) => {
		dispatch(startBid(id));
	};
	const stopBidEvent = (id) => {
		dispatch(stopBid(id));
	};
	const cancelBidEvent = (id) => {
		dispatch(cancelBid(id));
	};

	const createCategory = () => {
		dispatch(
			_createCategory({
				name: categoryName.current.value,
				description: description.current.value,
			})
		);
	};

	const deleteCategory = () => {};

	function createEvent(product_id) {
		setLoading(true);
		const body = {
			product_id: product_id || eventForm.productId,
			start_time: `${eventForm.startDate} ${eventForm.startTime}`,
			end_time: `${eventForm.endDate} ${eventForm.endTime}`,
			access_amount: eventForm.accessFee,
			minimum_amount: eventForm.minimumBid,
		};

		createBidEvent(body)
			.then(() => {
				toast.success("Event created");
				setLoading(false);
				setModalDisplay(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}

	function createProductAndEvent() {
		setLoading(true);
		const body = {
			name: eventForm.productName,
			description: eventForm.description,
			category: eventForm.category,
			price: eventForm.price,
			features: {
				width: eventForm.width,
				height: eventForm.height,
				color: eventForm.color,
				version: eventForm.modelNo,
				weight: eventForm.weight,
			},
			images: {
				main: eventForm.image,
			},
			merchant_id: "1",
			// merchant_id: user.id.toString(),
		};

		adminAddProduct(body).then((response) => {
			setLoading(false);

			const { product } = response.data.product;
			setEventForm({
				...eventForm,
				productId: product.id,
			});
			createEvent(product.id.toString());
		});
	}
	useEffect(() => {
		dispatch(getAllEvents());
		getAllCategories().then((response) => {
			setCategories(response.data.category);
		});
	}, [dispatch]);

	function eventHandler(e) {
		e.preventDefault();
		if (addNewProduct) {
			createProductAndEvent();
			return;
		}
		createEvent();
	}

	const thead = [
		"No",
		"Product",
		"Start Date",
		"End Date",
		"Merchant name ",
		"Status",
		"Gate fee",
	];

	const openCategory = () => {
		setCategoryModal(!categoryModal);
	};

	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<div className="flex justify-between items-center">
					<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
						Event Management
					</h3>
					<div className="flex mr-20">
						<div
							className=" flex items-center py-4 px-5 rounded-lg bg-purple-900 mr-5 text-white"
							onClick={openCreateEventModal}
						>
							<Plus />
							<button className="ml-3">Create Event</button>
						</div>
						<Button
							name="Create Category"
							paddingX="20px"
							paddingY="7px"
							onClick={openCategory}
						/>
					</div>
				</div>

				{!isLoading && (
					<Table
						name="eventMgt"
						thead={thead}
						data={allEvent}
						isSearch={true}
						isFilter={true}
						isExport={true}
						viewDetails={viewBidModal}
					/>
				)}
			</div>

			<Modal title="Category" display={categoryModal} close={openCategory}>
				<div className={`overflow-y-auto w-10/12 mx-auto pb-20 text-black`}>
					<div className=" my-20">
						<label className="block text-3xl font-bold mb-5 ">
							Category Name
						</label>
						<input
							className="bg-gray-200 px-10 py-5 outline-none rounded-lg w-full text-black "
							ref={categoryName}
						/>
						<label className="block text-3xl font-bold mt-20 mb-10 ">
							Description
						</label>
						<input
							className="bg-gray-200 px-10 mb-10 py-5 outline-none rounded-lg w-full text-black "
							ref={description}
						/>
						<div>
							<Button
								name="Create Category"
								paddingX="20px"
								paddingY="10px"
								onClick={createCategory}
							/>
						</div>{" "}
					</div>

					<h3 className="text-center text-black mb-10">Categories</h3>
					<ul className="list-disc ">
						{categories?.map((item, index) => {
							return (
								<li
									key={index}
									className="flex justify-between p-5 even:bg-gray-100 hover:bg-gray-100"
								>
									{" "}
									{item.name}
									<span className="flex justify-around">
										<DeleteIcon
											className="ml-9 cursor-pointer"
											onClick={deleteCategory}
										/>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</Modal>
			<Modal title="Bid Information" display={viewBid} close={viewBidModal}>
				{event && (
					<div className={` overflow-y-auto`}>
						<div className=" grid grid-cols-2 w-11/12  mx-auto items-center">
							<img
								src={event.product.images.main}
								className="rounded-lg h-4/12  "
							/>

							<div className="ml-10">
								<h3 className="text-4xl mb-10 text-black">
									{event.product.name}
								</h3>

								{event.approved &&
									event.started &&
									!event.canceled &&
									!event.ended && (
										<h3 className="text-green-600 mb-10">Ongoing</h3>
									)}

								{!event.started && (
									<h3 className="text-red-600 mb-10">Not started</h3>
								)}

								{!event.approved && (
									<h3 className="text-red-600 mb-10">Unapproved</h3>
								)}

								{event.canceled && (
									<h3 className="text-red-600 mb-10">Canceled</h3>
								)}

								{event.started && event.ended && (
									<h3 className="text-violet-600 mb-10">Concluded</h3>
								)}

								{event.approved &&
									!event.canceled &&
									event.started &&
									!event.ended && (
										<Button
											paddingX="2.2rem"
											paddingY="1.2rem"
											name="CANCEL BID"
											bgColor="#EB5757"
											border="none"
											fontSize="12px"
											isBoxShadow={true}
											onClick={() => cancelBidEvent(event.id)}
										/>
									)}

								{!event.started && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="START BID EVENT"
										bgColor="#1A8917"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
										className="mr-10"
										onClick={() => beginBidEvent(event.id)}
									/>
								)}

								{event.started && !event.canceled && !event.ended && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="STOP BID EVENT"
										bgColor="#743B96"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
										onClick={() => stopBidEvent(event.id)}
										className="ml-10"
									/>
								)}

								{event.approved && !event.started && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="UNAPPROVED"
										bgColor="#EB5757"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
									/>
								)}

								{!event.approved && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="APPROVED"
										bgColor="#1A8917"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
									/>
								)}
							</div>
						</div>
						<div
							style={{ backgroundColor: "#F3F3F3" }}
							className=" rounded-3xl w-11/12 mx-auto my-10 text-black"
						>
							<div className="w-full border-b border-gray-400 ">
								<h3 className="pt-10 pl-10 pb-7 text-3xl text-black">
									Basic Information
								</h3>
							</div>
							<div className="px-20 py-10 flex">
								<div>
									<p className="text-3xl my-10">Merchant name: :</p>
									<p className="text-3xl mb-10">Product :</p>
									<p className="text-3xl mb-10">Start date :</p>
									<p className="text-3xl mb-10">End date: :</p>
									<p className="text-3xl mb-10">Amount :</p>
									<p className="text-3xl mb-10">Winner :</p>
								</div>
								<div className="ml-20 ">
									<p className="text-2xl my-10 pt-1">Akinpelumi Lade </p>
									<p className="text-2xl mb-10">{event.product.name} </p>
									<p className="text-2xl mb-10">
										{new Date(event.start_time).toDateString()}{" "}
									</p>
									<p className="text-2xl mb-10">
										{new Date(event.end_time).toDateString()}
									</p>
									<p className="text-2xl mb-10">
										{formatNumber(event.access_amount)}{" "}
									</p>
									<p className="text-2xl  mb-10">
										{" "}
										{event.winner ? event.winner : "Undecided"}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</Modal>

			<Modal
				title="Create Event"
				display={createEventModal}
				close={openCreateEventModal}
				height="60rem"
				width="200rem"
			>
				<div className={`${styles.container} pb-20`}>
					<form onSubmit={eventHandler} className="w-10/12 mx-auto">
						<div className={styles["form-group"]}>
							{!addNewProduct && (
								<label htmlFor="products">
									Select Product <span>*</span>
								</label>
							)}
							<div className="mb-2">
								<input
									type="checkbox"
									name="addNewProduct"
									id="addNewProduct"
									checked={addNewProduct}
									onChange={() => setAddNewProduct((prevState) => !prevState)}
								/>
								<label htmlFor="addNewProduct">Add new product</label>
							</div>
							{!addNewProduct && (
								<Select
									styles={customStyles}
									options={productOptions}
									placeholder="Select Product"
									isClearable
									name="products"
									id="products"
									onChange={(e) =>
										setEventForm({
											...eventForm,
											productId: e?.value.toString(),
										})
									}
									isLoading={products ? false : true}
								/>
							)}
						</div>

						{addNewProduct && (
							<>
								<div className="mb-12">
									<label>
										Product Name <span>*</span>
									</label>
									<input
										name="productName"
										className="w-full rounded-lg"
										onChange={updateEventForm}
										required
									/>
								</div>

								<div className="mb-12">
									<label>
										Description <span>*</span>
									</label>
									<textarea
										className="w-full"
										name="description"
										onChange={updateEventForm}
										required
									></textarea>
								</div>

								<div className={styles["form-group"]}>
									<label htmlFor="category">
										Select Product Category<span>*</span>
									</label>
									<Select
										styles={customStyles}
										options={categoryOptions}
										// placeholder="Select Product"
										isClearable
										onChange={(e) =>
											setEventForm({
												...eventForm,
												category: [e.value.toString()],
											})
										}
										name="category"
										id="category"
										isLoading={categories ? false : true}
									/>
								</div>

								<div className="mb-12 grid grid-cols-2 gap-4">
									<div>
										<label htmlFor="price">
											Price (&#8358;) <span>*</span>
										</label>
										<input
											type="number"
											name="price"
											className="w-full rounded-lg"
											onChange={updateEventForm}
											required
										/>
									</div>
									<div>
										<label>Model Number </label>
										<input
											type="number"
											name="modelNo"
											className="w-full rounded-lg"
											onChange={updateEventForm}
										/>
									</div>
								</div>

								<div className="mb-12 grid grid-cols-2 gap-4">
									<div>
										<label htmlFor="width">Width (Specify the unit)</label>
										<input
											type="number"
											name="width"
											className="w-full rounded-lg"
											onChange={updateEventForm}
										/>
									</div>
									<div>
										<label>Height (Specify the unit)</label>
										<input
											type="number"
											name="height"
											className="w-full rounded-lg"
											onChange={updateEventForm}
										/>
									</div>
								</div>

								<div className="mb-12 grid grid-cols-2 gap-4">
									<div>
										<label htmlFor="weight">Weight (Specify the unit)</label>
										<input
											type="number"
											name="weight"
											className="w-full rounded-lg"
											onChange={updateEventForm}
										/>
									</div>
									<div>
										<label>Color</label>
										<input
											type="text"
											name="color"
											className="w-full rounded-lg"
											onChange={updateEventForm}
										/>
									</div>
								</div>

								<div className="mb-12">
									<label>
										Upload Images <span>*</span>
									</label>
									<div className="uploadcare-button">
										<Widget
											crop="1:1"
											onChange={uploadImage}
											publicKey={process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY}
										/>
									</div>
								</div>
							</>
						)}

						<div className="mb-12 grid grid-cols-2 gap-4">
							<div className="">
								<label htmlFor="minimumBid">
									Minimum Bid <span>*</span>{" "}
								</label>
								<input
									name="minimumBid"
									id="minimumBid"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>

							<div className="">
								<label htmlFor="accessFee">
									Access Fee <span>*</span>{" "}
								</label>
								<input
									name="accessFee"
									id="accessFee"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>
						</div>

						<div className="mb-12 grid grid-cols-2 gap-4">
							<div className="">
								<label>
									Start Date <span>*</span>
								</label>
								<input
									name="startDate"
									type="date"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>

							<div className="">
								<label>
									Start Time <span>*</span>
								</label>
								<input
									name="startTime"
									type="time"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>
						</div>

						<div className="mb-12 grid grid-cols-2 gap-4">
							<div className="">
								<label>
									End Date <span>*</span>
								</label>
								<input
									name="endDate"
									type="date"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>

							<div className="">
								<label>
									End Time <span>*</span>
								</label>
								<input
									name="endTime"
									type="time"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</div>
						</div>

						<div className="mt-10">
							<Button
								bgColor="#743B96"
								name={
									loading ? <ClipLoader color="#ffffff" size={15} /> : "Submit"
								}
								paddingX="20px"
								paddingY="8px"
								isBoxShadow={true}
								width="100%"
							/>
						</div>
					</form>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
