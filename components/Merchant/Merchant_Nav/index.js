import { useDispatch, useSelector } from "react-redux";
import { Bell } from "../../../public/svg/icons";
import Image from "next/image";
import styles from "../Merchant_Nav/merchant-nav.module.scss";

function MerchantNav({ title }) {
  const { user } = useSelector((state) => state.auth.merchant);

  return (
    <div className="bg-white w-full h-40 ">
      <div className="flex pt-7 justify-between items-center mx-auto w-11/12">
        <div>
          <h3>{title}</h3>
          <p>Updated on 6. 7. 2022 </p>
        </div>
        <div className="flex  flex-row-reverse items-center mr-10">
          <div className=" ml-10 leading-normal">
            <p className="font-semibold">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="lowercase">@{user?.last_name}</p>
          </div>

          <Image
            src="/images/pic2.png"
            alt="profile picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="mr-6 p-4  border-l-2 border-gray-200">
            <Bell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantNav;
