# Sentiment Analyzer

This is a simple web-based sentiment analyzer for product reviews.

## Features

- Analyze product reviews and classify them as:
  - Good 
  - Bad 
  - Neutral 
- Built using HTML, CSS, and JavaScript
- Includes a Colab notebook to train a sentiment analysis model using Naive Bayes

## Files

- `index.html` – Web interface
- `styles.css` – Page styling
- `script.js` – Sentiment logic
- `sentiment_analysis_model.ipynb` – Colab notebook for training the model

## How to Use

1. Open `index.html` in your browser
2. Type a review and click "Analyze"
3. View the predicted sentiment

## Live Demo

You can host it using GitHub Pages for a public link.

## ⚠️ Limitations

One limitation of this sentiment analyzer is that it may incorrectly classify phrases like **"not good"** as **positive**. This happens because the current JavaScript logic is rule-based and only checks for the presence of positive or negative keywords. For example, if the word “good” appears anywhere in the review, the sentiment is considered positive—even if it’s preceded by a negative word like “not”.
