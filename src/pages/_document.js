import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/android-chrome-512x512.png" />
                    <link rel="stylesheet" href="https://kit.fontawesome.com/91ff2f5a6d.css" crossOrigin="anonymous" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Raleway:wght@300&display=swap"
                          rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument