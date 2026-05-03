# 🍽️ Meals Listing App

A simple React + TypeScript application that fetches and displays a list of meals using a public API. It demonstrates API integration, data transformation, and pagination handling.

---

## 🚀 Features

* Fetch meals from API
* Pagination support (`page`, `limit`)
* Search support via query param
* Clean data transformation (ingredients + measures)
* Loading & error states
* TypeScript-based architecture

---

## 🛠️ Tech Stack

* React
* TypeScript
* Fetch API
* Tailwindcss

---

## 📦 API Endpoint

```
https://api.freeapi.app/api/v1/public/meals
```

### Query Params:

* `page` → current page number
* `limit` → items per page
* `query` → search keyword

---

## 📂 Project Structure

```
src/
│── types/
│── utils/
│── App.tsx
```

---

## 🔄 Data Handling

The API returns meals in a raw format with:

* `strIngredient1...20`
* `strMeasure1...20`

These are transformed into a cleaner structure:

```
ingredients: [
  { name: "Salt", measure: "1 tsp" }
]
```

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## ⚠️ Notes

* UI is minimal (focus is on logic & structure)
* Data is normalized before rendering
* Ready for future enhancements (UI, routing, state management)

---

## 📌 Future Improvements

* Better UI (cards/grid)
* Meal detail page
* Search with debounce
* Pagination controls
* API caching (React Query)

---
