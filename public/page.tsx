import BlogCard from '@/components/BlogCard';
import blogData from '@/data/blogData';
import Banner from './components/Banner';


const Home = () => {
    return (
        <div className="w-full ">
           <Banner />

{/* Blog Section */}
<section id="blogs" className="p-10">
    <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
        ))}
    </div>
</section>
           
        </div>
    );
};

export default Home;
