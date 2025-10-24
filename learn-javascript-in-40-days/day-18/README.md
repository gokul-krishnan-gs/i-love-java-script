
# Day 18

*   Create and insert elements.
*   Modify content and remove elements.
*   Read, write, and remove attributes.
*   Traverse through the DOM hierarchy (parent to child, child to sibling, etc.).
*   Manipulate styles and classes.
*   Control element visibility.

The learning methodology emphasizes practical application, with projects accompanying theory to ensure concepts are cemented.

## 2. Creating and Inserting Elements

### Creating Elements Dynamically
When a web page loads, elements are statically placed, and the DOM is created for them. To create an element dynamically (after the page load), the `document.createElement()` API is used.

*   **API:** `document.createElement(tagName)`.
*   **Result:** It creates an element type node (e.g., passing `'p'` creates an HTML paragraph element).
*   **Adding Content:** Content can be added using properties like `innerText`.

### Inserting Elements

Once an element is created, it must be attached to the DOM tree, typically by appending it to a parent node (like the `<body>` tag).

*   **Appending to the End:** Use `parentNode.appendChild(childNode)` (e.g., `document.body.appendChild(pElm)`). This always adds the element at the end of the parent.
*   **Inserting Before:** To insert an element *before* an existing reference element, use the `insertBefore` method.
    *   **Syntax:** `parentNode.insertBefore(newNode, referenceNode)`.
    *   **Crucial Rule:** The `insertBefore` method **must be invoked on the reference element's parent**. Invoking it on the `document` will result in an error if the reference element is not a direct child of the document.
*   **Inserting to the End using `insertBefore`:** If you pass `null` as the reference node, the new element is added to the end of the parent (similar to `appendChild`).
*   **Simulating `insertAfter`:** There is no native `insertAfter` method. It can be simulated using `insertBefore` by making the reference node the current element's next sibling (`element.nextElementSibling`).

## 3. Modifying Content

There are three primary ways to read and modify element content: `innerText`, `innerHTML`, and `textContent`.

| Property | Functionality | HTML Markup Handling | CSS Visibility Check | Security Consideration |
| :--- | :--- | :--- | :--- | :--- |
| **`innerText`** | Reads and updates content. | Treats markup as a plain string (it is not rendered as HTML). | **Considers visibility** (if `display: none`, it returns nothing). | Safe (relative to `innerHTML`). |
| **`innerHTML`** | Reads and updates content; allows complete HTML markup. | Renders the string as HTML (e.g., a `<u>` tag will result in underlined text). | Does not apply. | **High Risk:** Prone to **Cross-Site Scripting (XSS) attacks** if user input is rendered directly. Mitigation involves sanitizing input using libraries like **DOM Purify**. |
| **`textContent`** | Reads and updates content. | Treats markup as a plain string (similar to `innerText`). | **Ignores visibility** (if `display: none`, it still returns the content). | Safe. |

When setting a value, if the property appears on the left side of the assignment operator (`=`), you are setting the value; if it appears on the right, you are fetching the value.

## 4. Removing and Replacing Elements

Elements can be removed based on their relationship to a parent, or directly.

*   **`removeChild`:** A method called on the **parent** element, requiring the specific child node to be passed as an argument (e.g., `list.removeChild(itemToRemove)`).
*   **`remove`:** A method called directly on the **element** itself (e.g., `divElement.remove()`).

### Removing All Children

Three primary ways to remove all child elements from a parent:

1.  Set `innerText` or `textContent` to an empty string (`""`).
2.  Use the newer `replaceChildren()` method without passing any arguments.
3.  **`replaceChildren(node1, node2, ...)`:** This method replaces all existing children with the new DOM nodes passed as comma-separated parameters.

## 5. Reading, Writing, and Removing Attributes

Attributes provide properties for HTML tags (e.g., `src` or `alt` on an image tag).

| Action | API | Example Usage |
| :--- | :--- | :--- |
| **Read Attribute Value** | `element.getAttribute(attributeName)`. | `imageLm.getAttribute('src')`. |
| **Set/Write Attribute Value** | `element.setAttribute(attributeName, newValue)`. | `imageLm.setAttribute('src', 'banner.png')`. |
| **Remove Attribute** | `element.removeAttribute(attributeName)`. | `imageLm.removeAttribute('height')`. |
| **Check for Attribute** | `element.hasAttribute(attributeName)`. | `imageLm.hasAttribute('src')`. |

## 6. Traversing and Navigating DOM

DOM traversing means navigating the hierarchical structure of the DOM tree programmatically.

### Node vs. Element Distinction
This distinction is fundamental to DOM traversing methods.
*   **Node:** Everything that gets attached to the DOM, including HTML elements, text nodes (like newlines/spaces), and comment nodes.
*   **Element:** Represents only the HTML element tags.

