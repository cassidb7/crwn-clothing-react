import ProductItem from '../product-item/product-item.component'

const Table = ({items}) => {
  return(


<table className="table">
<thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
        < ProductItem product={item} key={item.id} />
      ))
    }
  </tbody>
  </table>
  )
}

export default Table;


