import { useRouter } from 'next/router';
import { use } from 'react';

const BlogItem = (props) => {

    const {title, image, description, details, slug} = props;

    const router = useRouter();

    const onNavigate = () => {
        router.push(`/${slug}`)
    }
    return(
        <div>
            <img src={image} alt={title}/>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{details}</p>
            </div>
            <button onClick={onNavigate}>Read More</button>
        </div>
    )
}

export default BlogItem;