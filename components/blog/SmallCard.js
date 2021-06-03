import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ blog }) => {
    

return (

    <div class="max-w-sm rounded overflow-hidden shadow-lg ">

        <Link href={`/blogs/${blog.slug}`}>
            <a>
                <img class="w-full"  src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />
            </a>
        </Link>

        <div class="px-6 py-4">
            <Link href={`/blogs/${blog.slug}`}>
                <a className="text-dark active">
                    <div class="font-bold text-xl mb-2">{blog.title}</div>
                </a>
            </Link> 
        </div>

        

    </div> 
);
};

export default SmallCard;



