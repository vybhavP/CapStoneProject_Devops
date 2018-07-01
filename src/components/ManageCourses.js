import React from "react";
import SearchBar from "./SearchBar";
import { AddCoursesTable, DeleteCoursesTable, UpdateCoursesTable, ViewCoursesTable } from "./CoursesTable";
import { bake_cookie, read_cookie } from 'sfcookies';

const cookie_key = "Courses";

export const AddCourses =  class AddCourses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.filterText = "";
		this.state.courses = [];
	}
	componentDidMount(){
		// this.setState({ courses: read_cookie(cookie_key) });
		console.log("Componet Did mount" + this.state.courses)
	}
	handleUserInput(filterText) {
		this.setState({ 
			filterText: filterText 
		});
	}
	handleRowDel(course) {
		var index = this.state.courses.indexOf(course);
		this.state.courses.splice(index, 1);
		this.setState(this.state.courses);
	}

	handleAddEvent() {
		var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
		var course = {
			id: id,
			name: "",
			price: "",
			category: "",
			description: ""
		};
		this.state.courses.push(course);
		this.setState(this.state.courses);
	}
  
	handleSave() {
		let containEmptyValues = false;    
		var courses = this.state.courses.slice();
		// for(var i = 0; i< courses.length; i++){
		// 	alert(courses[i].id + "\n" + courses[i].name + "\n" + courses[i].price + "\n" + courses[i].category + "\n" + courses[i].description);
		// }
		for(var i = 0; i< courses.length; i++){
			if(courses[i].id === '' || courses[i].name === '' || courses[i].price === '' || courses[i].category === '' || courses[i].description === ''){
				containEmptyValues = true;
			}
		}
		if(containEmptyValues === true){
			alert("Plesase fill all the fields and then save");
		}
		else{
			bake_cookie(cookie_key, this.state.courses);
			alert("Saved Coures Data!!");
			this.setState({ courses: [] });
		}
	}
	handleAddCoursesTable(evt) {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value,
		};
		var courses = this.state.courses.slice();
		var newCourses = courses.map(function (course) {
			for (var key in course) {
				if (key === item.name && course.id === item.id) {
					course[key] = item.value;
				}
			}
			return course;
		});
		this.setState({ 
			courses: newCourses 
		});
	}
	render() {
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText} 
					onUserInput={this.handleUserInput.bind(this)} 
				/>
				<AddCoursesTable 
					onAddCoursesTableUpdate={this.handleAddCoursesTable.bind(this)} 
					onRowAdd={this.handleAddEvent.bind(this)} 
					onRowDel={this.handleRowDel.bind(this)} 
					courses={this.state.courses} 
					filterText={this.state.filterText} 
					onSave={this.handleSave.bind(this)} 
				/>
			</div>
		);}
};

export const DeleteCourses = class DeleteCourses extends React.Component {
	constructor(props) {
		super(props);  
		this.state = { 
			isDeleted: false 
		};
		this.state.courses = [];
		this.state.filterText = ""; 
	}
	componentDidMount(){
		this.setState({ courses: read_cookie(cookie_key) });
	}
	handleUserInput(filterText) {
		this.setState({ 
			filterText: filterText 
		});
	}
	handleRowDel(course) {
		var index = this.state.courses.indexOf(course);
		this.state.courses.splice(index, 1);
		this.setState(this.state.courses);
		this.setState({isDeleted: true});
		bake_cookie(cookie_key, this.state.courses);
	}  
	handleDeleteCoursesTable(evt) {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value
		};
		var courses = this.state.courses.slice();
		var newCourses = courses.map(function (course) {  
			for (var key in course) {
				if (key === item.name && course.id === item.id) {
					course[key] = item.value;
				}
			}
			return course;
		});
		this.setState({ 
			courses: newCourses 
		});
	}
	render() {
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText} 
					onUserInput={this.handleUserInput.bind(this)} 
				/>
				<DeleteCoursesTable 
					onDeleteCoursesTableUpdate={this.handleDeleteCoursesTable.bind(this)} 
					onRowDel={this.handleRowDel.bind(this)} 
					courses={this.state.courses} 
					filterText={this.state.filterText} 
					enableSave={this.state.isDeleted} 
				/>
			</div>
	)};
};

export const UpdateCourses = class UpdateCourses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.filterText = "";
		this.state.courses = [];
	}
	componentDidMount(){
		this.setState({ courses: read_cookie(cookie_key) });
	}
	handleUserInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}
	handleRowDel(course) {
		var index = this.state.courses.indexOf(course);
		this.state.courses.splice(index, 1);
		this.setState(this.state.courses);
	}
	handleUpdateCoursesTable(evt) {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value
		};
		var courses = this.state.courses.slice();
		var newCourses = courses.map(function(course) {  
			for (var key in course) {
				if (key === item.name && course.id == item.id) {
					course[key] = item.value;
				}
			}
			return course;
		});
		this.setState({courses:newCourses});
	}
	handleSaveUpdatedCourses() {
		bake_cookie(cookie_key, this.state.courses);
		alert("Updated courses successfully");
	}
	render() {
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText} 
					onUserInput={this.handleUserInput.bind(this)}
				/>
				<UpdateCoursesTable 
					onUpdateCoursesTableUpdate={this.handleUpdateCoursesTable.bind(this)} 
					nRowDel={this.handleRowDel.bind(this)} 
					courses={this.state.courses} 
					filterText={this.state.filterText}
					saveUpdatedCourses = {this.handleSaveUpdatedCourses.bind(this)}
				/>
			</div>
		);}
};

export const ViewCourses = class ViewCourses extends React.Component {
	constructor(props) {
		super(props);  
		this.state = { 
			isDeleted: false 
		};
		this.state.courses = [];
		this.state.filterText = ""; 
	}
	componentDidMount(){
		this.setState({ courses: read_cookie(cookie_key) });
	}
	handleUserInput(filterText) {
		this.setState({ 
			filterText: filterText 
		});
	}
	handleRowDel(course) {
		var index = this.state.courses.indexOf(course);
		this.state.courses.splice(index, 1);
		this.setState(this.state.courses);
		this.setState({isDeleted: true});
		bake_cookie(cookie_key, this.state.courses);
	}  
	handleViewCoursesTable(evt) {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value
		};
		var courses = this.state.courses.slice();
		var newCourses = courses.map(function (course) {  
			for (var key in course) {
				if (key === item.name && course.id === item.id) {
					course[key] = item.value;
				}
			}
			return course;
		});
		this.setState({ 
			courses: newCourses 
		});
	}
	render() {
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText} 
					onUserInput={this.handleUserInput.bind(this)} 
				/>
				<ViewCoursesTable 
					onViewCoursesTableUpdate={this.handleViewCoursesTable.bind(this)} 
					onRowDel={this.handleRowDel.bind(this)} 
					courses={this.state.courses} 
					filterText={this.state.filterText} 
					enableSave={this.state.isDeleted} 
				/>
			</div>
	)};
};
