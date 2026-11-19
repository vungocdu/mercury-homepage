/** Keep only campaign identifiers; never carry free-form URLs, emails or arbitrary query data. */
export function campaignQuery(search: string) {
  const input = new URLSearchParams(search); const output = new URLSearchParams()
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const value = input.get(key)
    if (value && /^[a-zA-Z0-9_-]{1,100}$/.test(value)) output.set(key, value)
  }
  return output.toString()
}
