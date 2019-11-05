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
import { LaunchesPastQuery } from '../generated/graphql'

const Home: React.FC = () => {
  const { data, loading } = useQuery<LaunchesPastQuery>(LAUNCHES_PAST_QUERY)

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
          data.launchesPast!.map(launch => (
            <IonItem key={launch!.id as string}>
              {launch!.mission_name} | {launch!.rocket!.rocket_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
