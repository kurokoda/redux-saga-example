# Installation

    npm install ; npm run start

App will open on http://localhost:3000/

# Redux Architecture

## Overview

I like to keep things simple and consistent. In implementing Redux into the application, I’d like us to have an architecture that is straightforward and predictable while decoupling our views from the rest of the application architecture.

### The render flow I’d like to implement is:

1. React Router determines the appropriate container for the current route

2. The container connects the appropriate display component with the Redux store

3. The display component renders with its required props provided by the container

### The event flow I’d like to implement is:

1. User clicks a button in a display component

2. Button calls a callback in the display component

3. Display component collects the necessary local variables and calls a function provided by its container component.

4. Function dispatches an action and a payload

5. Action is received by a saga

6. Saga retrieves whatever data is necessary and/or performs task by calling services and dispatches 7. whatever further actions are necessary to resolve the action

7. Reducers update the application state

8. View updates due to changes in the props provided by it’s container

## Definitions

### Namespaces

Namespaces loosely match keys in the Redux store. ex: application, product, products, cache, etc.

### Actions

Actions are thin. They aren’t really ‘actions’ as much as they are requests for an action. Thin events consist of only an event type and a payload. They contain no business logic. Even simple business logic should be handled by sagas and services. No Thunks.

Naming conventions:

- Synchronous:

       reduceProductList

       getStringToSnakecase

        {action description [verb]} + {namespace [noun]} + {modifier} (optional)

- Asynchronous:

        initializeApplicationRequest

        fetchProductBySKURequest

        {action description [verb]}  + {namespace[noun]} + {modifier} (optional) + {status} (request|success|error)

### Sagas

Sagas exists to call services, schedule action dispatch and to handle control flow. Sagas are thin. They contain no Business logic beyond single line calls to services or dispatching action creators.

Naming conventions:

    handleInitializeApplicationRequest

    “handle” + {action name}

### Services:

Services are fat. They are where the business logic lives. A service might make an API call, a service may return a formatted string. A service might be four lines of code or it might be a hundred. Either way, a service is a single file. A service does a single thing. Services are standalone functions, not members of namespace objects or ‘classes’. We shouldn’t have ‘utility’ files, ‘helper’ files, or ‘manager’ classes. If you need to do a thing, create a service. Testing these is going to be so cool.

Naming conventions:

    applicationInitializeService

    {namespace [noun]} + {action description [verb]} + “Service”

### Reducers

Reducers are thin. Reducers exist only to merge action payloads appropriately into state.

Naming conventions:

    application

    {namespace [noun]}

### Display Components

Simply put, display components should have minimal (goal: zero) dependencies outside of the display folder. All of a display component’s other dependencies should be provided by their parent container component in the form of props.

### Containers

Containers act as wrappers for our display components. Containers act as mediators, connecting their display component with the rest of the application and providing selectors through which our views can access state values and values provided by services. This allows for minimal dependencies between views and the rest of the application. While display components and actions should not have access to services, Containers should be able to access synchronous services.

Personally, I advocate against the philosophy of one container per ‘page’ or ‘screen’; this leads to excessive prop drilling. Any relatively complex display component should have its own container connecting it to the application state.

## A note on Thunks, fat actions, and custom middleware

There will be times that a thunk might make sense. Sometimes we might want to just call a service from inside an action instead of creating a saga. Maybe the action is a synchronous action. Maybe it sounds cool to have all our analytics actions (for example) handled in one place by a custom middleware. I disagree. I’m a huge fan of consistency in architecture and code style. The problem with implementing any of these solutions alongside of Sagas is that, all of a sudden, you don’t know where the business logic lives. and if you need to add something asynchronous to the action later on, you have to create that saga anyway. Put everything in sagas and services. Just do it. Create the saga now.

## A note on Immutable.js

    I’d prefer that we don’t use Immutable.js because reasons.

(Thanks to Per)
