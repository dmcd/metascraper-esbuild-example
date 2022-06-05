/* eslint-disable @typescript-eslint/no-var-requires */
import fetch from 'node-fetch'
import { Metadata } from 'metascraper'
const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')(),
])

type Event = {
  arguments: {
    url: string
  }
}

exports.handler = async (event: Event): Promise<Metadata | null> => {
  const url = event.arguments.url
  try {
    const response = await fetch(url, {
      method: 'GET',
    })
    if (response.ok) {
      const html = await response.text()
      return await metascraper({
        html,
        url,
      })
    }
    return null
  } catch (err) {
    console.error(`scrapeUrl error for url: ${url}\n`, err)
    return null
  }
}
