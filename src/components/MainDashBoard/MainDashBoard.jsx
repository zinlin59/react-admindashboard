import React from 'react'
import './MainDashBoard.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
const MainDashBoard = () => {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />

            <Table />
        </div>
    )
}

export default MainDashBoard