import React from "react"

const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-purple-700">Contact Me</h1>
            <p className="text-gray-700">Hit me up sometime.</p>
            <div className="flex">
                <a
                    className="text-purple-700 font-bold"
                    href="https://twitter.com/rita_l_bradley"
                    target="_blank"
                >
                    Twitter
                </a>
            </div>
        </div>
    )
}

export default Contact
