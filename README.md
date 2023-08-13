# Task list app
Todo list app helps you keep track of the tasks that you have to do.

## Prerequisites

Before  you start using the application, please make sure to install the following products on your development machine:

* [Node.js](https://nodejs.org/en/download/), (latest version).
* [Git](https://git-scm.com/downloads), (latest version).

## Getting the sources

Get the sources by forking and cloning the refx-booking repository:

1. On Github, you can find task-list repository [here](https://github.com/atharva-musale/task-list.git).
2. Clone **original `task-list` repository** on your local machine.

```shell
# Clone the git repository:
git clone https://github.com/atharva-musale/task-list.git

# Go to the refx-booking directory:
cd task-list
```

## Installing dependencies

```shell
npm install
```

## Building app

You can use following commands to build:

```shell
ng build       # dev build
ng build:prod  # prod build
```

In order to make sure you respect formatting, start the lint command:
```shell
npm run lint
```

## Running app locally for development purposes
###For development:

1) Clone the repository

2) Install dependencies in **`task-list`**:
```shell
yarn install
```

After [installing dependencies](#installing-dependencies), use start script to build and start the watch mode.
```shell
ng serve
```

## Launching test

During the development, you will have to write unit tests and to run them you can launch the following command:

```shell
 ng test
```
