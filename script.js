// 这里可以放置页面交互的 JavaScript 代码
document.addEventListener('DOMContentLoaded', function() {
    // 示例：为导航链接添加点击事件
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`导航到: ${this.getAttribute('href')}`);
        });
    });
});
