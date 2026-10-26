import { useLanguage } from '../context/useLanguage';

export default function ServicesPage() {
	const { t } = useLanguage();

	return (
		<section className='services-section fade-on-scroll' id='services'>
			<div className='container'>
				<div className='section-header'>
					<span className='section-label'>{t.services.label}</span>
					<h2 className='section-title'>{t.services.title}</h2>
					<p className='section-description'>{t.services.description}</p>
				</div>
				<div className='services-grid'>
					{t.services.items.map((item) => (
						<div className='service-card' key={item.title}>
							<div className='service-image'>
								<img src={item.image} alt={item.title} />
								<div className='service-overlay'></div>
								<div className='service-icon'>
									<i className={item.icon}></i>
								</div>
							</div>
							<div className='service-content'>
								<h3 className='service-title'>{item.title}</h3>
								<p className='service-description'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
