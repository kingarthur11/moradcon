import React from 'react'
import Navbar from '../Navbar'

const Recruitment = () => {
  return (
    <div class="p-4 sm:ml-64">
        <Navbar />
        <div className='grid grid-cols-4 gap-4'>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">200</h5>
                <p class="font-medium text-white dark:text-gray-400">Current Openings</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">32</h5>
                <p class="font-medium text-white dark:text-gray-400">In-progress</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">15</h5>
                <p class="font-medium text-white dark:text-gray-400">Closed</p>
                </a>
            </div>
            <div className=''>
                <a href="#" class="block max-w-sm p-3 bg-fuchsia-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">60</h5>
                <p class="font-medium text-white dark:text-gray-400">Offered</p>
                </a>
            </div>
        </div> 
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='flex gap-4'>
                    <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Departments</option>
                        <option value="US">Human Resource</option>
                        <option value="CA">Web developer</option>
                        <option value="FR">Intern</option>
                        <option value="DE">Accounting</option>
                    </select>
                    <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Applicants</option>
                        <option value="US">Current Openings</option>
                        <option value="CA">In-progress</option>
                        <option value="FR">Closed</option>
                        <option value="DE">Offered</option>
                    </select>
                </div>
                <div>
                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
            </div>
        </nav>
        <div class="bg-white rounded-lg">
            <div class="grid grid-cols-4 gap-4 my-4">
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              <div class=""> 
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web developer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">chronological order.</p>
                </a>
              </div>
              
            </div>
        </div>   
    </div>
  )
}

export default Recruitment