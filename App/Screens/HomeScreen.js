import React from 'react';
import {View,AsyncStorage,TouchableOpacity,ScrollView,RefreshControl,FlatList} from 'react-native';
import { connect } from 'react-redux'
import {Container,Header,Title,Content,Button,Left,Right,Body,Icon,Text} from 'native-base';
import { navigate } from '../Services/Navigator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FoodyListItem  from '../Component/FoodyListItem'
import TabItem from '../Component/TabItem'
import {  EventHomeListData,LocationChanged} from '../Actions';
import _ from 'lodash';


 class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  
  }


  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login')
  };
  handleClick = () => {
    alert('Button clicked!');
}


componentWillMount() {
  navigator.geolocation.getCurrentPosition(
    position => {
  
      this.props.EventHomeListData({latitude:position.coords.latitude,longitude:position.coords.longitude});
      
   
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
 
}
componentWillReceiveProps(nextProps) { //componentlar geldikten sonra çalışır

}
componentDidMount() {

}
/*
createDataSource({ eventArray }) {
const ds = new ListView.DataSource({
rowHasChanged: (r1, r2) => r1 !== r2
});
this.dataSource = ds.cloneWithRows(eventArray);
}*/
_renderItem = ({item}) => (
      <FoodyListItem key={item} event={item} />

);


_keyExtractor = (item, index) => item.eventId;
    render() {

      return (
        <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={()=>this._signOutAsync()}>
            <Icon name="playlist-add" type="MaterialIcons" />
            </TouchableOpacity>
          </Left>
          <Body>
          </Body>
          <Right >
            <TouchableOpacity>
          <Icon  name="message" type="MaterialIcons" />
          </TouchableOpacity>
          </Right>
        </Header>
        <Content>
        <ScrollView horizontal>
       
       <TabItem />   
       <TabItem/>  
       <TabItem/>  
       
   </ScrollView>
   <FlatList
        data={this.props.eventArray}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />

        </Content>
        
      </Container>
      );
    }
  }

  const mapToStateProps = ({ EventResponse }) => {
    var {data}=EventResponse;
    const eventArray = _.map(data, (value, uid) => {
      return { ...value, uid };
    });
    return { eventArray }; //{ isim:'Ayse', soyIsim: 'asa',sube: 'a', number:'asd',uid:'asdada'}
  };
  
  export default connect(mapToStateProps, { EventHomeListData,LocationChanged })(HomeScreen);
