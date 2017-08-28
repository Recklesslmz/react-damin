/**
 * Created by limuzi on 2017/8/25.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd'

const ProductList = ({onDelete, products}) => {
  const columns = [{
    title: 'lmz',
    dataIndex: 'name'
  }]
  return (
    <Table dataSource={products} columns={columns}/>
  )
}

