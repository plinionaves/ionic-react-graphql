import React, { useCallback, useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonModal,
  IonButton,
  IonIcon,
  IonImg,
} from '@ionic/react'
import { useParams } from 'react-router'
import { close } from 'ionicons/icons'

import { useLaunchQuery, Launch } from '../generated/graphql'
import LaunchDetail from '../components/LaunchDetail'

const LaunchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useLaunchQuery({
    variables: { id },
  })
  const [seletedImage, setSelectedImage] = useState('')

  const handleSelectImage = useCallback((url: string) => {
    console.log('Selected: ', url)
    setSelectedImage(url)
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

      <IonModal isOpen={!!seletedImage}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Image</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setSelectedImage('')}>
                <IonIcon icon={close} slot="icon-only" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonImg src={seletedImage} />
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default LaunchPage
