import React from "react";
import Table from "../../components/Table/Table";
import MerchantLayout from "../../components/MerchantLayout";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import styles from "../../styles/Items-order.module.scss";
import {
	FilterIcon,
	Bell,
	ExportIcon,
	DropdownIcon,
} from "../../public/svg/icons";

function ItemOrders() {
	return (
		<MerchantLayout>
			<MerchantNav title="Items Order" />

			<div className= {`${styles.container} pb-20`}>
				<div className="w-11/12 mx-auto mb-10">
					<div className="flex justify-between items-center">
						<h4 className="text-4xl " style={{ fontWeight: "bold" }}>
							{" "}
							Won Items
						</h4>

						<div className="flex">
							<div className={styles.filterButton}>
								<FilterIcon />
								<button>Filter</button>
							</div>

							<div className={styles.exportButton}>
								<ExportIcon />
								<button className="mr-3">Export</button>
								<DropdownIcon />
							</div>
						</div>
					</div>
				</div>
				<Table />
			</div>
		</MerchantLayout>
	);
}

export default ItemOrders;
