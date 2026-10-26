import { useLanguage } from '../context/useLanguage';

export default function BlogPage() {
	const { t } = useLanguage();

	return (
		<section className='blog-section fade-on-scroll' id='blog'>
			<div className='why-choose-bg' style={{ backgroundImage: "url('/images/img(10).jpg')" }}></div>
			<div className='why-choose-overlay'></div>
			<div className='container'>
				<div className='section-header'>
					<span className='section-label light'>{t.blog.label}</span>
					<h2 className='section-title light'>{t.blog.title}</h2>
					<p className='section-description light'>{t.blog.description}</p>
				</div>

				<div className='blog-grid'>
					{t.blog.posts.map((post) => (
						<div className='blog-card' key={post.title}>
							<div className='blog-image'>
								<img src={post.image} alt={post.title} />
								<span className='blog-date'>{post.date}</span>
							</div>
							<div className='blog-content'>
								<h3 className='blog-title'>{post.title}</h3>
								<p className='blog-desc'>{post.summary}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
