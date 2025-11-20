# TicketSwap challenger for interns 🚀

Thank you for doing our challenger. The goal would be to code a search for finding events. If you have any questions you can always [contact us](mailto:glenn@ticketswap.com).

## Approach

The challenger is setup in a way for you to showcase your creativity, eye for detail, UX skills and overall knowledge of HTML, CSS and TypeScript. Inside the challenge you'll find your goals set. There is a mocked database available inside the `/src/lib` folder. Feel free to make changes or add new data where needed. In general feel free to use other tools when needed if you have good reasons for this.

We've timeboxed this challenge for roughly _2_ hours. It's completely up to you how far you want to take it, but keep the timebox in mind. The challenge starts when you're installing the project.

## Assignment

### The Challenger has the following goals:

- Implement a search feature to find events. You can start in `src/app/components/Search/index.tsx`. Inside `src/app/components/Events/index.tsx` you see how you can fetch events.
- There are some quirks in the challenger, from unused imports to some other smaller easter eggs. If you can find them, you can fix them 😉

#### Optional

- Make it possible to filter on locations. Inside `src/app/components/Locations/index.tsx` you can see how you can fetch locations. We didn't provide an endpoint in our mock data (see `src/lib/mock-db.ts` & `src/lib/mock-data.ts`) so that is something you need to figure out yourself.

## Setup

First of all, you need to setup your local environment.
If you don't have [node/npm](https://nodejs.org/en/) installed yet, be sure to do so.

```shell script
> git clone git@github.com:TicketSwap/challenger-intern.git
> cd challenger-intern
> npm i
> npm run dev
```

The server will start at [localhost:3000](http://localhost:3000), where you can find everything you need to start with the challenger.

## Handing in the assessment

When you're finished you can send it to us in reply of the mail you got with this assessment or share the repo with [@RobVermeer](https://github.com/robvermeer) & [@glenngijsberts](https://github.com/glenngijsberts).

### Good luck

And again if you have any questions, [let us know](mailto:glenn@ticketswap.com)! 🤩
