import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>My name is Aya Nakagawa</p>
            <p><Link to="https://google.com">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage
