'use client'

import { useSelector } from 'react-redux'
import Sidebar from './Sidebar';

const Wrapper = () => {

    const toggleSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar);
    console.log("Sidebar: ", toggleSidebar);

    return (
        <div className='w-full'>
            <div className='w-full'>
                {
                    toggleSidebar ? (
                        <div className='w-64'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-full'>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Wrapper