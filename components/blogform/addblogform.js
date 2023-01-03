

function BlogForm(){
return(
    <form>
        <div>
            <label>Add Title</label>
            <input type='text' placeholder='title'></input>
        </div>
        <div>
            <label>Add image</label>
            <input type='text' placeholder='image'></input>
        </div>
        <div>
            <label>Add Details</label>
            <input type='text' placeholder="details"></input>
        </div>
        <div>
            <label>Add Description</label>
            <input type='text' placeholder="description"></input>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
)
}

export default BlogForm;