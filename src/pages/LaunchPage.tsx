import React, { useCallback } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
} from '@ionic/react'
import { useParams } from 'react-router'

import { useLaunchQuery, Launch } from '../generated/graphql'
import LaunchDetail from '../components/LaunchDetail'

const LaunchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useLaunchQuery({
    variables: { id },
  })

  const handleSelectImage = useCallback((url: string) => {
    console.log('Selected: ', url)
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/launches" />
          </IonButtons>
          <IonTitle>Launch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <LaunchDetail
            launch={data!.launch as Launch}
            onSelectImage={handleSelectImage}
          />
        )}
      </IonContent>
    </IonPage>
  )
}

export default LaunchPage
