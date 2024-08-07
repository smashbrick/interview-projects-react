import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	//Single Selection
	function handleSingleSelection(getCurrentID) {
		setSelected(getCurrentID === selected ? null : getCurrentID);
	}
	console.log(selected);
	return (
		<div className="wrapper">
			<button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
				Enable multi Selection
			</button>
			<div className="accordian">
				{data.length > 0 ? (
					data.map((dataItem, index) => {
						return (
							<div className="item" key={index}>
								<div
									onClick={() => handleSingleSelection(dataItem.id)}
									className="title"
								>
									<h3>{dataItem.question}</h3>
									<span>+</span>
								</div>
								{selected === dataItem.id ? (
									<div className="content">
										<p>{dataItem.answer}</p>
									</div>
								) : null}
							</div>
						);
					})
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
