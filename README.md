# Monte Carlo Test
Hello! in this test I'm using the "Video Games Sales dataset", as suggested in the test PDF

You can see the results at:
https://montecarlo-op.netlify.app/
## Available scripts
#### `yarn`
To install the app

#### `yarn start`
To run a local build.

#### `yarn test`
To run jest tests.

#### `yarn build`
To run a production build

# Known Issues
* When the user clicks to visualize a specific console data, and then clicks again to vizualize the "All Platforms" set of data, there's a perfomance drop with a page freeze. This is due to the sheer size of the JSON file the app is using.
* The same when pressing back from a Game Details page
* Clicking on the Pie Chart will sometimes take the user to the top of the screen
* When the vertical bars are very low height, it's hard / impossible to read numbers
* The **Top 15 Games by Platform** component is not scaling well in responsive views

# Architecture
![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--ZU7TrpjM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ck4cgie4y8mdr7iefxtt.png)

The fundamental idea here is to have an event driven application, with components that are agnostic to other components.
The app fires an event change and components react according to that change, without the need for drilling or component pairing of any kind - the only thing a component listens to is the state, and whenever they need to change something in it, they dispatch an action to do so.

In other words, I'm using a redux implementation (through ContextAPI) with an event driven philosophy.

Components, hooks and handlers are single purpose, functional and immutable - even the service hooks, which are the most complex part of the application (since they basically function like the back end in this application), I've tried to keep the side effects to just data manipulation, and even that data to be immutable and functional

## Scafolding
I went with a nested architecture folder approach instead of a flat one - since I know this is what the company uses. It's been a while since I used it though (flat structure gang here for the past few years), so hopefully it all makes sense.

I've decided to stick with a simple aggregator/elements structure - pages folder for aggregating and components as the elements that pages uses to render a view. 

The context and store folders are where I keep and manipulate the state of my application (I'm using a redux philosophy to state management)

Hooks is where i keep my use hooks, in this app, it's just service manipulators that function just like the back end.
### Styling
Using Material UI, as I know that is what Monte Carlo uses (I haven't used it in **many** years). I've tried to stick to it as much as possible, to the point where I don't know if it was helpful since it has done a lot of the CSS work for me. Please let me know if you'd like to see more CSS from my side, I can arrange that very quickly!

### Routes
The routing is standard architecture from react-router-dom as of v6, with a Layout wraping around routes

### UX / UI
I focused my time more on the UX, trying to follow the request of the PDF - I left the UI more standardized from Material defaults.

## Rules
A few architecture rules and best practices I'm following on this exercise
* Minimizing dependencies - I'm trying to only attach dependencies that are I know are important for the current core functionality of the app that the company is using
* State manager - I'm using Context API  with a redux oriented approach to state refreshing
* No prop drilling - All components should have access to a state, and that state dictates what the component should react to - no higher order component, in other words. Props should only be used to initialize data.
* No ternary on render - If a ternary is needed, just start a dependent component using one of the strenghts of the folder nested approach to folder architecture
* Simple linting and prettifying
# TODO / Improvements
### This needs a proper Back-end!
For the exercise, I made the conscious decision of handling the data manipulation on the front end, trying to follow through with "Data can be stored and read from a simple JSON file" part of the instruction. In hindsight I should've just built a simple back end (even though I understand that the role is fully front end), since having it there made my life difficult with all the perfomance bottlenecks it generated (my VS Code was going nuts)

### Consider moving away from Recharts or at least, improving the current graphs
I've decided to go with Recharts since I thought it was the closest to the one I use on my day to day (highcharts, paid version) on Honeywell, but as with every chart library, there's a steep learning curve to the library. It was by far the biggest time sink in the test and I'm still unhappy with the results

## What would I do with a day or two 
* Bug fixing, naturally.
* More charts! More! 
* I'd like to insert comparisons between publishers (see how they fare against each other), 
* Change the min-max years... 
* Compare how did games fare on specific geolocations (NA, SA, Asia, etc). 
* Also, allow for multiple console selection on the pie chart.

Let's start a business comparing videogame sales, what do you say?

## Production path
* Proper services system
* Localization: Using something like i8next to localize content
* Improve test coverage (actually write)
* Test against sonarqube / run perfomance tests on lighthouse