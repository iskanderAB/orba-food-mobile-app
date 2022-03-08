import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {headerHeight, width} from '../../utils/constants/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import themColor from '../../utils/colors/themColor';
import OrbaText from '../UI/orbaText/OrbaText';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation() ;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={.7}
        onPress={() => {
          navigation.navigate('notification-screen');
        }}
        style={styles.iconContainer}
        >
        <Icon name="notifications-outline" style={styles.notifIcon} />
      </TouchableOpacity>
      <OrbaText style={styles.textHeader}>
        {' '}
        مرحبا بك <OrbaText style={{color: themColor.green}}>
          {' '}
          اسكندر{' '}
        </OrbaText>{' '}
      </OrbaText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: headerHeight,
    width: '100%',
    backgroundColor: themColor.ligthWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    elevation: 6,
    top: 0,
    left:0,
    zIndex: 999
  },
  iconContainer: {
    width: '15%',
  },
  notifIcon: {
    fontSize: 26,
    color: themColor.darkGray,
  },
  textHeader: {
    color: themColor.darkGray,
    fontSize: 16,
  },
});
