import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: {
          fields: publishDate
          order: DESC
        }) {
          nodes {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    `).allContentfulBlogPost.nodes
    return (
        <Layout>
          <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            <ol className={blogStyles.posts}>
                {data.map((data) => {
                    return (
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${data.slug}`}>
                            <h2>{data.title}</h2>
                            <p>{data.publishDate}</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage