import React from 'react'
import { IonCard, IonImg } from '@ionic/react'

import { Launch } from '../generated/graphql'
import styles from './LaunchesItem.module.scss'

interface Props {
  launch: Launch
}

const LaunchesItem: React.FC<Props> = props => {
  const { launch } = props

  return (
    <IonCard button className={styles.card}>
      <IonImg src={launch.links.flickr_images[0]} className={styles.img} />
      <h2 className={styles.cardTitle}>{launch.mission_name}</h2>
      <p className={styles.cardSubtitle}>{launch.rocket.rocket_name}</p>
    </IonCard>
  )
}

export default LaunchesItem
