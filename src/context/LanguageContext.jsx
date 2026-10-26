import { useEffect, useMemo, useState } from 'react';
import siteContent from '../config/siteContent.json';
import { LanguageContext } from './LanguageContext';

const STORAGE_KEY = 'haven-logistics-language';

export function LanguageProvider({ children }) {
	const fallback = siteContent.defaultLanguage || 'en';
	const [language, setLanguage] = useState(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored || fallback;
	});

	const languageMeta = siteContent.languages.find((item) => item.code === language) || siteContent.languages.find((item) => item.code === fallback);
	const t = siteContent.content[languageMeta?.code || fallback] || siteContent.content[fallback];

	useEffect(() => {
		document.documentElement.lang = languageMeta?.code || fallback;
		document.documentElement.dir = languageMeta?.dir || 'ltr';
		localStorage.setItem(STORAGE_KEY, languageMeta?.code || fallback);
	}, [fallback, languageMeta]);

	const value = useMemo(
		() => ({
			language: languageMeta?.code || fallback,
			setLanguage,
			languages: siteContent.languages,
			routes: siteContent.routes,
			socialLinks: siteContent.socialLinks,
			t,
			dir: languageMeta?.dir || 'ltr',
		}),
		[fallback, languageMeta, t],
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
