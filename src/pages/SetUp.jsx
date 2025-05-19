import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { APP_LIST } from '../constants';

export default function SetUp() {
    const navigate = useNavigate();
    const { setUserInfo } = useAppStore();
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(true);

    // Loader: check localStorage for existing info
    useEffect(() => {
        const stored = localStorage.getItem('app-store');
        if (stored) {
            try {
                const state = JSON.parse(stored);
                if (state.fullName && state.age) {
                    navigate(APP_LIST);
                    return;
                }
            } catch (e) {
                console.error('فشل في قراءة البيانات', e);
            }
        }
        setLoading(false);
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName.trim() || !age.trim()) return;
        setUserInfo({ fullName, age });
        localStorage.setItem(
            'app-store',
            JSON.stringify({ fullName, age })
        );
        navigate(APP_LIST);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/landing-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <form
                onSubmit={handleSubmit}
                dir="rtl"
                className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6 text-right"
            >
                <h2 className="text-2xl font-semibold text-center">مرحبا بك</h2>
                <div>
                    <label className="block text-sm font-medium mb-1">الاسم الكامل</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                        placeholder="أدخل الاسم الكامل"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">العمر</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                        placeholder="أدخل العمر"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    استمرار
                </button>
            </form>
        </div>
    );
}