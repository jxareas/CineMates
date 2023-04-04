module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: "CallExpression[callee.name='mapTo']",
            message:
              'Use `map(() => value)` instead of `mapTo(value)`, the operator is deprecated',
          },
          {
            selector: `ArrowFunctionExpression[params.length=0][body.raw='false'][body.value='false']`,
            message:
              'Use `ALWAYS_FALSE_HANDLER` please instead of `() => false`',
          },
          {
            selector: `ArrowFunctionExpression[params.length=0][body.raw='true'][body.value='true']`,
            message:
              'Use `ALWAYS_TRUE_HANDLER` please instead of `() => true`',
          },
          {
            selector: "CallExpression[callee.name='switchMapTo']",
            message:
              'Use `switchMap(() => stream$)` instead of `switchMapTo(stream$)`, the operator is deprecated',
          },
          {
            selector: "CallExpression[callee.name='flatMap']",
            message:
              'Use `mergeMap` instead of `flatMap`, the operator is deprecated',
          },
          {
            selector: "CallExpression[callee.name='pluck']",
            message:
              "Use `map(x => x?.foo?.bar)` instead of `pluck('foo', 'bar')`",
          },
        ].concat(
          require('rxjs/package.json').version.startsWith('7')
            ? [
              {
                selector: "CallExpression[callee.name='repeatWhen']",
                message:
                  'Use `repeat({ delay: () => notify$ })` instead of `repeatWhen(() => notify$)`',
              },
            ]
            : [],
        ),
      },
    },
  ],
};
