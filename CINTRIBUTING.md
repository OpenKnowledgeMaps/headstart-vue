
# Contributing to Open Knowledge Maps
Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.
Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.
As for everything else in the project, the contributions to Open Knowledge Maps are governed by our Code of Conduct.

## Using the issue tracker
The issue tracker is the preferred channel for bug reports, features requests and submitting pull requests. Please do not use the issue tracker for personal support requests. For that, please write an email to info@openknowledgemaps.org.

## Raise an Issue

### Bug reports
A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

##### Guidelines for bug reports:
- Use the GitHub issue search — check if the issue has already been reported.
- Check if the issue has been fixed — try to reproduce it using the latest master or next branch in the repository.
- Isolate the problem — ideally create a reduced test case.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What OS or browser experiences the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Template:

#### Title: Short and descriptive bug report title, including browser/OS
##### Expected behavior
What do you think should happen?
##### Actual behavior
What actually happens?
##### How to reproduce
1. Detailed steps.
2. <url> - a link to the reduced test case
3. Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions.

### Feature requests
Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

#### Short and descriptive feature title

##### Background
The current state, why this new feature is needed.
##### Suggested path
How to tackle this - if possible.

After the Open Knowledge Team will notice the new issue, it will be labled “analyse”, if there should be a discussion about it. Otherwise, or after we agree on it, it will labeled “implementation”.
If you want to solve an issue from the list, please make sure it’s labled “implementation” and not “in review”. If you’re not sure weather to start or not, please ask in the issue page.

## Pull requests
Good pull requests - bug fixes, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.
Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.


### How to contribute
If you never created a pull request before, welcome. [Here](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github
) is a great tutorial on how to send one.
We suggest you start with the issues labled “Good first issue”.
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

4. Make sure to update, or add to the tests when appropriate. Run `npm test` to check that all tests pass after you have made changes. Look for the Testing section in the project's README for more information. Also, make sure your code stands in our coding standards and run - `npm run format` before commiting. Please write clear and relevant commit messages.


5. Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

6. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title - including the issue number and the description. Example - Issue #133 - Making the modal draggable. Write what you changed and other needed information in the comment.

### Some more rules
- If you want to use a new library, please ask for a permission.
- Do not commit changes to files that are irrelevant to your feature or bugfix.
- Be aware that the pull request review process is not immediate, and is generally proportional to the size of the pull request.


### Keeping your Pull Request updated
If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.
To learn more about rebasing in Git, there are a lot of good resources but here's the suggested workflow:

git checkout make-modal-draggable
git pull --rebase upstream master
git push --force-with-lease make-modal-draggable


## Maintainers

### Reviewing changes
Please make sure that the new issue is necessary to the project. Reviewing PRs, approving them, and then maintaining new features can take a lot from our time and energy. So - even when a new feature or bug fix seems “yeah, why not”, please take under consideration the energy it will take.
Please label the new issue as “analyse”, if it’s still in discussion, and - “implementation” when it’s ready to be written. Please add also “good first issue”, “frontend”/“backend” and so on, to help contributors find issues that fit their skills.

After the PR:
- Check that the change is fulfilling it's purpose and works in all browsers/environments.
- Check that the change is within the scope and philosophy of the component.
- Check that the change has the necessary tests.
- Check that the change has any necessary documentation.
- Check that the changes fit our coding style.

If there is anything you don’t like, leave a comment and ask to change. Repeat until everything has been addressed.
Nit picking:
Nitpicking is when a reviewer identifies trivial and unimportant details in a pull request (like styling issue, variables names etc), and asks the author to change them.
Reviewers should feel comfortable giving any feedback they have on a pull request regardless of how trivial it is. Authors should feel equally comfortable passing on feedback that they think is trivial and inconsequential.
Often, reviewers have an opinion about whether the feedback they are about to give is a nitpick or not. While not required, it can be really helpful to identify that feedback as such, for example "nit: a newline after this would be helpful". This helps the author understand your intention.
If you are not sure about something, mention @somebody from the team for help in a comment.
Once everything looks good, add an "Approve" review. Don’t forget to say something nice.
Here is more information about [approving](https://help.github.com/articles/approving-a-pull-request-with-required-reviews/
) and [mergin](https://help.github.com/articles/merging-a-pull-request/
).
