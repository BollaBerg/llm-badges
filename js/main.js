document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('badge-list');
    if (!list) return;

    badges.forEach(badge => {
        const link = document.createElement('a');
        link.href = `badge-detail.html?id=${badge.id}`;
        link.className = `badge ${badge.color}`;
        
        link.innerHTML = `<span class="badge-label">LLM</span><span class="badge-value">${badge.name}</span>`;
        list.appendChild(link);
    });
});
