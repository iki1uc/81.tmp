// A81-FUSION-CONTROLLER
const A81FUSION = {
    cache: [],
    respo100: [],
    respo360: [],
    matrix9: [],
    geo: null,
    nc: null,
    c81: null,
    pq243: null,

    init() {
        this.cache = A81CACHE.read();
        this.respo100 = RESPO100.load();
        this.respo360 = RESPO360.load();
        this.matrix9 = A81_AXIS.build();
        this.geo = GEO.init();
        this.c81 = C81.init();
        this.pq243 = PQ243.run();

        this.nc = NC_CORE.init(
            this.c81,
            this.respo360,
            this.pq243,
            this.cache,
            this.matrix9,
            this.geo
        );

        this.loop();
    },

    loop() {
        setInterval(() => {
            this.updateCache();
            this.updateRespo();
            this.updateMatrix();
            this.updateUI();
        }, 500);
    },

    updateCache() {
        this.cache = A81CACHE.read();
    },

    updateRespo() {
        RESPO360.rotate();
        RESPO100.shift();
    },

    updateMatrix() {
        this.matrix9 = A81_AXIS.build();
    },

    updateUI() {
        const el = document.getElementById("a81-status");
        if (el) el.textContent = `A81CACHE: ${this.cache.length} · RESPO: ${this.respo100.length}`;
    }
};

A81FUSION.init();
