# Code Review

## Code

- Actions can be improved with naming conventions...
- Different components approach can be modified for item lists in both search results and reading list
- Can most likely change change detection strategy to OnPush
- No need to subscribe in component, can async pipe it in template
- Date pipe doesn't work? Custom pipe?

## Lighthouse accessibility check

### Names and labels

    - Failing item the icon only search button (actually all/most icon buttons)
    - Added `aria-label` to icon buttons: search, reading list close, remove from reading list
      - remove from reading list already done
    - Reading List nav, and Want to Read buttons should be OK

    - Needed to check above items on reading list and search results list as Lighthouse didn't run on those elements
    - Logical tab order?
    - The tab order by default should be launch on search button, then reading list
    - After some more research, it appears it might be OK. Tab order is in order of DOM order and top to bottom, left to right
    - Interactive controls are keyboard focusable - check
