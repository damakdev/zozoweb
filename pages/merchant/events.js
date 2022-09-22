import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	addProduct,
	getProducts,
	createBidEvent,
	getBidEvents,
	getBidEventsByStatus,
} from "../../services/merchant";
import { getAllCategories } from "../../services/customer";
import { Widget } from "@uploadcare/react-widget";
import {
	convertUtc,
	toLocaleString,
	truncateString,
	formatNumber,
} from "../../utils";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import MerchantLayout from "../../components/MerchantLayout";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error-message/error-message";
import Select from "react-select";
import Modal from "../../components/modal/modal";
import Button from "../../components/ui/button/";
import styles from "../../styles/admin/merchant-events.module.scss";

function Events() {
	const { user } = useSelector((state) => state.auth.merchant);
	const [addNewProduct, setAddNewProduct] = useState(true);
	const [products, setProducts] = useState(null);
	const [categories, setCategories] = useState(null);
	const [bidEvents, setBidEvents] = useState(null);
	const [modalDisplay, setModalDisplay] = useState(false);
	const [status, setStatus] = useState("all");
	const [loading, setLoading] = useState(false);
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

	function createEvent(product_id) {
		setLoading(true);
		const body = {
			product_id: product_id || eventForm.productId,
			start_time: toLocaleString(
				`${eventForm.startDate} ${eventForm.startTime}`
			),
			//end_time: toLocaleString(`${eventForm.endDate} ${eventForm.endTime}`),
			//access_amount: eventForm.accessFee,
			minimum_amount: eventForm.minimumBid,
		};
		console.log(body);
		createBidEvent(body)
			.then(() => {
				toast.success("Event created, pending approval");
				setLoading(false);
				setModalDisplay(false);
				setBidEvents(null);
				setStatus("all");
				getBidEvents(user.merchant.id).then((response) => {
					setBidEvents(response.data.bidding_event);
				});
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
			merchant_id: user.merchant.id.toString(),
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

	function eventHandler(e) {
		e.preventDefault();
		if (addNewProduct) {
			createProductAndEvent();
			return;
		}
		createEvent();
	}

	const customStyles = {
		container: (provided) => ({
			...provided,
			width: "100%",
			position: "relative",
		}),
		control: (provided) => ({
			...provided,
			width: "100%",
			height: 45,
			border: "none",
			backgroundColor: "#cac9c966",
		}),
		menuList: (provided) => ({
			...provided,
			textTransform: "capitalize",
		}),
		input: (provided) => ({
			...provided,
			backgroundColor: "transparent",
		}),
		singleValue: (provided) => ({
			...provided,
			textTransform: "capitalize",
		}),
	};

	const productOptions = products?.map((product) => {
		return { value: product.id, label: product.name };
	});

	const categoryOptions = categories?.map((category) => {
		return { value: category.id, label: category.name };
	});

	useEffect(() => {
		getProducts(user.merchant.id).then((response) =>
			setProducts(response.data.products)
		);
		getAllCategories().then((response) =>
			setCategories(response.data.category)
		);
	}, []);

	useEffect(() => {
		if (status === "all") {
			setBidEvents(null);
			getBidEvents(user.merchant.id).then((response) => {
				setBidEvents(response.data.bidding_event);
			});
		}
		if (status !== "all") {
			setBidEvents(null);
			getBidEventsByStatus({
				status,
				merchant_id: user.merchant.id,
			}).then((response) => {
				setBidEvents(response.data.bidding_event);
			});
		}
	}, [status]);

	return (
		<>
			<MerchantLayout title="Events">
				{!bidEvents && <Loader />}
				{bidEvents && (
					<section className={styles.container}>
						{/* <ul className={`${styles.sub_nav} flex`}>
          <li
            className={` py-2 ml-10 px-10  mr-20 ${
              page === "recent" ? styles.active_tab : ""
            }  `}
            onClick={() => setPage("recent")}
          >
            Recent events
          </li>
          <li
            className={` py-2 px-10 ${
              page !== "recent" ? styles.active_tab : ""
            }  `}
            onClick={() => setPage("ended")}
          >
            Ended Events
          </li>
        </ul> */}
						<div className={styles.header}>
							<div>
								<label htmlFor="status">Status:</label>
								<select
									name="status"
									id="status"
									value={status}
									onChange={(e) => setStatus(e.target.value)}
								>
									<option value="all">all</option>
									<option value="ongoing">ongoing</option>
									<option value="completed">completed</option>
									<option value="upcoming">upcoming</option>
									<option value="canceled">canceled</option>
								</select>
							</div>
							<Button onClick={() => setModalDisplay(true)}>
								<span>+</span> Create Event
							</Button>
						</div>
						{bidEvents?.length === 0 && (
							<ErrorMessage
								message={
									status === "all"
										? "You have no bid events"
										: `There are no ${status} events`
								}
							/>
						)}
						{bidEvents.length > 0 && (
							<div
								className="p-6 rounded-lg"
								style={{ backgroundColor: "var(--bg-primary)" }}
							>
								<table>
									<thead>
										<tr>
											<th className="text-left">Name</th>
											<th>Start Date</th>
											<th>End Date</th>
											<th>Bid price</th>
											<th>No of visits</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{bidEvents?.map((event) => (
											<tr key={event.id}>
												<td>{truncateString(event.product.name, 54)}</td>
												<td>{convertUtc(event.start_time)}</td>
												<td>{convertUtc(event.end_time)}</td>
												<td>&#8358;{formatNumber(event.minimum_amount)}</td>
												<td>{event.customers?.length}</td>
												<td>
													{event.ended
														? "Completed"
														: !event.approved
														? "Pending Approval"
														: !event.started
														? "Upcoming"
														: "Ongoing"}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</section>
				)}
			</MerchantLayout>

			<Modal
				title="Create Event"
				display={modalDisplay}
				close={() => setModalDisplay(false)}
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

					{addNewProduct && (
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
					)}

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
{/* 
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
						</fieldset> */}
					</div>

					<div className="grid grid-cols-2 gap-8">
						<fieldset>
							<label>
								Start Date <span>*</span>
							</label>
							<input
								name="startDate"
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

					{/* <div className="grid grid-cols-2 gap-8">
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
					</div> */}

					<Button>
						{loading ? <ClipLoader color="#ffffff" size={15} /> : "Submit"}
					</Button>
				</form>
			</Modal>
		</>
	);
}

export default Events;
Events.requireMerchantAuth = true;
