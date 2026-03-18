
import Head from 'next/head'
import Nav from '../comps/Nav';
import Footer from '../comps/footer';
//importing css


const Main = (props) => {
    return (
        <div>
            <Head>
                <title> {props.meta.title}</title>
                <meta name="description" content={props.meta.description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <Nav />
            {props.children}
            <Footer />
        </div>


    )
}

export default Main