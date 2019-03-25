import {Alert,AsyncStorage} from 'react-native';
import axios from 'axios';
import {EVENT_DATA_HOME_GET,EVENT_DATA_HOME_GET_SUCCESS,LOCATİON_CHANGE} from './types';
import { navigate } from '../Services/Navigator';
import qs from 'qs';


import {EVENT_GET_HOME_URL} from '../ApiConstants';



export const LocationChanged = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: LOCATİON_CHANGE,
      payload: { props, value }
    });
    
  };
  };


export const EventHomeListData = ({latitude,longitude}) => {
    return(dispatch)=>{
      dispatch({
        type: EVENT_DATA_HOME_GET
      });
        console.log("function:"+latitude);
      AsyncStorage.getItem('token').then((token) =>{
     
        AsyncStorage.getItem('Id').then((userID) =>{
 
            axios({
              method:'get',
              url:EVENT_GET_HOME_URL+"?id="+userID,
              headers:{'Content-Type':' application/json','Authorization':'Bearer '+token},
            }).then((response)=>{
                
                if(response.data){
                    dispatch({ type:EVENT_DATA_HOME_GET_SUCCESS , payload: response.data});

                }
       
              }).catch(function(error){
                console.log(error);
           
              });
          
             })
            
                
            });
        
   

        }

 
    
    };