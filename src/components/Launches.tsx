import React, { useState, useCallback, useEffect } from 'react'
import { IonButton } from '@ionic/react'

import { useLaunchesPastQuery, Launch } from '../generated/graphql'
import LaunchesItem from './LaunchesItem'

const Launches: React.FC = () => {
  const { data, loading } = useLaunchesPastQuery({
    variables: { limit: 12, offset: 0 },
  })
  const [offset, setOffset] = useState(0)
  const [limit] = useState(12)

  const handleLoadMore = useCallback(() => {
    setOffset(limit + offset)
    console.log('Clicked!')
  }, [limit, offset])

  useEffect(() => {
    console.log('Offset changed: ', offset)
  }, [offset])

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
      <IonButton expand="block" onClick={handleLoadMore}>
        Load more...
      </IonButton>
    </>
  )
}

export default Launches
