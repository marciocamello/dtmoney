export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('pt-PT', {
    }).format(new Date(date));
}