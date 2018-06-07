import React from 'react';
import { Button } from 'semantic-ui-react';

import ProductRow from './ProductRow';
export default class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
    });
    return (
      <div>

        <div className="ui horizontal divider">
          Available Courses
        </div>
        {/* <Button primary onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</Button> */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>price</th>
              <th>quantity</th>
              <th>category</th>
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );
  }
}
