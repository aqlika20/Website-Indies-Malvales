import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatDateId = (date: string): any => {
  if (!date) {
    return '';
  } else {
    var parts = date.split('-');
    var dt = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    var newDate = dayjs(dt).locale('id').format('YYYY');
    return ' ' + newDate;
  }
};

export default formatDateId;
