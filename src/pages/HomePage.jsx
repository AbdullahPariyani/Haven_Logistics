import { useLanguage } from '../context/useLanguage';
import BlogPage from './BlogPage';
import CompanyPage from './CompanyPage';
import ServicesPage from './ServicesPage';
import TrackingPage from './TrackingPage';

export default function HomePage() {
	const { t } = useLanguage();

	return (
		<>
			<section className='hero-section' id='home'>
				<div className='hero-bg' style={{ backgroundImage: "url('/images/img(2).jpg')" }}></div>
				<div className='hero-overlay'></div>
				<div className='container'>
					<div className='hero-content hero-enter'>
						<div className='hero-label'>
							<span className='label-line'></span>
							<span className='label-text'>{t.home.label}</span>
						</div>
						<h1 className='hero-title'>{t.home.title}</h1>
						<p className='hero-description'>{t.home.description}</p>
						<div className='hero-buttons'>
							<a href='#services' className='btn-hero btn-primary'>
								{t.home.ctaPrimary}
							</a>
							<a href='#tracking' className='btn-hero btn-secondary'>
								{t.home.ctaSecondary}
							</a>
						</div>
						<div className='hero-stats'>
							{t.home.stats.map((stat, index) => (
								<div className='stat-item' key={index}>
									<span className='stat-number'>{stat.value}</span>
									<span className='stat-label'>{stat.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className='features-section'>
				<div className='container'>
					<div className='features-grid'>
						{t.home.features.map((feature, index) => (
							<div className='feature-card' key={feature.title}>
								<div className='feature-icon'>
									<i className={feature.icon}></i>
								</div>
								<div className='feature-content'>
									<h2 className='feature-title'>{feature.title}</h2>
									<p className='feature-description'>{feature.description}</p>
								</div>
								<div className='feature-number'>{String(index + 1).padStart(2, '0')}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<TrackingPage />
			<ServicesPage />
			<CompanyPage />
			<BlogPage />
		</>
	);
}
