<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex-col items-center justify-center py-12">
      <amp-img
        class="rounded"
        src="https://source.unsplash.com/random/1000x300"
        layout="responsive"
        width="100"
        height="40"
      ></amp-img>
      <h1
        class="py-4 text-4xl font-semibold leading-none text-center text-bold md:text-5xl"
      >
        nuxt-amp-tailwind
      </h1>
      <div class="flex items-center justify-center">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 mx-2 font-medium text-white bg-green-500 rounded-full shadow-sm hover:bg-green-800"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 mx-2 font-medium text-white bg-green-500 rounded-full shadow-sm hover:bg-green-800"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  amp: 'only',
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Article',
      name: `Crew Roast Cafés`,
      url: `https://crewroast.com${this.$route.path}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://crewroast.com${this.$route.path}`,
      },
      headline: `Crew Roast Café`,
      description: `Crew Roast Café - Cafés para nós é a combinação do trabalho e dedicação de muitas pessoas e uma incrível experiência sensorial`,
      image: 'https://source.unsplash.com/random/1000x300',
      datePublished: '2020-09-10T11:55:33Z',
      dateModified: '2020-09-10T11:55:33Z',
      author: 'Tapp Digital',
      creator: 'Tapp Digital',
      publisher: {
        '@type': 'Organization',
        name: 'Tapp Digital',
        url: 'https://tappdigital.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'icon.png',
        },
      },
    }
  },
}
</script>
