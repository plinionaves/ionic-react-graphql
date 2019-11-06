import React from 'react'

import { useLaunchesPastQuery, Launch } from '../generated/graphql'
import LaunchesItem from './LaunchesItem'

const Launches: React.FC = () => {
  const { data, loading } = useLaunchesPastQuery({
    variables: { limit: 12, offset: 0 },
  })

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.launchesPast.map(launch => (
          <LaunchesItem key={launch.id} launch={launch as Launch} />
        ))
      )}
    </>
  )
}

export default Launches
