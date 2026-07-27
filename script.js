// ========== 导航滚动高亮 ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

function updateNav() {
    const scrollY = window.pageYOffset + 120;
    
    let currentId = '';
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNav, { passive: true });

// ========== 平滑滚动 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});

// ========== 滚动入场动画 ==========
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察各类元素
const observeSelectors = [
    '.research-item',
    '.person-card',
    '.pub-item',
    '.proj-card',
    '.news-item',
    '.recruit-card',
    '.contact-block',
    '.banner-card'
];

document.querySelectorAll(observeSelectors.join(', ')).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== 页面加载 ==========
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
});

// ========== 防抖工具 ==========
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ========== 窗口resize时重新计算 ==========
window.addEventListener('resize', debounce(updateNav, 100));