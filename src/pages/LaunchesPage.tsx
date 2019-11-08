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
        <IonButtons slot="end">
          <IonMenuButton menu="menu-r" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Launches />
    </IonContent>
  </IonPage>
)

export default LaunchesPage
