import "./globals.css";


export const metadata = {
  title: "RunRate",
  description: "Avalie os tenis de corrida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
