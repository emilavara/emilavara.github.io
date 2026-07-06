<script lang="ts">
    import '../css/main.scss'

    let {children} = $props();

    const siteName = 'Emil Avara';
    const title = 'designer + full-stack dev';
    const description = "Stockholm-based designer & full-stack developer. I build fast, minimal web apps with Svelte, Vue, and TypeScript. Currently consulting for CreateWeb.";
    const canonical = 'https://emilavara.github.io/'; 
    const ogImage = '/og-cover.jpg';
    const twitterHandle = '@emilavara';

    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Emil Avara',
        url: 'https://emilavara.se/',
        jobTitle: 'Full-stack Developer & Designer',
        image: 'https://emilavara.se/avatar.jpg',
        homeLocation: { '@type': 'Place', name: 'Stockholm, Sweden' },
        sameAs: [
            'https://github.com/emilavara',
            'https://www.linkedin.com/in/emilavara',
            'https://x.com/emilavara'
        ]
    };
</script>

<svelte:head>
    <script>
        const hasSeenIntro = localStorage.getItem('has-seen-intro') === 'true';

        if (!hasSeenIntro) {
            localStorage.setItem('has-seen-intro', 'true');
        } else {
            document.documentElement.classList.add('has-seen-intro');
        }
    </script>

    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={`${siteName} | ${title}`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${siteName} | ${title}`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:site" content={twitterHandle} />

    <link rel="icon" href="/favicon.ico" sizes="any" />

    <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
</svelte:head>

{@render children?.()}
