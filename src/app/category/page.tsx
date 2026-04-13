import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import Category_From from '@/components/category-from/Category_From'
import React from 'react'

const Category = () => {
  return (
    <div>
        <Breadcrumb pageName="Category" />
        <Category_From/>
    </div>
  )
}

export default Category