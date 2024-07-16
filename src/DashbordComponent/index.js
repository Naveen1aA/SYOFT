import React from 'react'
import './index.css'

const DashboardComponent = () => {
  return (
    <div className="dashboard-container">
      <div className='dashboard-container-sub'>
        <h1>Welcome to <br /> our community</h1>
        <p>Fuse helps dovelopers to build organized and well coded <br /> dashboards full of beautiful and rich modules join us and  <br /> start building your application today</p>
      </div>
      <div className="dashboard-images-container">
        <div>
        <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711445020/samples/man-portrait.jpg" alt="img" className="image" />
        <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711445017/samples/smile.jpg" alt="img" className="image" />
        <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711444993/samples/people/smiling-man.jpg" alt="img" className="image" />
        <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711444990/samples/people/kitchen-bar.jpg" alt="img" className="image" />
        </div>
        <div>
        <p>More than 17k people joined us it's your turn.</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent