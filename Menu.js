import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Avatar, } from 'react-native-elements';

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
   
    <View style={styles.centeredView}>
      
      <Modal
        animationType= 'fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          
          
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.blur}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>MENU</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)} 
              >
              <Text style={styles.textStyle}>Logout</Text>
              </Pressable>
              
            </View>
          </View>
        </View>
      </Modal>
      
      <Avatar

            size="large"
            onPress={() => setModalVisible(true)}
            icon={{ name: 'menu', color: '#c3e6c0' }}
            containerStyle={{ marginRight: -70, marginTop: 130 }}

          />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  
  },

  blur:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    
  
  },


  modalView: {
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 20,
    padding: 35,
    backgroundColor:'#c3e6c0',
    // margin: 20,
    // backgroundColor: 'rgba(0,0,0,0.7)',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
      
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
      // elevation: 5,
    
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    
    backgroundColor:'#006a00'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Menu;