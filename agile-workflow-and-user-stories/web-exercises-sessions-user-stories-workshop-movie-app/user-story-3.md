# Title

Watchlist and Navbar

## Value Proposition

As a film enthusiast <br>
I want to add films to a watch list <br>
so that I can save my favorite movies to watch them later <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- add a bottom-fixed navbar with "home" and "watchlist", shown on movie list page and watchlist page
- add "add to watchlist" button on details page
- create a watchlist page:
  - add "watchlist" title
  - show only added films
  - show max two films per row
  - vertical scrolling
- show message when watchlist is empty

## Tasks

- create new branch "feature/watchlist-and-navbar"
- create a navbar component with next/link components to the homepage and watchlist page
- create "add to watchlist" button component
  - create a new database for watchlist
  - write a onClick-function which adds films to watchlist database
- create watchlist page which displays all to-watchlist-added films
- show message when watchlist is empty
