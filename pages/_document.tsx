import React from 'react'

import Document, {
    DocumentProps,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        href="https://rocketseat.com.br/favicon.ico"
                    />
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
