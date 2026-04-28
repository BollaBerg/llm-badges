document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('badge-list');
    if (!list) return;

    badges.forEach(badge => {
        const card = document.createElement('a');
        card.href = `badge-detail.html?id=${badge.id}`;
        card.className = `badge-card`;
        
        card.innerHTML = `
            <div class="badge ${badge.color}">
                <span class="badge-label">LLM</span><span class="badge-value">${badge.name}</span>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">${badge.description}</p>
        `;
        list.appendChild(card);
    });
});
