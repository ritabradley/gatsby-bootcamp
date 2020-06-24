import React from "react"
import { Link } from "gatsby"

const About = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-purple-700">About Me</h1>
            <p className="text-gray-700 text-center">
                I've been developing on the front-end for 5+ years and I love
                it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eaque quasi adipisci nesciunt vero asperiores quisquam eius
                eligendi. Quisquam iure pariatur numquam rem autem praesentium
                ducimus, nemo nam exercitationem corrupti eum.{" "}
                <Link className="text-purple-700 font-bold" to="/contact">
                    Contact Me
                </Link>
            </p>
        </div>
    )
}

export default About
