import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import logo from '../assets/logo.webp';

const sectionHrefByKey = {
	home: '#home',
	services: '#services',
	tracking: '#tracking',
	company: '#company',
	blog: '#blog',
	contact: '#footer-contact',
};

function Header() {
	const { t, languages, language, setLanguage, socialLinks, routes } = useLanguage();

	return (
		<>
			<div className='cargo-topbar'>
				<div className='container'>
					<div className='topbar-grid'>
						<div className='topbar-left'>
							<span className='topbar-item'>
								<i className='fa-solid fa-earth-americas'></i>
								<span>{t.brand.tagline}</span>
							</span>
							<span className='topbar-divider'></span>
							<span className='topbar-item'>
								<i className='fa-regular fa-clock'></i>
								<span>{t.brand.hours}</span>
							</span>
						</div>
						<div className='topbar-right'>
							<div className='social-links'>
								{socialLinks.map((social, index) => (
									<a key={index} href={social.url} className='social-icon' aria-label={`social-${index}`}>
										<i className={social.icon}></i>
									</a>
								))}
							</div>
							<span className='topbar-divider'></span>
							<span className='topbar-item topbar-phone'>
								<i className='fa-solid fa-phone'></i>
								<span>{t.brand.phone}</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<header className='cargo-header header-sticky' style={{ position: 'sticky', top: 0, zIndex: 60 }}>
				<div className='container'>
					<div className='header-grid'>
						<NavLink to='/' className='logo'>
							<img src={logo} alt='Haven Logistics logo' className='logo-dark' />
						</NavLink>
						<nav className='main-nav'>
							<ul className='nav-menu'>
								{routes.map((route) => {
									const href = sectionHrefByKey[route.key] || '#home';

									return (
										<li key={route.key}>
											<a href={href} className='nav-link'>
												{t.nav[route.key]}
											</a>
										</li>
									);
								})}
							</ul>
						</nav>

						<div className='header-actions d-flex align-items-center gap-3'>
							<a href='#' className='btn-header' data-hover={t.nav.quote}>
								<span>{t.nav.quote}</span>
							</a>
							<select className='form-select form-select-sm' style={{ width: 120 }} value={language} onChange={(event) => setLanguage(event.target.value)} aria-label='Language switcher'>
								{languages.map((item) => (
									<option value={item.code} key={item.code}>
										{item.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

function Footer() {
	const { t, socialLinks, routes } = useLanguage();

	return (
		<footer className='footer-main' id='footer-contact'>
			<div className='footer-top'>
				<div className='container'>
					<div className='footer-grid'>
						<div className='footer-col footer-about'>
							<h3 className='footer-title'>{t.brand.name}</h3>
							<p className='footer-desc'>{t.footer.about}</p>
							<a href='#footer-contact' className='btn-hero btn-primary mb-4'>
								{t.nav.quote}
							</a>
							<div className='social-links'>
								{socialLinks.map((social, index) => (
									<a key={index} href={social.url} className='social-icon' aria-label={`footer-social-${index}`}>
										<i className={social.icon}></i>
									</a>
								))}
							</div>
						</div>
						<div className='footer-col'>
							<h3 className='footer-title'>Quick Links</h3>
							<ul className='footer-links'>
								{routes.map((route) => {
									const href = sectionHrefByKey[route.key] || '#home';
									return (
										<li key={route.key}>
											<a href={href}>{t.nav[route.key]}</a>
										</li>
									);
								})}
							</ul>
						</div>
						<div className='footer-col'>
							<h3 className='footer-title'>{t.nav.contact}</h3>
							<ul className='footer-links'>
								<li>
									<i className='fa-solid fa-location-dot'></i> {t.brand.address}
								</li>
								<li>
									<i className='fa-solid fa-phone'></i> {t.brand.phone}
								</li>
								{t.brand.officeLine && (
									<li>
										<i className='fa-solid fa-phone-volume'></i> {t.brand.officeLine}
									</li>
								)}
								<li>
									<i className='fa-solid fa-envelope'></i> {t.brand.email}
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<h3 className='footer-title'>{t.contact.hoursTitle || 'Hours'}</h3>
							<ul className='footer-links'>
								{Array.isArray(t.contact.hours) ? (
									t.contact.hours.map((entry) => (
										<li key={entry.day} className='d-flex justify-content-between gap-3'>
											<span>{entry.day}</span>
											<span>{entry.time}</span>
										</li>
									))
								) : (
									<li>
										<i className='fa-regular fa-clock'></i> {t.brand.hours}
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='container'>
					<p>{t.footer.copyright}</p>
				</div>
			</div>
		</footer>
	);
}

export default function Layout({ children }) {
	useEffect(() => {
		const elements = Array.from(document.querySelectorAll('.fade-on-scroll'));

		if (!elements.length) {
			return;
		}

		if (!('IntersectionObserver' in window)) {
			elements.forEach((element) => element.classList.add('visible'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [children]);

	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
