import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaBeer} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby Index.js</h3>
    Lets go for a <FaBeer />?
  </Layout>
)



export default IndexPage
