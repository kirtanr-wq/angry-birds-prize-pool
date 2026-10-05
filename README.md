# CodeBounty 2.0 — Prize Pool Page

## Overview

This page displays the **Prize Pool for CodeBounty 2.0** using an Angry Birds-inspired visual concept.

Instead of displaying the prizes using normal cards or boxes, the page uses **eggs and a nest** as the main visual elements.

Each egg represents one winning position and reveals its respective prize.

---

## Prize Distribution

| Position | Prize |
|----------|-------|
| 1st Prize | ₹3,000 |
| 2nd Prize | ₹2,000 |
| 3rd Prize | ₹1,000 |

**Total Prize Pool: ₹6,000**

---

## Concept

The main visual consists of **three eggs placed inside a nest**.

The center egg represents the **1st Prize** and is the tallest and most prominent egg.

The left and right eggs represent the **2nd Prize** and **3rd Prize**.

The layout follows this structure:

```text
                    ₹3,000
                   1ST PRIZE
                       ↑

        ₹2,000                     ₹1,000
       2ND PRIZE                  3RD PRIZE
           ↖                          ↗


             🥚      🥚      🥚
          ═════════════════════
                   NEST
```

---

## Egg Cracking Animation

Each egg uses an egg-cracking animation.

The intended sequence is:

### 1. First Prize

The **center egg** shakes first.

It then:

- shakes slightly
- develops cracks
- breaks open
- reveals ₹3,000
- the prize moves upward
- the prize increases in size

---

### 2. Second Prize

The **left egg** cracks next.

After cracking:

- ₹2,000 appears from inside the egg
- the prize moves diagonally upward and towards the left
- the text scales up slightly
- it settles into its final position

---

### 3. Third Prize

The **right egg** cracks last.

After cracking:

- ₹1,000 appears from inside the egg
- the prize moves diagonally upward and towards the right
- the text becomes larger
- it settles into its final position

---

## Final State

After all three eggs have cracked, the final composition displays:

- ₹3,000 — 1st Prize
- ₹2,000 — 2nd Prize
- ₹1,000 — 3rd Prize
- cracked eggs
- nest
- total prize pool

The prize amounts remain visible after the reveal.

---

## Animation Order

The complete sequence should follow:

```text
Page Loads
    ↓
Nest + Eggs Appear
    ↓
Center Egg Shakes
    ↓
Center Egg Cracks
    ↓
₹3,000 Moves Up
    ↓
Left Egg Shakes
    ↓
Left Egg Cracks
    ↓
₹2,000 Moves Up + Left
    ↓
Right Egg Shakes
    ↓
Right Egg Cracks
    ↓
₹1,000 Moves Up + Right
    ↓
Final Prize Pool Display
```

---

## Design Direction

The page follows the visual style of **CodeBounty 2.0's Angry Birds theme**.

The design should remain:

- playful
- clean
- game-inspired
- colorful
- easy to understand
- responsive
- visually focused on the prizes

The page should avoid unnecessary UI elements such as normal cards, buttons, glassmorphism panels, or excessive text.

The nest, eggs, and prize amounts should remain the main focus.

---

## Prize Typography

Prize amounts should use bold game-style typography inspired by the Angry Birds visual language.

Recommended treatment:

- large white lettering
- thick black outline
- yellow/orange accent
- slight shadow
- strong contrast against the background

Example:

```text
      1ST PRIZE
       ₹3,000
```

The first prize should be slightly larger than the other two.

---

## File Structure

```text
prize-pool/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── nest.png
│   ├── single_egg_cracking_transparent.gif
│   └── prize-board.png
│
└── README.md
```

---

## Files

### `index.html`

Contains the structure of the Prize Pool page.

This includes:

- heading
- prize scene
- eggs
- nest
- prize labels
- total prize pool

---

### `style.css`

Handles:

- page layout
- egg positioning
- nest positioning
- prize typography
- responsive behaviour
- visual styling

---

### `script.js`

Controls the animation sequence.

The JavaScript should control:

- which egg cracks first
- timing between eggs
- prize reveal
- prize movement
- prize scaling
- final state

---

## Important Asset

The egg cracking animation uses:

```text
assets/single_egg_cracking_transparent.gif
```

The GIF has a transparent background so it can be placed directly over the page background and nest.

---

## Responsive Design

The Prize Pool page should work on:

- desktop
- laptop
- tablet
- mobile

On smaller screens:

- the nest should scale down
- eggs should remain correctly positioned inside the nest
- prize labels should not overlap
- ₹3,000 should remain the primary visual focus
- the complete scene should remain visible without horizontal scrolling

---

## Performance

To keep the page smooth:

- use optimized image assets
- use transparent WebP/PNG where possible
- avoid unnecessarily large GIF files
- animate `transform` and `opacity` where possible
- avoid repeatedly modifying layout properties
- preload important animation assets

---

## Future Improvements

The current Prize Pool page can later be enhanced with:

- JavaScript-controlled egg cracking
- shell fragments
- small impact particles
- subtle nest movement
- prize text bounce
- sequential prize reveals
- sound effects
- improved mobile positioning

Animations should remain subtle so that the prize amounts remain the main focus.

---

## Goal

The goal of this page is to present the CodeBounty 2.0 prize distribution in a way that feels like part of the event's **Angry Birds-inspired world**, rather than displaying the prize money using ordinary website cards.

The final experience should be simple:

**Egg cracks → prize emerges → next egg cracks → final prize pool is revealed.**