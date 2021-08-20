# :white_check_mark: autoreview

GitHub Action to automate pull request reviews

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Overview

[Usage](#usage)  
[Built With](#built-with)  
[Contributing](CONTRIBUTING.md)

## Usage

Do you work alone? Do you request reviews from your admin account? Is switching
between accounts becoming a hassle? Geared towards lone developers, this action
speeds up your pull request workflow by allowing you to automate reviews.

```yaml
name: Automate PR Reviews
on:
  pull_request:
    types: [review_requested]
jobs:
  automate:
    runs-on: ubuntu-latest
    steps:
      - uses: @flex-development/autoreview@v1.0.0
        with:
          body: lgtm 👍🏾
          reviewers:  flexdevelopment
          senders: unicornware
```

### Options

```typescript
/**
 * Action options.
 *
 * @see https://docs.github.com/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
export interface Inputs {
  /**
   * Body text of pull request review.
   *
   * **Required** if:
   *
   * - `event === ReviewEvent.COMMENT`
   * - `event === ReviewEvent.REQUEST_CHANGES`
   */
  body?: string

  /**
   * Automated review action to perform.
   *
   * @default ReviewEvent.APPROVE
   */
  event?: ReviewEvent

  /**
   * List of user logins and/or team slugs to automate reviews on behalf of;
   * e.g: `'flexdevelopment,team-autoreview'`.
   *
   * If `undefined` or an empty string, a warning will be logged and the action
   * will exit without failing.
   */
  reviewers?: string

  /**
   * List of users allowed to receive automated reviews; e.g: `'unicornware'`.
   *
   * If an empty string, a warning will be logged and the action will exit
   * without failing.
   */
  senders?: string

  /**
   * GitHub [Personal Access Token][1] with repository access.
   *
   * [1]: https://github.com/settings/tokens/new
   */
  token: string
}
```

## Built With

- [`@actions/core`][1] - Core GitHub Actions functions
- [`@actions/github`][2] - GitHub Actions [Octokit][3] client

[1]: https://github.com/actions/toolkit/tree/master/packages/core
[2]: https://github.com/actions/toolkit/tree/master/packages/github
[3]: https://octokit.github.io/rest.js/v18
