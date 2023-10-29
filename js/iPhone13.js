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

    features: ["Dual-camera", "GPS", "fingerprint supported", "faceID supported"],

    on: false,
    
    power: function() {
        iPhone13.on = !iPhone13.on
    }
}

// Testing if its pulling through to console in developper tools //

console.log("iPhone13")

if (iPhone13.on) {
    console.log("iPhone is on.");
} else {
    console.log("iPhone is off.");
}



 
