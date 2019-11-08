import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonImg,
} from '@ionic/react'
import { close } from 'ionicons/icons'

interface Props {
  src: string
  onClose?: () => void
}

const ImageViewer: React.FC<Props> = props => {
  const { src, onClose = () => null } = props

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={src} />
      </IonContent>
    </>
  )
}

export default ImageViewer
