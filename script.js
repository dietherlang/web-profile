// ===== Fetch Repositories from JSON =====
const repoContainer = document.getElementById('repo-cards');

async function fetchRepos() {
    try {
        const response = await fetch('data.json'); // your JSON file
        const repos = await response.json();

        repoContainer.innerHTML = ''; // Clear loading text

        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.url}" target="_blank">View Repo</a>
            `;
            repoContainer.appendChild(repoCard);
        });

    } catch (error) {
        console.error('Error fetching repos:', error);
        repoContainer.innerHTML = '<p>Failed to load repositories.</p>';
    }
}

// ===== Animate Skill Bars on Scroll =====
const skillBars = document.querySelectorAll('.skill-card .progress-bar span');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.width;
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// ===== Initialize =====
fetchRepos();
animateSkillBars();
