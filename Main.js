import * as React from 'react';
import { Component, } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { Card, Button, } from 'react-native-elements'
import Setquantity from './Setquantity';
import Searchbar from './Searchbar';
import Modal from './Menu';
import Profile from './Profile';


class Home extends Component {
  render() {
    return (
      <View>
        <View style={styles.titlebar} >
          <Profile />
          <Text style={styles.header}>Fresh From Farm</Text>
          <Modal />
        </View>

        <View style={styles.searchbar}>
          <Searchbar />
        </View>

{/* test card 3---------------------------------------------------------------------------------------------------- */}

        <View style={styles.scroll}>
          <ScrollView>

            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/apple.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Apples</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>




            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/avocado.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Avocados</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>


            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/banana.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Bananas</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>



            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/coconut.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Coconuts</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>


            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/grape.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Grapes</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>


            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/green-apple.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Green-apples</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>


            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/kiwi.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Kiwi</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>


            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/lime.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Lime</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>

            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/pineapple.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Pineapple</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>

            <Card >
              <View style={styles.test}>
                <View>
                  <Image
                    source={require("./images/pomegranate.png")}
                    style={styles.testimage3}
                  />
                </View>

                <View>
                  <Card>
                    <Card.Title style={styles.cardtitle}>Pomegranate</Card.Title>

                    <Setquantity />

                    <Card.Divider />
                    <Card.Divider />

                    <View style={styles.addtocartbutton}>
                      <Button
                        title="Add to cart"
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#006a00' }}
                      />
                    </View>

                  </Card>
                </View>
              </View>
            </Card>

            <Card >
              <View style={styles.test}>
                <Card>
                  <Card.Title style={styles.cardtitle}>Thats all folks!!!</Card.Title>
                  <Card.Divider />
                </Card>
              </View>
            </Card>

            <Card >
              <View>
                <Text>|</Text>
                <Text>|</Text>
                <Text>|</Text>
                <Text>|</Text>
                <Text>|</Text>
                <Text>|</Text>
              </View>
            </Card>


          </ScrollView>
        </View>

{/* test card 3---------------------------------------------------------------------------------------------------- */}

      </View>
    );
  }
}

//footer- My cart tab-------------------------------------------------------------------------------------My cart tab

function Cart() {
  return (
    <View>
      {/* <View style={styles.mycartcontainer}> */}
      <View style={styles.titlebar}>
        <Text style={styles.mycartheader}>My Cart</Text>
        <Modal />

      </View>

      <View style={styles.searchbar}>
        <Searchbar />
      </View>

    </View>


  );
}

// My cart tab-------------------------------------------------------------------------------------My cart tab

const Tab = createMaterialBottomTabNavigator();


class Main extends React.Component {


  render() {

    return (

      <NavigationContainer>

        <Tab.Navigator
          initialRouteName="Home"
          inactiveColor='#008e0f'
          activeColor="#c3e6c0"
          labelStyle={{ fontSize: 12 }}
          barStyle={{ backgroundColor: '#006a00' }}


        >


          <Tab.Screen

            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          />

        </Tab.Navigator>

      </NavigationContainer>


    );
  }
}

export default Main;

const styles = StyleSheet.create({

  titlebar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 38,
    backgroundColor: '#006a00',
    flexDirection: 'row',

  },

  header: {
    marginTop: 29,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#c3e6c0',
  },

  searchbar: {
    padding: 10,
    backgroundColor: '#006a00',
  },

  scroll: {
    backgroundColor: '#c3e6c0',
  },

  sbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#006a00',
  },

  cardtitle: {
    textAlign: 'left',
    
  },

  image: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',


  },

  plusminusbutton: {
    height: 5,
    width: 5,
  },

  addtocartbutton: {
    alignItems: 'center',
    
  },

  addtocartbutton4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  test: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  testimage3: {
    height: 135,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  
  mycartcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#006a00',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  mycartheader: {
    marginRight: 166,
    marginTop: 29,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#c3e6c0',
  },


})
