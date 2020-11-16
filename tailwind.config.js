const production = !process.env.ROLLUP_WATCH;

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: production,
        mode: 'all',
        content: [
            './src/**/*.svelte',
        ]
    },
    theme: {
        extend: {
            colors: {
                primary: '#245AB0',
            },
            fontFamily: {
                dosis: ["Dosis"],
            }
        },
    },
    variants: {},
    plugins: [],
}
