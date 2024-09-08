import React from 'react'

const Sidebar = () => {
    return (
        <div className="fixed top-0 z-50 left-0 h-full">
            <div className='w-64'>
                <div className='w-full min-h-screen flex justify-center items-center bg-red-600'>
                    <div>
                        <h1>Sidebar</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar