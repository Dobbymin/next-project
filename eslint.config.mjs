import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // 코드 품질 향상
      eqeqeq: ['error', 'always'], // 항상 === 사용
      'no-console': 'warn', // console.log 경고
      'no-debugger': 'error', // debugger 사용 금지
      // 모던 자바스크립트 사용 권장
      'prefer-const': 'warn', // const 사용 권장
      'no-var': 'error', // var 사용 금지
      'prefer-arrow-callback': 'error', // 화살표 함수 권장
      // React 관련 규칙
      'react/jsx-boolean-value': ['error', 'always'], // boolean props 명시적 설정
      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }], // 사용되지 않는 변수 금지
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 인터페이스 사용 일관성
      // 코딩 스타일 일관성
      'prettier/prettier': 'error', // Prettier 룰 적용
      'import/newline-after-import': ['error', { count: 1 }], // import 문 후 줄바꿈
      // 기존 규칙
      'no-useless-catch': 'off',
      'no-use-before-define': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      // undefined로 확인되는 값에서 optional chanining에 대한 경고를 활성화한다(에러x)
      'no-unsafe-optional-chaining': 1,
      // camelCase를 강제합니다.
      camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
      // 사용하지 않는 변수는 에러를 발생시킵니다.
      'no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      // 일관된 화살표 함수 괄호: 화살표 함수에 대해 일관적인 괄호 사용을 적용합니다.
      'arrow-parens': ['error', 'always'],
      // import 경로가 잘못된 경우 경고를 활성화합니다.
      'import/no-unresolved': ['error', { ignore: ['^@/', '^@'] }],
      // import 순서 규칙
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          pathGroups: [
            {
              pattern: 'angular',
              group: 'external',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.js', '.tsx', '.json', '.css'],
        },
      },
    },
    ignorePatterns: ['.*.js', '*.config.js'],
  },
];

export default eslintConfig;
