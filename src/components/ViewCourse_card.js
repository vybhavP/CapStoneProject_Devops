import React from "react";
import react_image_card from "../images/react_card.jpg";
import mongodb_image_card from "../images/mongodb_card.jpg";
import node_image_card from "../images/node_card.jpg";
import express_image_card from "../images/express_card.jpg";

export default class viewCourse_card extends React.Component {
	render() {
		return (
			<div> 
				<div className="ui link cards container">
					<div className="card">
						<div className="image">
							<img src={react_image_card} alt ="react" />
						</div>
						<div className="content">
							<div className="header">ReactJS</div>
							<div className="meta">
								<a>react</a>
							</div>
							<div className="description">
                        React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community 			of individual developers and corporations.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={mongodb_image_card} alt ="mongodb" />
						</div>
						<div className="content">
							<div className="header">MongoDB</div>
							<div className="meta">
								<span className="date">mongodb</span>
							</div>
							<div className="description">
                        MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database 			program, MongoDB uses JSON-like documents with schemas.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={node_image_card} alt ="node" />
						</div>
						<div className="content">
							<div className="header">Node</div>
							<div className="meta">
								<a>node</a>
							</div>
							<div className="description">
                        Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine. Node.js uses an event-driven, 'non-blocking' 				I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in 				the world.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={express_image_card} alt ="expressjs" />
						</div>
						<div className="content">
							<div className="header">ExpressJS</div>
							<div className="meta">
								<a>expressjs</a>
							</div>
							<div className="description">
                        Express.js is a framework used for Node and it is most commonly used as a web application for node js. Express is 				just a module framework for Node that you can use for applications that are based on server/s that will "listen" for 				any input/connection requests from clients.
							</div>
						</div>
					</div>
				</div>
			</div>
		);}
}






