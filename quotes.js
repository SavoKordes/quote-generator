// Carl Jung Quote Generator - Day 1

const quotes = [
  "Who looks outside, dreams; who looks inside, awakes.",
  "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
  "Your vision will become clear only when you can look into your own heart.",
  "In all chaos there is a cosmos, in all disorder a secret order.",
  "The privilege of a lifetime is to become who you truly are.",
  "Everything that irritates us about others can lead us to an understanding of ourselves.",
  "Knowing your own darkness is the best method for dealing with the darkness of other people.",
  "One does not become enlightened by imagining figures of light, but by making the darkness conscious."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

console.log("💡 Carl Jung says:");
console.log(`"${randomQuote}"`);
