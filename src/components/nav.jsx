import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="nav">
            <ul className="flex">
                <li className="flex-1 mr-2">
                    <Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to='/'>HOME</Link>
                </li>
                <li className="flex-1 mr-2">
                    <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to='/list'>BOARD LIST</Link>
                </li>
                <li className="flex-1 mr-2">
                    <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to='/test'>TEST</Link>
                </li>
                <li className="text-center flex-1">
                    <a className="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
                </li>
            </ul>

        </div>
    )
}

export default Nav
