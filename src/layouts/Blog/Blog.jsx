import React from 'react';
import { Divider, Heading, Link, Text } from "theme-ui";
import useBlogger from "../../hooks/useBlogger";
import parse from 'html-react-parser';


const BloggerBlog = ({data}) => data.items.map((blog) => {

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
            <BlogContent />
            <Divider />
            <br />
        </>
    )
});

const Blog = () => {
    const [blog, isBloggerLoading] = useBlogger();
    return isBloggerLoading ? <p>Loading...</p> : <BloggerBlog data={blog} />;
}

export default Blog;