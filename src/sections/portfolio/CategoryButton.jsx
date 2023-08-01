import React from 'react'

const CategoryButton = ({category, className, onChangeCategory}) => {
  return (
    <button style={{fontSize:'1rem'}} className={className} onClick={() => onChangeCategory(category)}>{category}</button>
  )
}

export default CategoryButton