import React from "react"
import PropTypes from "prop-types"
import {createGlobalStyle} from 'styled-components';
import Navbar from '../components/globals/navbar/Nabar'
// import '../sass/layout.scss'
import "./layout.css"
// import "./bootstrap.min.css"



const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle/> 
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
