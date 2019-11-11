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
  IonGrid,
  IonRow,
  IonCol,
  IonLoading,
} from '@ionic/react'
import { useParams } from 'react-router'

import { useLaunchQuery, Launch } from '../generated/graphql'
import Error from '../components/Error'
import LaunchDetail from '../components/LaunchDetail'
import ImageViewer from '../components/ImageViewer'

const LaunchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error } = useLaunchQuery({
    variables: { id },
  })
  const [seletedImage, setSelectedImage] = useState('')

  const handleSelectImage = useCallback((url: string) => {
    setSelectedImage(url)
  }, [])

  const handleModalClose = useCallback(() => setSelectedImage(''), [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/launches" color="light" />
          </IonButtons>
          <IonTitle>Launch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <IonLoading isOpen={loading} message="Loading..." />
        ) : error ? (
          <Error error={error} />
        ) : (
          <IonGrid fixed>
            <IonRow>
              <IonCol sizeLg="8" offsetLg="2">
                <LaunchDetail
                  launch={data!.launch as Launch}
                  onSelectImage={handleSelectImage}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>

      <IonModal isOpen={!!seletedImage} onDidDismiss={handleModalClose}>
        <ImageViewer src={seletedImage} onClose={handleModalClose} />
      </IonModal>
    </IonPage>
  )
}

export default LaunchPage
