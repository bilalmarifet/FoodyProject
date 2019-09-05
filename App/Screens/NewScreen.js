import React from 'react';
import {View,TouchableOpacity,StyleSheet,Image,Picker as Pick,Platform,Modal,} from 'react-native';
import {Container,Header,Form,Title,Content,Button,Left,Right,Body,Label,Icon,Text,Item,Input,Textarea,Picker, Thumbnail} from 'native-base';

//import PhotoUpload from 'react-native-photo-upload'
import { connect } from 'react-redux';
import {RegisterChanged} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import Hr from "react-native-hr-component";
import {AccessToken,LoginManager,GraphRequestManager ,GraphRequest,LoginButton} from 'react-native-fbsdk';
import PhotoUpload from 'react-native-photo-upload'
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
      selectedHours: new Date().getHours(),
      display: false,
      isHoursSelected:false,
      photoIsChoosen:false,
      selectedAvatar:undefined,
      selectedMinutes: new Date().getMinutes(),

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
  renderImage(){
    if(this.state.photoIsChoosen==true){
      return(
        <Image

     style={{
        marginLeft:'5%',
       width: 250,
       height:200,
       borderRadius: 6
     }}
     resizeMode='cover'
     source={{

     }}

   />
      )
    }
    else{
     
    
    }
  }

  renderPickerPrivacy(){
    if(Platform.OS === 'ios'){
      return(
<Picker
              
              mode="dropdown"
              style={{width:250,marginTop:-3,marginLeft:'-2%'}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}

              textStyle={{fontSize:14,color:'#fff',fontWeight:'500'}}
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
                
                style={{width:250,fontSize:14,color:'#fff',fontWeight:'500',marginLeft:'-10%',marginTop:'-1%',
                transform: [
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
        <Header style={{backgroundColor:'#4C2BDC'}}>
        <LinearGradient colors={['#4C2BDC', '#5C42CD']} style={{width:'110%',flexDirection:'row',paddingLeft:'5%',paddingRight:'5%',paddingTop:'1%',...Platform.select({
  ios: {
    
  },
  android: {
   marginTop:'2%'
  },
})}}>

        <Thumbnail style={{  width: 35, height: 35, borderRadius: 35/2,borderWidth:1,borderColor:'#fff'}} source={require('../src/listimage.png')} />
        <Text style={{marginTop:'3%',marginLeft:'2%',fontFamily:'Quicksand-Regular',fontWeight:'500',color:'#fff',fontSize:14}}>Kullanici Adi</Text>


          <Icon name='unlock' style={{color:'#fff',fontSize:20,...Platform.select({
  ios: {
    marginTop:'2.5%',
    marginLeft:'5%'
  },
  android: {
    marginTop:'2.5%',
    marginLeft:'5%'
  },
})
}}/>
{this.renderPickerPrivacy()}

          
        </LinearGradient>
          
        </Header>

<Content style={{marginLeft:'2%',marginRight:'2%'}}>
<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
<TouchableOpacity onPress={()=>this.PhotoUpload()}  style={{borderRadius:20,marginLeft:'5%',shadowColor: "#000",width:40,height:40,borderColor:'#fff',borderStyle:'solid',
marginTop:5,
shadowColor: "#000000",
    shadowOpacity: 0.38,
    shadowRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0
    },

elevation: 20}}>
<Icon  name="camera" style={{fontSize:30,marginLeft:7,marginTop:3}} />
</TouchableOpacity>
<TouchableOpacity  style={{borderRadius:20,marginLeft:'5%',shadowColor: "#000",width:40,height:40,borderColor:'#fff',borderStyle:'solid',
marginTop:5,
shadowColor: "#000000",
    shadowOpacity: 0.38,
    shadowRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0
    },

elevation: 20}}>
<Icon name="pin" style={{fontSize:30,marginLeft:7,marginTop:3}} />
</TouchableOpacity>
<TouchableOpacity  style={{borderRadius:20,marginLeft:'5%',shadowColor: "#000",width:40,height:40,borderColor:'#fff',borderStyle:'solid',
marginTop:5,
shadowColor: "#000000",
    shadowOpacity: 0.38,
    shadowRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0
    },

elevation: 20}}>
<Icon type="Ionicons" name="contacts" style={{fontSize:30,marginLeft:7,marginTop:3}} />
</TouchableOpacity>

       
<View style={{marginTop:'1.5%',flexDirection:'row',marginLeft:'5%'}}>


</View>









</View>

<Textarea rowSpan={5}  style={{borderRadius:8,borderTopColor:'#e1e1e1',borderTopWidth:1,marginTop:'2%',paddingTop:'3%'}} placeholder="Neler Yapicaksin Bugun"/>
<View style={{flexDirection:'row'}}>
<Text style={{marginTop:'3.5%'}}>Kisi Sayisi: </Text>
{this.renderPickerCounter()}
<TouchableOpacity onPress={() => this.triggerModal()}>

<Text style={{marginTop:'7%',marginLeft:'5%'}}>Baslangic Saati: {this.state.selectedHours} : {this.state.selectedMinutes}</Text>
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

        <PhotoUpload
        containerStyle={{alignItems:'flex-start',marginLeft:'5%'}}
   onPhotoSelect={avatar => {
    
     if (avatar) {
      
       console.log('Image base64 string: ', avatar)
     }

     this.setState({ 
      photoIsChoosen:true
               
         })
   }}
 >

   {this.renderImage()}
   
 </PhotoUpload>
 <View style={{marginTop:'5%',marginLeft:'5%'}}>
 <TouchableOpacity>
    <Text>Konum Gir: </Text>
  </TouchableOpacity>
 </View>

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


