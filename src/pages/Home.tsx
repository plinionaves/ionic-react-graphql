import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

import { useLaunchesPastQuery, Launch } from '../generated/graphql'
import LaunchesItem from '../components/LaunchesItem'

const Home: React.FC = () => {
  const { data, loading } = useLaunchesPastQuery()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.launchesPast.map(launch => (
            <LaunchesItem key={launch.id} launch={launch as Launch} />
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
