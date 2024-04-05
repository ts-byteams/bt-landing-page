import React from "react";

const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow-md m-6 p-2">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" class="hover:underline">ByTeams</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600  sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Placeholder</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Placeholder</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Placeholder</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Placeholder</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;
