
interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

const poorDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
}, {
    bike: string;
}> = {
    name: "Sabbir",
    salary: 24,
    device: {
        brand: "Lenovo",
        model: "Ideapad gamming 3",
        releasedYear: '2022',
    },
    smartWatch: {
        heartRate: '220',
        stopWatch: true,
    },
    bike: { bike: "Yamaha" },
}

// For clean code
interface watchFeatures {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
}

const richDeveloper: Developer<watchFeatures> = {
    name: "Niyaz",
    salary: 27,
    device: {
        brand: "Alineware",
        model: "Ideapad gamming 3",
        releasedYear: '2027',
    },
    smartWatch: {
        heartRate: '220',
        stopWatch: true,
        callSupport: true,
    }
}

console.log(poorDeveloper);
console.log(richDeveloper);