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
} from '@ionic/react'
import { useParams } from 'react-router'

import { useLaunchQuery, Launch } from '../generated/graphql'
import LaunchDetail from '../components/LaunchDetail'
import ImageViewer from '../components/ImageViewer'

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

  const handleModalClose = useCallback(() => setSelectedImage(''), [])

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
        <ImageViewer src={seletedImage} onClose={handleModalClose} />
      </IonModal>
    </IonPage>
  )
}

export default LaunchPage
