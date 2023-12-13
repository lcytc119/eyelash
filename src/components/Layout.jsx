import React,{useState, useEffect}from "react";

const Layout = ({children}) => {
    const [Menuvisible, setMenuvisible] = useState(false)
    // const hoverTimeout = useRef()

    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
            setMenuvisible(true);
        },1000)
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        setMenuvisible(false);
    };

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
                </div>
                <div className='category'>
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Menu</a>
                    {/* {Menuvisible && (
                        <div className="submenu">
                            <a href="#">Submenu 1</a>
                            <a href="#">Submenu 2</a>
                            <a href="#">Submenu 3</a>
                        </div>
                    )} */}
                    <a href='#'>Contact</a>
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