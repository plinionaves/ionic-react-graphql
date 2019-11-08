import React from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import { Components } from '@ionic/core'

interface Props extends Partial<Components.IonMenu> {
  title?: string
  toolbarColor?: string
}

const Menu: React.FC<Props> = props => {
  const {
    title = 'Menu',
    toolbarColor = 'tertiary',
    contentId = 'main-content',
    ...rest
  } = props

  return (
    <IonMenu contentId={contentId} {...rest}>
      <IonHeader>
        <IonToolbar color={toolbarColor}>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonMenu>
  )
}

export default Menu
