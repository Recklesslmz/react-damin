/**
 * Created by limuzi on 2017/8/25.
 */
import React from 'react'
import {connect} from 'dva'
import ProductList from '../components/ProductList'
// import Login from './IndexPage.css'
import './IndexPage.css'

const Products = ({dispatch, products}) => {
  function handleDelete(id) {
    dispatch({
      type: 'product/delete',
      payload: id
    })
  }

  return (
    <div>
      <h2 className='test'>list of Product</h2>
      <ProductList onDelete={handleDelete} products={products}/>
    </div>
  )

}

export default connect(({products}) => ({
  products,
}))(Products)
