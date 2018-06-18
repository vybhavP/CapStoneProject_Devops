import React from 'react';

import SearchBar from './SearchBar';
import AddCoursesTable from './AddCoursesTable';

export default class AddCourses extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [];
  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "0",
      category: "",
      description: ""
    }
    this.state.products.push(product);
    this.setState(this.state.products);
  }
  
  handleSave(evt) {
    alert("triggered handle save function");
    console.log(this.state.products)
    var products = this.state.products.slice();
    for(var i = 0; i< products.length; i++){
	console.log(products[i].id + "\n" + products[i].name + "\n" + 
	products[i].price + "\n" + products[i].category + "\n" + products[i].description);
    }
  }
  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    console.log(evt)
    var products = this.state.products.slice();
    //console.log(products+" Products")
    var newProducts = products.map(function (product) {
      console.log(product+"1234")
      for (var key in product) {
        if (key === item.name && product.id === item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  };
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <AddCoursesTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} onSave={this.handleSave.bind(this)} />
      </div>
    );
  }
}
