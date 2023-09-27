import { FC } from "react";
import "./Sidebar.css";
import { BottomSideBarIcon, TopSideBarIcon } from "../../constants";
import { Button } from "antd";

const SideBar: FC = () => {
	return (
		<div className="container">
			<div className="icons">
				<div className="round__circle first__circle"></div>
				{TopSideBarIcon.map((Icon, _index: number) => (
					<Button type="text" key={_index}>
						<Icon className="icon__btn" />
					</Button>
				))}
			</div>
			<div className="icons2">
				{BottomSideBarIcon.map((Icon, _index: number) => (
					<Button type="text" key={_index}>
						<Icon className="icon__btn" />
					</Button>
				))}
				<div className="round__circle second__circle">AS</div>
			</div>
		</div>
	);
};

export default SideBar;
