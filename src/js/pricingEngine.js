import { pricingMatrix, tariffs, billing } from "../data/pricing";

export function calculatePrice(plan, currency, cycle){

    const base = pricingMatrix[plan].base;

    const tariff = tariffs[currency];

    const multiplier = billing[cycle];

    const value = base * tariff.multiplier * multiplier;

    return `${tariff.symbol}${Math.round(value)}`;

}