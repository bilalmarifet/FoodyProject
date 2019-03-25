
import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Container, Header, Form, Title,Spinner, Content,Label, Button, Left, Right, Body, Text,Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { RegisterChanged,RegisterFirstStepClick} from '../Actions'
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropdownAlert from 'react-native-dropdownalert'
import strings from './Localizations'
import Icon from 'react-native-vector-icons/FontAwesome';
class SignUpScreen extends React.Component {


  renderPasswordTextMessage() {
    if(this.props.isClicked){
      return(
        <Text>email yanlis</Text>
      );
    }
  }
  _registerFirstStep=async()=>{
  
    const { name, surname,password,email } = this.props;
   
    this.props.RegisterFirstStepClick({name,surname,password,email});
    }
  

  renderButton(){
    if(this.props.name!='' && this.props.email!='' && this.props.password!='' && this.props.surname!='' && this.props.password.length>5){
      if(this.props.spinner){


return (
<Button onPress={this._registerFirstStep.bind(this)} style={{borderRadius:5,backgroundColor:'#4C2BDC',justifyContent:'center',marginLeft:'10%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderWidth:1}}>
              <Text style={{fontFamily:'QuickSand',alignContent:"center"}}>
            {strings.continue}
              </Text>
              <Spinner color='#fff'  style={{marginLeft:5,marginRight:5,size:15}}/>
            </Button>

);
      }
      else{
      return (
        <Button  onPress={this._registerFirstStep.bind(this)} style={{borderRadius:5,backgroundColor:'#4C2BDC',justifyContent:'center',marginLeft:'10%',

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderWidth:1}}>
              <Text style={{fontFamily:'QuickSand',alignContent:"center"}}>
              {strings.continue}
              </Text>

            </Button>

   
      );
    }
    }
  
    return(
      <Button disabled onPress={this._registerFirstStep.bind(this)} style={{borderRadius:5,backgroundColor:'#b7aaf1',justifyContent:'center',marginLeft:'10%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,
      borderWidth:0}}>
            <Text style={{fontFamily:'QuickSand',alignContent:"center"}}>
            {strings.continue}
            </Text>
            {/* <Spinner  /> */}
          </Button>
  );

  }



  componentWillMount() {
    //It worked in english for me i forced to work in Turkish please remove under this line

    strings.setLanguage('tr');
  }
  _scrollToInput (reactNode) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }
  render() {

  
    return (
      <Container style={{ flex:1}}>
        {/* <DropdownAlert ref={ref => this.dropdown = ref}  /> */}
        <Image style={{ width:'100%'}} source={require('../src/LoginScreen/Vector.png')} />

         <Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector2.png')} />
         <Image style={{ position:'absolute',marginTop:7.65,  width:'100%'}} source={require('../src/LoginScreen/Vector1.png')} />

          <View style={{marginTop:'5%'}}></View>
          <KeyboardAwareScrollView style={{ flex:1 }}>

          <Item style={{ flex: 0.1, justifyContent: 'center',borderBottomColor:'transparent',fontFamily:'Quicksand' }}>
            <Text style={{ fontSize: 30,fontWeight:'500', fontFamily: 'Quicksand-Regular' ,color:'#4C2BDC'}}>
              {strings.signUp.toUpperCase()}
            </Text>
          </Item>
          {/* <View style={{ flex: 0.05 }}>  */}
        
          {/* </View> */}

          <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:12 ,fontSize:14}}>{strings.name}</Label>
              <Input style={{paddingBottom:20   }} onChangeText={name1 => this.props.RegisterChanged({ props: 'name', value: name1 })}  />
</Item>

<Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:12 ,fontSize:14}}>{strings.surname}</Label>
              <Input style={{paddingBottom:20   }} value={this.props.surname} onChangeText={surname1 => this.props.RegisterChanged({ props: 'surname', value: surname1 })}  />
</Item>
      
   {/*  <Item  style={styles.inputContainer} floatingLabel regular >
              <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:15 ,fontSize:14}}>{strings.email}</Label>
              <Input style={{paddingBottom:20   }} value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })} />
</Item>

          <Item style={{ borderColor: '#000000' }}>
              <Input
                style={styles.textInput}
                placeholderTextColor='#000000' value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })} placeholder={strings.email} />


            </Item> */}


<Item  style={styles.inputContainer} floatingLabel regular >
  <Icon style={{paddingLeft:'2%',color:'#e1e1e1'}}  size={30}  name='at' />
  <Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:12 ,fontSize:14}}>{strings.email}</Label>
            <Input  style={{paddingBottom:20   }}  value={this.props.email} onChangeText={email1 => this.props.RegisterChanged({ props: 'email', value: email1 })}/>
</Item>

<Item style={styles.inputContainer} floatingLabel regular >
<Label style={{bottom:25,color:'#4C2BDC',marginLeft:5,marginTop:12 ,fontSize:14}}>{strings.password}</Label>
            <Input  secureTextEntry style={{paddingBottom:20   }} value={this.props.password} onChangeText={password1 => this.props.RegisterChanged({ props: 'password', value: password1 })}/>
            <Icon style={{color:'#e1e1e1',marginRight:'5%'}} size={20}  name='user' />
</Item>
{this.renderPasswordTextMessage()}


            {/* <Item style={{ borderColor: '#000000' }}  >
              <Input 
                style={styles.textInput}
                secureTextEntry placeholderTextColor='#000000' value={this.props.password} onChangeText={password1 => this.props.RegisterChanged({ props: 'password', value: password1 })} placeholder={strings.password} />
            </Item> */}
           
 
         
          {/* <View style={{ flex: 0.2,paddingTop:'4%' }} > */}
         
          {/* </View> */}

          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: "flex-end", paddingRight: '5%' }}>
          {this.renderButton()}
          </View>
          </KeyboardAwareScrollView>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    textAlign: "center",
    color: '#000000',
    fontFamily: 'Quicksand-Regular'
  },
  inputContainer:{
    marginBottom:'6%',
    paddingTop:'2%',

    borderColor:'#4C2BDC',borderRadius:5,marginLeft:'5%',marginRight:'5%',
    height:'10%'

  }
});

const mapStateToProps = ({ RegisterResponse }) => {
  const { name, surname, username, email, password,isEmpty,spinner,isClicked} = RegisterResponse;
  return {
    name,
    surname,
    username, email, password
    ,isEmpty,
    spinner,
    isClicked
  };
};


export default connect(mapStateToProps, { RegisterChanged,RegisterFirstStepClick})(SignUpScreen)