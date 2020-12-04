import React from 'react'
import StarRatingComponent from 'react-star-rating-component';



function Recherche(props) {

   const handleChange = (e) => 
    props.setFilter({...props.filter,text:e.target.value} )
    
    return (
        <div className='aaa'>
            <input
                type="text"
                placeholder="Search"
                onChange ={handleChange}
            />
            <StarRatingComponent onStarClick={(nextValue, prevValue, name)=>props.setFilter({...props.filter,star:nextValue} )}/>
        </div>
    )
}

export default Recherche;