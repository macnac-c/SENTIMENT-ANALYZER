function analyzeSentiment() {
  const review = document.getElementById('reviewInput').value.toLowerCase();

  const goodWords = ['good', 'great', 'excellent', 'amazing', 'love', 'nice', 'happy'];
  const badWords = ['bad', 'poor', 'terrible', 'worst', 'hate', 'awful', 'horrible'];

  let score = 0;

  goodWords.forEach(word => {
    if (review.includes(word)) score += 1;
  });

  badWords.forEach(word => {
    if (review.includes(word)) score -= 1;
  });

  let sentiment = '';
  if (score > 0) {
    sentiment = 'Good 😊';
  } else if (score < 0) {
    sentiment = 'Bad 😞';
  } else {
    sentiment = 'Neutral 😐';
  }

  document.getElementById('result').innerText = `Sentiment: ${sentiment}`;
}
