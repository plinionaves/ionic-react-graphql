import React from 'react'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonFooter,
  IonSlides,
  IonSlide,
} from '@ionic/react'
import { close, add, remove } from 'ionicons/icons'

interface Props {
  src: string
  onClose?: () => void
}

const ImageViewer: React.FC<Props> = props => {
  const { src, onClose = () => null } = props
  const options = {
    zoom: {
      maxRatio: 5,
    },
  }

  return (
    <>
      <IonContent className="transparent">
        {src ? (
          <IonSlides options={options}>
            <IonSlide>
              <div className="swiper-zoom-container">
                <img src={src} alt="Zoom Viewer" />
              </div>
            </IonSlide>
          </IonSlides>
        ) : null}
      </IonContent>
      <IonFooter>
        <IonToolbar className="transparent">
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
