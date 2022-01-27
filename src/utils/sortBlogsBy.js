const sortBlogsBy = (blogs, sortBy) => {

    if (sortBy === 'A - Z') {
        return blogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === 'Z - A') {
        return blogs.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sortBy === 'Most recent first') {
        return blogs.sort((a, b) => new Date(b.published) - new Date(a.published));
    }

    if (sortBy === 'Oldest first') {
        return blogs.sort((a, b) => new Date(a.published) - new Date(b.published));
    }

    return blogs;

}

export default sortBlogsBy;