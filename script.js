// 自动设置页脚年份
document.getElementById('year').textContent = new Date().getFullYear();

// 主题切换（深色/浅色模式）
const themeToggleBtn = document.getElementById('theme-toggle');
let isDark = localStorage.getItem('theme') === 'dark';

function applyTheme() {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
  }
}

// 初始化主题
applyTheme();

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme();
});

// 打招呼按钮交互
const sayHiBtn = document.getElementById('say-hi-btn');
sayHiBtn.addEventListener('click', () => {
  const currentHour = new Date().getHours();
  let timeGreeting = '你好';
  if (currentHour < 12) {
    timeGreeting = '早上好';
  } else if (currentHour < 18) {
    timeGreeting = '下午好';
  } else {
    timeGreeting = '晚上好';
  }
  alert(`${timeGreeting}！很高兴认识你，感谢访问我的主页 😊`);
});
