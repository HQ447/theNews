import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
function DashboardLayout() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout