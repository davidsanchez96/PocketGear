/* @flow */

import React, { PropTypes, Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../data.json';
import sprites from '../sprites';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  cover: {
    backgroundColor: '#1d2c47',
    alignItems: 'center',
    padding: 16,
    height: null,
    width: null,
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  button: {
    padding: 12,
  },

  icon: {
    color: '#fff',
  },

  image: {
    margin: 16,
    height: 72,
    resizeMode: 'contain',
  },

  name: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  index: {
    position: 'absolute',
    top: 5,
    left: -104,
    width: 96,
    textAlign: 'right',
    fontFamily: 'Lato',
    fontSize: 16,
    color: 'rgba(255, 255, 255, .5)',
  },

  details: {
    padding: 8,
  },

  row: {
    flexDirection: 'row',
    margin: 8,
  },

  block: {
    margin: 8,
  },

  title: {
    marginVertical: 4,
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  summary: {
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight: 21,
    color: '#333',
  },
});

type Props = {
  onNavigate: Function;
  index: number;
  style?: any;
}

export default class PokeCard extends Component<void, Props, void> {

  static propTypes = {
    onNavigate: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    style: ScrollView.propTypes.style,
  };

  _handleGoBack = () => {
    this.props.onNavigate({ type: 'pop' });
  };

  render() {
    const { index } = this.props;
    const item = data[index - 1];

    return (
      <ScrollView {...this.props} style={[ styles.container, this.props.style ]}>
        <StatusBar backgroundColor='#182438' />
        <Image source={require('../../assets/cover.png')} style={styles.cover}>
          <View style={styles.appbar}>
            <TouchableOpacity style={styles.button} onPress={this._handleGoBack}>
              <Icon
                name='arrow-back'
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={sprites[index - 1]}
          />
          <View style={styles.row}>
            <Text style={styles.index}>
              #{item.index}
            </Text>
            <Text style={styles.name}>
              {item.name}
            </Text>
          </View>
        </Image>
        <View style={styles.details}>
          <View style={styles.block}>
            <Text style={styles.title}>
              Type
            </Text>
            <Text style={styles.summary}>
              {item.types.join(', ')}
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Lightning Pokémon
            </Text>
            <Text style={styles.summary}>
              {item.description}
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Evolution
            </Text>
            <Text style={styles.summary}>
              Evee → Jolteon
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}