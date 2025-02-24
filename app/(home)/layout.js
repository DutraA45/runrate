import '../globals.css';
import Header from '../components/header/general-header';
import Menu from '../components/menu';
import Footer from '../components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Menu />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}