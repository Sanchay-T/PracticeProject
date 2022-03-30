import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B');
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text1}>
                Please Enter Your Credentials
            </Text>
            <View>
                <Text>
                    username
                </Text>
            </View>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Log In
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        
    },
    text1: {
        fontSize: 20,

        fontWeight: 'bold',
        height: 500,
    }
})


// const UselessTextInput = () => {
//     const [email, setemail] = React.useState(null);
//     const [password, setpassword] = React.useState(null);
  
  
//     const callBackend = async () => {
//       const response = {
//           "success": false,
//           "message": "This email id is not registered",
//           "result": [],
//           "http_code": 403
//       }
//       alert(response.message);
//     }
  
  
  
//     return (
//       <SafeAreaView>
//         <TextInput
//           style={styles.input}
//           onChangeText={setemail}
//           placeholder = "username"
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={setpassword}
//           value={password}
//           placeholder="password"
//           keyboardType="numeric"
//           secureTextEntry
//         />
  
//         <Button 
//           onPress={callBackend}
//           title= "Login"
//         />
        
//       </SafeAreaView>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//     },
//   });