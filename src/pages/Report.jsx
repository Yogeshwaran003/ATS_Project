import React from 'react'

const Report = () => {
  return (
    <div>
            <h1 className='mb-5 ms-3' >Reports</h1>
            <div className='card shadow-sm mb-4 gap-3'>
                
                <div className='d-flex gap-3'>
                    <i class="bi bi-people-fill fs-2"> Candidate Report</i>
                    {/* <h3>Candidate Report</h3> */}
                </div>
                <div className='d-flex gap-3'>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>PipeLine Progress report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>Quality report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>Diversity Candidate report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                </div>
            </div>

        {/* Second section of the report pages */}

            <div className='card shadow-sm mb-4 gap-3'>
                <div className='d-flex gap-3 align-items-end'>
                    <i class="bi bi-person-check fs-3 mb-0"> Employee Report </i>
                </div>
                <div className='d-flex gap-3'>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>Performance report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>Attendance report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                    <div className=' d-flex-col w-10 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
                        {/* <img src="" alt="" /> */}
                        <h5>Engagement report</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Report