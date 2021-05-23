import * as React from 'react';
import { Text, View, StyleSheet, Button, } from 'react-native';

class Setquantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 0.5 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 0.5 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <View style={styles.container}>
        
        <Button
                  onPress={this.DecreaseItem}
                  title="  -  "
                  color="#006a00"
                  buttonStyle={{borderRadius: 5, backgroundColor:'#006a00' }}
                />
        
      
        <View style={styles.container2}>

          {this.state.show ? <Text style={styles.container3}>{this.state.clicks}</Text> :''} 

          <Text style={styles.unit}>Kg.</Text>

        </View>

        {/* <Button 
            onPress={this.IncrementItem}
            title='  +  '
            buttonStyle={{borderRadius: 5, backgroundColor:'#006a00' }}
        />  */}


        <Button
                  onPress={this.IncrementItem}
                  title="  +  "
                  color="#006a00"
                  buttonStyle={{borderRadius: 5, backgroundColor:'#006a00' }}
        />
         
        
        
        
        
        {/* <Button 
        onPress={this.ToggleClick}
        
          title={{...this.state.show ? 
          'Hide number' :
           'Show number'}} />*/}
        

          
                      
                 
</View>
      
    );
  }
}
export default Setquantity;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    
    
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flexDirection:'row',
    backgroundColor:'#c3e6c0',
    
    
  },
  unit:{
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10,
    flexDirection:'row',
    
  },
 
  
});
