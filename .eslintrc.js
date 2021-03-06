const prettierConfig = require('./.prettierrc')

/**
 * @file ESLint Configuration
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/prettier/eslint-config-prettier
 */

const EXTENDS = [
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
  'plugin:jsdoc/recommended'
]

const PARSER_OPTIONS = {
  babelOptions: {},
  ecmaFeatures: {
    impliedStrict: true,
    jsx: false
  },
  ecmaVersion: 2020,
  sourceType: 'module'
}

const PARSER_OPTIONS_TYPESCRIPT = {
  ...PARSER_OPTIONS,
  project: ['./tsconfig.json']
}

const PLUGINS = [
  '@typescript-eslint/eslint-plugin',
  'jsdoc',
  'markdown',
  'spellcheck',
  'tree-shaking'
]

const RULES = {
  '@typescript-eslint/ban-ts-ignore': 0,
  '@typescript-eslint/ban-types': 1,
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/member-delimiter-style': [
    2,
    {
      multiline: {
        delimiter: 'none',
        requireLast: false
      }
    }
  ],
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-inferrable-types': 0,
  '@typescript-eslint/no-namespace': 0,
  '@typescript-eslint/no-use-before-define': 0,
  '@typescript-eslint/no-useless-constructor': 1,
  '@typescript-eslint/no-var-requires': 1,
  eqeqeq: 1,
  'import/no-anonymous-default-export': 0,
  'jsdoc/check-indentation': 1,
  'jsdoc/check-line-alignment': 1,
  'jsdoc/check-syntax': 1,
  'jsdoc/check-tag-names': [1, { definedTags: ['link'] }],
  'jsdoc/no-multi-asterisks': 0,
  'jsdoc/no-undefined-types': [
    1,
    {
      definedTypes: ['NodeJS', 'never', 'unknown']
    }
  ],
  'jsdoc/require-hyphen-before-param-description': 1,
  'jsdoc/require-throws': 1,
  'jsdoc/tag-lines': [
    1,
    'any',
    {
      count: 1,
      noEndLines: false,
      tags: {}
    }
  ],
  'no-ex-assign': 0,
  'prefer-arrow-callback': 2,
  'prettier/prettier': [2, prettierConfig],
  'sort-keys': [
    1,
    'asc',
    {
      caseSensitive: true,
      minKeys: 2,
      natural: true
    }
  ],
  'space-before-function-paren': [
    2,
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }
  ],
  'spellcheck/spell-checker': [
    2,
    {
      comments: true,
      identifiers: false,
      lang: 'en_US',
      minLength: 3,
      skipIfMatch: [],
      skipWordIfMatch: [],
      skipWords: [
        'argv',
        'automatable',
        'chp',
        'commitlint',
        'dependabot',
        'dto',
        'dtos',
        'enum',
        'enums',
        'flautoreview',
        'flexdevelopment',
        'formatter',
        'keyof',
        'lgtm',
        'multiline',
        'ncc',
        'nullish',
        'octokit',
        'perf',
        'pnv',
        'postbuild',
        'readonly',
        'rebase',
        'rimraf',
        'stringified',
        'tgz',
        'tsconfig',
        'ttsc',
        'txt',
        'typeof',
        'unicornware',
        'usr',
        'webhook',
        'webhooks',
        'wip'
      ],
      strings: true
    }
  ]
}

module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: EXTENDS,
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: PARSER_OPTIONS_TYPESCRIPT,
  plugins: PLUGINS,
  rules: RULES,
  overrides: [
    {
      files: ['**/*.js', '**/*.md/*.js'],
      parser: `${__dirname}/node_modules/@babel/eslint-parser/lib/index.cjs`,
      parserOptions: {
        ...PARSER_OPTIONS,
        requireConfigFile: false
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-var-requires': 0
      }
    },
    {
      files: ['*.spec.ts'],
      env: {
        es6: true,
        'jest/globals': true,
        node: true
      },
      extends: EXTENDS.splice(1, 0, 'plugin:jest/recommended'),
      rules: {
        'jest/no-disabled-tests': 0,
        'jest/valid-title': 0
      }
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 0
      }
    },
    {
      files: ['**/*.interface.ts', '**/*.types.ts'],
      rules: {
        'jsdoc/check-indentation': 0
      }
    },
    {
      files: ['**/.eslintrc.*'],
      rules: {
        'sort-keys': 0,
        'spellcheck/spell-checker': 0
      }
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: PARSER_OPTIONS_TYPESCRIPT
    },
    {
      files: [
        '**/__mocks__/**',
        '**/__tests__/**',
        '**/scripts/**',
        '**/.eslintrc.js',
        'commitlint.*',
        'jest.*',
        'lint-staged.*',
        '*.spec.ts'
      ],
      rules: {
        'tree-shaking/no-side-effects-in-initialization': 0
      }
    }
  ],
  root: true,
  settings: {
    jsdoc: {
      augmentsExtendsReplacesDocs: true,
      implementsReplacesDocs: true,
      mode: 'typescript',
      overrideReplacesDocs: true,
      structuredTags: {
        param: {
          required: ['name', 'type']
        },
        throws: {
          name: 'namepath-defining',
          required: ['type']
        }
      },
      tagNamePreference: {
        augments: 'extends',
        constant: 'const',
        returns: 'return'
      }
    }
  }
}
