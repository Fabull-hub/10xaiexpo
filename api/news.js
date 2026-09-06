// 10X AI Expo — News Aggregator API
// Vercel Serverless RSS aggregator, bordertrend-style
// 60 curated AI feeds, parallel fetch, 15min edge cache

const Parser = require('rss-parser');

const parser = new Parser({
  timeout: 8000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; 10xAIExpoBot/1.0; +https://www.10xaiexpo.com)'
  }
});

const RSS_FEEDS = [
  // ─── TIER 1: MAJOR NEWS OUTLETS ─────────
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', source: 'TechCrunch', type: 'news', color: '#0A9E38' },
  { url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', source: 'The Verge', type: 'news', color: '#5200FF' },
  { url: 'https://venturebeat.com/category/ai/feed/', source: 'VentureBeat', type: 'news', color: '#E63946' },
  { url: 'https://arstechnica.com/ai/feed/', source: 'Ars Technica', type: 'news', color: '#FF4E00' },
  { url: 'https://www.wired.com/feed/tag/ai/latest/rss', source: 'Wired', type: 'news', color: '#000000' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed', source: 'MIT Tech Review', type: 'news', color: '#B00020' },
  { url: 'https://spectrum.ieee.org/customfeeds/feed/artificial-intelligence/rss', source: 'IEEE Spectrum', type: 'news', color: '#00629B' },
  { url: 'https://www.zdnet.com/topic/artificial-intelligence/rss.xml', source: 'ZDNet', type: 'news', color: '#EE352E' },
  { url: 'https://www.artificialintelligence-news.com/feed/', source: 'AI News', type: 'news', color: '#0088CC' },
  { url: 'https://restofworld.org/tag/artificial-intelligence/feed/', source: 'Rest of World', type: 'news', color: '#FF6B35' },
  { url: 'https://www.techmeme.com/feed.xml', source: 'Techmeme', type: 'news', color: '#0074D9' },
  { url: 'https://www.aitrends.com/feed/', source: 'AI Trends', type: 'news', color: '#2E86AB' },
  { url: 'https://analyticsindiamag.com/feed/', source: 'AIM India', type: 'news', color: '#FF6B00' },
  { url: 'https://sifted.eu/feed', source: 'Sifted (EU)', type: 'news', color: '#004225' },
  { url: 'https://www.fastcompany.com/technology/rss', source: 'Fast Company', type: 'news', color: '#00A6ED' },
  { url: 'https://www.engadget.com/rss.xml', source: 'Engadget', type: 'news', color: '#00D8FF' },
  { url: 'https://mashable.com/feeds/rss/tech', source: 'Mashable Tech', type: 'news', color: '#00AEEF' },
  { url: 'https://thenextweb.com/feed/', source: 'TNW', type: 'news', color: '#000000' },
  { url: 'https://www.axios.com/technology/artificial-intelligence/feed', source: 'Axios', type: 'news', color: '#000000' },
  // ─── TIER 2: BUSINESS + POLICY ───────
  { url: 'https://hbr.org/topic/subject/ai-and-machine-learning/feed', source: 'HBR', type: 'news', color: '#B12028' },
  { url: 'https://www.brookings.edu/topic/artificial-intelligence/feed/', source: 'Brookings', type: 'news', color: '#003057' },
  { url: 'https://www.rand.org/topics/artificial-intelligence.rss', source: 'RAND', type: 'news', color: '#A62B1F' },
  { url: 'https://www.lawfaremedia.org/topics/artificial-intelligence/rss.xml', source: 'Lawfare', type: 'news', color: '#0A0A0A' },
  // ─── TIER 3: LAB BLOGS ─────
  { url: 'https://www.anthropic.com/rss.xml', source: 'Anthropic', type: 'blog', color: '#E67E4A' },
  { url: 'https://openai.com/blog/rss.xml', source: 'OpenAI', type: 'blog', color: '#10A37F' },
  { url: 'https://deepmind.google/blog/rss.xml', source: 'DeepMind', type: 'blog', color: '#4285F4' },
  { url: 'https://blog.google/technology/ai/rss/', source: 'Google AI', type: 'blog', color: '#4285F4' },
  { url: 'https://ai.meta.com/blog/rss/', source: 'Meta AI', type: 'blog', color: '#0866FF' },
  { url: 'https://blogs.microsoft.com/ai/feed/', source: 'Microsoft AI', type: 'blog', color: '#00A4EF' },
  { url: 'https://aws.amazon.com/blogs/machine-learning/feed/', source: 'AWS ML', type: 'blog', color: '#FF9900' },
  { url: 'https://blogs.nvidia.com/feed/', source: 'NVIDIA', type: 'blog', color: '#76B900' },
  { url: 'https://huggingface.co/blog/feed.xml', source: 'Hugging Face', type: 'blog', color: '#FFB800' },
  { url: 'https://blog.eleuther.ai/index.xml', source: 'EleutherAI', type: 'blog', color: '#663399' },
  { url: 'https://www.databricks.com/blog/rss.xml', source: 'Databricks', type: 'blog', color: '#FF3621' },
  { url: 'https://blog.langchain.dev/rss/', source: 'LangChain', type: 'blog', color: '#1C3C3C' },
  // ─── TIER 4: INDEPENDENT VOICES ─────
  { url: 'https://jack-clark.net/feed/', source: 'Import AI', type: 'blog', color: '#7B61FF' },
  { url: 'https://simonwillison.net/atom/everything/', source: 'Simon Willison', type: 'blog', color: '#FF6B9D' },
  { url: 'https://www.interconnects.ai/feed', source: 'Interconnects', type: 'blog', color: '#3ABDFF' },
  { url: 'https://www.latent.space/feed', source: 'Latent Space', type: 'blog', color: '#20808D' },
  { url: 'https://karpathy.github.io/feed.xml', source: 'Karpathy', type: 'blog', color: '#F23F5D' },
  { url: 'https://every.to/feed.xml', source: 'Every', type: 'blog', color: '#000000' },
  { url: 'https://www.oneusefulthing.org/feed', source: 'One Useful Thing', type: 'blog', color: '#2E5266' },
  { url: 'https://stratechery.com/feed/', source: 'Stratechery', type: 'blog', color: '#2E86AB' },
  { url: 'https://www.ben-evans.com/benedictevans?format=rss', source: 'Ben Evans', type: 'blog', color: '#003366' },
  { url: 'https://www.aisnakeoil.com/feed', source: 'AI Snake Oil', type: 'blog', color: '#8B4513' },
  { url: 'https://garymarcus.substack.com/feed', source: 'Gary Marcus', type: 'blog', color: '#000000' },
  { url: 'https://thezvi.substack.com/feed', source: 'Zvi Mowshowitz', type: 'blog', color: '#5D3FD3' },
  { url: 'https://astralcodexten.substack.com/feed', source: 'Astral Codex Ten', type: 'blog', color: '#0066CC' },
  { url: 'https://www.dwarkeshpatel.com/feed', source: 'Dwarkesh Patel', type: 'blog', color: '#FF6600' },
  { url: 'https://bensbites.beehiiv.com/feed', source: "Ben's Bites", type: 'blog', color: '#FFD700' },
  { url: 'https://therundown.ai/feed', source: 'The Rundown AI', type: 'blog', color: '#00D9FF' },
  { url: 'https://tldr.tech/ai/feed', source: 'TLDR AI', type: 'blog', color: '#000000' },
  { url: 'https://aiweekly.co/rss', source: 'AI Weekly', type: 'blog', color: '#FF0080' },
  { url: 'https://a16z.com/feed/', source: 'a16z', type: 'blog', color: '#F26430' },
  { url: 'https://www.sequoiacap.com/feed/', source: 'Sequoia', type: 'blog', color: '#000000' },
  // ─── TIER 5: RESEARCH ─────
  { url: 'https://arxiv.org/rss/cs.AI', source: 'arXiv AI', type: 'blog', color: '#B31B1B' },
  { url: 'https://arxiv.org/rss/cs.LG', source: 'arXiv ML', type: 'blog', color: '#B31B1B' },
  { url: 'https://arxiv.org/rss/cs.CL', source: 'arXiv NLP', type: 'blog', color: '#B31B1B' },
  { url: 'https://paperswithcode.com/latest?format=rss', source: 'Papers with Code', type: 'blog', color: '#21CBF3' },
];

async function fetchFeed(feedConfig) {
  try {
    const feed = await parser.parseURL(feedConfig.url);
    const items = (feed.items || []).slice(0, 5).map(item => ({
      title: (item.title || '').trim(),
      link: item.link || item.guid || '',
      description: cleanDescription(item.contentSnippet || item.content || item.summary || ''),
      pubDate: item.isoDate || item.pubDate || new Date().toISOString(),
      source: feedConfig.source,
      type: feedConfig.type,
      color: feedConfig.color,
    })).filter(item => item.title && item.link);
    return { ok: true, source: feedConfig.source, items };
  } catch (err) {
    console.error('[RSS] Failed: ' + feedConfig.source + ' → ' + err.message);
    return { ok: false, source: feedConfig.source, url: feedConfig.url, error: err.message, items: [] };
  }
}

function cleanDescription(text) {
  if (!text) return '';
  const clean = text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  return clean.length > 220 ? clean.slice(0, 217) + '...' : clean;
}

function timeAgo(isoDate) {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  if (isNaN(then)) return 'recently';
  const diffMs = now - then;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return 'just now';
  if (diffMin < 60) return diffMin + 'm ago';
  if (diffHr < 24) return diffHr + 'h ago';
  if (diffDay < 7) return diffDay + 'd ago';
  const diffWk = Math.floor(diffDay / 7);
  return diffWk + 'w ago';
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');

  try {
    const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
    const allItems = results.flatMap(r => r.items);
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    const news = allItems
      .filter(item => item.type === 'news')
      .slice(0, 50)
      .map(item => Object.assign({}, item, { timeAgo: timeAgo(item.pubDate) }));

    const blogs = allItems
      .filter(item => item.type === 'blog')
      .slice(0, 50)
      .map(item => Object.assign({}, item, { timeAgo: timeAgo(item.pubDate) }));

    const workingFeeds = results.filter(r => r.ok).length;
    const failedFeedList = results
      .filter(r => !r.ok)
      .map(r => ({ source: r.source, url: r.url, error: r.error }));

    res.status(200).json({
      generatedAt: new Date().toISOString(),
      totalFeeds: RSS_FEEDS.length,
      workingFeeds,
      failedFeeds: failedFeedList.length,
      failedFeedList,
      totalItems: news.length + blogs.length,
      news,
      blogs,
    });
  } catch (err) {
    console.error('[RSS] Top-level error:', err);
    res.status(500).json({ error: 'Feed aggregation failed', message: err.message });
  }
};
