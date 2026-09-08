const profile = {
  links: {
    linkedin: 'https://www.linkedin.com/in/mohamadmahdi-esmailiyan', github: 'https://github.com/esmailiyan',
    kaggle: 'https://www.kaggle.com/esmailiyan', telegram: 'https://t.me/MohamadMahdiE', email: 'mailto:esmailiyan.mahdi@gmail.com'
  },
  translations: {
    en: { institution: 'University of Tehran · Computer Science', name: 'MohamadMahdi Esmailiyan', title: 'Data Scientist · AI Engineer', bio: 'Focused on machine learning, data analysis, and dependable AI systems—turning complex questions into useful tools.', location: 'Tehran, Iran', swipe: 'Swipe to connect', connect: 'Connect', return: 'Return to profile', links: { linkedin: ['LinkedIn', 'Professional profile'], github: ['GitHub', 'Code & experiments'], kaggle: ['Kaggle', 'Data science notebooks'], telegram: ['Telegram', 'Personal account'], email: ['Email', 'Start a conversation'] } },
    fa: { institution: 'دانشگاه تهران · علوم کامپیوتر', name: 'محمدمهدی اسماعیلیان', title: 'دانشمند داده · مهندس هوش مصنوعی', bio: 'متمرکز بر یادگیری ماشین، تحلیل داده و سامانه‌های هوش مصنوعی قابل‌اعتماد؛ تبدیل پرسش‌های پیچیده به ابزارهای کاربردی.', location: 'تهران، ایران', swipe: 'برای ارتباط، ورق بزنید', connect: 'ارتباط', return: 'بازگشت به پروفایل', links: { linkedin: ['لینکدین', 'پروفایل حرفه‌ای'], github: ['گیت‌هاب', 'کدها و پروژه‌ها'], kaggle: ['کگل', 'نوت‌بوک‌های علم داده'], telegram: ['تلگرام', 'حساب شخصی'], email: ['ایمیل', 'شروع یک گفت‌وگو'] } }
  }
};

const definitions = [['linkedin', 'linkedin', '#dcecf7', '#5790b8'], ['github', 'github', '#e6eaf0', '#637489'], ['kaggle', 'chart-no-axes-combined', '#e5e8fb', '#7789c6'], ['telegram', 'send', '#e1e9fc', '#7189c5'], ['email', 'mail', '#e0f1e6', '#70a688']];
const card = document.querySelector('.business-card');
let language = localStorage.getItem('test-card-language') || 'en';
let startX = 0;

function flip() { const flipped = card.classList.toggle('is-flipped'); card.setAttribute('aria-pressed', flipped); }
function render() {
  const text = profile.translations[language], rtl = language === 'fa';
  document.documentElement.lang = rtl ? 'fa' : 'en'; document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = text[node.dataset.i18n]; });
  const toggle = document.querySelector('.language-toggle'); toggle.querySelector('span').textContent = rtl ? 'EN' : 'فارسی'; toggle.setAttribute('aria-pressed', rtl);
  document.getElementById('link-list').innerHTML = definitions.map(([key, icon, tint, color]) => { const [label, note] = text.links[key]; return `<a href="${profile.links[key]}" target="_blank" rel="noreferrer"><span class="link-icon" style="--tint:${tint};--color:${color}"><i data-lucide="${icon}"></i></span><span><strong>${label}</strong><small>${note}</small></span><span class="link-arrow"><i data-lucide="arrow-up-right"></i></span></a>`; }).join('');
  lucide.createIcons();
}

card.addEventListener('click', (event) => { if (!event.target.closest('a')) flip(); });
card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); } });
card.addEventListener('pointerdown', (event) => { startX = event.clientX; card.setPointerCapture(event.pointerId); card.classList.add('is-dragging'); });
card.addEventListener('pointermove', (event) => {
  if (!card.classList.contains('is-dragging')) return;
  const distance = Math.max(-120, Math.min(120, event.clientX - startX));
  const baseAngle = card.classList.contains('is-flipped') ? 180 : 0;
  card.style.transform = `rotateY(${baseAngle + (distance / 120) * 92}deg)`;
});
card.addEventListener('pointerup', (event) => { const distance = event.clientX - startX; card.classList.remove('is-dragging'); card.style.removeProperty('transform'); if (Math.abs(distance) > 50) flip(); });
card.addEventListener('pointercancel', () => { card.classList.remove('is-dragging'); card.style.removeProperty('transform'); });
document.querySelector('.language-toggle').addEventListener('click', () => { language = language === 'en' ? 'fa' : 'en'; localStorage.setItem('test-card-language', language); render(); });
render();
