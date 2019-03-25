import React, { Component } from 'react';
import { Image, View, TouchableOpacity,ImageBackground } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button, Thumbnail, Right, Content, Item, Container, Header, backGroundSize} from 'native-base'
import { SharedElement } from 'react-native-motion';
import { navigate } from '../Services/Navigator';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class TabItem3 extends Component {
  render() {

    return (

      <Container>
        {/*<Header stlyle={{width:500, height:500}} >
        <ImageBackground   style={{width: '120%',height:'100%', marginLeft:'0%', marginRight:'0%'}}source={require('../src/restorant.jpg')}/ > 
          {/* <Left /> */}
          
          {/* <Right /> */}
          {/*<Right>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}>
          <Icon  name="wrench" type="MaterialIcons" />
          </TouchableOpacity>
          </Right>
          </Header>*/}
        
        <Content>

          <Card style={{marginTop:'0%',marginLeft:'0%',marginRight:'0%', height:600}}>
            <ImageBackground   style={{width: '100%',height:100, marginTop:'0%'}}source={require('../src/foody-manzara.jpg')} >
            <TouchableOpacity>
              <Icon active name='chevron-left' style={{marginLeft:5,marginTop:1,color:'rgba(255, 255, 255, 0.77)'}}/>
            </TouchableOpacity>
              <Thumbnail circle large style={{marginLeft:9.5, marginTop:'12%'}} source={require('../src/foodyresim.jpg')}  />


            </ImageBackground>
            <Text style={{marginLeft:'70%', fontSize:12}}>
            <Icon active name="location-arrow" style={{marginLeft:'50%',marginRight:'40%'}} />
              Bayraklı/İzmir
            </Text>
            <Text style={{fontSize:15, marginLeft:10, marginTop:20, fontWeight:'bold'}}>
              Kullanıcı Adı
            </Text>
            <Text style={{fontSize:8, marginLeft:10}}>
              @bilmemne
            </Text>
            <Text style={{fontSize:12, marginLeft:10, fontWeight:'normal', marginTop:15}}>
              Üniversite/Meslek
            </Text>
            <Text style={{fontSize:15, marginLeft:10, marginTop:10, fontWeight:'bold'}}>
              Hakkında
            </Text>
            <Text style={{fontSize:10, marginLeft:10, marginTop:10, fontWeight:'normal',fontFamily:'QuickSand'}}>
              Ege Üniversitesi Tıp fakültesinde okuyorum. 19 yaşındayım 2. sınıfım. Konuşmayı ve insanlarla tanışmayı severim. :))
            </Text>   
            <View style={{flexDirection:'row', marginTop:10 ,justifyContent:'center',shadowColor:'black',shadowOffset:{width:30,height:20}, shadowOpacity:20, shadowRadius:10}}>
            <Button style={{backgroundColor:'#ffff' ,width:75, height:50, borderRadius:6,marginTop:30}} bordered light  > 
              <Text style={{fontWeight:'bold',fontSize:15, marginLeft:5, color:'#000000'}}>123
                <Text style={{fontFamily:'QuickSand',fontWeight:'normal',fontSize:9}}> Arkadaş</Text>
              </Text>
            </Button>
            <Button style={{backgroundColor:'#ffff',width:70, height:50, borderRadius:6,marginLeft:20, marginTop:30, }} bordered light > 
              <Text style={{fontWeight:'bold',fontSize:15,marginLeft:7, color:'#000000'}}>54
                <Text style={{fontFamily:'QuickSand',fontWeight:'normal',fontSize:10}}> Event</Text>
              </Text>
            </Button>

            <Button style={{backgroundColor:'#ffff',width:90, height:50, borderRadius:6,marginLeft:20, marginTop:30}} bordered light > 
              <Text style={{fontWeight:'bold',fontSize:15, marginLeft:5, color:'#000000'}}>4
                <Text style={{fontFamily:'QuickSand',fontWeight:'normal',fontSize:10}}> Güvenilirlik</Text>
              </Text>
            </Button>
            </View>
          </Card>           
        </Content>
      </Container>
    );
  }
}