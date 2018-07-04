import React from "react";
import { Input, Table, Confirm } from "semantic-ui-react";
import { AddCourses, DeleteCourses, UpdateCourses, ViewCourses } from "./EditableCell";

export const AddCoursesRow = class AddCoursesRow extends React.Component {
	onDelEvent() {
		this.props.onDelEvent(this.props.course);
	}
	render() {
		return (
			<Table.Row className="eachRow">
				<AddCourses 
					onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
					cellData={{
						"type": "name",
						value: this.props.course.name,
						id: this.props.course.id
					}} 
				/>
				<AddCourses 
					onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
					cellData={{
						type: "price",
						value: this.props.course.price,
						id: this.props.course.id
					}} 
				/>
				<AddCourses 
					onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
					cellData={{
						type: "category",
						value: this.props.course.category,
						id: this.props.course.id
					}} 
				/>
				<AddCourses 
					onAddCoursesTableUpdate={this.props.onAddCoursesTableUpdate} 
					cellData={{
						type: "description",
						value: this.props.course.description,
						id: this.props.course.id
					}} 
				/>
			</Table.Row>
		);}
};

export const DeleteCoursesRow = class DeleteCoursesRow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
			result: "show the modal to capture a result"
		};
	}
	
	onDelEvent() {
		this.setState({ open: true });
		// this.props.onDelEvent(this.props.course);
	}
	handleConfirm = () => {
		this.setState({ result: "confirmed", open: false });
		this.props.onDelEvent(this.props.course);
	}
	handleCancel = () => {
		this.setState({ result: "cancelled", open: false });
	}
	render() {
		const { open } = this.state;
		return (
			<Table.Row 
				className="eachRow"
			>
				<DeleteCourses 
					onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
					cellData={{
						"type": "name",
						value: this.props.course.name,
						id: this.props.course.id
					}} 
				/>
				<DeleteCourses 
					onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
					cellData={{
						type: "price",
						value: this.props.course.price,
						id: this.props.course.id
					}} 
				/>
				<DeleteCourses 
					onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
					cellData={{
						type: "category",
						value: this.props.course.category,
						id: this.props.course.id
					}} 
				/>
				<DeleteCourses 
					onDeleteCoursesTableUpdate={this.props.onDeleteCoursesTableUpdate} 
					cellData={{
						type: "description",
						value: this.props.course.description,
						id: this.props.course.id
					}} 
				/>
          
				<Table.Cell 
					className="del-cell" 
					textAlign="center"
				>
					{/* <p>
						Result: <em>{result}</em>
					</p> */}
					<Input 
						error 
						type="button" 
						onClick={this.onDelEvent.bind(this)} 
						value="X" 
						className="del-btn" 
					/>
					<Confirm 
						header="Confirm"
						open={open} 
						onCancel={this.handleCancel} 
						onConfirm={this.handleConfirm} 
						style={{ marginTop: 50, marginLeft: 250 }} />
				</Table.Cell>
			</Table.Row>
		);}
};
  
export const UpdateCoursesRow = class UpdateCoursesRow extends React.Component {
	onDelEvent() {
		this.props.onDelEvent(this.props.course);
	}
	render() {
		return (
			<Table.Row 
				className="eachRow"
			>
				<UpdateCourses 
					onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
					cellData={{
						"type": "name",
						value: this.props.course.name,
						id: this.props.course.id
					}} 
				/>
				<UpdateCourses 
					onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
					cellData={{
						type: "price",
						value: this.props.course.price,
						id: this.props.course.id
					}} 
				/>
				<UpdateCourses 
					onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
					cellData={{
						type: "category",
						value: this.props.course.category,
						id: this.props.course.id
					}} 
				/>
				<UpdateCourses 
					onUpdateCoursesTableUpdate={this.props.onUpdateCoursesTableUpdate} 
					cellData={{
						type: "description",
						value: this.props.course.description,
						id: this.props.course.id
					}} 
				/>
			</Table.Row>
		);}  
};


export const ViewCoursesRow = class ViewCoursesRow extends React.Component {
	onDelEvent() {
		this.props.onDelEvent(this.props.course);
	}
	render() {
		return (
			<Table.Row 
				className="eachRow"
			>
				<ViewCourses 
					onViewCoursesTableUpdate={this.props.onViewCoursesTableUpdate} 
					cellData={{
						"type": "name",
						value: this.props.course.name,
						id: this.props.course.id
					}} 
				/>
				<ViewCourses 
					onViewCoursesTableUpdate={this.props.onViewCoursesTableUpdate} 
					cellData={{
						type: "price",
						value: this.props.course.price,
						id: this.props.course.id
					}} 
				/>
				<ViewCourses 
					onViewCoursesTableUpdate={this.props.onViewCoursesTableUpdate} 
					cellData={{
						type: "category",
						value: this.props.course.category,
						id: this.props.course.id
					}} 
				/>
				<ViewCourses 
					onViewCoursesTableUpdate={this.props.onViewCoursesTableUpdate} 
					cellData={{
						type: "description",
						value: this.props.course.description,
						id: this.props.course.id
					}} 
				/>
			</Table.Row>
		);}
};
