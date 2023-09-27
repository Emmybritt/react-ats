import { FC, useState } from "react";
import "./Dropdown.css";
import { DownOutlined } from "@ant-design/icons";
import { Opportuinities } from "../../constants";
interface DropDownProp {
	title?: string;
}

const DropDown: FC<DropDownProp> = ({ title }) => {
	const [showDropDown, setShowDropdown] = useState<boolean>();
	return (
		<div className="">
			<button className="dropdown__container" onClick={() => setShowDropdown(!showDropDown)}>
				<p>{title}</p>
				<DownOutlined />
			</button>
			{showDropDown && (
				<div className="dropdown__content">
					{Opportuinities.map((data, _index) => (
						<div className="" key={_index}>
							<p>{data.title}</p>
							<span>{data.counts}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDown;
