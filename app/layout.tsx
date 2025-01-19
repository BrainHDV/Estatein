import Header from "@components/HeaderUI/Header/Header";
import HeaderBanner from "@components/HeaderUI/HeaderBanner/HeaderBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}
