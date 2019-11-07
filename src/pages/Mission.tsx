import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react'

const Mission: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mission Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Some mission</IonContent>
    </IonPage>
  )
}

export default Mission
