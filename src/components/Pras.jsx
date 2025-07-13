import React from 'react'
import Cont from '../assets/Cont.jpeg'

const Pras = () => {
  return (
    <div className="min-h-screen">
      {/* Main Component with Fixed Background */}
      <div
className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Cont})` }}>
        <div>
          <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay */}
          <h1 className="relative z-10 text-white text-5xl font-bold text-center px-4">
            Welcome to My Website</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolorum.</p>
        </div>
      </div>

    </div>
  );
}
export default Pras