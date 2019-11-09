import React, { useState, useCallback, useEffect } from 'react'
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'

import { useLaunchesPastQuery, Launch } from '../generated/graphql'
import LaunchesItem from './LaunchesItem'

const Launches: React.FC = () => {
  const { data, loading, fetchMore } = useLaunchesPastQuery({
    variables: { limit: 12, offset: 0 },
  })
  const [offset, setOffset] = useState(0)
  const [limit] = useState(12)
  const [finished, setFinished] = useState(false)

  const handleLoadMore = useCallback(() => setOffset(limit + offset), [
    limit,
    offset,
  ])

  useEffect(() => {
    if (offset > 0) {
      fetchMore<'offset'>({
        variables: {
          offset,
        },
        updateQuery(previous, { fetchMoreResult }) {
          if (!fetchMoreResult) {
            return previous
          }

          if (fetchMoreResult.launchesPast.length < limit) {
            setFinished(true)
          }

          return {
            ...previous,
            launchesPast: [
              ...previous.launchesPast,
              ...fetchMoreResult.launchesPast,
            ],
          }
        },
      })
    }
  }, [fetchMore, limit, offset])

  return (
    <IonGrid fixed className="ion-no-padding">
      <IonRow>
        {loading ? (
          <IonCol>
            <p>Loading...</p>
          </IonCol>
        ) : (
          data &&
          data.launchesPast.map(launch => (
            <IonCol
              key={launch.id}
              size="12"
              sizeSm="6"
              sizeLg="4"
              className="ion-no-padding"
            >
              <LaunchesItem launch={launch as Launch} />
            </IonCol>
          ))
        )}
      </IonRow>
      {!loading && !finished ? (
        <IonRow>
          <IonCol>
            <IonButton expand="block" onClick={handleLoadMore}>
              Load more...
            </IonButton>
          </IonCol>
        </IonRow>
      ) : null}
    </IonGrid>
  )
}

export default Launches
