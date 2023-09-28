import { DownOutlined, FileTextOutlined, InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Checkbox, Input, Tooltip } from "antd";
import "./App.css";
import { FiltersData, candidates } from "./constants";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import { useEffect, useState } from "react";

function App() {
	const [state, setState] = useState<string[]>([]);
	function handleSearch(searchQuery: string) {
		const newState = FiltersData.filter((val) => val.toLowerCase().includes(searchQuery.toLowerCase()));
		setState(newState);
	}
	useEffect(() => {
		setState(FiltersData);
	}, []);
	return (
		<>
			<HomeLayout>
				<div className="home__container">
					<div className="first_card">
						<Input
							onChange={(e) => handleSearch(e.target.value)}
							style={{ marginBottom: "1rem", paddingTop: "14px", paddingBottom: "14px" }}
							placeholder="Serach by name, edu, exp or #tag"
							prefix={
								<Tooltip title="Extra information">
									<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
								</Tooltip>
							}
							suffix={
								<Tooltip title="Extra information">
									<InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
								</Tooltip>
							}
						/>
						<div className="card__container">
							<div className="card__header">
								<p>Filters</p>
								<span>0 Selected</span>
							</div>
							{state.map((filter: string) => (
								<div key={filter} className="single__item">
									<div>
										<FileTextOutlined />
										<p>{filter}</p>
									</div>
									<div>
										<DownOutlined />
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="second_card">
						<div className="second__card-header">
							<div className="val">
								<Checkbox />
								<p className="text-blue">247 Candidates</p>
							</div>
							<div className="val">
								<div className="text-blue">Qualified</div>
								<div className="">
									Task <span className="label">25</span>
								</div>
								<div>
									Disqualified <span className="label">78</span>
								</div>
							</div>
						</div>
						<div className="candidate__container">
							{candidates.map((candidate, _index: number) => (
								<div className="candidates__content" key={_index}>
									<Checkbox className="checkbox" />
									<div className="candidate__photo">
										{candidate.name[0]}
										{candidate.name[1]}
									</div>
									<div className="data">
										<p className="candidateName">{candidate.name}</p>
										<p className="candidateLocation">{candidate.location}</p>
										<p className="candidateDegree">{candidate.degree}</p>
										<div className="tags">
											{candidate.tags.map((tag, _index) => (
												<div key={_index}>{tag}</div>
											))}
										</div>
										<div className="keywords">
											{candidate.keywords.map((keyword, _index) => (
												<span key={_index}>{keyword}</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</HomeLayout>
		</>
	);
}

export default App;
