# Getting Started at App Academy

## Learning at AppAcademy

### How to Learn at AppAcademy

- Active learning vs passive learning

- Desriable dificulty => effetive practice should target skill as close as possible

- Use spaced repetition to learn

- Multiple sessions over long period of time

### Manage dificulty

- If too easy:

    1. Focus on code style, conventions and documentation
    2. Explore multiple approaches
    3. Teach others

- If too hard:
    1. Acknowledge challenge
    2. Actively engage with lesson
    3. Learn w/ others
    4. Reflect on what you learnt

### Documenting expectations

I already have some software development skills and knowledge, so much of this was not too new to me.

But I do know that there are some upcoming topics that I have had difficulty with in the past. So I need to make sure that I put in the effort to learn these topics and fill in my knowledge gaps.

There are also more topics that are new to me, and I hope that I would be able to learn them effectively.

## Intro to Problem Solving

### How to ask great questions

- 15min rule: if stuck for >15min w/ 0 progress, you are REQUIRED to ask qn

- Good qn: 1) specific, 2) clear and consise, 3) shows work you put in

- Try out code in REPL

- Google qn

- Check docs

### Secret to solving any problem

- Polya's Problem solving Framework:

1) Understand Problem
2) Make a plan
3) Carry out plan
4) Look back and improve solution

# Javascript Fundamentals

## Data Types

### The Number Data Type

- encompases all no. (-12, 43, 3.19273, 7.0)

### Boolean Data Type

- two possibilites: true/false
- logical operations: and (&&), or (||), not (!)
- order of operations: ! -> && -> ||
- De Moragn's Law:
    !(A || B) == !A && !B
    !(A && B) == !A || !B

### Variables

- declare using let

- Initialise:

    `let bootcamp = "App Academy";`
- Declare
    `let age;`
- Assigning
    `age = 30;`

### String Data Type

- get index of given char using indexOf()

## Intro to Functions
### Functions

- set of code that runs when called
- declaration => fn is defined and saved to be used later
- invoking => calling a fn
- Fn def consits of `function` keyword:
    - name of function
    - list of parameters
    - code to be run
- Fn naming:
    - use camelCase

### Parameters and Arguments

- If extra arguments => additional ones ignored
- If less arguments => get error

## Control Flow

### Conditionals

- two parts => test condtion and expression

### Mutually exclusive conditions

- rule of thumb to have mutually exclusive conditionals in code (like a coin flip)
- DRY (Don't Repeat Yourself)

### Basic Loops

- two fundamental types: while and for

### Arrays

- can mix data types

- find element using indexOf()

- concat array using Array.concat()

- Array.push() => add element at end, Array.pop() => remove element at end

- Empty array: `let array = []`

# Setting Up Your Environment I

### Basic Terminal Navigation

- impt commands: pwd, ls, cd

### Moving around directories

- go to root: `cd /`

- commands have flags => can make them do different things

- arguments: specify which files/folders command should operate on

### Working with Files and directories

mkdir => create directory

mv => move files

`mv filename1 filename2`

cp => same syntax as mv, but copies files instead

rm => removes file, use `rm -i` for confirmation; rmdir => remove directories

*, ? => wildcards; * for zero or more matches, ? for one char

no trash bin for shell


## Intro to Source Control

### Source Control with Github

- create new branch: `git checkout -b "branchName"`
- go back to old branch: `git checkout "branchName"`

# HTML & CSS Fundamentals

## CSS Basics

- selectors can be the following basic types: type,class, ID, universal, attribute
- compund class (ie more than one class) => have space between classes in HTML
- CSS specificity: IDs, -> class -> tags (ie, rules for h1 and p has > specificity than just p) -> which comes first in CSS file

# Intermediate HTML & CSS
## HTML Forms

- `form elemnet`: action => where form is submitted; method=> get or post, most often post

- no closing tag for `input

- `fieldset` => group elements

- `legend` => gives title or caption to fieldset

## Intermediate CSS

### Box Model

- for elements w/ display block:
    - fill available space
    - each box appears on new line
    - css width and height
    - padding, margin and border pushes away other elements

- for elements w/ display inline:
    - each box appears next to each other in a single line until space is filled up
    - css width and height don't apply
    - padding, margin and border aplly, but doesn't push away other elements

- standard box model => width and height are for content
- box-sizing: if border-box, width and height include padding, border & margin; if content-box, width and height is only for content

- inline-block => allows block elements to be laid side-by-side

- padding property:
    - `padding: 3em` => all four sides
    - `padding: 20% 5%` => top&bottom, left&right
    - `padding: 15px 10px 20px` => top, left&right, bottom
    - `padding: 0 10px 2em 1em` => top, right, bottom, left (clockwise)

- elements han inherit attributes from parents

- border => border-width, border-style, border-color

- margin (properties same as padding)

- `margin: auto` => horizontally center element

### CSS Positioning

- five possible values: static, relative, absolute, fixed, sticky
- all except sticky used together with `top`, `right`, `bottom`, `left`
- sticky needs at least one to be set

#### Static

- default postion; will appear according to page flow
- not used much; unless used for overriding

#### Relative

- remains in original postion, amd can be offset using properties
- overlapping elements order can be set by z-index

#### Absolute

- removed from page flow
- positioned in relation to closest positioned ansector => need to container position set to relative
- if container is not set to relative, element will be positioned w.r.t document

#### Fixed

- removed from page flow
- positioned w.r.t html doc
- will be in same position as screen scrolls

#### Sticky

- remains in original position in page flow
- positioned w.r.t closest block-level ansector and any scrolling ansector
- starts w/ relative position, once past it's position, it will stop scrolling
- useful for headers in scrollable lists

### CSS Transtions

-provide a way to control animation speed

- has these components: `transition-property`, `transition-duration`, `transition-delay`

### CSS Animations

- like transitions, but with their own properties
- can move element w/o hovering over it or clicking it

# Setting Up Your Environment II

## Computer Analysis

Operating System Version:

    Status: Recomended

Processor:

    Status: Recomneded

Memory/RAM:

    Status: Recomended

Storage Free:

    Status: Recommeded

Monitor:

    Status: Recomended

Webcam:

    Status: Recomended

Speakers / Microphone:

    Status: Recomdeded

Internet Bandwidth:

    Status: Recomended


### Git Branching

- git merge branchname => will merge branchName onto current branch

- git rebase branchName => will rebase current branch onto branchName

- git checkout commitName => will attach HEAD to commit

- git branch -f branchName HEAD~i => moves by force branchName i parents behind HEAD

- git reset vs git revert => reset moves branch ref backwards (local); revert (remote); creates new commit that undoes changes in pervious commit

git reset HEAD~1; git revert HEAD

git cherry-pick commit1 commit2 .. => picks and coses the commits yo copy to head

use rebase with -i to open interative command to pick commits

eg: git rebase -i HEAD~4

git tag v1 C1 => tags C1 as v1

if commit is not added as argument, tag is added to where HEAD is

git describe < ref > => can resolve anything into a commit

# Intermediate Javascript

## Getting Started with Node.js

- Node.js released in 2009 to execute js in portable env

- to run REPL, just type `node` in command line

- to run js files: `node < filename >`

## HTML/CSS Unit tests

- uses cypress framework
- install with `npm install`
