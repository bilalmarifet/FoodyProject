import React from 'react';
import {View,StyleSheet,CheckBox,TouchableOpacity,ImageBackground,Image,DatePickerIOS} from 'react-native';
import {Container,Picker,Header,Form,Title,Content,Button,Left,Right,Body,Icon,Text,DatePicker,Item,Input} from 'native-base';
import { connect } from 'react-redux';
import {RegisterChanged,RegisterSecondStepClick} from '../Actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LinearGradient from 'react-native-linear-gradient'
import strings from './Localizations'
import Spinner from 'react-native-loading-spinner-overlay';


class SignUpSecondScreen extends React.Component {
     


    // phoneNumberControl(value){
    //   if(value.length<13){
    //     this.props.RegisterChanged({props:'phoneNumber',value:value})
    //   }
    // }
    constructor(props){
        super(props);
        this.state = {
          radioSelected: '',
          chosenDate: new Date(),
          isDateChosen:false,
          selected: undefined,
          propsControlled:false,
          dateDay:'01',
          dateMonth:'01',
          dateYear:'01',
        }
        this.setDate = this.setDate.bind(this);
      }
      onValueChange(value) {
        this.setState({
          selected: value //sehir icin
        });
        this.props.RegisterChanged({props:'City',value:value})
      }

    
      setDate(newDate) {
        this.setState({ chosenDate: newDate,isDateChosen:true ,
          dateDay:newDate.toString().substr(8,2)
          ,dateMonth:newDate.toString().substr(4,3),
          dateYear:newDate.toString().substr(11,4)
          //this.state.chosenDate.toString().substr(4, 12
          });
        this.props.RegisterChanged({props:'birthDate',value:newDate})
      }
    
    
      radioClick(id) {
        this.props.RegisterChanged({props:'sex',value:id})
        this.setState({
          radioSelected: id
        })
      }
      renderDatePicker(){
        

          
          return(
            <View style={{flexDirection:'row',marginLeft:'3%'}}>
              <Text style={{color:'#4C2BDC'}}>Dogum Tarihini giriniz:</Text>
                <View style={{}}>
                <TouchableOpacity style={{ paddingLeft:'5%'}} >
                
                <DatePicker
                
                    // defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(1950, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"tr"}//burasi telefon diline gore duzenlenecek
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={strings.choose}
                    textStyle={{ color: "#b7aaf1",paddingTop:'-5%'}}
                    placeHolderTextStyle={{ color: "#4C2BDC",paddingTop:'-5%' }}

                    onDateChange={this.setDate}


                    disabled={false}
                    style={{marginTop:'5.5'}}
                    />
                   
                    </TouchableOpacity>
                </View>
              
     

       </View>
            
          );
          
      }
      registerclick(){
        const {sex,birthDate,phoneNumber,City} = this.props;
        console.log(sex)
        this.props.RegisterSecondStepClick({sex,birthDate,phoneNumber,City})
      }

