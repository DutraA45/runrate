import Header from '../components/header/login-header';
import Footer from '../components/footer';

export default function LoginLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}