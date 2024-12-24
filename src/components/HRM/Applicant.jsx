import React from 'react'
import Navbar from '../Navbar'
import MainContent from '../MainContent'

const Applicant = () => {
  return (
    <div class="p-4 sm:ml-64">
        <Navbar />
        <div className='flex grid grid-cols-4 gap-4'>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">2021</h5>
                <p class="font-medium text-white dark:text-gray-400">In-progress</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">2021</h5>
                <p class="font-medium text-white dark:text-gray-400">In-progress</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">2021</h5>
                <p class="font-medium text-white dark:text-gray-400">Closed</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">2021</h5>
                <p class="font-medium text-white dark:text-gray-400">Offered</p>
                </a>
            </div>
        </div> 
        <MainContent />       
    </div>
  )
}

export default Applicant