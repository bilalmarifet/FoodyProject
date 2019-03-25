import React, { Component } from 'react';
import { Image, View,Alert, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Body, Button, Thumbnail, Right, Content, Item } from 'native-base'


export default class FoodyListItem extends Component {
  render() {
    const { addedUserName, address, dateTime,description,personCount,placeName } = this.props.event;
    return (
      <Content style={{ marginTop: '5%', marginLeft: '1%', marginRight: '1%', flex: 1 }}>


        <Card style={{ flex: 0, marginLeft: '6%', borderRadius: 8,borderColor:'#E5E5E5' }}>

          <CardItem  style={{ marginLeft: 25, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
          <Thumbnail style={{ position:'absolute', top:-5, marginLeft:-40,  width: 50, height: 50, borderRadius: 50/2}} size={10} source={require('../src/listimage.png')} />

            <Body >

              {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
              <View style={{flexDirection:'row'}}>
                  <View>
                    <TouchableOpacity>
                <Text style={{fontSize:11,fontFamily:'Quicksand-Regular',fontWeight:"500"}}>
                  {addedUserName}
                </Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Icon name="time" type="Ionicons" style={{fontSize:15,marginTop:3,color:'#ccc'}} >
                
                </Icon>
                <Text style={{ fontSize: 8,marginTop:5,marginLeft:'2%', color:'#ccc', fontFamily:'Quicksand-Regular'}}>
                  24 saat once
                </Text>
              </View>
                </View>
                <Item style={{ borderColor: '#48009A' ,flex:1,marginBottom:30,marginLeft:'2%',marginTop:10}} >
                
                <View style={{position:'absolute',flexDirection:'row',marginLeft:'5%',marginRight:'20%'}}>
                <Thumbnail  style={{ width: 40, height: 40, borderRadius: 40/2,marginTop:5}} source={require('../src/listimage.png')} />
                <Thumbnail  style={{ width: 30, height: 30, borderRadius: 30/2,marginTop:10,marginLeft:20}} source={require('../src/listimage.png')} />
               
                </View>

                </Item>
          <TouchableOpacity style={{marginLeft:10}}>         
                   <Icon style={{color:'#48009A'}} name="arrow-dropright" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10}}>         
                   <Icon name="more" />
          </TouchableOpacity>
              </View>

            </Body>
            {/* <Right>
              <TouchableOpacity>
                <Icon type="MaterialCommunityIcons" name="dots-horizontal" />
              </TouchableOpacity>
            </Right> */}

          </CardItem>
          <Item style={{ borderColor: '#e1e1e1' ,flex:1,marginBottom:10,marginLeft:40}} />

          <View style={{ flexDirection: 'row', marginLeft: '4%', marginRight: '1%' }}>

            <TouchableOpacity>
              <Icon name="pin" style={{fontSize:22}} />
            </TouchableOpacity>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 13,fontFamily:'Quicksand-Regular' }}>{address}</Text>
              <Text style={{ color: '#474747', fontSize: 11,fontFamily:'Quicksand-Regular', marginRight: '10%' }}>
               {description}

                </Text>

            </View>

          </View>

            {/*<Image style={{ marginLeft: 35, marginRight: 10, height: 100, flex: 1, borderRadius: 8, marginTop: '2%' }} source={require('../src/yeni.png')} />
        <View style={{flexDirection:'row',marginLeft:35,marginTop:5}}>
              <Icon name="time" type="Ionicons" style={{fontSize:25}} >
                
                </Icon>
                <Text style={{ fontSize: 10,marginTop:7,marginLeft:'2%'}}>
                  07.02.19 | Persembe
                </Text>

                <Icon name="time" type="Ionicons" style={{marginLeft:'20%',fontSize:30,marginRight:'5%'}} >
                
                </Icon>
                <Icon name="time" type="Ionicons" style={{fontSize:30,marginRight:'5%'}} >
                
                </Icon>
                <Icon name="time" type="Ionicons" style={{fontSize:30,marginRight:'25%'}} >
                
                </Icon>


              </View> */}
          <CardItem style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
              <Left>
              <Icon name="time" type="Ionicons" style={{fontSize:20,color:'#ccc'}} >
                
                </Icon>
                <Text style={{ fontSize: 10,marginTop:7,marginLeft:'2%',color:'rgba(0, 0, 0, 0.5)',marginBottom:10}}>
                  {dateTime}
                </Text>
              </Left>
              <Right>
                <View style={{flexDirection:'row'}}>
              <Icon name="heart-outline" type='MaterialCommunityIcons' style={{fontSize:22,marginRight:'8%'}} >

                </Icon>
                <Icon name="comment-outline" type="MaterialCommunityIcons" style={{fontSize:22,marginRight:'8%'}} >
                
                </Icon>
                <Icon name="share" type="MaterialCommunityIcons" style={{fontSize:22}} >
                
                </Icon>
                </View>
              </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}