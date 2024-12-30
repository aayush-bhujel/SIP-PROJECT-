import Appbar from "./(views)/components/Appbar";
import Header from "./(views)/components/Header";
import "./scss/main.scss";

export const metadata = {
  title: "Artopedia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Appbar />
      </body>
    </html>
  );
}