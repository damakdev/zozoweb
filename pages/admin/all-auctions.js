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

import { useRouter } from "next/router";
// import Button from "../../components/ui/button/";
import {
	addProduct,
	getProducts,
	createBidEvent,
} from "../../services/merchant";
// import {
// 	adminAddProduct,
// 	adminSingleEvent,
// 	getAllEventsList,
// 	// createBidEvent,
// } from "../../services/admin";
import {
	getAllEvents,
	getSingleEvent,
	startBid,
	stopBid,
	cancelBid,
	_createCategory,
	_approveBid,
} from "../../store/slices/adminSlice/adminEventSlice";
import { formatNumber, truncateString } from "../../utils";
import styles from "../../styles/admin/merchant-events.module.scss";
import { DeleteIcon, Plus } from "../../public/svg/icons";
import { getAllCategories } from "../../services/customer";
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination";
import { paginate } from "../../utils";
import Loader from "../../components/loader";
import useWindowDimension from "../../hooks/useWindowDimension";

function AllBids() {
	const dispatch = useDispatch();
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);
	const router = useRouter();
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
		starliate: "",
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
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const { width } = useWindowDimension();
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
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
			start_time: `${eventForm.starliate} ${eventForm.startTime}`,
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
		console.log("yh");
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
			// merchant_id: user.merchant.id.toString(),
		};
		console.log(body);
		addProduct(body)
			.then((response) => {
				setLoading(false);
				console.log(response);
				const { product } = response.data.product;
				setEventForm({
					...eventForm,
					productId: product.id,
				});
				createEvent(product.id.toString());
			})
			.catch((error) => setLoading(false));
	}
	useEffect(() => {
		dispatch(getAllEvents());
		getAllCategories().then((response) => {
			setCategories(response.data.category);
		});
	}, [dispatch]);

	function eventHandler(e) {
		e.prevenliefault();

		// if (addNewProduct) {
		// 	createProductAndEvent();
		// 	return;
		// }
		createProductAndEvent();
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
	const paginatedData = paginate(allEvent, currentPage, pageSize);
	return (
		<AdminLayout>
			<div
				className="pt-10 pb-20 mt-1 w-11/12 mx-auto"
				style={{ backgroundColor: "#E5E5E5" }}
			>
				{width < 780 && (
					<div className="sm:flex-col lg:flex-row justify-between items-center">
						<h3 className="py-20 text-5xl font-semibold  mt-1 text-semibold text-black">
							All Auctions
						</h3>
						<div className="flex ">
							{/* <div
								className=" flex items-center py-4 px-5 rounded-lg bg-purple-900 mr-5 text-white"
								onClick={openCreateEventModal}
							>
								<Plus />
								<button className="ml-3">Create Event</button>
							</div> */}
							<Button
								name="Create Category"
								paddingX="20px"
								paddingY="7px"
								onClick={openCategory}
							/>
						</div>
					</div>
				)}

				{width >= 780 && (
					<div className="flex lg:flex-row justify-between items-center">
						<h3 className="py-20 text-5xl font-semibold  mt-1 text-semibold text-black">
							All Auctions
						</h3>
						<div className="flex ">
							{/* <div
								className=" flex items-center py-4 px-5 rounded-lg bg-purple-900 mr-5 text-white"
								onClick={openCreateEventModal}
							>
								<Plus />
								<button className="ml-3">Create Event</button>
							</div> */}
							<Button
								name="Create Category"
								paddingX="20px"
								paddingY="7px"
								onClick={openCategory}
							/>
						</div>
					</div>
				)}

				{!allEvent ? (
					<div className="h-screen" style={{ marginTop: "-160px" }}>
						<Loader />
					</div>
				) : width >= 780 ? (
					<>
						<Table
							name="allAuctions"
							thead={thead}
							data={paginatedData}
							isSearch={true}
							isFilter={true}
							isExport={true}
							viewDetails={viewBidModal}
						/>

						<Pagination
							items={allEvent.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				) : (
					<>
						{paginatedData.map((item, index) => {
							return (
								<div
									className={` grid grid-cols-2  text-2xl my-8 py-5   ${styles.mobile_table}`}
									key={index}
								>
									<div
										className="py-9 pl-8  shadow-lg font-bold"
										style={{ background: "#F3F3F3" }}
									>
										<ul>
											{thead.map((item, index) =>
												item !== "No" ? <li key={index}>{item}</li> : ""
											)}
										</ul>
									</div>
									<div className="py-9  pl-5 bg-white  shadow-lg ">
										<ul>
											<li>{truncateString(item.product.name, 20)}</li>
											<li>{new Date(item.start_time).toDateString()}</li>
											<li>{new Date(item.end_time).toDateString()}</li>
											<li>{item.merchant_name}</li>
											<li>
												<span
													className={`${
														item.approved ? "text-green-600 " : "text-red-600 "
													} text-2xl`}
												>
													{item.approved ? "Approved" : "Unapproved"}
												</span>
											</li>
											<li>{formatNumber(item.minimum_amount)}</li>

											<li onClick={() => viewBidModal(item.id)}>
												<Button
													name="View more details"
													paddingY="12px"
													paddingX="12px"
												/>
											</li>
										</ul>
									</div>
								</div>
							);
						})}

						<Pagination
							items={allEvent.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				)}
			</div>

			<Modal
				title="Category"
				display={categoryModal}
				close={openCategory}
				height="500px"
				width="900px"
			>
				<div
					className={`overflow-y-auto w-11/12 px-5 mx-auto pb-20 text-black`}
				>
					<div className=" my-20">
						<label className="block text-3xl font-bold mb-5 ">
							Category Name
						</label>
						<input
							className="bg-gray-200 px-10 py-5 outline-none rounded-lg w-full text-black "
							ref={categoryName}
						/>
						<label className="block text-3xl font-bold mt-20 mb-10 text-2xl lg: ">
							Description
						</label>
						<input
							className="bg-gray-200 px-10 mb-10 text-2xl lg: py-5 outline-none rounded-lg w-full text-black "
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
									className="flex justify-between p-5 even:bg-gray-100 hover:bg-gray-100 capitalize"
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
			<Modal
				title="Bid Information"
				display={viewBid}
				close={viewBidModal}
				height="500px"
			>
				<div className={` overflow-y-auto`}>
					{!event ? (
						<div className="" style={{ marginTop: "25%" }}>
							<Loader />
						</div>
					) : (
						<>
							<div className=" grid grid-cols-2 w-11/12  mx-auto items-center">
								<img
									src={event.product.images.main}
									className="rounded-lg h-4/12  "
								/>

								<div className="ml-10">
									<h3 className=" text-2xl lg:text-4xl mb-10 text-black">
										{event.product.name}
									</h3>

									<>
										{event.approved &&
											event.started &&
											!event.canceled &&
											!event.ended && (
												<h3 className="text-green-600 mb-10 text-2xl lg:">
													Ongoing
												</h3>
											)}

										{!event.started && event.approved && (
											<h3 className="text-red-600 mb-10 text-2xl lg:">
												Not started
											</h3>
										)}

										{!event.approved && (
											<h3 className="text-red-600 mb-10 text-2xl lg:">
												Unapproved
											</h3>
										)}

										{event.canceled && (
											<h3 className="text-red-600 mb-10 text-2xl lg:">
												Canceled
											</h3>
										)}

										{event.started &&
											event.ended &&
											!event.canceled &&
											event.approved && (
												<h3 className="text-violet-600 mb-10 text-2xl lg:">
													Concluded
												</h3>
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

										{!event.started && event.approved && (
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
												name="UNAPPROVE"
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
												name="APPROVE"
												bgColor="#1A8917"
												border="none"
												fontSize="12px"
												isBoxShadow={true}
												onClick={() => {
													dispatch(_approveBid(event.id));
													router.reload(window.location.pathname);
												}}
											/>
										)}
									</>
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
								<div className="px-20 py-10 flex justify-between lg:justify-evenly lg:w-full w-11/12">
									<div className="lg:text-3xl text-2xl font-semibold  ">
										<p className="w-60 lg:w-full mt-7 lg:mt-10">
											Merchant name:
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">Product :</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">Start date :</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">End date: :</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">Amount :</p>
										{/* <p className="w-40 lg:w-full mt-7 lg:mt-10">Winner :</p> */}
									</div>
									<div className="ml-4 ">
										<p className="w-58 lg:w-full mt-7 lg:mt-10">
											Akinpelumi Lade
										</p>
										<p className="w-64 lg:w-full mt-3 lg:mt-10">
											{width >= 780 && (
												<span>{truncateString(event.product.name, 34)}</span>
											)}
											{width < 780 && (
												<span> {truncateString(event.product.name, 13)}</span>
											)}
										</p>
										<p className="w-58 lg:w-full mt-3 lg:mt-6">
											{new Date(event.start_time).toDateString()}
										</p>
										<p className="w-58 lg:w-full mt-3 lg:mt-6">
											{new Date(event.end_time).toDateString()}
										</p>
										<p className="w-40 lg:w-full mt-3 lg:mt-6">
											{formatNumber(event.access_amount)}{" "}
										</p>
										{/* <p className="w-40 lg:w-full mt-3 lg:mt-10">
											{" "}
											{event.winner ? event.winner : "Undecided"}
										</p> */}
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</Modal>

			<Modal
				title="Create Event"
				display={createEventModal}
				close={openCreateEventModal}
				width="60rem"
			>
				<form
					className={styles["create-event"]}
					onSubmit={eventHandler}
					style={{ height: addNewProduct ? "80vh" : "60vh" }}
				>
					{/* <div className={styles["form-group"]}>
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
            </div> */}

					<>
						<fieldset>
							<label>
								Product Name <span>*</span>
							</label>
							<input
								name="productName"
								className="w-full rounded-lg"
								onChange={updateEventForm}
								required
							/>
						</fieldset>

						<fieldset>
							<label>
								Description <span>*</span>
							</label>
							<textarea
								rows={3}
								name="description"
								onChange={updateEventForm}
								required
							></textarea>
						</fieldset>

						<fieldset>
							<label htmlFor="category">
								Select Product Category <span>*</span>
							</label>
							<Select
								styles={customStyles}
								options={categoryOptions}
								placeholder=""
								isClearable
								onChange={(e) =>
									setEventForm({
										...eventForm,
										category: [e?.value.toString()],
									})
								}
								name="category"
								id="category"
								isLoading={categories ? false : true}
							/>
						</fieldset>

						<div className="grid grid-cols-2 gap-8">
							<fieldset>
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
							</fieldset>
							<fieldset>
								<label>Model Number </label>
								<input
									type="number"
									name="modelNo"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</fieldset>
						</div>

						<div className="grid grid-cols-2 gap-8">
							<fieldset>
								<label htmlFor="width">Width (Specify the unit)</label>
								<input
									type="number"
									name="width"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</fieldset>
							<fieldset>
								<label>Height (Specify the unit)</label>
								<input
									type="number"
									name="height"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</fieldset>
						</div>

						<div className="grid grid-cols-2 gap-8">
							<fieldset>
								<label htmlFor="weight">Weight (Specify the unit)</label>
								<input
									type="number"
									name="weight"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</fieldset>
							<fieldset>
								<label>Color</label>
								<input
									type="text"
									name="color"
									className="w-full rounded-lg"
									onChange={updateEventForm}
								/>
							</fieldset>
						</div>

						<fieldset>
							<label>
								Upload Images <span>*</span>
							</label>
							<div className="uploadcare-button">
								<Widget
									crop="1:1"
									onChange={uploadImage}
									publicKey="db374fee85cbc01904a3"
								/>
							</div>
						</fieldset>
					</>

					<div className="grid grid-cols-2 gap-8">
						<fieldset>
							<label htmlFor="minimumBid">
								Minimum Bid <span>*</span>{" "}
							</label>
							<input
								name="minimumBid"
								id="minimumBid"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="accessFee">
								Access Fee <span>*</span>{" "}
							</label>
							<input
								name="accessFee"
								id="accessFee"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>
					</div>

					<div className="grid grid-cols-2 gap-8">
						<fieldset>
							<label>
								Start Date <span>*</span>
							</label>
							<input
								name="starliate"
								type="date"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>

						<fieldset>
							<label>
								Start Time <span>*</span>
							</label>
							<input
								name="startTime"
								type="time"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>
					</div>

					<div className="grid grid-cols-2 gap-8">
						<fieldset>
							<label>
								End Date <span>*</span>
							</label>
							<input
								name="endDate"
								type="date"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>

						<fieldset>
							<label>
								End Time <span>*</span>
							</label>
							<input
								name="endTime"
								type="time"
								className="w-full rounded-lg"
								onChange={updateEventForm}
							/>
						</fieldset>
					</div>

					<Button
						name={loading ? <ClipLoader color="#ffffff" size={15} /> : "Submit"}
						paddingY="10px"
						width="100%"
					/>
				</form>
			</Modal>
		</AdminLayout>
	);
}

export default AllBids;
AllBids.requireAdminAuth = true;
