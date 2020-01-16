# Standard layout design nerdpack
![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/newrelic/nr1-nerdpack-layout-standard?include_prereleases&sort=semver) [![Snyk](https://snyk.io/test/github/newrelic/nr1-nerdpack-layout-standard/badge.svg)](https://snyk.io/test/github/newrelic/nr1-nerdpack-layout-standard)

This nerdpack serves as a boilerplate for developers building on the New Relic One platform. In order to use this layout for your next project, follow the "Getting started" instructions below, and then replace the dummy content in `nerdlet/index.js` with your own content.

#### What's included?
- [JSX](https://reactjs.org/docs/introducing-jsx.html) to implement the layout.
- CSS to improve the styling and provide some basic UX help.
- Utility classes for things like making an element full width or full height.

## Usage

This Nerdpack is a boilerplate for applications built on New Relic One; the best way to use it is to clone the repo whenever you're ready to start a new project. The idea is that the code that determines the layout has already been written, so you can replace the content inside of each section (toolbar, sidebar, primary-content) with the content that you have in mind for your project.

![screenshot of this project](assets/screenshot.png)

**More boilerplate layout options** 

- [Double sidebar layout](https://github.com/newrelic/nr1-nerdpack-layout-double-sidebar)
- [T-bone layout](https://github.com/newrelic/nr1-nerdpack-layout-t-bone)
- [3 column layout](https://github.com/newrelic/nr1-nerdpack-layout-3-column)
- [4 column layout](https://github.com/newrelic/nr1-nerdpack-layout-4-column)
- [2x2 grid layout](https://github.com/newrelic/nr1-nerdpack-layout-2x2-grid)
- [3x2 grid layout](https://github.com/newrelic/nr1-nerdpack-layout-3x2-grid)
- [4x2 grid layout](https://github.com/newrelic/nr1-nerdpack-layout-4x2-grid)


### Open source license

This project is distributed under the [Apache 2 license](LICENSE).

### What do you need to make this work?
Nothing! Just follow the **Getting started** instructions below.

### Getting started
1. First, ensure that you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [NPM](https://www.npmjs.com/get-npm) installed. If you're unsure whether you have one or both of them installed, run the following commands. If you have them installed these commands will return a version number, if not, the commands won't be recognized:
```bash
git --version
npm -v
```
2. Install the [NR1 CLI](https://one.newrelic.com/launcher/developer-center.launcher) by going to [this link](https://one.newrelic.com/launcher/developer-center.launcher) and following the instructions (5 minutes or less) to install and set up your New Relic development environment.
3. Clone this repository and run the code locally against your New Relic data by running the following command:

```bash
nr1 nerdpack:clone -r https://github.com/newrelic/nr1-nerdpack-layout-standard.git
cd nr1-nerdpack-layout-standard
nr1 nerdpack:serve
```

Visit [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local), navigate to the Nerdpack, and :sparkles:

### Deploying this Nerdpack

Open a command prompt in the nerdpack's directory and run the following commands.

```bash
# If you need to create a new uuid for the account to which you're deploying this Nerdpack, use the following
# nr1 nerdpack:uuid -g [--profile=your_profile_name]
# to see a list of APIkeys / profiles available in your development environment, run nr1 credentials:list
nr1 nerdpack:publish [--profile=your_profile_name]
nr1 nerdpack:deploy [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
nr1 nerdpack:subscribe [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
```

Visit [https://one.newrelic.com](https://one.newrelic.com), navigate to the Nerdpack, and :sparkles:

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

### Community

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

https://discuss.newrelic.com/t/standard-layouts/88605

### Issues / Enhancement Requests

You can submit issues and enhancement requests in the [Issues tab of this repository](../../issues). Please search for and review the existing open issues before submitting a new issue.

### Contributing

Contributions are welcome (and if you submit a Enhancement Request, expect to be invited to contribute it yourself :grin:). Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource+nerdpack-layout-standard@newrelic.com
