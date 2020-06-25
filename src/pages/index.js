import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <h1 className="text-4xl text-purple-700">Hello.</h1>
            <h2 className="text-xl text-gray-700">
                I'm{" "}
                <span className="text-purple-600 font-bold">
                    {data.site.siteMetadata.author}
                </span>
                , a front-end developer in Las Vegas.
            </h2>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`

export default IndexPage
