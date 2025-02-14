import React from 'react'
import HeroSection from './HeroSection'
import Footer from '../comoponents/Footer/Footer'
import ProductGrid from '../Products/Products'
import Fashioncards from '../Fashioncards/Fashioncards'
import FoodSection from '../FoodSection/FoodSection'
import Items from '../Kichten_item/Items'
import CategorySection from '../Our_Categories/Our_Categories'
import CustomerReviews from '../comoponents/Custumer_review/Review'
import ProductShowcase from '../comoponents/SimpleCard/Simplecards'

const Mainepage = () => {
  return (
    <div>
      <HeroSection/> 
      <Fashioncards/>
      <ProductGrid/>
      <ProductShowcase/>
      <CategorySection/>
      {/* <Items/>/ */}
      <FoodSection/>
      {/* <CustomerReviews/> */}
      <Footer/>  
    </div>
  )
}

export default Mainepage