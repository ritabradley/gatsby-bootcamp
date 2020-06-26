import React from "react"
import Layout from "../components/layout"
import BlogPost from "../templates/blog-post"

const Blog = () => {
    return (
        <Layout>
            <h1 className="text-4xl text-purple-700">Blog</h1>
            <BlogPost />
        </Layout>
    )
}

export default Blog
