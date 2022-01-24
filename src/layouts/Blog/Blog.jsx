import { Heading, Link, Text } from "theme-ui";
import useBlogger from "../../hooks/useBlogger";

const BloggerBlog = ({data}) => data.items.map((blog) => (
    <>
        <Text sx={{display: 'block'}}>{blog.author.displayName}</Text>
        <Heading as="h2"><Link sx={{textDecoration: 'none', color: 'primary'}} href={blog.url}>{blog.title}</Link></Heading>
        <Text dangerouslySetInnerHTML={{ __html: blog.content }} />
        <br />
    </>
));

const Blog = () => {
    const [blog, isBloggerLoading] = useBlogger();
    return isBloggerLoading ? <p>Loading...</p> : <BloggerBlog data={blog} />;
}

export default Blog;