import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getYears() {
    const startYear = 1900;
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);
}

export function getMonths() {
    return Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }));
}

export function getEnumOptions(enumType: any): { value: any; label: string }[] {
    return Object.keys(enumType)
        .filter((key) => isNaN(Number(key)))
        .map((key) => ({
            value: !!!enumType[key] ? 'Empty' : enumType[key],
            label: !!!enumType[key] ? 'Empty' : enumType[key],
        }));
}
