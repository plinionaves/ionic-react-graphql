import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { LAUNCHES_PAST_QUERY } from '../graphql/launches'

const Home: React.FC = () => {
  const { data, loading } = useQuery(LAUNCHES_PAST_QUERY)

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
          data.launchesPast.map((launch: any) => (
            <IonItem key={launch.id}>
              {launch.mission_name} | {launch.rocket.rocket_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
