import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
            <h1 className="text-4xl text-purple-700">About Me</h1>
            <p className="text-gray-700 text-center">
                I've been developing on the front-end for 5+ years and I love
                it. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <Link className="text-purple-700 font-bold" to="/contact">
                    Contact Me
                </Link>
            </p>
        </Layout>
    )
}

export default About
