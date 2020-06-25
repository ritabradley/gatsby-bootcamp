import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className="sticky top-0 bg-purple-700 p-4 md:shadow-lg w-full ">
            <nav className="flex justify-between">
                <h1 className="w-1/3">
                    <Link to="/" className="text-xl text-white font-bold">
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
                <ul className="flex justify-between text-purple-200 m-0">
                    <Link
                        className="hover:text-purple-400 transition-all ease-in duration-300 px-5"
                        activeClassName="md:underline font-bold"
                        to="/about/"
                    >
                        About
                    </Link>
                    <Link
                        className="hover:text-purple-400 transition-all ease-in duration-300 px-5"
                        activeClassName="md:underline font-bold"
                        to="/blog/"
                    >
                        Blog
                    </Link>
                    <Link
                        className="hover:text-purple-400 transition-all ease-in duration-300 px-5"
                        activeClassName="md:underline font-bold"
                        to="/contact/"
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
