import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>AgriBlog</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
