# Task list app
Todo list app helps you keep track of the tasks that you have to do.
There are several things that can be done in this app:
1. To add a new task, type the new task in the textbox at the top and press enter.
2. Once a task is added to the list, it can be marked as completed by clicking on the checkbox. This will mark the task as completed.
3. On hovering on a task, there will be a cross on the right which will allow you to remove the task.
4. Active and completed tasks can be filtered out by clicking on the option given on the bottom.
5. You can drag and drop the items to change their priority.
6. Number of items left can be seen on the bottom left.
7. You can clear completed tasks by clicking on a button given in the right bottom of the tasks area.


## Prerequisites

Before  you start using the application, please make sure to install the following products on your development machine:

* [Node.js](https://nodejs.org/en/download/), (latest version).
* [Git](https://git-scm.com/downloads), (latest version).

## Getting the sources

Get the sources by forking and cloning the task-list repository:

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

## Running app locally for development purposes
###For development:

1) Clone the repository

2) Install dependencies in **`task-list`**:
```shell
npm install
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
