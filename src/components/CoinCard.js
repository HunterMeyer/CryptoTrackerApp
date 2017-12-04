import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { coinIcons } from '../Utils/CoinIcons';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d, quantity, value }) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={image} source={{ url: coinIcons[symbol] }}/>
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>{price_usd}
          <Text style={moneySymbol}> $ </Text>
        </Text>
      </View>
      <View style={upperRow}>
        <Text style={coinName}>{quantity}</Text>
        <Text style={coinPrice}>{value.toFixed(2)}
          <Text style={moneySymbol}> $ </Text>
        </Text>
      </View>
      <View style={statisticsContainer}>
        <Text>24hr:
          <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
        </Text>
        <Text>7d:
          <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold'
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  separator: {
    marginTop: 10
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: 'bold'
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5
  }
});

const { 
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  separator,
  percentChangePlus,
  percentChangeMinus
} = styles;

export default CoinCard;
