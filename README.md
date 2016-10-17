# Blogger Partials

#### A Blogger Template System built for the modern web (where possible)

**Example**
[http://blogger-partials.blogspot.co.uk/](http://blogger-partials.blogspot.co.uk/)

## Why?

Blogger will currently only accept a single file in XML format, which provides developers with 0 context and a boat load of gross code.
I invite anyone reading this to download a template from any of the "Free Blogger Template" websites and try to understand it.
It's gross.

I am no expert with blogger and have actually only put a few hours into the actual templating.
I've never written a blog post ever. It was a challenge, and I wanted to give it a try! :)

**Features**

* Gulp
    * *Partials* - Compartmentalize your blogger template
    * *Automatic building* when files change
* *NPM* and *Bower* for package management
* *Bootstrap 4*
* *ES6 Enabled*
* *SCSS and Javascript minifying*

## Getting Started

1. Clone/Download version 0.1 of this project: [Download](https://github.com/Inlustra/blogger-partials/archive/0.1.zip)
1. Install NodeJS and NPM: [Link](https://nodejs.org/en/download/package-manager/)
2. Install the project pre-requisites
    * Install the gulp and bower by running: `npm install -g gulp-cli bower`
    * Install the remaining node modules: `npm install` 
    * Install all of the front-end dependencies (Like bootstrap): `bower install` 
3. Start your project by running `gulp`!
    * You can start editing at this point.
4. Upload the `blogger-partials.xml` file to your Blogger.

### Notes

* Every time you make a change with gulp running, the template will be rebuilt.
if your pc is slow (This is quite a laborious task), just run `gulp build` 
rather than `gulp` each time that your want to generate the template
* You can add SCSS and JS files wherever you like inside the src folder, they will be pulled in correctly.
* To add more html files, you can use the `@htmlinclude('components/<Your File and Folder Here>')` snippet.