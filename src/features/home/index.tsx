import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="text">
      <h1>Home</h1>
      <p>{t('demo')}</p>
    </div>
  );
}

export default Home;
