import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <article>
                <h4 className="intro">Hi, my name is </h4>
                <h2 className="name">Eshaan Khurana.</h2>
                <h2 className="aftername"> I build things for the web.</h2>
                <h4 className="desc">I'm a Sophomore @ IIIT, Vadodara specializing in building websites using various frameworks. Check my Profile <a class="highlight-link" href="https://github.com/eshaan007" target="_blank">@eshaan007</a>👩🏻‍💻</h4>
                <p className=""><a href="mailto:eshaany2k@gmail.com" class="arrow-link">Get in touch ➡️</a></p>
            </article> 
        </Layout>
    )
}

export default IndexPage