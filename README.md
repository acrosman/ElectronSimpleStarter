# ElectronSimpleStarter
Like bread starter, this is the very basic starter for an Electron project.

Basically I got frustrated with starters that were insecure or overly opinionated. So I created this one to help me get started more quickly on projects with some basic reminders and examples in place for how to build a secure app, without also imposing a bunch of extra material for interface design and testing.

Interface design systems and testing kits are really important to making your project successful,but my goal with this starter kit is to be unopinionated about those things (in part because to-date I don't have a strong opinion about them).

Suggestions and PRs welcome, although suggesting specific add-ons an libraries will need to show they are the only viable option not one of many.

This is not meant as a project to use for a tutorial, although maybe I'll get there sometime in the future.  This is really meant to put in place the very basic plumbing you need to meed the current security practices for Electron projects.

_You are responsible for the security of your own project._ There is definitly a risk I'll get behind on updates, or simply mis-implement something. Care for your project the way you hope others will care for theirs. As you gain confidence and experience with Electron you should understand and follow all the [guideance from the project's maintainers](https://www.electronjs.org/docs/tutorial/security) (even when their quick start doesn't).

## Using this Template:

1. `mkdir myproject`
1. `cd myproject`
1. `wget https://github.com/acrosman/ElectronSimpleStarter/archive/master.zip`
1. `unzip master.zip .`
1. `npm i`
1. Edit the project.json file to remove my name and repository information, add yours, and then you're off to the races to build your own app.

## Similar Projects
* [Main Electrong Quick Start](https://github.com/electron/electron-quick-start): Tied to lots of tutorials, but tends to be behind on the security best practices.
* [secure-electron-template](https://github.com/reZach/secure-electron-template): This is an excellent template, and the source of inspriation for much of this one, but it's more opintionated than I wanted (and I disagree with some choices).
