import type { PullRequestReviewRequestedEvent } from '@octokit/webhooks-types'
import faker from 'faker'

/**
 * @file Global Fixture - Pull Request With Requested Reviewer
 * @module tests/fixtures/pr-event-with-requested-reviewer
 */

export default {
  action: 'review_requested',
  number: 2,
  pull_request: {
    _links: {
      comments: {
        href: 'https://api.github.com/repos/flex-development/autoreview/issues/2/comments'
      },
      commits: {
        href: 'https://api.github.com/repos/flex-development/autoreview/pulls/2/commits'
      },
      html: {
        href: 'https://github.com/flex-development/autoreview/pull/2'
      },
      issue: {
        href: 'https://api.github.com/repos/flex-development/autoreview/issues/2'
      },
      review_comment: {
        href: 'https://api.github.com/repos/flex-development/autoreview/pulls/comments{/number}'
      },
      review_comments: {
        href: 'https://api.github.com/repos/flex-development/autoreview/pulls/2/comments'
      },
      self: {
        href: 'https://api.github.com/repos/flex-development/autoreview/pulls/2'
      },
      statuses: {
        href: 'https://api.github.com/repos/flex-development/autoreview/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821'
      }
    },
    active_lock_reason: null,
    additions: 1,
    assignee: null,
    assignees: [],
    author_association: 'OWNER',
    auto_merge: null,
    base: {
      label: 'flex-development:master',
      ref: 'master',
      repo: {
        allow_merge_commit: true,
        allow_rebase_merge: true,
        allow_squash_merge: true,
        archive_url:
          'https://api.github.com/repos/flex-development/autoreview/{archive_format}{/ref}',
        archived: false,
        assignees_url:
          'https://api.github.com/repos/flex-development/autoreview/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/flex-development/autoreview/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/flex-development/autoreview/branches{/branch}',
        clone_url: 'https://github.com/flex-development/autoreview.git',
        collaborators_url:
          'https://api.github.com/repos/flex-development/autoreview/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/flex-development/autoreview/comments{/number}',
        commits_url:
          'https://api.github.com/repos/flex-development/autoreview/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/flex-development/autoreview/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/flex-development/autoreview/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/flex-development/autoreview/contributors',
        created_at: '2019-05-15T15:19:25Z',
        default_branch: 'master',
        delete_branch_on_merge: false,
        deployments_url:
          'https://api.github.com/repos/flex-development/autoreview/deployments',
        description: null,
        disabled: false,
        downloads_url:
          'https://api.github.com/repos/flex-development/autoreview/downloads',
        events_url:
          'https://api.github.com/repos/flex-development/autoreview/events',
        fork: false,
        forks: 0,
        forks_count: 0,
        forks_url:
          'https://api.github.com/repos/flex-development/autoreview/forks',
        full_name: 'flex-development/autoreview',
        git_commits_url:
          'https://api.github.com/repos/flex-development/autoreview/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/flex-development/autoreview/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/flex-development/autoreview/git/tags{/sha}',
        git_url: 'git://github.com/flex-development/autoreview.git',
        has_downloads: true,
        has_issues: true,
        has_pages: true,
        has_projects: true,
        has_wiki: true,
        homepage: null,
        hooks_url:
          'https://api.github.com/repos/flex-development/autoreview/hooks',
        html_url: 'https://github.com/flex-development/autoreview',
        id: 186853002,
        issue_comment_url:
          'https://api.github.com/repos/flex-development/autoreview/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/flex-development/autoreview/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/flex-development/autoreview/issues{/number}',
        keys_url:
          'https://api.github.com/repos/flex-development/autoreview/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/flex-development/autoreview/labels{/name}',
        language: null,
        languages_url:
          'https://api.github.com/repos/flex-development/autoreview/languages',
        license: null,
        merges_url:
          'https://api.github.com/repos/flex-development/autoreview/merges',
        milestones_url:
          'https://api.github.com/repos/flex-development/autoreview/milestones{/number}',
        mirror_url: null,
        name: 'autoreview',
        node_id: `${faker.datatype.string(12)}=`,
        notifications_url:
          'https://api.github.com/repos/flex-development/autoreview/notifications{?since,all,participating}',
        open_issues: 2,
        open_issues_count: 2,
        owner: {
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          events_url:
            'https://api.github.com/users/flex-development/events{/privacy}',
          followers_url:
            'https://api.github.com/users/flex-development/followers',
          following_url:
            'https://api.github.com/users/flex-development/following{/other_user}',
          gists_url:
            'https://api.github.com/users/flex-development/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/flex-development',
          id: 21031067,
          login: 'flex-development',
          node_id: `${faker.datatype.string(12)}=`,
          organizations_url:
            'https://api.github.com/users/flex-development/orgs',
          received_events_url:
            'https://api.github.com/users/flex-development/received_events',
          repos_url: 'https://api.github.com/users/flex-development/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/flex-development/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/flex-development/subscriptions',
          type: 'User',
          url: 'https://api.github.com/users/flex-development'
        },
        private: false,
        pulls_url:
          'https://api.github.com/repos/flex-development/autoreview/pulls{/number}',
        pushed_at: '2019-05-15T15:20:32Z',
        releases_url:
          'https://api.github.com/repos/flex-development/autoreview/releases{/id}',
        size: 0,
        ssh_url: 'git@github.com:flex-development/autoreview.git',
        stargazers_count: 0,
        stargazers_url:
          'https://api.github.com/repos/flex-development/autoreview/stargazers',
        statuses_url:
          'https://api.github.com/repos/flex-development/autoreview/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/flex-development/autoreview/subscribers',
        subscription_url:
          'https://api.github.com/repos/flex-development/autoreview/subscription',
        svn_url: 'https://github.com/flex-development/autoreview',
        tags_url:
          'https://api.github.com/repos/flex-development/autoreview/tags',
        teams_url:
          'https://api.github.com/repos/flex-development/autoreview/teams',
        trees_url:
          'https://api.github.com/repos/flex-development/autoreview/git/trees{/sha}',
        updated_at: '2019-05-15T15:19:27Z',
        url: 'https://api.github.com/repos/flex-development/autoreview',
        watchers: 0,
        watchers_count: 0
      },
      sha: 'f95f852bd8fca8fcc58a9a2d6c842781e32a215e',
      user: {
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        events_url: 'https://api.github.com/users/unicornware/events{/privacy}',
        followers_url: 'https://api.github.com/users/unicornware/followers',
        following_url:
          'https://api.github.com/users/unicornware/following{/other_user}',
        gists_url: 'https://api.github.com/users/unicornware/gists{/gist_id}',
        gravatar_id: '',
        html_url: 'https://github.com/unicornware',
        id: 21031067,
        login: 'unicornware',
        node_id: `${faker.datatype.string(12)}=`,
        organizations_url: 'https://api.github.com/users/unicornware/orgs',
        received_events_url:
          'https://api.github.com/users/unicornware/received_events',
        repos_url: 'https://api.github.com/users/unicornware/repos',
        site_admin: false,
        starred_url:
          'https://api.github.com/users/unicornware/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/unicornware/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/unicornware'
      }
    },
    body: 'This is a pretty simple change that we need to pull into master.',
    changed_files: 1,
    closed_at: null,
    comments: 0,
    comments_url:
      'https://api.github.com/repos/flex-development/autoreview/issues/2/comments',
    commits: 1,
    commits_url:
      'https://api.github.com/repos/flex-development/autoreview/pulls/2/commits',
    created_at: '2019-05-15T15:20:33Z',
    deletions: 1,
    diff_url: 'https://github.com/flex-development/autoreview/pull/2.diff',
    draft: false,
    head: {
      label: 'flex-development:changes',
      ref: 'changes',
      repo: {
        allow_merge_commit: true,
        allow_rebase_merge: true,
        allow_squash_merge: true,
        archive_url:
          'https://api.github.com/repos/flex-development/autoreview/{archive_format}{/ref}',
        archived: false,
        assignees_url:
          'https://api.github.com/repos/flex-development/autoreview/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/flex-development/autoreview/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/flex-development/autoreview/branches{/branch}',
        clone_url: 'https://github.com/flex-development/autoreview.git',
        collaborators_url:
          'https://api.github.com/repos/flex-development/autoreview/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/flex-development/autoreview/comments{/number}',
        commits_url:
          'https://api.github.com/repos/flex-development/autoreview/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/flex-development/autoreview/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/flex-development/autoreview/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/flex-development/autoreview/contributors',
        created_at: '2019-05-15T15:19:25Z',
        default_branch: 'master',
        delete_branch_on_merge: false,
        deployments_url:
          'https://api.github.com/repos/flex-development/autoreview/deployments',
        description: null,
        disabled: false,
        downloads_url:
          'https://api.github.com/repos/flex-development/autoreview/downloads',
        events_url:
          'https://api.github.com/repos/flex-development/autoreview/events',
        fork: false,
        forks: 0,
        forks_count: 0,
        forks_url:
          'https://api.github.com/repos/flex-development/autoreview/forks',
        full_name: 'flex-development/autoreview',
        git_commits_url:
          'https://api.github.com/repos/flex-development/autoreview/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/flex-development/autoreview/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/flex-development/autoreview/git/tags{/sha}',
        git_url: 'git://github.com/flex-development/autoreview.git',
        has_downloads: true,
        has_issues: true,
        has_pages: true,
        has_projects: true,
        has_wiki: true,
        homepage: null,
        hooks_url:
          'https://api.github.com/repos/flex-development/autoreview/hooks',
        html_url: 'https://github.com/flex-development/autoreview',
        id: 186853002,
        issue_comment_url:
          'https://api.github.com/repos/flex-development/autoreview/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/flex-development/autoreview/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/flex-development/autoreview/issues{/number}',
        keys_url:
          'https://api.github.com/repos/flex-development/autoreview/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/flex-development/autoreview/labels{/name}',
        language: null,
        languages_url:
          'https://api.github.com/repos/flex-development/autoreview/languages',
        license: null,
        merges_url:
          'https://api.github.com/repos/flex-development/autoreview/merges',
        milestones_url:
          'https://api.github.com/repos/flex-development/autoreview/milestones{/number}',
        mirror_url: null,
        name: 'autoreview',
        node_id: `${faker.datatype.string(12)}=`,
        notifications_url:
          'https://api.github.com/repos/flex-development/autoreview/notifications{?since,all,participating}',
        open_issues: 2,
        open_issues_count: 2,
        owner: {
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          events_url:
            'https://api.github.com/users/flex-development/events{/privacy}',
          followers_url:
            'https://api.github.com/users/flex-development/followers',
          following_url:
            'https://api.github.com/users/flex-development/following{/other_user}',
          gists_url:
            'https://api.github.com/users/flex-development/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/flex-development',
          id: 21031067,
          login: 'flex-development',
          node_id: `${faker.datatype.string(12)}=`,
          organizations_url:
            'https://api.github.com/users/flex-development/orgs',
          received_events_url:
            'https://api.github.com/users/flex-development/received_events',
          repos_url: 'https://api.github.com/users/flex-development/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/flex-development/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/flex-development/subscriptions',
          type: 'User',
          url: 'https://api.github.com/users/flex-development'
        },
        private: false,
        pulls_url:
          'https://api.github.com/repos/flex-development/autoreview/pulls{/number}',
        pushed_at: '2019-05-15T15:20:32Z',
        releases_url:
          'https://api.github.com/repos/flex-development/autoreview/releases{/id}',
        size: 0,
        ssh_url: 'git@github.com:flex-development/autoreview.git',
        stargazers_count: 0,
        stargazers_url:
          'https://api.github.com/repos/flex-development/autoreview/stargazers',
        statuses_url:
          'https://api.github.com/repos/flex-development/autoreview/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/flex-development/autoreview/subscribers',
        subscription_url:
          'https://api.github.com/repos/flex-development/autoreview/subscription',
        svn_url: 'https://github.com/flex-development/autoreview',
        tags_url:
          'https://api.github.com/repos/flex-development/autoreview/tags',
        teams_url:
          'https://api.github.com/repos/flex-development/autoreview/teams',
        trees_url:
          'https://api.github.com/repos/flex-development/autoreview/git/trees{/sha}',
        updated_at: '2019-05-15T15:19:27Z',
        url: 'https://api.github.com/repos/flex-development/autoreview',
        watchers: 0,
        watchers_count: 0
      },
      sha: 'ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      user: {
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        events_url:
          'https://api.github.com/users/flex-development/events{/privacy}',
        followers_url:
          'https://api.github.com/users/flex-development/followers',
        following_url:
          'https://api.github.com/users/flex-development/following{/other_user}',
        gists_url:
          'https://api.github.com/users/flex-development/gists{/gist_id}',
        gravatar_id: '',
        html_url: 'https://github.com/flex-development',
        id: 21031067,
        login: 'flex-development',
        node_id: `${faker.datatype.string(12)}=`,
        organizations_url: 'https://api.github.com/users/flex-development/orgs',
        received_events_url:
          'https://api.github.com/users/flex-development/received_events',
        repos_url: 'https://api.github.com/users/flex-development/repos',
        site_admin: false,
        starred_url:
          'https://api.github.com/users/flex-development/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/flex-development/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/flex-development'
      }
    },
    html_url: 'https://github.com/flex-development/autoreview/pull/2',
    id: 279147437,
    issue_url:
      'https://api.github.com/repos/flex-development/autoreview/issues/2',
    labels: [],
    locked: false,
    maintainer_can_modify: false,
    merge_commit_sha: null,
    mergeable: null,
    mergeable_state: 'unknown',
    merged: false,
    merged_at: null,
    merged_by: null,
    milestone: null,
    node_id: `${faker.datatype.string(12)}=`,
    number: 2,
    patch_url: 'https://github.com/flex-development/autoreview/pull/2.patch',
    rebaseable: null,
    requested_reviewers: [],
    requested_teams: [],
    review_comment_url:
      'https://api.github.com/repos/flex-development/autoreview/pulls/comments{/number}',
    review_comments: 0,
    review_comments_url:
      'https://api.github.com/repos/flex-development/autoreview/pulls/2/comments',
    state: 'open',
    statuses_url:
      'https://api.github.com/repos/flex-development/autoreview/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
    title: 'Update the README with new information.',
    updated_at: '2019-05-15T15:20:33Z',
    url: 'https://api.github.com/repos/flex-development/autoreview/pulls/2',
    user: {
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      events_url:
        'https://api.github.com/users/flex-development/events{/privacy}',
      followers_url: 'https://api.github.com/users/flex-development/followers',
      following_url:
        'https://api.github.com/users/flex-development/following{/other_user}',
      gists_url:
        'https://api.github.com/users/flex-development/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/flex-development',
      id: 21031067,
      login: 'flex-development',
      node_id: `${faker.datatype.string(12)}=`,
      organizations_url: 'https://api.github.com/users/flex-development/orgs',
      received_events_url:
        'https://api.github.com/users/flex-development/received_events',
      repos_url: 'https://api.github.com/users/flex-development/repos',
      site_admin: false,
      starred_url:
        'https://api.github.com/users/flex-development/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/flex-development/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/flex-development'
    }
  },
  repository: {
    archive_url:
      'https://api.github.com/repos/flex-development/autoreview/{archive_format}{/ref}',
    archived: false,
    assignees_url:
      'https://api.github.com/repos/flex-development/autoreview/assignees{/user}',
    blobs_url:
      'https://api.github.com/repos/flex-development/autoreview/git/blobs{/sha}',
    branches_url:
      'https://api.github.com/repos/flex-development/autoreview/branches{/branch}',
    clone_url: 'https://github.com/flex-development/autoreview.git',
    collaborators_url:
      'https://api.github.com/repos/flex-development/autoreview/collaborators{/collaborator}',
    comments_url:
      'https://api.github.com/repos/flex-development/autoreview/comments{/number}',
    commits_url:
      'https://api.github.com/repos/flex-development/autoreview/commits{/sha}',
    compare_url:
      'https://api.github.com/repos/flex-development/autoreview/compare/{base}...{head}',
    contents_url:
      'https://api.github.com/repos/flex-development/autoreview/contents/{+path}',
    contributors_url:
      'https://api.github.com/repos/flex-development/autoreview/contributors',
    created_at: '2019-05-15T15:19:25Z',
    default_branch: 'master',
    deployments_url:
      'https://api.github.com/repos/flex-development/autoreview/deployments',
    description: null,
    disabled: false,
    downloads_url:
      'https://api.github.com/repos/flex-development/autoreview/downloads',
    events_url:
      'https://api.github.com/repos/flex-development/autoreview/events',
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url: 'https://api.github.com/repos/flex-development/autoreview/forks',
    full_name: 'flex-development/autoreview',
    git_commits_url:
      'https://api.github.com/repos/flex-development/autoreview/git/commits{/sha}',
    git_refs_url:
      'https://api.github.com/repos/flex-development/autoreview/git/refs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/flex-development/autoreview/git/tags{/sha}',
    git_url: 'git://github.com/flex-development/autoreview.git',
    has_downloads: true,
    has_issues: true,
    has_pages: true,
    has_projects: true,
    has_wiki: true,
    homepage: null,
    hooks_url: 'https://api.github.com/repos/flex-development/autoreview/hooks',
    html_url: 'https://github.com/flex-development/autoreview',
    id: 186853002,
    issue_comment_url:
      'https://api.github.com/repos/flex-development/autoreview/issues/comments{/number}',
    issue_events_url:
      'https://api.github.com/repos/flex-development/autoreview/issues/events{/number}',
    issues_url:
      'https://api.github.com/repos/flex-development/autoreview/issues{/number}',
    keys_url:
      'https://api.github.com/repos/flex-development/autoreview/keys{/key_id}',
    labels_url:
      'https://api.github.com/repos/flex-development/autoreview/labels{/name}',
    language: null,
    languages_url:
      'https://api.github.com/repos/flex-development/autoreview/languages',
    license: null,
    merges_url:
      'https://api.github.com/repos/flex-development/autoreview/merges',
    milestones_url:
      'https://api.github.com/repos/flex-development/autoreview/milestones{/number}',
    mirror_url: null,
    name: 'autoreview',
    node_id: `${faker.datatype.string(12)}=`,
    notifications_url:
      'https://api.github.com/repos/flex-development/autoreview/notifications{?since,all,participating}',
    open_issues: 2,
    open_issues_count: 2,
    owner: {
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      events_url:
        'https://api.github.com/users/flex-development/events{/privacy}',
      followers_url: 'https://api.github.com/users/flex-development/followers',
      following_url:
        'https://api.github.com/users/flex-development/following{/other_user}',
      gists_url:
        'https://api.github.com/users/flex-development/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/flex-development',
      id: 21031067,
      login: 'flex-development',
      node_id: `${faker.datatype.string(12)}=`,
      organizations_url: 'https://api.github.com/users/flex-development/orgs',
      received_events_url:
        'https://api.github.com/users/flex-development/received_events',
      repos_url: 'https://api.github.com/users/flex-development/repos',
      site_admin: false,
      starred_url:
        'https://api.github.com/users/flex-development/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/flex-development/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/flex-development'
    },
    private: false,
    pulls_url:
      'https://api.github.com/repos/flex-development/autoreview/pulls{/number}',
    pushed_at: '2019-05-15T15:20:32Z',
    releases_url:
      'https://api.github.com/repos/flex-development/autoreview/releases{/id}',
    size: 0,
    ssh_url: 'git@github.com:flex-development/autoreview.git',
    stargazers_count: 0,
    stargazers_url:
      'https://api.github.com/repos/flex-development/autoreview/stargazers',
    statuses_url:
      'https://api.github.com/repos/flex-development/autoreview/statuses/{sha}',
    subscribers_url:
      'https://api.github.com/repos/flex-development/autoreview/subscribers',
    subscription_url:
      'https://api.github.com/repos/flex-development/autoreview/subscription',
    svn_url: 'https://github.com/flex-development/autoreview',
    tags_url: 'https://api.github.com/repos/flex-development/autoreview/tags',
    teams_url: 'https://api.github.com/repos/flex-development/autoreview/teams',
    trees_url:
      'https://api.github.com/repos/flex-development/autoreview/git/trees{/sha}',
    updated_at: '2019-05-15T15:19:27Z',
    url: 'https://api.github.com/repos/flex-development/autoreview',
    watchers: 0,
    watchers_count: 0
  },
  requested_reviewer: {
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    events_url: 'https://api.github.com/users/flexdevelopment/events{/privacy}',
    followers_url: 'https://api.github.com/users/flexdevelopment/followers',
    following_url:
      'https://api.github.com/users/flexdevelopment/following{/other_user}',
    gists_url: 'https://api.github.com/users/flexdevelopment/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/flexdevelopment',
    id: 21031067,
    login: 'flexdevelopment',
    node_id: `${faker.datatype.string(12)}=`,
    organizations_url: 'https://api.github.com/users/flexdevelopment/orgs',
    received_events_url:
      'https://api.github.com/users/flexdevelopment/received_events',
    repos_url: 'https://api.github.com/users/flexdevelopment/repos',
    site_admin: false,
    starred_url:
      'https://api.github.com/users/flexdevelopment/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/flexdevelopment/subscriptions',
    type: 'User',
    url: 'https://api.github.com/users/flexdevelopment'
  },
  sender: {
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    events_url: 'https://api.github.com/users/unicornware/events{/privacy}',
    followers_url: 'https://api.github.com/users/unicornware/followers',
    following_url:
      'https://api.github.com/users/unicornware/following{/other_user}',
    gists_url: 'https://api.github.com/users/unicornware/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/unicornware',
    id: 21031067,
    login: 'unicornware',
    node_id: `${faker.datatype.string(12)}=`,
    organizations_url: 'https://api.github.com/users/unicornware/orgs',
    received_events_url:
      'https://api.github.com/users/unicornware/received_events',
    repos_url: 'https://api.github.com/users/unicornware/repos',
    site_admin: false,
    starred_url:
      'https://api.github.com/users/unicornware/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/unicornware/subscriptions',
    type: 'User',
    url: 'https://api.github.com/users/unicornware'
  }
} as PullRequestReviewRequestedEvent
