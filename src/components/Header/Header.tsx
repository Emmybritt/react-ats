import { Button, Dropdown, MenuProps } from "antd";
import { FC } from "react";
import { HeaderRight } from "../../constants";
import DropDown from "../DropDown/DropDown";
import "./Header.css";
import { MenuOutlined } from "@ant-design/icons";

type HeaderProps = {
	title?: string;
};

const Header: FC<HeaderProps> = () => {
	const onMenuClick: MenuProps["onClick"] = (e) => {
		console.log("click", e);
	};
	const items = [
		{
			key: "1",
			label: "1st item",
		},
		{
			key: "2",
			label: "2nd item",
		},
		{
			key: "3",
			label: "3rd item",
		},
	];
	return (
		<div className="header__container">
			<div>
				<h3 className="text-blue header-text">London Internship Program</h3>
				<p className="sub_text">London</p>
			</div>
			<div className="dropdown">
				<DropDown title="Opportunity Browsing" />
			</div>
			<div className="btn__icon-container">
				{HeaderRight.map((Icon, _index: number) => (
					<Button key={_index}>
						<Icon.Icon style={{ color: Icon.color }} />
					</Button>
				))}
				<div>
					<Dropdown.Button type="primary" menu={{ items, onClick: onMenuClick }}>
						Move to video interview
					</Dropdown.Button>
				</div>
			</div>
			<Button className="menu">
				<MenuOutlined />
			</Button>
		</div>
	);
};

export default Header;
