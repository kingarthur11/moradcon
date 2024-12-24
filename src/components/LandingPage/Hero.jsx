import React from 'react'

const Hero = () => {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Moradcon
            <span class="sm:block">  Nigeria Limited provide </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Products and Service to function the way client's need it in order to solve their problems while adhering to details and professionalism
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero