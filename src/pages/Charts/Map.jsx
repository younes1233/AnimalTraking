import React from 'react'
import { MapChart } from '../../components'
import { ChartsHeader  } from '../../components'

const Map = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='map' title="Map" />  
      <div className='w-full'>
      <MapChart />
      </div>


    </div>
  )
}

export default Map