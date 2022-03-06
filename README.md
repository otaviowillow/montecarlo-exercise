
# Architecture
## Scafolding
I went with a nested architecture folder approach instead of a flat one - since I know this is what the company uses.
I've decided to stick with a simple aggregator/elements structure - pages folder for aggregating and components as the elements that pages uses to render a view. 

the context and store folders are where I keep and manipulate the state of my application (I'm using a redux philosophy to state management)

Hooks is where i keep my use hooks, in this app, it's just service manipulators.
### Styling
Using Material UI, as I know that is what Montecarlo uses. I've tried to stick to it as much as possible.

### Routes
The routing is standard architecture from react-router-dom as of v6, with a Layout wraping around routes

## Rules
A few architecture rules and best practices I'm following on this exercise
* Minimizing dependencies - I'm trying to only attach dependencies that are I know are important for the current core functionality of the app that the company is using
* State manager - I'm using Context API  with a redux oriented approach to state refreshing
* No prop drilling - All components should have access to a state, and that state dictates what the component should react to - no higher order component, in other words. Props should only be used to initialize data.

# TODO
Localization: Using something like i8next to localize content
E2E testing: Currently only testing on jest