import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center p-4 mx-auto lg:max-w-screen-lg min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
