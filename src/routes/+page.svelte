<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "$lib/components/Logo.svelte";
    
    import GithubLogo from "phosphor-svelte/lib/GithubLogo";
    import XLogo from "phosphor-svelte/lib/XLogo";
    import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo";
    import Envelope from "phosphor-svelte/lib/EnvelopeSimple";
    import BehanceLogo from "phosphor-svelte/lib/BehanceLogo";

    onMount(() => {
        window.scrollTo(0, 0)
    })
</script>

<!-- <Logo/> -->

<main class="">
    <section>
        <div class="img-container mb-4 mt-4 mb-xs-4 mt-xs-4">
            <Logo/>
        </div>
        <h1 class="fade-in" style="--ao: 4;">emil avara. full stack developer.</h1>

        <p style="--ao: 5;" class="mb-1 mb-xs-1 text-accent big jap fade-in">結局君にこれを翻訳させたね</p>
        <div style="--ao: 6;" class="socials fade-in">
            <a href="https://github.com/emilavara" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GithubLogo/></a>
            <a href="https://google.com"aria-label="Behance" target="_blank" rel="noopener noreferrer"><BehanceLogo/></a>
            <a href="https://linkedin.com/in/emilavara" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinLogo/></a>
            <a href="https://x.com/emilavara" aria-label="X" target="_blank" rel="noopener noreferrer"><XLogo/></a>
            <a href="mailto:emilavara@hotmail.com" aria-label="Mail-address" target="_blank" rel="noopener noreferrer"><Envelope/></a>
        </div>
        <p style="--ao: 6;" class="mt-2 mt-xs-2 fade-in">&gt; currently consulting for <a href="https://createweb.se" class="text-accent" target="_blank">createweb</a></p>
        
    </section>
    <section class="mt-10 mt-xs-6 fade-in" style="--ao: 7;">
        <h2 class="mb-1 mb-xs-1">bio</h2>
        <p>i'm emil avara. a stockholm based full stack developer and ui designer. I've had the privilege of building websites & UIs for several communications agencies, & start-ups. </p>
    </section>
    <section class="mt-4 mt-xs-3 fade-in" style="--ao: 8;">
        <h2 class="mb-1 mb-xs-1">experience</h2>
        <div class="experiences d-flex flex-column gap-1">
            <div class="d-flex justify-between">
                <a href="https://createweb.se" target="_blank">createweb</a>
                <p>2024 &mdash; curr</p>
            </div>
            <div class="d-flex justify-between">
                <a href="https://wewoosh.com" target="_blank">wewoosh (now perfa)</a>
                <p>2023 &mdash; 2024</p>
            </div>
            <div class="d-flex justify-between">
                <p><a href="https://lescreatives.com" target="_blank">les creatives sthlm</a></p>
                <p>2022 &mdash; 2024</p>
            </div>
        </div>
    </section>
    <section class="mt-4 mt-xs-3 fade-in" style="--ao: 9;">
        <h2 class="mb-1 mb-xs-1">selected projects</h2>
        <div class="portfolio d-flex flex-column gap-1">
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://hiljalogistics.se" target="_blank">hilja logistics</a>
                <p>2025</p>
            </div>
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://wackoskinn.se" target="_blank">wacko skinnbutik</a>
                <p>2025</p>
            </div>
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://greenhermitage.se" target="_blank">green hermitage</a>
                <p>2025</p>
            </div>
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://wewoosh.com" target="_blank">wewoosh (now perfa)</a>
                <p>2024</p>
            </div>
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://symf.se" target="_blank">symf</a>
                <p>2023</p>
            </div>
            <div class="d-flex justify-between">
                <a class="portfolio-item" href="https://suniaioliva.com" target="_blank">suniai oliva</a>
                <p>2023</p>
            </div>
        </div>
    </section>
    <section class="mt-4 mt-xs-3 fade-in mb-4 mb-xs-4" style="--ao: 10;">
        <h2 class="mb-1 mb-xs-1">work with me</h2>
        <p>
            got a project, or business idea? we are always looking for new opportunities. <a href="">lets get in touch!</a>
        </p>
    </section>
</main>