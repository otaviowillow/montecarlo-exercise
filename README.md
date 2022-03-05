
# Architecture
## Scafolding
I went with a nested architecture folder approach instead of a flat one - since I know this is what the company uses.

I've decided to stick with a simple aggregator/elements structure - pages folder for aggregating and initiating the API requests and components as the elements that pages uses to render a view. 
context and store are where I keep and manipulate the state of my application. 
Hooks is where i keep my use hooks, mainly helpers and service manipulators.
### Styling
Using Material UI, as I know that is what Montecarlo uses. I've tried to stick to it as much as possible.

### Routes
The routing is standard architecture from react-router-dom as of v6 (link to source documentation), with a Layout wraping around routes - no more <Switch> component!

## Rules
A few architecture rules and best practices I'm following on this exercise
* Minimizing dependencies - I'm trying to only attach dependencies that are I know are important for the current core functionality of the app that the company is using
* State manager - I'm using React itself with a redux oriented approach to state refreshing, using React's context provider
* No prop drilling - All components should have access to a state, and that state dictates what the component should react to - no higher order component, in other words