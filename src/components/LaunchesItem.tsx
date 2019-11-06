import React from 'react'
import { IonCard, IonImg } from '@ionic/react'

import { Launch } from '../generated/graphql'

interface Props {
  launch: Launch
}

const LaunchesItem: React.FC<Props> = props => {
  const { launch } = props

  return (
    <IonCard button>
      <IonImg src={launch.links.flickr_images[0]} />
      <h2>{launch.mission_name}</h2>
      <p>{launch.rocket.rocket_name}</p>
    </IonCard>
  )
}

export default LaunchesItem
