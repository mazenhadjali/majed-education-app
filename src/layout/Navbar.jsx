// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP_LIST, HOME } from '../constants';

const navItems = [
    { name: 'الرئيسية', path: HOME },
    { name: 'قائمة التمارين', path: APP_LIST },
];

export default function Navbar() {
    const location = useLocation();
    const [showNav, setShowNav] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    // hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastY && currentY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastY(currentY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    // hide completely on home
    if (location.pathname === '/') return null;

    const toggleMobile = () => setMobileOpen((prev) => !prev);
    const handleLinkClick = () => setMobileOpen(false);

    return (
        <nav
            className={`fixed top-0 inset-x-0 bg-white shadow-md transition-transform duration-300 z-50 ${showNav ? 'translate-y-0' : '-translate-y-full'
                }`}
            dir="rtl"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex gap-2 items-center space-x-2 space-x-reverse">
                    <img src="/logo-Photoroom.png" alt="لوغو التطبيق" className="h-8 w-auto" />
                    <span className="text-xl font-bold">تطبيق سلسلة ماجد التعليمية</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex md:gap-2 items-center space-x-6 space-x-reverse">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-base font-medium hover:text-blue-600 transition ${isActive ? 'text-blue-600' : 'text-gray-700'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobile}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="قائمة"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden bg-white shadow-inner">
                    <ul className="flex flex-col space-y-2 p-4" dir="rtl">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) =>
                                        `block text-lg py-2 px-3 rounded-md hover:bg-gray-100 transition ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-800'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
