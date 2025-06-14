import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import "./index.css";
import Home from "./Home.tsx";
import { PageLayout } from "./PageLayout.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
		<BrowserRouter>
			<Routes>
				<Route element={<PageLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
);
