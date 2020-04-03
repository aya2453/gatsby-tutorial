import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>My name is Aya Nakagawa</p>
            <p><Link to="https://google.com">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage
