import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import MainDashBoard from './components/MainDashBoard/MainDashBoard'
import RightSide from './components/RightSide/RightSide'
const App = () => {
    return (
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                <MainDashBoard />
                <RightSide />
            </div>
        </div>
    )
}

export default App