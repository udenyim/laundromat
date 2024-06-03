import React from 'react'
import { servicesData } from '../data/servicesData'

export default function Services() {
  return (
    <main className="bg-white p-4">
      <div className="container mx-auto py-20 flex flex-col gap-6">
        {
          servicesData.map((item, i) =>
            <aside key={item.id} className={`flex flex-col gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="relative min-h-44 h-44 md:h-60 rounded-md overflow-hidden shadow-lg shadow-backdrop flex-1 border">
                <img data-aos="fade-up" data-aos-delay="1000" src={item.image} alt="" className="absolute left-0 top-0 object-cover w-full h-full object-center" />
              </div>
              <div className="flex-1 py-5 flex flex-col justify-center p-4 gap-4">
                <h4 data-aos="zoom-in" data-aos-delay="500" className="text-primary text-xl md:text-3xl text-center font-medium">{item.text}</h4>
                <p className="text-dark/60 text-base md:text-lg text-center font-light">{item.info}</p>
              </div>
            </aside>
          )
        }
      </div>
    </main>
  )
}
