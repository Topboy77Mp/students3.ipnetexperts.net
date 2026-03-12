// Profile Data
const profilesData = {
    patrick: {
        name: 'Patrick',
        role: 'Pentest & Exploit Developer',
        description: 'Expert en tests de pénétration avancés, reverse engineering et développement d\'exploits. Spécialisé en vulnérabilités zero-day et sécurité des applications web critiques.',
        experience: '12+ Ans',
        projects: '500+ Vulnérabilités trouvées',
        certifications: ['CEH', 'OSCP', 'GPEN'],
        skills: ['Burp Suite Pro', 'Metasploit Framework', 'GDB', 'Python', 'C++', 'Assembly', 'Web App Security', 'Reverse Engineering'],
        projects_list: [
            { title: 'Framework d\'Exploitation Custom', desc: 'Développement d\'un framework d\'exploitation modulaire en Python' },
            { title: 'Bug Bounty & Zero-Days', desc: 'Découverte et divulgation responsable de 500+ vulnérabilités' },
            { title: 'Pentesting d\'Applications Critiques', desc: 'Sécurisation d\'infrastructure pour Fortune 500 companies' }
        ]
    },
    hannielle: {
        name: 'Hannielle',
        role: 'Incident Response & Forensics',
        description: 'Spécialiste en réponse aux incidents, analyse forensique et threat hunting. 10+ ans d\'expérience dans l\'investigation de cyberattaques complexes et la récupération de données.',
        experience: '10+ Ans',
        projects: '200+ Incidents investigués',
        certifications: ['GCIH', 'GIAC DFIR', 'EnCE'],
        skills: ['Digital Forensics', 'Volatility', 'Wireshark', 'Splunk', 'EnCase', 'Memory Analysis', 'Threat Hunting', 'Evidence Collection'],
        projects_list: [
            { title: 'Incident Response sur Ransomware', desc: 'Investigation et récupération après attaque ransomware majeure' },
            { title: 'Threat Hunting Campaign', desc: 'Détection proactive de 50+ menaces latentes' },
            { title: 'Forensic Analysis & Legal Cases', desc: 'Analyse forensique pour procédures judiciaires complexes' }
        ]
    },
    jonas: {
        name: 'Jonas',
        role: 'Infrastructure Security & DevSecOps',
        description: 'Expert en sécurisation d\'infrastructure cloud, containerisation sécurisée et automation DevSecOps. Pionnier dans la mise en place de politiques zero-trust.',
        experience: '8+ Ans',
        projects: '100+ Infrastructure sécurisées',
        certifications: ['CKAD', 'CKA', 'CCNA'],
        skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'GCP', 'Linux Hardening', 'Zero Trust Architecture'],
        projects_list: [
            { title: 'Migration Cloud Sécurisée', desc: 'Migration de 50 applications vers infrastructure cloud zero-trust' },
            { title: 'Infrastructure as Code', desc: 'Automation de déploiement sécurisé avec Terraform & GitOps' },
            { title: 'Kubernetes Security Hardening', desc: 'Sécurisation d\'une infrastructure K8s à 5000+ pods' }
        ]
    }
};

// Show Modal with Profile Details
function showModal(profile) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const data = profilesData[profile];

    let certificationsHTML = data.certifications.map(cert => `<span class="cert-badge">${cert}</span>`).join('');
    let skillsHTML = data.skills.map(skill => `<div class="modal-skill">${skill}</div>`).join('');
    let projectsHTML = data.projects_list.map(proj => `
        <div class="modal-project">
            <h4>${proj.title}</h4>
            <p>${proj.desc}</p>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <h2>${data.name}</h2>
        <p class="modal-role">${data.role}</p>
        <p class="modal-desc">${data.description}</p>

        <h3>📊 Statistiques</h3>
        <div class="modal-stats">
            <div><strong>Expérience:</strong> ${data.experience}</div>
            <div><strong>Projets:</strong> ${data.projects}</div>
        </div>

        <h3>🎓 Certifications</h3>
        <div class="modal-certifications">${certificationsHTML}</div>

        <h3>🛠️ Compétences Techniques</h3>
        <div class="modal-skills">${skillsHTML}</div>

        <h3>💼 Projets Majeurs</h3>
        <div class="modal-projects">${projectsHTML}</div>
    `;

    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Merci pour votre message! Nous vous répondrons bientôt.');
    event.target.reset();
}

// Smooth Scroll Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.profile-card').forEach(card => {
    observer.observe(card);
});

// Add some modal styling to script
const style = document.createElement('style');
style.textContent = `
    .modal-role {
        color: var(--neon-cyan);
        font-size: 16px;
        margin: 10px 0 20px 0;
        text-shadow: 0 0 10px var(--neon-cyan);
    }

    .modal-desc {
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 20px 0;
    }

    .modal-stats {
        background: rgba(0, 255, 255, 0.1);
        padding: 15px;
        border-left: 3px solid var(--neon-cyan);
        margin: 20px 0;
    }

    .modal-stats div {
        color: var(--text-primary);
        margin: 10px 0;
    }

    .modal-certifications {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0;
    }

    .modal-skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin: 20px 0;
    }

    .modal-skill {
        background: rgba(0, 255, 0, 0.1);
        padding: 12px;
        border: 1px solid var(--neon-green);
        border-radius: 5px;
        color: var(--neon-green);
        text-align: center;
        font-size: 13px;
    }

    .modal-projects {
        margin: 20px 0;
    }

    .modal-project {
        background: rgba(0, 128, 255, 0.1);
        padding: 20px;
        border-left: 3px solid var(--neon-blue);
        margin: 15px 0;
        border-radius: 5px;
    }

    .modal-project h4 {
        color: var(--neon-blue);
        margin-bottom: 8px;
    }

    .modal-project p {
        color: var(--text-secondary);
        font-size: 13px;
    }

    .modal-content h3 {
        color: var(--neon-green);
        margin-top: 30px;
        margin-bottom: 15px;
        text-shadow: 0 0 10px var(--neon-green);
    }

    @media (max-width: 600px) {
        .modal-content {
            width: 95%;
            margin: 20% auto;
        }

        .modal-skills {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);