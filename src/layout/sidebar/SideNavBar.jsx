import React, { useState } from "react";
import "./SideNavBar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/icons/0-circle-fill.svg';
import { Link } from "react-router-dom";
import logo from './logo.png';
import min1 from './minImages/img1min.jpg';
import min2 from './minImages/img2min.jpg';
import min3 from './minImages/img3min.jpg';

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState(true);

	const handleClick = () => {
		setShowSubMenu(!showSubMenu);
		var submenuElement = document.querySelector(".submenu");

		if (showSubMenu) {
			submenuElement.classList.add("active");
		} else {
			submenuElement.classList.remove("active");
		}
	}
	const removeChecked = () => {
		var checkbox = document.querySelector("#checkbox-menu")

			checkbox.click()
		
		setExpendState(!isExpanded)



	}

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="text-size mt-3">
							<span><img src={logo} style={{ zIndex: -1 }} /></span>
						</div>
					)}
					<input type="checkbox" id="checkbox-menu" onClick={() => setExpendState(!isExpanded)} />
					<label for="checkbox-menu" className="hamburguer">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
				{isExpanded && (
					<div className="nav-menu mt-0">
						<div class="list-group">
							<Link to="/" className="decoration" onClick={e => removeChecked()}>
								<span style={{ backgroundColor: "black", border: "0"}} class="list-group-item list-group-item-action"><span class="text-margin"><i class="bi bi-house-add fs-3 icons-color"></i>{isExpanded && (
									<span style={{ marginLeft: "10px"}} class="menu-titles"> Home</span>
								)} </span></span>
							</Link>
							<div>
								<span style={{ backgroundColor: "black", border: "0"}} class="list-group-item list-group-item-action dropdown-toggle " onClick={handleClick}><span class="text-margin"><i class="bi bi-image icons-color"></i>{isExpanded && (
									<span style={{ marginLeft: "10px" }}class="menu-titles"> imagens usadas </span>
								)} </span></span>
							</div>
							<div className="submenu">
								<div>
									<div class="list-group">
										<Link to="https://www.behance.net/gallery/170975077/Monster-Energy?tracking_source=search_projects|monster+energy" className="decoration" onClick={e => removeChecked()}>
							
											<span style={{ backgroundColor: "black", border: "0"}}class="list-group-item list-group-item-action"><span class="text-margin">
							<img src={min1} style={{ zIndex: -1 }} />{isExpanded && (
												
												<span style={{ marginLeft: "20px" }}class="menu-titles"> <i class="bi bi-chevron-double-left"></i></span>
											)} </span></span>
										</Link>
									</div>
									<div class="list-group">
										<Link to="https://www.behance.net/gallery/56461915/Monster-Energy" className="decoration" onClick={e => removeChecked()}>
											<span style={{ backgroundColor: "black", border: "0"}}class="list-group-item list-group-item-action"><span class="text-margin">
											<img src={min2} style={{ zIndex: -1 }} />{isExpanded && (
												<span style={{ marginLeft: "20px" }}class="menu-titles">  <i class="bi bi-chevron-double-left"></i></span>
											)} </span></span>
										</Link>
									</div>
									<div class="list-group">
										<Link to="https://www.behance.net/gallery/165913003/Monster-Energy?tracking_source=search_projects|monster+energy" className="decoration" onClick={e => removeChecked()}>
											<span style={{ backgroundColor: "black", border: "0"}}class="list-group-item list-group-item-action"><span class="text-margin">
											<img src={min3} style={{ zIndex: -1 }} />{isExpanded && (
												<span style={{ marginLeft: "20px" }}class="menu-titles"> <i class="bi bi-chevron-double-left"></i></span>
											)} </span></span>
										</Link>
									</div>
								</div>
							</div>

						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideNavBar;
