/* Edit this object to update the page content, links, image, or translations. */
const profile = {
  linkedin: 'https://www.linkedin.com/in/mohamadmahdi-esmailiyan', github: 'https://github.com/esmailiyan', kaggle: 'https://www.kaggle.com/esmailiyan',
  telegram: 'https://t.me/MohamadMahdiE', // Add your personal Telegram URL here, e.g. https://t.me/username.
  email: 'esmailiyan.mahdi@gmail.com',
  translations: {
    en: { institution: 'University of Tehran · Computer Science', institutionLabel: 'Academic affiliation', name: 'MohamadMahdi Esmailiyan', interestsLabel: 'Current interests', title: 'Machine Learning · Data Analysis · Optimization', bio: 'Computer Science undergraduate focused on machine learning, data analysis, and dependable AI systems. I enjoy applying mathematical thinking to useful real-world tools.', connect: 'Connect', footer: 'Personal academic profile', resume: 'Full résumé →', links: { linkedin: ['LinkedIn', 'Professional profile'], github: ['GitHub', 'Code & experiments'], kaggle: ['Kaggle', 'Data science notebooks'], telegram: ['Telegram', 'Personal Account'], email: ['Email', 'Start a conversation'] } },
    fa: { institution: 'دانشگاه تهران · علوم کامپیوتر', institutionLabel: 'دانشگاه', name: 'محمدمهدی اسماعیلیان', interestsLabel: 'علایق حرفه‌ای', title: 'یادگیری ماشین · تحلیل‌ داده · بهینه‌سازی', bio: 'دانشجوی علوم کامپیوتر با تمرکز بر یادگیری ماشین، تحلیل داده و سامانه‌های هوش مصنوعی قابل‌اعتماد. علاقه‌مند به تبدیل مسائل پیچیده به ابزارهای کاربردی و دقیق.', connect: 'راه‌های ارتباطی', footer: 'پروفایل شخصی و آکادمیک', resume: 'رزومهٔ کامل ←', links: { linkedin: ['لینکدین', 'پروفایل حرفه‌ای'], github: ['گیت‌هاب', 'کدها و پروژه‌ها'], kaggle: ['کگل', 'نوت‌بوک‌های علم داده'], telegram: ['تلگرام', 'حساب شخصی'], email: ['ایمیل', 'شروع یک گفت‌وگو'] } }
  }
};

const linkDefinitions = [['linkedin', 'linkedin', '#dcecf7', '#548db7'], ['github', 'github', '#e5e8ee', '#4f6074'], ['kaggle', 'chart-no-axes-combined', '#e4e8fb', '#617ec5'], ['telegram', 'send', '#e3e9fc', '#647ebc'], ['email', 'mail', '#e1f1e5', '#5c9a75']];
let language = localStorage.getItem('profile-language') || 'en';
function render() {
  const copy = profile.translations[language], isPersian = language === 'fa';
  document.documentElement.lang = isPersian ? 'fa' : 'en'; document.documentElement.dir = isPersian ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  const toggle = document.querySelector('.language-toggle'); toggle.querySelector('span').textContent = isPersian ? 'EN' : 'فارسی'; toggle.setAttribute('aria-label', isPersian ? 'Switch to English' : 'تغییر زبان به فارسی'); toggle.setAttribute('aria-pressed', String(isPersian));
  document.getElementById('quick-links').innerHTML = linkDefinitions.map(([key, icon, tint, color]) => {
    const [label, note] = copy.links[key], url = key === 'email' ? `mailto:${profile.email}` : profile[key], unavailable = !url;
    return `<a class="quick-link${unavailable ? ' is-unavailable' : ''}" ${unavailable ? 'aria-disabled="true"' : `href="${url}" target="_blank" rel="noreferrer"`} style="--link-tint:${tint};--link-color:${color}"><span class="icon-wrap"><i data-lucide="${icon}"></i></span><span class="link-copy"><strong>${label}</strong><small>${note}</small></span><span class="arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span></a>`;
  }).join(''); lucide.createIcons();
}
document.querySelector('.language-toggle').addEventListener('click', () => { language = language === 'en' ? 'fa' : 'en'; localStorage.setItem('profile-language', language); render(); });
render();
