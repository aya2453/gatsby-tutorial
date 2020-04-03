import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
              fields {
                slug
              }
            }
          }
        }
      }
    `).allMarkdownRemark.edges
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            <ol className={blogStyles.posts}>
                {data.map((data) => {
                    return (
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${data.node.fields.slug}`}>
                            <h2>{data.node.frontmatter.title}</h2>
                            <p>{data.node.frontmatter.date}</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage