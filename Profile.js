import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Avatar } from 'react-native-elements';

const Profile = () => {
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
              <Text style={styles.modalText}>My Profile</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Change Address</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Avatar

            size="medium"
            rounded icon={{ name: 'person' }}
            // onPress={() => console.log("yo!")}
            onPress={() => setModalVisible(true)}
            containerStyle={{ marginLeft: -50, marginTop: 100, backgroundColor: '#008e0f' }}

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
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#c3e6c0',
    // margin: 20,
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5

    // backgroundColor: 'rgba(0,0,0,0.7)',
    


  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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

export default Profile;