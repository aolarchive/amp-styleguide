Grunt Compass Boilerplate
=========================

A boilerplate Grunt JS setup for websites using Compass.

Documentation
=============

This is a boilerplate Grunt project intended to provide an ideal starting point for projects that want to use Compass for their `.scss` files and organize them elegantly using [SMACSS](http://smacss.com) principles. This is a nascent project and contributions are welcome.

Custom Tasks
------------

The boilerplate contains, at the moment, one custom task.

### Sass Directory Imports

It's frequently useful to be able to `@import` a whole directory of Sass files, such as modules, in your `.scss` files. The `sass-directory-imports` task can write `@import` statements to designated `.scss` files to make such imports possible.

Development Setup
=================

Install NodeJS
--------------

* Download and install from [nodejs.org](http://nodejs.org), or
* Install via [nvm](https://github.com/creationix/nvm) (node version manager), or
* Install via [Homebrew](http://mxcl.github.io/homebrew/), or
* Install via your package manager of choice.

Install Grunt CLI
-----------------

`npm install -g grunt-cli`

For global installation of node packages, it doesn't matter from what directory you run this command.

Install Ruby
------------

* Install via [rvm](https://github.com/wayneeseguin/rvm), or
* Install via your package manager of choice, or
* If you're using Homebrew, you're on your Mac and you already have Ruby.

Install Compass
---------------

`gem update --system`

`gem install compass`

Install Project-Specific Node Packages
--------------------------------------

In the project directory, you can install all of the dev dependencies specified in package.json by typing

`npm install`

License
=======

Copyright © 2013, AOL Inc. All rights reserved.

https://github.com/aol/grunt-compass-boilerplate/blob/master/LICENSE-BSD
