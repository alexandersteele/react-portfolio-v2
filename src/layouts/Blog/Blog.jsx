import React, { useState } from 'react';
import { Heading, Link, Text } from "theme-ui";
import useBlogger from "../../hooks/useBlogger";
import parse from 'html-react-parser';
import SearchBar from '../../components/SearchBar/SearchBar';
import sortBlogsBy from '../../utils/sortBlogsBy';
import searchBlogs from '../../utils/searchBlogs';

const BloggerBlog = ({data, sortBy, searchQuery, setTotalBlogs}) => 
    sortBlogsBy(searchBlogs(data.items, searchQuery, setTotalBlogs), sortBy).map((blog) => {

    const options = {
        replace: (domNode) => {
            if (domNode.name === 'a' && domNode.children[0].name !== 'img') {
                return <Text sx={{fontWeight: 'bold', display: 'inline-block'}}><Link href={domNode.attribs.href}>{domNode.attribs.href}</Link></Text>;
            }
        }
    }

    const BlogContent = () => parse(blog.content, options);

    return (
        <>
            <Text sx={{display: 'block'}}>{blog.author.displayName}</Text>
            <Heading as="h2"><Link sx={{textDecoration: 'none', color: 'primary'}} href={blog.url}>{blog.title}</Link></Heading>
            <Text sx={{display: 'block'}}>{new Date(blog.published).toLocaleDateString()}</Text>
            <BlogContent />
            <br />
            <br />
        </>
    )
});

const Blog = () => {
    const [blog, isBloggerLoading] = useBlogger();
    const [sortBy, setSortBy] = useState("Most recent first");
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    return isBloggerLoading ? <p>Loading...</p> : 
        <>
            <SearchBar setSortBy={setSortBy} totalBlogs={totalBlogs} setSearchQuery={setSearchQuery} />
            <BloggerBlog data={blog} sortBy={sortBy} searchQuery={searchQuery} setTotalBlogs={setTotalBlogs}/>
        </>;
}

export default Blog;