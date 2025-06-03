import React from 'react'

const Report = () => {
  return (
    <div className="container-fluid px-3 px-md-4">
      <h1 className='mb-4 mb-md-5'>Reports</h1>
      
      <div className='card shadow-sm mb-4 p-3 p-md-4'>
        <div className='d-flex gap-2 mb-3'>
          <i className="bi bi-people-fill fs-2"> Candidate Report</i>
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>PipeLine Progress report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>Quality report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>Diversity Candidate report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
        </div>
      </div>

      <div className='card shadow-sm mb-4 p-3 p-md-4'>
        <div className='d-flex gap-2 mb-3'>
          <i className="bi bi-person-check fs-3 mb-0"> Employee Report</i>
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>Performance report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>Attendance report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
          <div className='col'>
            <div className='h-100 p-3 rounded-3' style={{backgroundColor:"#eae9ea", cursor:'pointer'}}>
              <h5>Engagement report</h5>
              <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos eaque voluptatum, porro, optio nostrum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report