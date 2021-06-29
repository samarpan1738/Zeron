import React, { useEffect, useRef } from "react";


export default function OfferItem(props) {
	

	return (
		<div className={"offer-card " + props.color} style={{  }}>
			<div id="left-offer">
				<img src={props.src} alt="" id="offer-img" />
			</div>
			<div id="right-offer">
				<div id="offer-title">{props.title}</div>
				<div id="offer-body">{props.body}</div>
			</div>
		</div>
	);
}
