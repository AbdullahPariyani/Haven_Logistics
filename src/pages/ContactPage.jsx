import { useLanguage } from '../context/useLanguage';

export default function ContactPage() {
	const { t } = useLanguage();

	return (
		<section className='faq-section fade-on-scroll' id='contact'>
			<div className='container'>
				<div className='row align-items-start'>
					<div className='col-lg-5 mb-5 mb-lg-0'>
						<div className='sticky-top'>
							<span className='section-label no-line'>{t.contact.eyebrow || t.nav.contact}</span>
							<h2 className='section-title mb-4'>{t.contact.title}</h2>
							<p className='mb-2 fw-semibold'>{t.contact.subtitle}</p>
							<p>{t.contact.description}</p>
							<p className='mt-4 mb-2'>
								<i className='fa-solid fa-location-dot me-2'></i>
								{t.brand.address}
							</p>
							<a className='btn-hero btn-secondary mt-3' href={t.contact.callNowLink || '#'}>
								Call Now
							</a>
						</div>
					</div>

					<div className='col-lg-7 ps-lg-5'>
						<div className='track-box mb-4'>
							<div className='track-content'>
								<h3 className='track-title mb-3'>{t.contact.contactInfoTitle || 'Contact Information'}</h3>
								<ul className='footer-links mb-0'>
									<li>
										<i className='fa-solid fa-envelope'></i> {t.brand.email}
									</li>
									<li>
										<i className='fa-solid fa-mobile-screen-button'></i> {t.brand.phone}
									</li>
									{t.brand.officeLine && (
										<li>
											<i className='fa-solid fa-phone'></i> {t.brand.officeLine}
										</li>
									)}
									<li>
										<i className='fa-solid fa-location-dot'></i> {t.brand.address}
									</li>
								</ul>
							</div>
						</div>
						<div className='track-box'>
							<div className='track-content'>
								<h3 className='track-title mb-3'>{t.contact.hoursTitle || 'Hours'}</h3>
								<p className='mb-0'>{t.brand.hours}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
