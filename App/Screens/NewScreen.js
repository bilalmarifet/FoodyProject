import React from 'react';
import {View,TouchableOpacity,StyleSheet,Image,Picker as Pick,Platform,Modal,} from 'react-native';
import {Container,Header,Form,Title,Content,Button,Left,Right,Body,Label,Icon,Text,Item,Input,Textarea,Picker} from 'native-base';

//import PhotoUpload from 'react-native-photo-upload'
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import Hr from "react-native-hr-component";
import {AccessToken,LoginManager,GraphRequestManager ,GraphRequest,LoginButton} from 'react-native-fbsdk';
import TimePicker from 'react-native-simple-time-picker';
export default class NewScreen extends React.Component {


  triggerModal() {
    this.setState(prevState => {
      return {
        display: true
      }
    });
  }


  
  constructor(props) {
   
    super(props);
    this.state = {
      selected: "1",
      selectedCounter:"1",
      selectedHours: 0,
      display: false,
      isHoursSelected:false,

      selectedMinutes: 0,

    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onValueChangeCounter(value: string) {
    this.setState({
      selectedCounter: value
    });
  }
  

  renderPickerPrivacy(){
    if(Platform.OS === 'ios'){
      return(
<Picker
              
              mode="dropdown"
              style={{width:250}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
           
            >
              <Picker.Item label="Sadece Arkadaslarim" value='1' />
  <Picker.Item label="Yakinimdakiler" value='2' />
  <Picker.Item label="Herkes" value='3' />
            </Picker>
      );
    }
    else{
      return(
<Pick
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                prompt='Options'
                style={{marginLeft:'-15%',width:250,transform: [
                  { scaleX: 0.7 }, 
                  { scaleY: 0.7 },
               ]}}
                
              >
              
  <Pick.Item label="Sadece Arkadaslarim" value='1' />
  <Pick.Item label="Yakinimdakiler" value='2' />
  <Pick.Item label="Herkes" value='3' />
</Pick> 





      );
    }
  }
  

  renderPickerCounter(){
    if(Platform.OS === 'ios'){
      return(
<Picker
              
              mode="dropdown"
              
              selectedValue={this.state.selectedCounter}
              onValueChange={this.onValueChangeCounter.bind(this)}
           
            >
              <Picker.Item label="1" value='1' />
  <Picker.Item label="2" value='2' />
  <Picker.Item label="3" value='3' />
            </Picker>
      );
    }
    else{
      return(
<Pick
                selectedValue={this.state.selectedCounter}
                onValueChange={this.onValueChangeCounter.bind(this)}
                prompt='Options'
                style={{width:'15%',transform: [
                  { scaleX: 0.7 }, 
                  { scaleY: 0.7 },
               ]}}
                
              >
              
  <Pick.Item label="1" value='1' />
  <Pick.Item label="2" value='2' />
  <Pick.Item label="3" value='3' />
</Pick> 





      );
    }
  }
  


    render() {


     


      return (
        <Container style={{ flex:1}}  >
        <Header style={{backgroundColor:'#fff'}}>
          <Left>
            <TouchableOpacity onPress={()=>this._signOutAsync()}>
            <Text  >Iptal</Text>
            </TouchableOpacity>
          </Left>
          <Body >
            <Text>Gonderi Paylas</Text>
          </Body>
          <Right >
            <TouchableOpacity>
          <Text  >Paylas</Text>
          </TouchableOpacity>
          </Right>
        </Header>

<Content style={{marginLeft:'2%',marginRight:'2%'}}>
<View style={{flexDirection:'row',flex:1}}>
<Text style={{marginLeft:'2%',marginTop:'5%'}}>Oguz Marifet</Text>
<View style={{marginTop:'1.5%',flexDirection:'row',marginLeft:'5%'}}>
<Icon name='unlock' style={{fontSize:20,...Platform.select({
  ios: {
    marginTop:'4%'
  },
  android: {
    marginTop:'7%'
  },
})
}}/>
{this.renderPickerPrivacy()}

</View>









</View>

<Textarea rowSpan={5}  style={{borderRadius:8,borderBottomColor:'#e1e1e1',borderBottomWidth:1,marginTop:'5%'}} placeholder="Neler Yapicaksin Bugun"/>
<View style={{flexDirection:'row'}}>
<Text style={{marginTop:'3.5%'}}>Kisi Sayisi: </Text>
{this.renderPickerCounter()}
<TouchableOpacity onPress={() => this.triggerModal()}>

<Text style={{marginTop:'5.5%',marginLeft:'15%'}}>Baslangic Saati: {this.state.selectedHours} : {this.state.selectedMinutes}</Text>
</TouchableOpacity>
 
</View>



          <Modal visible={this.state.display} animationType = "fade" 
              
                >
          <View style={{marginTop:'10%'}}>

          <TimePicker
          selectedHours={this.state.selectedHours}
          //initial Hourse value
          selectedMinutes={this.state.selectedMinutes}
          //initial Minutes value

          onChange={(hours, minutes) => this.setState({ 
               selectedHours: hours, selectedMinutes: minutes
               
         })}
        />
        <View style={{marginTop:'30%'}}>
        <Button onPress={() => {
        this.setState({display: false})
    } } style={{borderRadius:5,backgroundColor:'#4C2BDC',width:'80%',justifyContent:'center',marginLeft:'10%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderWidth:0,
        elevation: 1,
        borderWidth:1}}>
        <Text
        >Devam Et</Text>
        </Button>
        </View>

          </View>
        </Modal>

{/* <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
 >

   <Image
     style={{

       width: 200,
       height: 200,
       borderRadius: 8
     }}
     resizeMode='cover'
     source={{
       uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
     }}
   /> */}
 {/* </PhotoUpload>s */}
</Content>

           
            
      </Container>
      );
    }
  }





  const styles = StyleSheet.create({
   contentStyle: {
       paddingTop:30,
       paddingLeft:10,
       paddingRight:10
   },
   
  });


