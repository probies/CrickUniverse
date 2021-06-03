import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const NewCard = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{c.name}</a>
            </Link>
    ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{t.name}</a>
            </Link>
        ));

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg ">

            <Link href={`/blogs/${blog.slug}`}>
                <a>
                    <img className="w-full"  src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />
                </a>
            </Link>

            <div className="px-6 py-4">
                <Link href={`/blogs/${blog.slug}`}>
                    <a className="text-dark active">
                        <div className="font-bold text-xl mb-2">{blog.title}</div>
                    </a>
                </Link> 
            </div>

            <div className="px-6 pt-2 pb-2">
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
            </div>

        </div> 
    );
};

export default NewCard;