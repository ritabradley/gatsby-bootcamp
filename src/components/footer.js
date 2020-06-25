import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className="flex justify-center bg-purple-700 p-4 fixed w-full bottom-0 text-white">
            Created by &nbsp;
            <span className="text-purple-200 font-bold">
                {data.site.siteMetadata.author}
            </span>
            &nbsp; &copy; 2020
        </footer>
    )
}

export default Footer
