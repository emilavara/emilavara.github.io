export class MobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="mobile-nav" class="mobile-nav">
                <div class="mobile-nav-link-container">
                    <a class="h1 mobile-nav-link" href="/">Intro</a>
                    <a id="mobile-portfolio-link" class="h1 mobile-nav-link" href="/#portfolio">Portfolio</a>
                    <a class="h1 mobile-nav-link" href="/about">About</a>
                    <a class="h1 mobile-nav-link" href="/contact">Contact</a>
                </div>
                <div class="button-and-social-container">
                    <a class="ea-btn primary" href="/contact">Get in touch</a>
                    <ea-social-links></ea-social-links>
                </div>
                <div class="bottom-line"></div>
            </nav>
        `
    }
}