### Traversing Upwards (Parent)
When called on an element, both methods typically return the parent element:

*   `parentElement`.
*   `parentNode`.
*   *Recurrence:* These methods can be chained (`element.parentElement.parentElement`) to traverse up to grandparents and higher.

### Traversing Downwards (Children)

| Method | Return Type | Content Returned | Usage Note |
| :--- | :--- | :--- | :--- |
| **`children`** | **HTML Collection** (array-like). | **Only Element Nodes** (HTML tags). | Used most often when dealing only with HTML tags. |
| **`childNodes`** | **Node List** (supports `forEach`). | **All Nodes** (element, text, comment). | Used when needed to query text or comment nodes. |
| **`firstElementChild` / `lastElementChild`** | Returns the first/last **Element**. | Ignores text nodes. | Prioritized for accessing first/last HTML element. |
| **`firstChild` / `lastChild`** | Returns the first/last **Node**. | Can return a text node (e.g., an HTML newline `\n`). | Used for raw node access. |

### Traversing Sideways (Siblings)

| Method | Content Returned | Example Use |
| :--- | :--- | :--- |
| **`nextElementSibling` / `previousElementSibling`** | Returns the next/previous **Element**. | Ignores intermediate text nodes (like newlines). |
| **`nextSibling` / `previousSibling`** | Returns the next/previous **Node**. | Can return text nodes. |

## 7. Manipulating Styles and Classes

### Manipulating Styles

Styles can be changed dynamically via the `style` property.

*   **Setting Style:** `element.style.propertyName = 'value'`.
*   **Camel Case Requirement:** Multi-word CSS properties written with hyphens (e.g., `background-color`) must be converted to **camel case** in JavaScript (e.g., `backgroundColor`) when accessed via dot notation.

### Manipulating Classes

Writing styles in CSS files and managing them via classes is generally better practice than inline styling for reusability.

#### `className` Property
*   Reads and sets the class names as a single string.
*   **Limitation:** When setting, it **replaces all existing classes** with the new string.

#### `classList` Property
*   Returns a **DOM Token List** (an array-like data structure) of all classes, allowing for flexible manipulation.
*   **Methods for Class Manipulation:**
    *   `add(className)`: Adds one or more classes.
    *   `remove(className)`: Removes a specific class.
    *   `replace(oldClass, newClass)`: Replaces a specified class without disturbing others.
    *   `contains(className)`: Checks if a class is present (returns boolean `true`/`false`).
    *   `toggle(className)`: Adds the class if it's absent, and removes it if it's present. This simplifies conditional code logic.

## 8. Controlling Visibility

Visibility can be controlled using CSS properties dynamically.

| Property | Value | Effect | Space Occupied? |
| :--- | :--- | :--- | :--- |
| **`display`** | `none` | Element is hidden. | **No.** Acts as if the element was never there. |
| **`display`** | `block` (or other display types) | Element is shown. | Yes. |
| **`visibility`** | `hidden` | Element is hidden. | **Yes.** The element still takes up its original space. |
| **`opacity`** | `0` to `1` | Controls transparency (0 is fully hidden, 1 is fully visible, 0.5 is transparent). | Yes. |

## 9. Projects and Tasks

The session includes building two projects and assigned tasks.

### Project 1: Toggle Paragraph
This project uses a button to show/hide a paragraph.
*   **Methodology:** Access the paragraph element, and use `element.classList.toggle('hidden')`. The `.hidden` class in CSS is defined as `display: none`. This leverages `toggle` to add/remove the class on each click, controlling visibility.

### Project 2: Task Manager (To-Do List)
This project focuses on creating, listing, deleting, and completing tasks dynamically.

**Adding a Task:**
1.  Grab the task input value (`taskInput.value`).
2.  Validate that the input is not empty (after trimming whitespace).
3.  Create a new `<li>` element using `document.createElement('li')`.
4.  Set the inner text of the `<li>` to the task value.
5.  Append the new `<li>` to the parent `<ul>` using `taskList.appendChild(li)`.
6.  Clear the input field by setting `taskInput.value = ""`.

**Adding Delete Functionality:**
1.  A delete button is created and appended to the new `<li>`.
2.  The click handler for the delete button uses an anonymous function assigned to `deleteButton.onclick`.
3.  The logic within the handler calls `li.remove()` to remove the entire list item from the DOM.

**Adding Complete Functionality:**
1.  A complete button (e.g., check emoji) is created and appended to the `<li>`.
2.  The click handler uses `li.classList.toggle('completed')`.
3.  The CSS class `.completed` applies `text-decoration: line-through` to mark the task as done.
