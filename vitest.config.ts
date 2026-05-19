import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            thresholds: {
                '100': true,
            },
        },
    },
});