      renderFinishButton(){

       
        if(this.state.propsControlled==false){
          return(
            <Button disabled iconRight style={{backgroundColor:'#b7aaf1'}}  onPress={this.registerclick.bind(this) } rounded >
            <Text textStyle={{paddingLeft:'10%'}} style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.finish}
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button>
          )
        }else{
          return(
            <Button iconRight style={{backgroundColor:'#4C2BDC'}}   rounded >
            <Text textStyle={{paddingLeft:'10%'}} style={{fontFamily:'Quicksand-Regular',color:'#fff'}}>
              {strings.finish}
            </Text>
            <Icon name='arrow-round-forward'/>
            </Button>
          );
        }
      }
      renderSpinner()
  {
    if(this.props.loading){
      return (<Spinner
        visible={true}
        overlayColor={'rgba(0, 0, 0, 0.65)'}
        size="large"
        animation="fade"
      />);
    }
    else{
      return (<Spinner
        visible={false}
        overlayColor={'rgba(0, 0, 0, 0.65)'}
        size="large"
        animation="fade"
      />);
    }
  }
    render() {
        
      return (
        

        <Container style={{ flex:1}}>

        <Image style={{ position:'absolute',marginTop:34.54,  width:'100%'}} source={require('../src/LoginScreen/Vector1.png')} />
      
      
      <Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector2.png')} />
      <Image style={{ width:'100%'}} source={require('../src/LoginScreen/Vector.png')} />
      
      <KeyboardAwareScrollView>
        {this.renderSpinner}
        
        
        <View  style={{alignItems:'center'}}>
           
        </View>
        <View style={{marginTop:'20%'}}></View>
        {/* <View style={{flex:0.1}}></View> */}
        {/* <View style={{flex:0.05}}></View> */}
       {/* paddling right %4 artacak her textde   */}
            <View style={{paddingTop:'1%',paddingLeft:'8%',paddingRight:'8%',justifyContent:'space-between'}}>
        {/* <Item style={{flexDirection:'row'}}> */}

{this.renderDatePicker()}


{/* <View style={{flexDirection:'row'}}>
   
   <Item  style={{borderColor:'#4C2BDC',borderRadius:6,width:'20%',height:'130%',justifyContent:'center',paddingLeft:'2%',marginLeft:'8%'}} regular  >

<Text>{this.state.dateDay}</Text>
<Icon style={{fontSize:18}} name='arrow-down'/>
</Item>
<Item  style={{borderColor:'#4C2BDC',borderRadius:6,width:'20%',height:'130%',justifyContent:'center',paddingLeft:'2%',marginLeft:'10%'}} regular  >

<Text>{this.state.dateMonth}</Text>
<Icon style={{fontSize:18}} name='arrow-down'/>
</Item><Item  style={{borderColor:'#4C2BDC',borderRadius:6,width:'25%',height:'130%',justifyContent:'center',paddingLeft:'2%',marginLeft:'10%'}} regular  >

<Text>{this.state.dateYear}</Text>
<Icon style={{fontSize:18}} name='arrow-down'/>
</Item>
   </View> */}

      
       

        <Text style={{justifyContent:'flex-start',fontFamily:'Quicksand-Regular',marginTop:'5%',paddingLeft:'4%',color:'#4C2BDC'}}>{strings.sex}</Text>
        <View style={{paddingTop:'2%',flexDirection:'row',paddingLeft:'4%',paddingRight:'4%',marginTop:'2%'}}>

        <TouchableOpacity key={1} style={{flexDirection:'row',justifyContent:'flex-start'}} onPress={this.radioClick.bind(this, 1)}>
            <View style={{
              height: 15,
              width: 15,
              borderRadius: 7.5,
              borderWidth: 1 ,
              borderColor: '#4C2BDC',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
              {
                1== this.state.radioSelected ?
                  <View style={{
                    height: 15,
                    width: 15,
                    borderRadius: 7.5,
                    backgroundColor: '#4C2BDC',
                  }} />
                  : null
              }
               
            </View>
           <Text style={{paddingLeft:'1%',marginTop:-2 ,fontFamily:'Quicksand-Regular',fontSize:15,color:'#4C2BDC'}}>{strings.woman}</Text>

          </TouchableOpacity>

          <TouchableOpacity key={2} style={{flexDirection:'row',justifyContent:'flex-end',marginLeft:'10%'}} onPress={this.radioClick.bind(this, 2)}>
            <View style={{
              height: 15,
              width: 15,
              borderRadius: 7.5,
              borderWidth: 1,
              borderColor: '#4C2BDC',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
              {
                2== this.state.radioSelected ?
                  <View style={{
                    height: 15,
                    width: 15,
                    borderRadius: 7.5,
                    backgroundColor: '#4C2BDC',
                  }} />
                  : null
              }
               
            </View>
           <Text style={{paddingLeft:'1%',marginTop:-2 ,fontFamily:'Quicksand-Regular',color:'#4C2BDC'}}>{strings.man}</Text>
          </TouchableOpacity>
              
      </View>


     

         
          <Text style={{justifyContent:'flex-start',fontFamily:'Quicksand-Regular',paddingTop:'2%',paddingLeft:'5%',color:'#4C2BDC'}}>{strings.city}</Text>
              <View style={{marginTop:'4%'}}></View>
          <Picker
              mode="dropdown"
              placeholder={strings.city}
              iosIcon={<Icon name="arrow-down" style={{color:'#4C2BDC'}} />}

              textStyle={{ color: "#4C2BDC",fontFamily: 'Quicksand-Regular'}}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#000' ,fontFamily:'Quicksand-Regular'}}
              style={{ width: '96%' ,borderWidth:1,borderColor:'#4C2BDC',justifyContent:'center',borderRadius:5}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            
          <Text style={{fontFamily:'Quicksand-Regular',paddingTop:'4%',paddingLeft:15,color:'#4C2BDC',marginBottom:'4%'}}>{strings.phone}</Text>         
          
          <Item regular style={{borderColor:'#4C2BDC',marginRight:'4%',borderRadius:5}}  >    
          
          <Input 
          
          style={{fontFamily:'Quicksand-Regular',paddingLeft:'5%',textAlign:"left",color:'#4C2BDC'}}
          keyboardType='phone-pad' placeholderTextColor='#4C2BDC' placeholder={strings.phone}
          

          value={this.props.phoneNumber} onChangeText={phoneNumber1 => this.props.RegisterChanged({ props: 'phoneNumber', value: phoneNumber1 })} placeholder={strings.phone}
          />
          </Item>
          
          
          {/* <Input 
          style={{textAlign:'auto',fontFamily:'Quicksand-Regular',paddingLeft:'5%',color:'#48009A'}}
          secureTextEntry  placeholderTextColor='#000000' placeholder='+90 506 680 4389'/> 
           <View
  style={{
    borderBottomColor: 'black',justifyContent:'flex-start',
    borderBottomWidth: 1,marginRight:'4%',marginLeft:'5%'
  }}
/> */}

</View>

         
            {/* <View style={{flex:0.10}}/> */}
            <View style={{marginTop:'10%'}}></View>
            <View style={{flexDirection:'row',justifyContent:"flex-end",paddingRight:'5%',paddingTop:'2%'}}>
            {this.renderFinishButton()}
            </View>
          
           

            
    
           

{/* <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:12 ,fontSize:14}}>{strings.surname}</Label>
              <Input style={{paddingBottom:20   }} value={this.props.surname} onChangeText={surname1 => this.props.RegisterChanged({ props: 'surname', value: surname1 })}  />
</Item> */}



            </KeyboardAwareScrollView>
        

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

  const mapStateToProps = ({ RegisterResponse }) => {
    const {  sex,
      birthDate,
      phoneNumber,
      City,
      spinner} = RegisterResponse;
    return {
      sex,
    birthDate,
    phoneNumber,
    City,
    spinner
    };
  };
  
  
  export default connect(mapStateToProps, { RegisterChanged,RegisterSecondStepClick})(SignUpSecondScreen)