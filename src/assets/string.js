export const getNWords = (words, n) => {
    return words.split(" ").slice(0, n).join(" ");
}