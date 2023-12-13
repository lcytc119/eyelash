import React from "react";

const Layout = ({children}) => {


    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
                </div>
                <div className='category'>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Gallery</a>
                    <a href="#" className="nav-link">Menu</a>
                    <a href='#'className="nav-link">Contact</a>
                </div>
                <div className="book">
                    <button>Book Now &rarr;</button>
                </div>
            </div>
            <div className="page-content">
                {children}
            </div>
        </>
    )
}
export default Layout;