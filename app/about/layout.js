import React from "react";

export default function AboutLayout({ children }) {
return (
    <main className="mt-10">
        <nav className="flex items-center justify-between bg-blue-600 p-4 rounded mb-8">
            <div className="text-white font-bold text-xl">About Navigation</div>
            <ul className="flex space-x-6">
                <li>
                    <a href="/" className="text-white hover:underline">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-white hover:underline">
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        
        {children}
    </main>
);
}
