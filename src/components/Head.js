import {Helmet} from "react-helmet";

export default function Head({title, description, url}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="canonical" href={url}/>
            <meta property="og:site_name" content="Display"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@display"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:creator" content="@display"/>
        </Helmet>
    )
}
