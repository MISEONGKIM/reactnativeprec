import {StyleSheet} from 'react-native';
import DefaultStyle from './default.scss';

const defaultStyle = () => {
  const styles = StyleSheet.create(DefaultStyle);

  return (classNames: String): typeof styles => {
    return classNames.split(' ').reduce((acc, className) => {
      return {...acc, ...styles[`${className}`]};
    }, {});
  };
};

export {defaultStyle};
