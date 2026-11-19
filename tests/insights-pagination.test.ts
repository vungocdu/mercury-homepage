import assert from 'node:assert/strict'
import { test } from 'node:test'
import { paginate, pageNumbers } from '../lib/articles/pagination'

test('23 topics are reachable exactly once across three pages of at most ten', () => {
  const topics = Array.from({ length: 23 }, (_, i) => `topic-${i}`)
  const pages = [1, 2, 3].map(n => paginate(topics, n))
  assert.deepEqual(pages.map(p => p.items.length), [10, 10, 3])
  assert.deepEqual(pages.flatMap(p => p.items), topics)
  assert.deepEqual(pages.map(({ from, to }) => [from, to]), [[1, 10], [11, 20], [21, 23]])
})
test('empty lists, exact page boundaries and stale page numbers remain valid', () => {
  assert.deepEqual(paginate([], 7), { page: 1, totalPages: 1, items: [], from: 0, to: 0 })
  assert.equal(paginate(Array(10).fill('topic'), 2).totalPages, 1)
  assert.equal(paginate(['only'], 99).page, 1)
  assert.equal(paginate(['only'], Number.NaN).page, 1)
})
test('long pagination keeps first, last and current pages visible', () => {
  assert.deepEqual(pageNumbers(5, 10), [1, 'gap', 4, 5, 6, 'gap', 10])
  assert.deepEqual(pageNumbers(1, 1), [1])
})
