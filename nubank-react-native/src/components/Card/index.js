import React from 'react'

import {
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function CardCentral() {
  return (
    <Card>
      <CardHeader>
        <Icon name='attach-money' size={28} color='#666' />
        <Icon name='visibility-off' size={28} color='#666' />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 1.500,00</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Transferência de R$ 450,00 recebida de Diego Schell Fernandes hoje às 06h15
            </Annotation>
      </CardFooter>
    </Card>
  )
}
