import React, { Component } from 'react';
import { Image, View, TouchableOpacity,ImageBackground } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button, Thumbnail, Right, Content, Item, Container } from 'native-base'
import { SharedElement } from 'react-native-motion';
import { navigate } from '../Services/Navigator';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class TabItem2 extends Component {
  render() {
    return (
        
      

      
      <Content style={{width: 150,marginTop:'2%',marginLeft:10,marginRight:10,flex:1,height:120}}>
    
          
        <ImageBackground  borderRadius={10} style={{width: '100%',height:120}}source={require('../src/foodyresim.jpg')} >
        <Card transparent style={{ backgroundColor:'transparent'}}>
        <View borderRadius={10} style={{shadowColor: '#000',  backgroundColor:'#fff',
              padding:'3%',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 5,
              shadowOpacity: .9,
              marginLeft:'10%',marginTop:'50%',width:'80%',height:'40%'}}>
                        {/* <Thumbnail  style={{ width: 40, height: 40, borderRadius: 40/2}} source={require('../src/listimage.png')} /> */}
                       <View style={{width:'100%'}}>
                        <Text style={{fontWeight:'bold',fontSize:10,fontFamily:'QuickSand'}}>
                          Mediterranean 
                             Restorant
                        </Text>              
                   <TouchableOpacity onPress={()=>navigate("Detail")}>
                        
                          <Text style={{color:'#4C2BDC', fontSize:9}}>Etkinlik Düzenle    <Icon name="plus-circle" /> </Text>
                       
              </TouchableOpacity>                      
                        </View>
                      </View>
              <CardItem style={{ backgroundColor: "transparent" ,borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                  <Left>
                  </Left>
                  
              </CardItem> 
     
              </Card>

              </ImageBackground>
            
        
      </Content>
     

     
    );
  }
}