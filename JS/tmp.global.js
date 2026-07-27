export const TMP_GLOBAL = {
    cache: {},
    set(key, value) {
        this.cache[key] = value;
    },
    get(key) {
        return this.cache[key];
    }
};

