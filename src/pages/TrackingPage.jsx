import { useLanguage } from '../context/useLanguage';

export default function TrackingPage() {
	const { t } = useLanguage();

	return (
		<section className='track-stats-section pt-0 pb-0 fade-on-scroll' id='tracking'>
			<div className='track-stats-container'>
				<div className='track-box'>
					<div className='track-content'>
						<div className='track-icon'>
							<i className='fa-solid fa-truck-fast'></i>
						</div>
						<h2 className='track-title'>{t.tracking.title}</h2>
						<p className='track-subtitle'>{t.tracking.subtitle}</p>
						<form className='track-form' onSubmit={(e) => e.preventDefault()}>
							<div className='input-group'>
								<input type='text' placeholder={t.tracking.placeholder} className='track-input' />
								<button type='submit' className='track-btn' aria-label={t.tracking.button}>
									<i className='fa-solid fa-magnifying-glass'></i>
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className='stats-box'>
					<img src='/images/img(10).jpg' alt='Tracking overview' />
					<div className='stats-overlay'></div>
					<div className='stats-grid'>
						{t.tracking.stats.map((item) => (
							<div className='stat-card' key={item.label}>
								<div className='stat-value'>{item.value}</div>
								<div className='stat-label'>{item.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
