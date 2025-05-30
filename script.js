/**
 * Inicializa os efeitos da página quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollEffects();
});

/**
 * Cria o efeito de partículas animadas no header
 */
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    if (!particlesContainer) return;
    
    // Configurações das partículas
    const particleCount = 40;
    const particles = [];
    
    // Cria as partículas
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição e tamanho aleatórios
        const size = Math.random() * 16 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Opacidade aleatória
        const opacity = Math.random() * 0.4 + 0.1;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Adiciona animação individual
        const duration = Math.random() * 5000 + 3000;
        const delay = Math.random() * 3000;
        
        particle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 2, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: duration,
            iterations: Infinity,
            delay: delay
        });
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Inicializa efeitos de scroll (pode ser expandido)
 */
function initScrollEffects() {
    // Pode adicionar observadores de interseção aqui
    // para animações quando elementos aparecem na tela
    console.log('Efeitos de scroll inicializados');
}

/**
 * Função para rolar suavemente para seções
 */
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}