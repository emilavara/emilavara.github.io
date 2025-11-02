<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    
    import GithubLogo from "phosphor-svelte/lib/GithubLogo";
    import XLogo from "phosphor-svelte/lib/XLogo";
    import LinkedInLogo from "phosphor-svelte/lib/LinkedInLogo";
    import Envelope from "phosphor-svelte/lib/EnvelopeSimple";
    import BehanceLogo from "phosphor-svelte/lib/BehanceLogo";

    let reactSlander = $state(false)

    const reactSlanderEnterHandler = () => {
        reactSlander = true
    }

    const reactSlanderLeaveHandler = () => {
        reactSlander = false
    }
</script>   

<!-- <Logo/> -->

<main class="">
    <section>
        <div class="img-container mb-4 mt-4 mb-xs-4 mt-xs-4">
            <!-- <img src="/images/ea-signature.svg" alt="emil signature"/> -->
             <Logo/>
        </div>
        <h1 class="fade-in" style="--ao: 4;">emil avara. designer + full stack dev.</h1>

        <p style="--ao: 5;" class="mb-1 mb-xs-1 text-accent big jap fade-in">結局君にこれを翻訳させたね</p>
        <div style="--ao: 6;" class="socials fade-in">
            <a href="https://github.com/emilavara" target="_blank"><GithubLogo/></a>
            <a href="https://google.com" target="_blank"><BehanceLogo/></a>
            <a href="https://linkedin.com/in/emilavara" target="_blank"><LinkedInLogo/></a>
            <a href="https://x.com/emilavara" target="_blank"><XLogo/></a>
            <a href="mailto:emilavara@hotmail.com" target="_blank"><Envelope/></a>
        </div>
        <p style="--ao: 6;" class="mt-2 mt-xs-2 fade-in">&gt; currently consulting for <a href="https://createweb.se" class="text-accent" target="_blank">createweb</a></p>
        
    </section>
    <section class="mt-10 mt-xs-6 fade-in" style="--ao: 7;">
        <h2 class="mb-1 mb-xs-1">bio</h2>
        <p>i'm emil avara. a stockholm based full stack developer and ui designer. I've had the privilege of building websites & UI for several communications agencies, & start-ups. <br/> svelte is my framework of choice, though i'm well-versed in vue and
        <span class="react-slander" onmouseenter={reactSlanderEnterHandler} onmouseleave={reactSlanderLeaveHandler}>
            {#if !reactSlander}
            react
            {:else} 
            (yuck)
            {/if}
        </span>
        as well.</p>
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
    <section class="mt-4 mt-xs-3 fade-in mb-4 mb-xs-4" style="--ao: 9;">
        <h2 class="mb-1 mb-xs-1">work with me</h2>
        <p>
            got a project, or business idea? we are always looking for new opportunities. <a href="">lets get in touch!</a>
        </p>
    </section>
</main>