import React from 'react'
import { IonApp } from '@ionic/react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './apollo'
import Router from './Router'
import Menu from './components/Menu'

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <Router>
        <Menu />
      </Router>
    </IonApp>
  </ApolloProvider>
)

export default App
