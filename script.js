/* Edit this object to update the page content, links, image, or translations. */
const profile = {
  linkedin: 'https://www.linkedin.com/in/mohamadmahdi-esmailiyan', github: 'https://github.com/esmailiyan',
  telegram: 'https://t.me/MohamadMahdiE', // Add your personal Telegram URL here, e.g. https://t.me/username.
  email: 'esmailiyan.mahdi@gmail.com', location: 'Tehran, Iran',
  translations: {
    en: { institution: 'University of Tehran · Computer Science', name: 'MohamadMahdi Esmailiyan', title: 'Data Scientist · AI Engineer', bio: 'Computer Science undergraduate focused on machine learning, data analysis, and dependable AI systems. I enjoy applying mathematical thinking to useful real-world tools.', connect: 'Connect', locationLabel: 'Based in', location: 'Tehran, Iran', footer: 'Personal academic profile', resume: 'Full résumé →', links: { linkedin: ['LinkedIn', 'Professional profile'], github: ['GitHub', 'Code & experiments'], telegram: ['Telegram', 'Personal Account'], email: ['Email', 'Start a conversation'] } },
    fa: { institution: 'دانشگاه تهران · علوم کامپیوتر', name: 'محمدمهدی اسماعیلیان', title: 'دانشمند داده · مهندس هوش مصنوعی', bio: 'دانشجوی علوم کامپیوتر با تمرکز بر یادگیری ماشین، تحلیل داده و سامانه‌های هوش مصنوعی قابل‌اعتماد. علاقه‌مند به تبدیل مسائل پیچیده به ابزارهای کاربردی و دقیق.', connect: 'راه‌های ارتباطی', locationLabel: 'محل فعالیت', location: 'تهران، ایران', footer: 'پروفایل شخصی و آکادمیک', resume: 'رزومهٔ کامل ←', links: { linkedin: ['لینکدین', 'پروفایل حرفه‌ای'], github: ['گیت‌هاب', 'کدها و پروژه‌ها'], telegram: ['تلگرام', 'حساب شخصی'], email: ['ایمیل', 'شروع یک گفت‌وگو'] } }
  }
};

const linkDefinitions = [['linkedin', 'linkedin', '#edf4f8', '#6d93b2'], ['github', 'github', '#f0f1f4', '#606b78'], ['telegram', 'send', '#eef2fb', '#788fc1'], ['email', 'mail', '#f1f6f1', '#7fa58d']];
let language = localStorage.getItem('profile-language') || 'en';
function render() {
  const copy = profile.translations[language], isPersian = language === 'fa';
  document.documentElement.lang = isPersian ? 'fa' : 'en'; document.documentElement.dir = isPersian ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.getElementById('location-text').textContent = copy.location;
  const toggle = document.querySelector('.language-toggle'); toggle.querySelector('span').textContent = isPersian ? 'EN' : 'فارسی'; toggle.setAttribute('aria-label', isPersian ? 'Switch to English' : 'تغییر زبان به فارسی'); toggle.setAttribute('aria-pressed', String(isPersian));
  document.getElementById('quick-links').innerHTML = linkDefinitions.map(([key, icon, tint, color]) => {
    const [label, note] = copy.links[key], url = key === 'email' ? `mailto:${profile.email}` : profile[key], unavailable = !url;
    return `<a class="quick-link${unavailable ? ' is-unavailable' : ''}" ${unavailable ? 'aria-disabled="true"' : `href="${url}" target="_blank" rel="noreferrer"`} style="--link-tint:${tint};--link-color:${color}"><span class="icon-wrap"><i data-lucide="${icon}"></i></span><span class="link-copy"><strong>${label}</strong><small>${note}</small></span><span class="arrow" aria-hidden="true">↗</span></a>`;
  }).join(''); lucide.createIcons();
}
document.querySelector('.language-toggle').addEventListener('click', () => { language = language === 'en' ? 'fa' : 'en'; localStorage.setItem('profile-language', language); render(); });
render();
