import React from 'react';
import { Button } from 'semantic-ui-react';

import ProductRow2 from './ProductRow2';

export default class ProductTable2 extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow2 onProductTableUpdate={onProductTableUpdate} product={product} key={product.id} />)
    });
    return (
      <div>


        <div classNames="ui horizontal divider">
          Or
        </div>
        <Button primary onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</Button>
        <table className="table table-bordered center">
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
