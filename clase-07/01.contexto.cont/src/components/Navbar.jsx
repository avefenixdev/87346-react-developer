import { useContext, useRef } from "react"
import navItem from "../constants/nav-items"
import { NavLink } from "react-router"
import TemaContext from "../contexts/TemaContext"

/* import { } navItem from "../constants/nav-items" */
// rafce


const Navbar = () => {

    // ! useRef -> Es una referencia a un elemento html

    const menuRef = useRef()

    const { color, handleCambioTema} = useContext(TemaContext)

        

   const toggleMenu = () => {
        // console.log(menuRef)
        //console.dir(menuRef.current)
        menuRef.current.classList.toggle('hidden')
   }

   // toggleMenu()

   const handleClick = () => {
    handleCambioTema('text-red-500')
   }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                
                {/* <!-- Logo/Marca --> */}
                <div className="shrink-0 flex items-center">
                    <a href="#" className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition-colors duration-200">
                        Mi Marca
                    </a>
                </div>
 
                {/* <!-- Menú Desktop --> */}
                <div className="hidden md:flex items-center space-x-8">
                    {
                        navItem.map(item => (
                            <NavLink key={item.id} to={item.url} className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group">
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                            </NavLink>
                        ))
                    }
                </div>
 
                {/* <!-- Botón CTA Desktop --> */}
                <div className="hidden md:flex">
                    <button onClick={handleClick} className="cursor-pointer px-6 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                        Cambio color
                    </button>
                </div>
 
                {/* <!-- Botón Hamburguesa Mobile --> */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
 
        {/* <!-- Menú Mobile --> */}
        <div ref={menuRef} id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">

                {
                    navItem.map(item => (
                        <NavLink key={item.id} to={item.url} className="block px-3 py-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-100 font-medium transition-colors duration-200">
                            {item.label}
                        </NavLink>
                    ))
                }
    
                <div className="px-3 py-2">
                    <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors duration-200">
                        Empezar
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar