export class SocialLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="social-links-container">
                <a class="social-btn" aria-label="Link to LinkedIn" href="https://linkedin.com/in/emilavara" target="_blank"><i class="bi bi-linkedin"></i></a>                
                <a class="social-btn" aria-label="Link to GitHub" href="https://github.com/emilavara" target="_blank"><i class="bi bi-github"></i></a>                
                <a class="social-btn" aria-label="Link to X" href="https://x.com/emilavara" target="_blank"><i class="bi bi-twitter"></i></a>                
                <a class="social-btn" aria-label="Link to e-mail" href="mailto:emilavara@hotmail.com" target="_blank"><i class="bi bi-envelope-fill"></i></a>                
            </div>
        `
    }
}