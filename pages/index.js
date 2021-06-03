import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { singleCategory } from '../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../components/blog/SmallCard';
import NewCard from '../components/blog/NewCard';
import { useState, useEffect } from 'react';



const Index = ({ categories, blogs, withRouter,router }) => {
    
    const head = () => (
        <Head>
            <title>{APP_NAME}</title>
            <meta
                name="description"
                content="Cricket News , latest Updates ,Trending stories and Fantasy Tips"
            />
            <meta property="og:title" content={`Latest Cricket News and Match Updates | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Cricket News , latest Updates ,Trending stories and Fantasy Tips"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/CrickUniverse.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/CrickUniverse.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    
    );

    const [News, setNews] = useState([]);
    const [Fantasy, setFantasy] = useState([]);

    const loadNews = () => {
        let catNews = "news";
        singleCategory( catNews ).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setNews(data.blogs);
            }
        });
    };

    const loadFantasy = () => {
        let catNews = "fantasyxi";
        singleCategory( catNews ).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setFantasy(data.blogs);
            }
        });
    };

    useEffect(() => {
        loadNews();
    }, []);

    useEffect(() => {
        loadFantasy();
    }, []);

    const showNewsBlog = () => {
        return News.map((blog, i) => (
            <div key={i} className="pb-3">
                <article>
                    <NewCard blog={blog} />
                </article>
            </div>
        ));
    };
    
    const showFantasyBlog = () => {
        return Fantasy.map((blog, i) => (
            <div key={i} className="pb-3">
                <article>
                    <NewCard blog={blog} />
                </article>
            </div>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid ">
                        <div className = "row">

                            <div className="col-md-4 pt-3">
                                <h1 className="font-weight-bold text-3xl text-center pb-2">IPL</h1>
                                <div className="flex justify-content-center">
                                    <div className="flex-col">
                                        {blogs.map((b, i) => (
                                            <div className="pb-3">
                                                <NewCard key={i} blog={b} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 pt-3 ">
                                <h1 className="display-6 font-weight-bold text-3xl text-center pb-2">News</h1>
                                    <div className="flex justify-content-center">
                                        <div className="flex-col">
                                            <div >
                                                {showNewsBlog()}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="col-md-4 pt-3 ">
                                <h3 className="display-6 font-weight-bold text-3xl text-center pb-2">Fantasy XI</h3>
                                <div className="flex justify-content-center">
                                    <div className="flex-col">
                                        <div >
                                                {showFantasyBlog()}
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            </div>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Index.getInitialProps = () => {
    let cat = "ipl";
    return singleCategory(cat).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { categories: data.category, blogs: data.blogs };
        }
    });
};


export default Index;

