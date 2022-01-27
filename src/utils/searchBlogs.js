const searchBlogs = (blogs, searchQuery, setTotalBlogs) => {
    if (searchQuery === '') {
        setTotalBlogs(blogs.length)
        return blogs;
    } else {
        const underQuery = searchQuery.toLowerCase();
        const searchedBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(underQuery));
        setTotalBlogs(searchedBlogs.length)
        return searchedBlogs;
    }

}

export default searchBlogs;