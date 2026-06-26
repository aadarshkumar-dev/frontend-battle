export const pricingMatrix = {
    Starter: {
        base: 12
    },

    Pro: {
        base: 29
    },

    Enterprise: {
        base: 79
    }
};

export const tariffs = {
    USD: {
        symbol: "$",
        multiplier: 1
    },

    INR: {
        symbol: "₹",
        multiplier: 83
    },

    EUR: {
        symbol: "€",
        multiplier: 0.92
    }
};

export const billing = {
    monthly: 1,
    yearly: 12 * 0.8 // 20% discount
};