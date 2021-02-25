
import {useState} from "react"
import React from 'react';
import firebase from "./src/components/config/firebase"
import { StyleSheet, Text, View ,TextInput, ImageBackground ,Button, ScrollView ,TouchableOpacity} from 'react-native';
export default function App() {
  const [gettodo,setTodo]=useState("")
  const [alltodo,setallTodo]=useState([])
  




  
  let obj={
          alltodo,
  }
  
  firebase.database().ref("todos/").set(obj)
 const AddItem=()=>{
           setallTodo([...alltodo,{key:Math.random().toString(), data: gettodo}])
           setTodo("");
 }


 const remove = (itemkey)=>{
    let list=alltodo.filter(item=>item.key != itemkey)
    setallTodo(list)
  firebase.database().ref("todos/"+ itemkey.key).remove()
    
 }

 const editTodo = () => {
     
    
  
}

  return (
    
    <ImageBackground   source={require('./assets/back.jpg')}           style={styles.container}>
        <Text style={styles.Title}> TODO APP WITH  DATABASE </Text>
       <View style={styles.InputContainer}>
          <TextInput  value={gettodo}  onChangeText={(text)=>setTodo(text)}   placeholderTextColor = "#fff"  style={styles.input}  placeholder="Enter todo" /> 
        <Button    onPress={AddItem} title="Add" /> 
    </View>
      
            <ScrollView style={styles.scrollar}>
             {alltodo.map((item)=>
             
               <View style={styles.ScrollViewItem}>
             <Text style={styles.itemtext}>{item.data}</Text> 
             <View>
             </View>


             <TouchableOpacity style={styles.crossText}>
                         <Text onPress={()=>remove(item.key)}  key={item.key}  TouchableOpacity={0.7} style={styles.delBtn}> X</Text> 
                         </TouchableOpacity>
                    <TouchableOpacity>   
                      <Text  onPress={()=>editTodo(item.key)} style={styles.editBtn}> Edit</Text>
                  </TouchableOpacity>

             </View> 
                    )}
               </ScrollView>
    </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:25,
    marginTop:20,
  },


  Title:{
            fontSize:20,
            color:"purple",
            fontFamily:"sans-serif",
            backgroundColor:"purple",
            color:"white",
            borderRadius:10,
            padding:10,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

          
          

  },

  InputContainer:{
    marginTop:20,
        flexDirection:"row",
        width:"70%",
        justifyContent:"space-between",
        alignItems:'center'
           

        
  },


  input:{

                    borderColor:"red",
                    width:"80%",
                    fontSize:16,
                    padding:10,
                    borderBottomWidth:2,
                    color:'white'

             
  },
  
  scrollar:{
       
          width:"90%",
          marginTop:30,
          
  },
  ScrollViewItem:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
    alignSelf:"center",
    padding:10,
    margin:5,
    backgroundColor:"#BEDC88",
    borderRadius:25,

  },

  itemtext:{
         color:"gray",
           fontWeight:'400',
           fontSize:23,
  },
  

  crossText:{
          
          
          fontSize:18,
         
          
          
  },


  delBtn:{
            color:"red",
            marginLeft:160,

  },


  editBtn:{ 
             color:"green"  

  }


});
