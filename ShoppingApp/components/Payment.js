import React, {useRef} from 'react'
import { Paystack, paystackProps } from 'react-native-paystack-webview'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Payment() {
    const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View style={styles.container}>
        <Paystack
            paystackKey='pk_test_95823bf74b8ff630cf985e123dce2bf9e19b5846'
            paystackSecretKey='sk_test_f28fea602a034cf2d80d3a62febea97fe3f05f7f'
            billingEmail='ohenek20@gmail.com'
            billingName='Ohene K'
            amount={'20000'}
            currency='Ghs'
            onCancel={(e) => {
                console.log(e)
            }}
            onSuccess={() => {
                Alert.alert('Successful', 'Payment made')
            }}
            ref={paystackWebViewRef}
        />

        <TouchableOpacity onPress={() => paystackWebViewRef.current.startTransaction()} style={styles.paystack}>
            <Text style={styles.pay}>Pay now</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    paystack:{
        minWidth: '60%',
        backgroundColor: '#f9a826',
        padding: 10,
        borderRadius: 15,
        justifyContent:  'center',
        alignItems: 'center'
    },
    pay:{
        color: 'white'
    }
})