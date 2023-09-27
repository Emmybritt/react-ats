import React, { FC } from "react";
import "./HomeLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

interface HomeLayoutProp {
	children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProp> = ({ children }) => {
	return (
		<>
			<div className="layout__container">
				<div className="layout__container-side">
					<SideBar />
				</div>
				<div className="main">
					<Header />
					{children}
				</div>
			</div>
		</>
	);
};

export default HomeLayout;
