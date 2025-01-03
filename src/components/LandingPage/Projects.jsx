import React from 'react'
import Image1 from '../../assets/adjacent_view_2.jpeg'
import Image2 from '../../assets/adjacent_view.jpeg'
import Image3 from '../../assets/double_view.jpeg'
import Image4 from '../../assets/house_front_view.jpeg'
import Image5 from '../../assets/house_side_view.jpeg'

const Projects = () => {
  return (
    <div className='bg-gray-600 text-slate-50'>
        <div className='p-10'>
            <div className='flex align-center justify-center pb-10'>
                <div className='text-center w-1/2'>
                    <p className='text-2xl font-medium'>Features</p>
                    <h4 className='text-3xl font-bold py-2'>All In One Place CRM System</h4>
                    <p className=''>Use these awesome forms to login or create new account in your project for free.</p>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 gap-8'>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src={Image1} alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src={Image2} alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src={Image3} alt="" />
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Projects

