# IDEO Nomad Hackathon - 12.17.16

## Pre-hackathon Setup

Before the hackathon begins, you'll want to take the following steps:

### Install IPFS 

To use Nomad, you will need IPFS installed on your machine. 

You can install the most up to date IPFS build [install here](https://ipfs.io/).

### Install Node.js

Nomad is currently only written in Javascript and the hackathon will be Node.js-based. 

You'll also need the latest stable NodeJS build [install here](https://nodejs.org/en/).

#### Install NPM

The link above will install `npm` (the default Node Package Manager), but if you have
an over version of Node, you may need to make sure `npm` is installed globally. To check
if you have it, run this command:

```sh
> npm -v
```

If you have `npm` installed, it will show you the installed version. Otherwise you'll need
to install it. Here's a [link to install](http://blog.npmjs.org/post/85484771375/how-to-install-npm).

### Clone and Install the Starter Repo

To familiarize you with Nomad, we'll be doing a live walkthrough to build a Nomad node together. 

The code we'll build upon is in this starter repo. So feel free to clone it locally and 
follow along with us during the live-demo.

#### Clone the Starter Repo

The code below will install this starter repo into a folder named `nomad-hackathon`:

```sh
// over ssh...
> git clone git@github.com:ideo/nomad-hackathon-121716.git nomad-hackathon

// or over https...
> git clone https://github.com/ideo/nomad-hackathon-121716.git nomad-hackathon
```

#### Install the Dependencies

The code below will install

```sh
// cd into the starter repo 
> cd nomad-hackathon

// install the deps with npm
> npm install
```

With the above steps completed, you'll be in good shape to follow along!
