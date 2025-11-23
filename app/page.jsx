import ShivaKailashScene from '../components/ShivaKailashScene';

export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">At the Feet of Lord Shiva</h1>
        <p className="subtitle">
          A humble seeker sits upon sacred Mount Kailash, embraced by silence.
        </p>
      </header>
      <section className="scene">
        <ShivaKailashScene />
      </section>
      <footer className="footer">
        <p>
          Crafted with reverence ? deployed on Vercel.
        </p>
      </footer>
    </main>
  );
}

