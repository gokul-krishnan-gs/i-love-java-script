# Day 17

## III. Introduction to the DOM (Document Object Model)

The DOM is the mechanism by which JavaScript interacts with web pages (handling clicks, scrolls, typing, color changes, and popups).

### Definition and Purpose
*   The DOM is a **programming interface** for a web document.
*   It represents a page so that programming languages (like JavaScript or Python) can change the document's structure, style, and content.
*   Without the DOM, JavaScript would have no capability to read and interact with HTML or SVG documents.
*   **Crucial Distinction:** The DOM is **not part of JavaScript** and is not a programming language itself. JavaScript leverages the DOM programming APIs to provide dynamic behavior to web pages.

### The DOM Tree Structure
*   When a browser loads HTML, it creates a **DOM Tree** structure instead of viewing it as raw text.
*   The DOM Tree is hierarchical, where each HTML element is a **node**.
*   The **root** of the DOM Tree is always the **`document`**.
*   HTML tags (e.g., `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`) are represented as nodes.
*   The text inside these tags is represented by specialized **Text Nodes**.

## IV. DOM Types

Understanding DOM types and terminology is critical for working with the DOM. Six main types are discussed:

| DOM Type | Description |
| :--- | :--- |
| **Document** | The **root element** and root node of the entire DOM Tree. It represents the complete HTML page. Properties like `document.head`, `document.body`, `document.title`, and `document.URL` can be accessed directly. |
| **Node** | A **generic term** for any item in the DOM tree. Nodes can be classified as Element nodes, Text nodes, or Attribute nodes. |
| **Element** | A special type of node that represents HTML tags/elements, such as `<p>`, `<div>`, or `<li>`. |
| **Attribute (ATR)** | Represents the attribute of a node (e.g., the `src` or `alt` within an `<img>` tag). |
| **Node List** | An **ordered list** (or array) of nodes. |
| **Name Node Map** | A collection of Attribute type nodes. Unlike a Node List, this is **not an ordered list** (it is a map).

## V. Accessing and Querying the DOM

Before manipulating the DOM (updating the web page), you must first select the elements you want to change. Elements can be identified using their tag name, attributes, unique **ID**, or **class name**.

JavaScript provides several powerful methods for selection:

### Direct Element Access Methods
These methods return either a single element or an array-like HTML Collection:

| Method | Argument | Returns | Notes |
| :--- | :--- | :--- | :--- |
| **`document.getElementById()`** | Unique ID. | Single element. | ID should be unique across the page. |
| **`document.getElementsByClassName()`** | Class name. | **HTML Collection**. | Returns an array-like object because multiple elements can share a class name. |
| **`document.getElementsByTagName()`** | Tag name (e.g., 'P'). | **HTML Collection**. | |

*Note: An **HTML Collection** is array-like, but not a true array. It must often be converted (e.g., using the spread operator or `Array.from()`) to use array methods like `forEach`.*

### CSS Selector Methods
These methods use standard **CSS selectors** as arguments.

| Method | Argument | Returns | Notes |
| :--- | :--- | :--- | :--- |
| **`document.querySelector()`** | CSS Selector (e.g., `p.info`). | The **first matching element** node. | Useful when selecting elements by unique ID (`#heading`). |
| **`document.querySelectorAll()`** | CSS Selector. | **Node List**. | Returns all matching elements. A Node List is generally preferred over an HTML Collection because it supports iteration directly. |

**Selector Syntax Examples:**
*   To select an element by ID, use the pound sign: `document.querySelector('#heading')`.
*   To select a specific tag with a specific class: `p.info` (paragraph element with class `info`).

## VI. Mini-Projects and Manipulation Techniques

### 1. Simple Highlighter App
This project demonstrates dynamic styling based on an event.

*   **Setup:** A button is added with the `onclick` event handler attached to a function called `highlightText`.
*   **Access/Querying:** Inside the function, elements are selected using `const elements = document.querySelectorAll('p.info')`.
*   **Manipulation:**
    1.  The `elements` (a Node List) are iterated over using `forEach`.
    2.  The style property is accessed: `element.style`.
    3.  The background color is set: `element.style.backgroundColor = 'yellow'`.

*   **Event Concept:** When a user interacts with an element (like clicking a button), an **event** occurs (like a `click` event). JavaScript functions can be attached to these events to define actions.

### 2. Search/Filtering App
This project demonstrates how to filter a list dynamically based on text input.

*   **Setup:** An input box (ID `search-input`) is used to type a search term. The `onkeyup` event is added to trigger the `filterList` function every time a key is released.
*   **Accessing List Items:** All list items (`<li>`) within the unordered list (ID `item-list`) are queried using the specific CSS selector pattern: `document.querySelectorAll('#item-list li')`.
*   **Accessing Text:** The text content of an element is retrieved using the **`innerText`** property: `item.innerText`.
*   **Filtering Logic:**
    1.  Get the input value: `inputElement.value`.
    2.  For each list item, check if its inner text includes the input value, converting both strings to lowercase for a fair, case-insensitive match (`.toLowerCase().includes()`).
*   **Manipulation (Hiding/Showing):** The element's visibility is controlled using the `style.display` property.
    *   If matched: `item.style.display = 'block'` (keep visible).
    *   If not matched: `item.style.display = 'none'` (hide the element).

## VII. DevTools and DOM Tips (Bonus)

The browser's DevTools are essential for debugging and testing DOM changes.

*   **Elements Tab:** Shows the entire HTML structure (DOM) of the page.
*   **Live Editing:** You can change text nodes, add attributes, hide, delete, or duplicate elements directly within the Elements tab to test manipulations.
*   **The `$0` Shortcut:** In the Console, `$0` refers to the element currently selected/highlighted in the Elements tab. This allows developers to interact with that element programmatically in the console for testing.
*   **Console Manipulation:** Selected elements can be stored as global variables (e.g., `temp1`) directly in the console, allowing immediate manipulation (e.g., `temp1.style.backgroundColor = 'Pink'`).
*   **Copy Selector:** By right-clicking an element in the Elements tab and selecting Copy -> Copy Selector, you can automatically generate the CSS selector string (which can be used with `querySelector` methods). This is useful for testing frameworks that rely on locating elements.
