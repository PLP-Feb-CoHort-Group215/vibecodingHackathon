import React from 'react'
import HeroCarousel from '../sections/HeroCarousel'
import CoreValues from '../sections/CoreValues'
import NewsReports from '../sections/NewsReports'
import History from '../sections/History'

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <CoreValues />
      <NewsReports />
      <History />
    </main>
  )
}