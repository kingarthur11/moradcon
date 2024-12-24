import React from 'react'

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
                    <img style={{ borderRadius: '16px' }} src="https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688109087-screenshots.png" alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src="	https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688109104-screenshots.png" alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src="	https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688100981-screenshots.png" alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src="	https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688109222-screenshots.png" alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src="	https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688108614-screenshots.png" alt="" />
                </div>
                <div className=''>
                    <img style={{ borderRadius: '16px' }} src="	https://demo.workdo.io/erpgo/storage/uploads/landing_page_image/1688108626-screenshots.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects