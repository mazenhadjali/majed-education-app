import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { HOME, SETUP } from '../constants';
import { useAppStore } from '../store/appStore';

export default function Layout() {
    const navigate = useNavigate();
    const { setUserInfo } = useAppStore();

    useEffect(() => {
        const stored = localStorage.getItem('app-store');
        if (stored) {
            try {
                const state = JSON.parse(stored);
                if (!state.fullName || !state.age) {
                    navigate(SETUP);
                }
                else {
                    setUserInfo(state);
                }
            } catch (e) {
                console.error('فشل في قراءة البيانات', e);
                navigate(SETUP);
            }
        } else {
            navigate(SETUP);
        }
    }, [navigate]);

    return (
        <div dir="rtl">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </div>
    );
}
