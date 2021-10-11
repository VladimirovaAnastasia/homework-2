import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

export const formatDate = (date) => {
	const formattedDate = format(date, 'd LLL, kk:mm', {locale: ruLocale});
	return formattedDate.replace('.', '');
};
