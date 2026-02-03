// Utility function similar to clsx for combining class names
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Helper function to combine styled-components styles
export function combineStyles(...styles) {
    return styles.filter(Boolean).join('');
}
