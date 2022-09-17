import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export function CustomerAuthGuard({ children }) {
	const router = useRouter();
	const { user } = useSelector((state) => state.auth.customer);

	useEffect(() => {
		if (!user || user.account_type !== "customer") {
			router.push("/");
		}
	}, [user, router]);

	if (!user) {
	}

	return <>{children}</>;
}

export function MerchantAuthGuard({ children }) {
	const router = useRouter();
	const { user } = useSelector((state) => state.auth.merchant);

	useEffect(() => {
		if (!user || user.account_type !== "merchant") {
			router.push("/merchant");
		}
	}, [user, router]);

  if (!user) {
		return null;
	}

	return <>{children}</>;
}

export function AdminAuthGuard({ children }) {
	const router = useRouter();
	const { user } = useSelector((state) => state.auth.admin);

	useEffect(() => {
		if (!user) {
			router.push("/admin/login");
		}
	}, [user, router]);

	if (!user) {
		return null;
	}
	return <>{children}</>;
}
