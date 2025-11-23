import './globals.css';

export const metadata = {
  title: 'Kailash | At the Feet of Lord Shiva',
  description:
    'A serene SVG illustration of a man sitting at the feet of Lord Shiva on Mount Kailash.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root">
        {children}
      </body>
    </html>
  );
}

