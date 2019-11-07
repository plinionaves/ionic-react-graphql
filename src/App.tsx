import React from 'react'
import { IonApp } from '@ionic/react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './apollo'
import Router from './Router'

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <Router />
    </IonApp>
  </ApolloProvider>
)

export default App
