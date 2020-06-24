import React from "react"
import Layout from "../components/layout"

const Contact = () => {
    return (
        <Layout>
            <h1 className="text-4xl text-purple-700">Contact Me</h1>
            <p className="text-gray-700">Hit me up sometime.</p>
            <div className="flex">
                <a
                    className="text-purple-700 font-bold"
                    href="https://twitter.com/rita_l_bradley"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Twitter
                </a>
            </div>
        </Layout>
    )
}

export default Contact
