const iPhone13 = {
    type: {
        brand: "Apple",
        model: "iPhone 13",
        color: "gold", 
    },

    storage: {
        ramInGB: 4,
        memoryCard: false,
    },

    display: {
        sizeInInch: 5.8,
        panelType: "OLED",
        touchscreen: true,
        supportHDR: true
    },

    resolution: {
        width: 1125,
        height: 2436
    },

    features: ["Dual-camera", "GPS", "fingerprint supported", "faceID supported", "music"],

    on: false,
    

    power: function() {
        iPhone13.on = !iPhone13.on
    }



};


 
