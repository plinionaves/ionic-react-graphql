import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonCardContent,
} from '@ionic/react'

import { Launch } from '../generated/graphql'

interface Props {
  launch: Launch
}

const LaunchesItem: React.FC<Props> = props => {
  const { launch } = props

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{launch.mission_name}</IonCardTitle>
      </IonCardHeader>
      <IonImg src={launch.links.flickr_images[0]} />
      <IonCardContent>{launch.rocket.rocket_name}</IonCardContent>
    </IonCard>
  )
}

export default LaunchesItem
