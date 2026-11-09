import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = () => (
  <View>
    <Text>Xin chào React Native! 🎉</Text>
  </View>
);
const Footer = () => (
<View>
 <Text>Nguyễn Hoàng Hải</Text>
 </View>
);
const Main = () => (
 <View>
 <Text> CD-CNTT18A </Text>
 </View>
);


class Home extends Component {
 render() {
 return (
 <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
 <Header />
  <Footer />
 <Main />
 </View>
 )
 }
}

export default Home;