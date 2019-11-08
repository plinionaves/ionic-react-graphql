import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react'
import React from 'react'

import Launches from '../components/Launches'

const LaunchesPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Launches</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Launches />
    </IonContent>
  </IonPage>
)

export default LaunchesPage
