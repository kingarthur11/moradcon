import React from 'react'
import teamphoto from '../../assets/team.png';
import teamphoto2 from '../../assets/teamphoto2.jpg';

const Discover = () => {
  return (
    <div className='bg-gray-200 text-slate-50'>
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="text-center mb-12">
        <p className="text-gray-500 font-semibold">Trusted by the World's Best Teams</p>
        <h2 className="text-2xl text-gray-600 font-bold mt-2">Over 700 people use our product.</h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-gray-600">Meet Your Business Needs</h3>
          <p className="text-gray-700 mb-4">
            Manage your projects and your talent in a single system, resulting in empowered teams, satisfied clients, and increased profitability.
          </p>
          <p className="text-gray-700 mb-4">
            Keep track of all your projects in the simplest way possible.
          </p>
          <p className="text-gray-700">
            Assign tasks to project members and track the status.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={teamphoto} alt="teamphoto" className="w-full h-auto max-w-md" />
        </div>
      </div>
      <div className="m-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
      <div className="md:w-1/2 flex justify-center">
          <img src={teamphoto2} alt="teamphoto2" className="w-full h-auto max-w-md" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-gray-600">Manage Your Workflow</h3>
          <p className="text-gray-700 mb-4">
          Manage your projects and your talent in a single system, resulting in empowered teams, satisfied clients, and increased profitability.
          </p>
          <p className="text-gray-700 mb-4">
          Keep a track of all your projects in most simple way.
          Assign tasks to project members and track the status.          </p>
          <p className="text-gray-700">
          Add members to your projects and keep them in sync with the progress.
          </p>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default Discover