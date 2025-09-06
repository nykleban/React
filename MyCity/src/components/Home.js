import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div
        className="container"
        style={{
          maxWidth: '800px',
          margin: '40px auto 100px auto',
          background: '#fff',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ color: 'black', marginBottom: '16px' }}>Острог</h1>
        <p>
          Острог — старовинне місто на Рівненщині, відоме своєю багатою історією та культурною спадщиною. Тут знаходиться перший в Україні вищий навчальний заклад — Острозька академія, а також унікальні пам'ятки архітектури. Місто приваблює туристів своєю атмосферою, старовинними вуличками та гостинністю мешканців.
        </p>
        <img
          src="https://dovkola.media/wp-content/uploads/2020/07/ostrog001-1024x680.jpg"
          alt="Острог, Україна"
          style={{
            maxWidth: '100%',
            borderRadius: '8px',
            marginTop: '24px',
          }}
        />
      </div>


    </div>
  );
}