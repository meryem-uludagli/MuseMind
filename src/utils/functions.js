import {ThemeColors} from '../theme/colors';
import {statusTypes} from './constants';

const setColors = status => {
  switch (status) {
    case statusTypes.COMPLATED:
      return ThemeColors.green;

    case statusTypes.INPROGRESS:
      return ThemeColors.blue;
    case statusTypes.INREVIEW:
      return ThemeColors.pink;
    case statusTypes.ONHOLD:
      return ThemeColors.yellow;

    default:
      return ThemeColors.white;
  }
};
export {setColors};
