import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import LaunchPage from './pages/LaunchPage'
import LaunchesPage from './pages/LaunchesPage'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonMenu contentId="main-content" />
    <IonMenu contentId="main-content" side="end" menuId="menu-r">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonMenu>

    <IonRouterOutlet id="main-content">
      <Route path="/launches" exact>
        <LaunchesPage />
      </Route>
      <Route path="/launches/:id" exact>
        <LaunchPage />
      </Route>
      <Route path="/" exact>
        <Redirect to="/launches" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
