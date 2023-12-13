import React from "react";

const Layout = ({children}) => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
                </div>
                <button>Home</button>
                <button>Gallery</button>
                <button>Menu</button>
            </div>
            <div className="page-content">
                {children}
            </div>
        </>
    )
}
export default Layout;