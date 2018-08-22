
# Contributing to Open Knowledge Maps
First of all, thank you for your willingness to contribute to this project!
Here you will find a set of guidelines for contributing to Open Knowledge Maps.
Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.
As for everything else in the project, the contributions to Open Knowledge Maps are governed by our [Code of Conduct](https://openknowledgemaps.org/community-guidelines).

## Using the issue tracker
The issue tracker is the preferred channel for bug reports, features requests and submitting pull requests. Please do not use the issue tracker for personal support requests. For that, please write an email to info@openknowledgemaps.org.

## Raise an Issue

### Bug reports
A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

##### Guidelines for bug reports:
- Use the GitHub issue search — check if the issue has already been reported.
- Check if the issue has been fixed.
- Use our [template](https://github.com/OpenKnowledgeMaps/headstart-vue-example/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) to write a bug report.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What OS or browser experiences the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

### Feature requests
Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's maintainers of the merits of this feature. Please provide as much detail and context as possible.
Use our [template](https://github.com/OpenKnowledgeMaps/headstart-vue-example/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) to write a feature request.

#### Short and descriptive feature title

##### Background
The current state, why this new feature is needed.

#### Use case
As a (role) I want to (functionality / capability) so that (benefit).
Example: As a PHD student I want to add papers to my Zotero library so that I can keep track of my references found on Open Knowledge Maps.

##### Suggested solution
How to tackle this - if possible.

After the Open Knowledge Maps Team will notice the new issue, it will be labeled “discussion”, if additional information or exchange is needed. If the feature request is picked up, it will be labeled “implementation”.
If you want to solve an issue from the list, please make sure it’s labeled “implementation” and not “in review”. If you’re not sure weather to start or not, please ask in the issue page.


## Pull requests
Good pull requests - bug fixes, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.
Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.


### How to contribute
If you never created a pull request before, welcome. [Here](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github
) is a great tutorial on how to send one.
We suggest you start with the issues labeled “Good first issue”.
Here is how you do it, in general:

1. Fork the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/<repo-name>
# Navigate to the newly cloned directory
cd <repo-name>
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/OpenKnowledgeMaps/<repo-name>
```
To run the app on your local computer, please follow the steps in the README file.

2. If you cloned a while ago, get the latest changes from upstream:
```bash
git checkout master
git pull upstream master
```

3. Create a new topic branch with a descriptive name to contain your feature, change, or fix. Example - make-modal-draggable.
```bash
git checkout -b <topic-branch-name>
```

4. Make sure to update, or add to the tests when appropriate. Run `npm test` to check that all tests pass after you have made changes. Look for the Testing section in the project's README for more information.
Make sure the change is performing well in all browsers/screens/environments and has the necessary documentation, if needed. Also, make sure your code stands in our coding standards and run - `npm run format` before commiting. Please write clear and relevant commit messages.


5. Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

6. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/), and use [this template](https://github.com/OpenKnowledgeMaps/headstart-vue/blob/dev/docs/pull_request_template.md) to make the PR.

### Some more rules
- If you want to use a new library, please ask for a permission.
- Do not commit changes to files that are irrelevant to your feature or bugfix.
- Be aware that the pull request review process is not immediate, and is generally proportional to the size of the pull request.


### Keeping your Pull Request (PR) updated
If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.
To learn more about rebasing in Git, there are a lot of good resources but here's the suggested workflow:

git checkout make-modal-draggable
git pull --rebase upstream master
git push --force-with-lease make-modal-draggable


## Maintainers

### Reviewing changes
Please make sure that the new issue is necessary to the project. Reviewing PRs, approving them, and then maintaining new features can take a lot from our time and energy. So - even when a new feature or bug fix seems “yeah, why not”, please take under consideration the energy it will take.
Please label the new issue as “discussion”, if it’s still in discussion, and - “implementation” when it’s ready to be written. Please add also “good first issue”, “frontend”/“backend” and so on, to help contributors find issues that fit their skills.

After the PR:
- Check that the change is fulfilling its purpose and works in all browsers/environments.
- Check that the change is performing well in all browsers/environments.
- Check that the change is in line with the design goals of Head Start.
- Check that the change has the necessary tests.
- Check that the change has any necessary documentation.
- Check that the changes fit our coding style.
- Check how the PR affects the different stakeholders of Headstart.

If there is anything you don’t like, leave a comment and ask to change. Repeat until everything has been addressed.
Nit picking:
Nitpicking is when a reviewer identifies trivial and unimportant details in a pull request (like code styling issue, variables names etc), and asks the author to change them.
Reviewers should feel comfortable giving any feedback they have on a pull request regardless of how trivial it is. Authors should feel equally comfortable passing on feedback that they think is trivial and inconsequential.
Often, reviewers have an opinion about whether the feedback they are about to give is a nitpick or not. While not required, it can be really helpful to identify that feedback as such, for example "nit: a newline after this would be helpful". This helps the author understand your intention.
If you are not sure about something, mention @somebody from the team for help in a comment.
Once everything looks good, add an "Approve" review. Don’t forget to say something nice.
Here is more information about [approving](https://help.github.com/articles/approving-a-pull-request-with-required-reviews/
) and [mergin](https://help.github.com/articles/merging-a-pull-request/
).
