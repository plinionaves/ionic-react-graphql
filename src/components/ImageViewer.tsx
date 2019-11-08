import React from 'react'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonImg,
  IonFooter,
} from '@ionic/react'
import { close, add, remove } from 'ionicons/icons'

interface Props {
  src: string
  onClose?: () => void
}

const ImageViewer: React.FC<Props> = props => {
  const { src, onClose = () => null } = props

  return (
    <>
      <IonContent>
        <IonImg src={src} />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle slot="start">Zoom</IonTitle>
          <IonButtons slot="start">
            <IonButton color="light">
              <IonIcon icon={add} slot="icon-only" />
            </IonButton>
            <IonButton color="light">
              <IonIcon icon={remove} slot="icon-only" />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="light" onClick={onClose}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </>
  )
}

export default ImageViewer
