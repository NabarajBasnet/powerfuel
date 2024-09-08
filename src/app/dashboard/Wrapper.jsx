'use client'

import { useSelector } from 'react-redux'
import Sidebar from './Sidebar';

const Wrapper = () => {

    const toggleSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar);

    return (
        <div className='w-full'>
            <div className='w-full'>
                {
                    toggleSidebar ? (
                        <div className='w-full'>
                        </div>
                    ) : (
                        <div className='w-64 z-50'>
                            <Sidebar />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Wrapper