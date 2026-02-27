#!/usr/bin/env bun
const commitMsgFile = process.argv[2]
const commitMsg = require('fs').readFileSync(commitMsgFile, 'utf-8').trim()

console.log('📝 Commit message:', commitMsg.split('\n')[0])

const conventionalPattern = /^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|revert)(\(.+\))?!?: .+/m
const allowedTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'build', 'ci', 'revert']

if (!conventionalPattern.test(commitMsg)) {
  console.error('')
  console.error('❌ Invalid commit message format.')
  console.error('')
  console.error('Commit messages must follow the conventional format:')
  console.error('  <type>(<scope>): <description>')
  console.error('')
  console.error('Allowed types:', allowedTypes.join(', '))
  console.error('')
  console.error('Examples:')
  console.error('  feat: add new component')
  console.error('  fix: resolve layout issue on mobile')
  console.error('  docs: update README')
  console.log('  chore: update dependencies')
  console.error('')
  process.exit(1)
}

console.log('✅ Commit message follows conventional format!')
