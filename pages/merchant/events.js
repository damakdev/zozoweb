import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addProduct,
  getProducts,
  createBidEvent,
  getBidEvents,
} from "../../services/merchant";
import { getAllCategories } from "../../services/customer";
import { AnimatePresence } from "framer-motion";
import { Plus } from "../../public/svg/icons";
import { Widget } from "@uploadcare/react-widget";
import { toLocaleString } from "../../utils";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import Modal from "../../components/modal/modal";
import Button from "../../components/ui/button/";
import EndedEvents from "../../components/Merchant/Event/EndedEvents";
import RecentEvents from "../../components/Merchant/Event/RecentEvents";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import MerchantLayout from "../../components/MerchantLayout";
import styles from "../../styles/merchant-events.module.scss";

function Events() {
  const { user } = useSelector((state) => state.auth.merchant);
  const [addNewProduct, setAddNewProduct] = useState(false);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [bidEvents, setBidEvents] = useState(null);
  const [page, setPage] = useState("recent");
  const [modalDisplay, setModalDisplay] = useState(false);
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

  const viewDetails = () => {
    setModalDisplay((modalDisplay) => !modalDisplay);
  };

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
      end_time: toLocaleString(`${eventForm.endDate} ${eventForm.endTime}`),
      access_amount: eventForm.accessFee,
      minimum_amount: eventForm.minimumBid,
    };
    console.log(body);
    createBidEvent(body)
      .then(() => {
        toast.success("Event created");
        setLoading(false);
        setModalDisplay(false);
        setBidEvents(null);
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

  const productOptions = products?.map((product) => {
    return { value: product.id, label: product.name };
  });

  const categoryOptions = categories?.map((category) => {
    return { value: category.id, label: category.name };
  });

  useEffect(() => {
    console.log(user);
    getProducts(user.merchant.id).then((response) =>
      setProducts(response.data.products)
    );
    getAllCategories().then((response) =>
      setCategories(response.data.category)
    );
    getBidEvents(user.merchant.id).then((response) => {
      setBidEvents(response.data.bidding_event);
    });
  }, []);

  return (
    <MerchantLayout>
      <MerchantNav title="Event" />
      <div className={`${styles.container} pb-20`}>
        <ul className={`${styles.sub_nav} flex`}>
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
        </ul>

        <div>
          <div className="flex justify-between w-11/12 mx-auto mt-20 mb-5">
            <h3 className="opacity-0">recent </h3>
            <div className="flex">
              <div className={styles.Dropdown}>
                <span>Status:</span>
                <select>
                  <option>All</option>
                </select>
              </div>

              <div className={styles.createButton} onClick={viewDetails}>
                <Plus />
                <button className="mr-3">Create Event</button>
              </div>
            </div>
          </div>
          {page === "recent" ? (
            <RecentEvents data={bidEvents} />
          ) : (
            <EndedEvents data={bidEvents} />
          )}
          {/* <AnimatePresence>
            {page === "recent" && <RecentEvents data={bidEvents} />}
          </AnimatePresence>
          <AnimatePresence>
            {page !== "recent" && <EndedEvents data={bidEvents} />}
          </AnimatePresence> */}
        </div>

        <Modal
          title="Create Event"
          display={modalDisplay}
          close={() => setModalDisplay(false)}
          // height="60rem"
          width="60rem"
        >
          <form
            onSubmit={eventHandler}
            style={{ height: addNewProduct ? "80vh" : "60vh" }}
            // className="flex flex-col"
          >
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
                      publicKey="db374fee85cbc01904a3"
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

            <Button>
              {loading ? <ClipLoader color="#ffffff" size={15} /> : "Submit"}
            </Button>
          </form>
        </Modal>
      </div>
    </MerchantLayout>
  );
}

export default Events;
Events.requireMerchantAuth = true;
