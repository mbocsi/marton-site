import { Outlet } from "react-router";
import { NavMenu } from "./Navmenu";

export function PageLayout() {
	return (
		<div className="max-w-4xl mx-auto">
			<NavMenu />
			<main className="p-4">
				<Outlet />
			</main>
		</div>
	);
}
