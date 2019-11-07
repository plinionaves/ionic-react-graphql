import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react'
import { useParams } from 'react-router'

const Mission: React.FC = () => {
  const { id } = useParams()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mission Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Launch with id: {id}</IonContent>
    </IonPage>
  )
}

export default Mission
