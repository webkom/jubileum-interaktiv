import _format from 'date-fns/format';
import locale from 'date-fns/locale/nb';

export default function format(date, formatStr) {
  return _format(date, formatStr, {
    locale
  });
}
