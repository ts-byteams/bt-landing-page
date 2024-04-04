import React from "react";

const Navbar = () => {
    return (
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="#" class="text-base mr-5 hover:text-gray-900">Home</a>
                <a href="#" class="text-base mr-5 hover:text-gray-900">Contact Us</a>
            </nav>
        </div>
    )
}

export default Navbar;