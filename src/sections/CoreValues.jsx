import React from 'react'

const values = [
  { title: 'Transparency', icon: '🔍', desc: 'We operate with full accountability.' },
  { title: 'Inclusion', icon: '🤝', desc: 'All voices are heard and respected.' },
  { title: 'Empowerment', icon: '💪', desc: 'Communities lead the change.' },
]

export default function CoreValues() {
  return (
    <section className="py-12 px-4 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((val, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-2">{val.icon}</div>
            <h3 className="text-xl font-semibold">{val.title}</h3>
            <p className="text-sm mt-2">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}