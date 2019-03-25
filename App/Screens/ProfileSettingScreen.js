import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Container,Header,Title,Content,Button,Left,Right,Body,Text, ListItem} from 'native-base';
import Tabitem3 from '../Component/Tabitem3'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { navigate } from '../Services/Navigator';




export default class ProfileSettingScreen extends Component {
    render(){
        return(
            <Container>
        <Header style={{backgroundColor:'rgba(196, 196, 196, 0.1)'}}>
          {/* <Left /> */}
          <Body>
            <Title style={{color:'blue'}}>Ayarlarım</Title>
          </Body>
          {/* <Right /> */}
        </Header>
        <Content>
          <ListItem icon>
            <Left>
                <TouchableOpacity>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="user-circle" />
              </Button>
              </TouchableOpacity>
            </Left>
            
            <Body>
            <TouchableOpacity>
              <Text>Profil Bilgilerimi Güncelle</Text>
              </TouchableOpacity>
            </Body>
            
           </ListItem>
           <ListItem icon>

            <Left>
            <TouchableOpacity>
                <Button style={{ backgroundColor:'red'}}>
                <Icon name="graduation-cap"/>
                </Button>
                </TouchableOpacity>

               
            </Left>
            
            <Body>
            <TouchableOpacity>
                <Text>Eğitim Durumunu Güncelle</Text>
                </TouchableOpacity>
            </Body>
            
            </ListItem>
            <ListItem icon>

            <Left>
            <TouchableOpacity>
                <Button style={{backgroundColor:"blue"}}>
                
                    <Icon name="flag"/>
                    
                </Button>
                </TouchableOpacity>
                
            </Left>
            <Body>
                <TouchableOpacity>
                <Text>Bildirim Ayarlarını Güncelle </Text>
                </TouchableOpacity>
            </Body>
            </ListItem >

            <Right/>
            
            </Content>

        </Container>
        


        );
    }
}