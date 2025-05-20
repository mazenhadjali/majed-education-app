import React from 'react'
import { P1, P2, P3, P4, P5, P6, P7 } from '../constants'

function AppList() {
    const exercises = [
        { id: 1, name: 'مَاجِدٌ وَحَنونُ فِي مَمْلَكَةِ الجُمَلِ العَجِيبَةِ', path: P1 },
        { id: 2, name: 'مغامرة المركّب الإضافي في قرية بَيْلَسَان الساحرة', path: P2 },
        { id: 3, name: 'قصة عائلة كان وأخواتها', path: P3 },
        { id: 4, name: 'مغامرة ماجد وحنون في الغابة المضيئة', path: P4 },
        { id: 5, name: 'مَاجِدٌ وَحَنُونٌ وَالْمَفْعُولُ المَطْلَقُ', path: P5 },
        { id: 6, name: 'سر المفعول لأجله في قرية الأضواء السحرية', path: P6 },
        { id: 7, name: 'مغامرة الأفعال المعتلة وسرها', path: P7 },
    ]
    return (
        <div>
            {/* training exercises list heading in arabic*/}
            <h1 className='text-3xl font-bold text-center mt-4'>قائمة التمارين</h1>
            <div className='flex flex-col items-center justify-center mt-4'>
                {exercises.map((exercise) => (
                    <a
                        key={exercise.id}
                        href={exercise.path}
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mb-2'
                    >
                        {exercise.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default AppList