module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        createDefaultProgram: true,
        impliedStrict: true,
        ecmaVersion: 2020
      },
      plugins: ['@typescript-eslint', 'import'],
      env: {
        es6: true,
        node: true
      },
      extends: ['airbnb-typescript/base', 'prettier'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      rules: {
        'arrow-parens': 'off',
        quotes: ['error', 'single'],
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
          }
        ],
        'max-lines': [
          'error',
          {
            max: 500,
            skipBlankLines: true,
            skipComments: true
          }
        ],
        'max-len': [
          1,
          150,
          2,
          {
            ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
            ignoreUrls: true
          }
        ],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true
          }
        ],
        'global-require': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          { allowShortCircuit: true }
        ],
        '@typescript-eslint/no-unused-vars-experimental': 'error',
        'prefer-destructuring': 'off',
        'class-methods-use-this': 'off',
        'no-extend-native': 'off',
        'object-curly-newline': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        'implicit-arrow-linebreak': 'off',
        'function-paren-newline': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        'func-names': 'off'
      }
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'projects/staff/tsconfig.app.json',
          'projects/staff/tsconfig.spec.json'
        ],
        createDefaultProgram: true
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        // This is required if you use inline templates in Components
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        '@angular-eslint/component-class-suffix': [
          'error',
          {
            suffixes: ['Component', 'Dialog', 'Sheet', 'Dashboard']
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/banana-in-box': 'error'
      }
    }
  ]
};
