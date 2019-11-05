import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from '@ionic/react'
import React from 'react'

import { useLaunchesPastQuery } from '../generated/graphql'

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
            <IonCard key={launch.id}>
              <IonCardHeader>
                <IonCardTitle>{launch.mission_name}</IonCardTitle>
              </IonCardHeader>
              <IonImg src={launch.links.flickr_images[0]} />
              <IonCardContent>{launch.rocket.rocket_name}</IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
