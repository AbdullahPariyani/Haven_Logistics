import { useLanguage } from '../context/useLanguage';

export default function CompanyPage() {
	const { t } = useLanguage();

	return (
		<>
			<section className='why-choose-section fade-on-scroll' id='company'>
				<div className='why-choose-bg' style={{ backgroundImage: "url('/images/img(7).jpg')" }}></div>
				<div className='why-choose-overlay'></div>
				<div className='container'>
					<div className='why-choose-content'>
						<span className='section-label no-line light'>{t.company.label}</span>
						<h2 className='section-title light'>{t.company.title}</h2>
						<p className='why-choose-desc'>{t.company.description}</p>
						<ul className='check-list light-text'>
							{t.company.highlights.map((highlight) => (
								<li key={highlight}>
									<i className='fa-solid fa-check'></i>
									<span>{highlight}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className='process-section fade-on-scroll'>
				<div className='container'>
					<div className='section-header'>
						<h2 className='section-title'>{t.company.processTitle}</h2>
					</div>
					<div className='process-grid'>
						{t.company.process.map((step, index) => (
							<div className='process-step' key={step}>
								<div className='process-icon'>
									<i className='fa-solid fa-circle-check'></i>
									<div className='process-number'>{index + 1}</div>
								</div>
								<h3 className='process-title'>{step}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
