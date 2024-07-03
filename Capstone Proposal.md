# Project Title

Wiser Mind

## Overview

Wiser Mind is a user-friendly app designed to help you manage your emotions
effectively. It guides you through proven techniques for calming down,
regulating emotions, and handling distress.

### Problem

Dialectical Behavior Therapy (DBT) is a well-researched, evidence-based
psychotherapy that combines mindfulness practices with the principle of
balancing acceptance and change. This approach is often more comfortable for
individuals compared to Cognitive Behavioral Therapy. DBT has proven effective
in treating various conditions, including ADHD, anxiety, and depression. Given
the high prevalence of these conditions, DBT could benefit a large portion of
the population. However, DBT programs are often inaccessible, with costs running
into thousands of dollars and primarily focusing on niche conditions. Wiser Mind
aims to make DBT techniques and exercises accessible to the general public.

### User Profile

Wiser Mind is designed for anyone looking to better manage their emotions and
improve their mental well-being, regardless of their familiarity with DBT. Users
are asked to indicate the intensity of their current emotional state with some
follow up questions to further narrow down appropriate techniques, and are then
presented with a list of suggested DBT skills they can use. The app is designed
to be intuitive and straightforward, ensuring that users can benefit from its
features without needing to read extensive instructions or background
information.

### Features

Users can:

- See a list of a few recommended skills according to the intensity of their
  emotions, with additional filter options for each intensity level
- Access a library of all skills
- View text descriptions guiding them through each technique
- Learn the basics of DBT in a dedicated learning section
- Access emergency contact information and 'crisis survival skills' from a
  button on the homepage

- Create an account and log in to see saved information:
  - Save their favourite skills
  - Access a planning section with:
    - Exercises and coping plans they can fill out and save
    - Save emergency contact information

## Implementation

### Tech Stack

- Client
  - react
  - sass
  - react-router-dom
  - axios
  - dotenv
  - crypto
  - react-modal
- Server
  - express
  - cors
  - dotenv
  - knex
  - mysql2
  - jsonwebtoken
- Database
  - MySQL

### APIs

No external APIs.

### Sitemap

1. Home page
2. Filter question page
3. Library of techniques (shows a filtered selection if accessed via pages 1 >
   2 > 3, Planning nav link, or Favourites nav link; shows all techniques if
   accessed via Library nav link)
4. Technique page
5. Check-in modal
6. Planning exercise page
7. Plans page
8. Register
9. Login

### Mockups

### Data

Users: user information and authentication details Skills: details of each skill
including filtering criteria User data: tracks user-specific data like favorited
techniques, saved exercises, and contact information

Users

- id
- email
- password

Skills

- id
- name
- description
- intensity
- criteria2
- criteria3

User data

- user_data_id
- user_id
- skill_id
- favorited
- emergency_contact
- ...

### Endpoints

**GET /skills**

- Get all techniques
- Filters can be added (/skills?....) to narrow down list

Response:

```
[
    {
        "id": 1,
        "name": "Lorem ipsum",
        "Description": "Lorem ipsum dolor sit amet",
        "intensity": "low",
        "criteria2": true,
        "criteria3": false
    },
    ...
]
```

**GET /skills/:id**

- Get a specific technique

Response:

    {
        "id": 1,
        "name": "Lorem ipsum",
        "Description": "Lorem ipsum dolor sit amet",
        "intensity": "low",
        "criteria2": true,
        "criteria3": false
    }

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**PUT /users/data**

- Logged in user can favorite and unfavorite certain skills, fill out/save/view
  planning exercises, and add emergency contact information

Parameters:

- id: user id
- token: JWT of the logged in user

Response:

```
{
  "user_data_id": 123,
  "user_id": 1,
  "technique_id": 1,
  "favorited": true,
  "emergency_contact": "123-456-7890"
}
```

### Auth

It will use JWT auth stored in local storage.

## Roadmap

- create client

  - react project with styled page components

- create server

  - express project with routing

- create database

  - MySQL database with techniques with several id tags to allow for sorting

- feature: filtering

  - implement filtering feature to show suggested techniques

- feature: check-in modal

  - add check-in modal with slider to redirect to filtered results according to
    intensity

- feature: create account

  - create register page and form
  - create POST endpoint

- feature: login

  - create login page and form
  - create POST endpoint

- feature: favourite techniques

  - create PATCH endpoint

- feature: planning section

  - exercises and plans
  - emergency contact information

- bug fixes

- deploy project

- demo day

## Nice-to-haves

- a calendar to schedule exercises like meditation and self-care and receive
  notifications
- interactive techniques using animations, click-throughs, sounds
