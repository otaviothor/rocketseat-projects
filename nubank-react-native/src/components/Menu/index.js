import React from 'react'

import { Container, Code, Logo, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

import QRCode from '../../../assets/qrcode.png'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <Logo source={QRCode}/>
      </Code>

      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff'/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#fff'/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='credit-card' size={20} color='#fff'/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#fff'/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
