import React from 'react'
import { ApolloError } from 'apollo-boost'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
} from '@ionic/react'

interface Props {
  error: ApolloError
}

const Error: React.FC<Props> = ({ error }) => (
  <IonCard color="danger">
    <IonCardHeader>
      <IonCardTitle>{error.name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <p>{error.message}</p>
    </IonCardContent>
    {error.graphQLErrors.map(({ name, message }) => (
      <IonItem key={message} color="danger" lines="none">
        {name}: {message}
      </IonItem>
    ))}
  </IonCard>
)

export default Error
