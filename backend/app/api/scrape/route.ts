// app/api/scrape/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const url = 'https://en.wikipedia.org/wiki/Virat_Kohli';
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    const $ = cheerio.load(html);

    const name = $('#firstHeading').text().trim();
    const introPara = $('#mw-content-text > .mw-parser-output > p').first().text().trim();
    const image = $('table.infobox img').first().attr('src');

    return NextResponse.json({
      name,
      intro: introPara,
      image: image ? `https:${image}` : null,
    });
  } catch (error) {
    console.error('SCRAPER ERROR:', error);
    return NextResponse.json({ error: 'Scraping failed' }, { status: 500 });
  }
}
