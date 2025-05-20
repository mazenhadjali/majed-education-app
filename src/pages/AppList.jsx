import React from 'react'
import { P1 } from '../constants'

function AppList() {
    const exercises = [
        { id: 1, name: 'تمرين 1', path: P1 },
        { id: 2, name: 'تمرين 2', path: P1 },
        { id: 3, name: 'تمرين 3', path: P1 },
        { id: 4, name: 'تمرين 4', path: P1 },
        { id: 5, name: 'تمرين 5', path: P1 },
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