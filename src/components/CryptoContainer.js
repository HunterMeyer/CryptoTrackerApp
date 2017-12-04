import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) =>
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
        quantity={coin.quantity}
        value={coin.value}
      />
    )
  }

  renderTotalValue() {
    const { crypto } = this.props;
    const { totalValueContainer } = styles;
    return (
      <View style={totalValueContainer}>
        <Text>Total Value: ${crypto.totalValue.toFixed(2)}</Text>
      </View>
    )
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{color: '#253145'}}
            animation='fade'
          />
        </View>
      )
    }

    return (
      <View>
        <View>
          { this.renderTotalValue() }
        </View>
        <ScrollView contentContainerStyle={contentContainer}>
          { this.renderCoinCards() }
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 180,
    paddingTop: 10
  },
  totalValueContainer: {
    paddingTop: 10,
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
