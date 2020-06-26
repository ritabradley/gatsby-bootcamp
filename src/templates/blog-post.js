import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const BlogPost = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            author
                            date
                        }
                    }
                }
            }
        }
    `)
    const { edges } = data.allMarkdownRemark
    return (
        <ol className="divide-y divide-gray-400">
            {edges.map(post => (
                <li className="py-4" key={post.node.frontmatter.title}>
                    <h2 className="text-2xl text-purple-600 font-semibold">
                        {post.node.frontmatter.title}
                    </h2>
                    <h3 className="text-lg text-gray-500 font-semibold">
                        {post.node.frontmatter.author}
                    </h3>
                    <span>{post.node.frontmatter.date}</span>
                </li>
            ))}
        </ol>
    )
}

export default BlogPost
