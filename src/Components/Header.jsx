import React from 'react'
import PropTypes from "prop-types";

const Header = ({title , name , age}) => {
  return (
    <div>
      <h2  className='text-blue-900'>i am inside herader of {title} and {name} age is {age} </h2>
    </div>
  )
}






//css 
const header_styles={
    color : 'red' ,
    backgroundColor : 'yellow'
}
Header.defaultProps={
    title: "rashid"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};



export default Header
