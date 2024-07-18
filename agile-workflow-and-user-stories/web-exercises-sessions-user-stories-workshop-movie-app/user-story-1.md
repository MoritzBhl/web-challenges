# Title

List of classic and modern movies

## Value Proposition

As a film enthusiast <br>
I want to see a list of all movies <br>
so that I can get a quick overview of films <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- app/page title is centered
- vertical scrolling
- show max two films next to each other
- show min two rows of film cards
- film card contains: image, title, rating
- show error message for user when data is not available

## Tasks

- create a new branch "feature/movie-list"
- create header component with a h1
- create movie card component with id, image, title, rating
- create movie list component, fetch data with useSWR and map through the data
- use useSWR isLoading and error handling
