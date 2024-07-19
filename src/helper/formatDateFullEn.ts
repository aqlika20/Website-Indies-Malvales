import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatDateFullEn = (date: string): any => {
  if (!date) {
    return '';
  } else {
    var parts = date.split('-');
    var dt = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    var newDate = dayjs(dt).locale('en').format('DD MMMM YYYY');
    return ' ' + newDate;
  }
};

export default formatDateFullEn;
