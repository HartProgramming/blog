import { useRef } from "react";

function BlogForm(props){

    const { addBlogHandler } = props;

    const titleRef = useRef();
    const detailsRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const formSubmitHandler = (e) => {
        const formulate = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            details: detailsRef.current.value
        }
        e.preventDefault();
        addBlogHandler(formulate)
    }


return(
    <form onSubmit={formSubmitHandler}>
        <div>
            <label>Add Title</label>
            <input ref={titleRef} type='text' placeholder='title'></input>
        </div>
        <div>
            <label>Add image</label>
            <input ref={imageRef} type='text' placeholder='image'></input>
        </div>
        <div>
            <label>Add Details</label>
            <input ref={detailsRef} type='text' placeholder="details"></input>
        </div>
        <div>
            <label>Add Description</label>
            <input ref={descriptionRef} type='text' placeholder="description"></input>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
)
}

export default BlogForm;