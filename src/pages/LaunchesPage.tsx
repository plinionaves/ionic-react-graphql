import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

import Launches from '../components/Launches'

const LaunchesPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Launches</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Launches />
    </IonContent>
  </IonPage>
)

export default LaunchesPage
