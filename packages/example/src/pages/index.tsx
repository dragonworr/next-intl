import {useTranslations} from 'next-intl';
import Navigation from 'components/Navigation';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div>
      <Navigation />
      <h1>{t('hello', {name: 'Jane'})}</h1>
    </div>
  );
}
