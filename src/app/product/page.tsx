import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import ProductPage from '@/components/product-from/Product_From'
import React from 'react'

const Product = () => {
  return (
    <div>
        <Breadcrumb pageName="Product" />
        <ProductPage />
    </div>
  )
}

export default Product