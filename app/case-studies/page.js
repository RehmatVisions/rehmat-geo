import Link from 'next/link';
import s from './case.module.css';

export const metadata = {
  title: 'Case Studies | Rehmat Ali',
  description:
    'A live GEO demonstration project — optimizing my own portfolio website for AI search visibility across ChatGPT, Google Gemini and Perplexity.',
  alternates: { canonical: '/case-studies' },
};

/* ── small reusable chips ── */
function Status({ type }) {
  const map = {
    done:     [s.statusDone,     'Completed'],
    progress: [s.statusProgress, 'In Progress'],
    pending:  [s.statusPending,  'Pending'],
  };
  const [cls, label] = map[type] ?? map.pending;
  return (
    <span className={`${s.statusChip} ${cls}`}>
      <span className={s.statusDot} />
      {label}
    </span>
  );
}

/* ── data ── */
const META = [
  { label: 'Project Name',   value: 'Rehmat GEO Portfolio',              sub: 'Personal demonstration project' },
  { label: 'Website',        value: 'geo-by-rehmat.vercel.app',          sub: 'Live — actively updated' },
  { label: 'Project Type',   value: 'Personal GEO business website',      sub: '' },
  { label: 'Industry',       value: 'Generative Engine Optimization',     sub: 'GEO · AEO · AI Search' },
  { label: 'AI Platforms',   value: 'ChatGPT · Gemini · Perplexity',      sub: 'Tested individually' },
  { label: 'Objective',      value: 'Improve AI visibility & authority',  sub: 'Ongoing — no guaranteed outcome' },
];

const CHALLENGES = [
  {
    title: 'Newly established website authority',
    body:  'A new GEO portfolio needs time and deliberate work to build the kind of consistent, credible presence that AI search systems can interpret confidently.',
  },
  {
    title: 'Brand and service clarity for AI systems',
    body:  'AI search engines rely on readable, well-structured content to understand who a business is, what it does and why it is relevant to a query.',
  },
  {
    title: 'Identifying the right buyer-intent queries',
    body:  'Not every query that mentions "GEO" reflects a purchase intent. Mapping real buyer questions requires research, not assumption.',
  },
  {
    title: 'Producing extractable, answer-ready content',
    body:  'Content must do more than rank—it must be structured so that AI systems can extract clear, accurate answers to specific questions.',
  },
  {
    title: 'Measuring AI citations without false metrics',
    body:  'AI visibility has no universal score. Building a repeatable, honest measurement method is itself a core challenge of this project.',
  },
  {
    title: 'Cross-platform consistency',
    body:  'ChatGPT, Gemini and Perplexity each retrieve and present information differently. Optimizing for one does not guarantee visibility across all three.',
  },
];

const STRATEGY = [
  { n: '01', title: 'Initial Website Audit',          body: 'Review all public pages for technical accessibility, content clarity, internal linking and entity consistency.' },
  { n: '02', title: 'Technical SEO Foundation',       body: 'Confirm crawlability, correct indexing, structured data accuracy and appropriate crawler access rules.' },
  { n: '03', title: 'AI Visibility Baseline Testing', body: 'Run a documented set of buyer-intent prompts across ChatGPT, Gemini and Perplexity. Record date, platform, answer and any citations.' },
  { n: '04', title: 'Competitor & Prompt Research',   body: 'Identify which queries are most relevant to a potential buyer and examine how competing profiles appear in AI-generated answers.' },
  { n: '05', title: 'Entity & Brand Optimization',    body: 'Strengthen the consistency of business name, service descriptions, contact details and expertise signals across all controlled sources.' },
  { n: '06', title: 'Answer-First Content',           body: 'Restructure and expand key pages so they directly answer documented buyer questions with evidence and clear context.' },
  { n: '07', title: 'Schema & Structured Data',       body: 'Add and validate Organization and relevant Article markup that accurately reflects visible page content.' },
  { n: '08', title: 'Authority & Citation Building',  body: 'Develop credible, verifiable references and consistent profiles that give AI systems corroborating signals about the business.' },
  { n: '09', title: 'AI Visibility Retesting',        body: 'Repeat the same documented prompts and compare results against the baseline — by date, platform and citation.' },
  { n: '10', title: 'Continuous Improvement',         body: 'Publish findings, update content in response to real observations and refine the approach as platforms and queries evolve.' },
];

const MEASURES = [
  {
    title: 'Brand Mention Rate',
    rows: [
      ['ChatGPT — relevant queries', '—'],
      ['Google Gemini — relevant queries', '—'],
      ['Perplexity — relevant queries', '—'],
    ],
  },
  {
    title: 'AI Recommendation Rate',
    rows: [
      ['Buyer-intent queries (all platforms)', '—'],
      ['Category discovery queries', '—'],
      ['Provider-selection queries', '—'],
    ],
  },
  {
    title: 'Website Citation Rate',
    rows: [
      ['Linked citations — ChatGPT', '—'],
      ['Linked citations — Gemini', '—'],
      ['Linked citations — Perplexity', '—'],
    ],
  },
  {
    title: 'Brand Information Accuracy',
    rows: [
      ['Service description accuracy', '—'],
      ['Business identity consistency', '—'],
      ['Incorrect or outdated claims', '—'],
    ],
  },
];

const TARGET_QUERIES = [
  'Best GEO freelancers',
  'Best GEO specialists',
  'Best GEO consultants',
  'Best AI search optimization experts',
  'Who can optimize my website for ChatGPT?',
  'Best GEO agency or freelancer for AI visibility',
  'Best GEO developers',
];

const TIMELINE = [
  {
    phase:  'Phase 1',
    title:  'Initial Audit',
    body:   'Full review of all public pages — technical accessibility, content structure, entity consistency and internal linking. Robots.txt and crawler access confirmed.',
    status: 'done',
  },
  {
    phase:  'Phase 2',
    title:  'Technical Improvements',
    body:   'Structured data added for Organization and Article types. Sitemap reviewed. Crawler access for OAI-SearchBot and PerplexityBot confirmed.',
    status: 'done',
  },
  {
    phase:  'Phase 3',
    title:  'Content Optimization',
    body:   'Key pages restructured to lead with direct answers. Services, About and GEO Audit pages updated for entity clarity and answer-readiness.',
    status: 'progress',
  },
  {
    phase:  'Phase 4',
    title:  'Entity Development',
    body:   'Business name, expertise and service descriptions made consistent across the website and primary external profiles.',
    status: 'progress',
  },
  {
    phase:  'Phase 5',
    title:  'Authority Building',
    body:   'Identify credible reference opportunities, build verifiable citations and develop content that earns independent mentions.',
    status: 'pending',
  },
  {
    phase:  'Phase 6',
    title:  'AI Visibility Retesting',
    body:   'Repeat the full documented prompt set across ChatGPT, Gemini and Perplexity. Compare against the baseline with the same method and date context.',
    status: 'pending',
  },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function CaseStudies() {
  return (
    <>
      {/* ── HERO ── */}
      <div className={s.hero}>
        <div className={s.label}>
          <span className={s.labelDot} />
          Live GEO Demonstration Project
        </div>

        <h1 className={s.heroTitle}>
          Building My Own<br />
          <em>GEO Authority:</em><br />
          A Real-World Experiment
        </h1>

        <p className={s.heroSub}>
          How I am optimizing my own GEO portfolio website to improve its
          discoverability and recommendation potential across AI-powered search
          engines — documented transparently, without fabricated results.
        </p>

        <Link href="/geo-audit" className="button button-orange">
          Start your own GEO audit ↗
        </Link>
      </div>

      <div className={s.heroDivider} />

      {/* ══════════════════════════════════════
          A. PROJECT OVERVIEW
      ══════════════════════════════════════ */}
      <div className={s.section}>
        <p className={s.eyebrow}><span className={s.eyebrowDot} /> Project overview</p>
        <h2 className={s.sectionTitle}>
          The subject of this case study<br />is <em>this website.</em>
        </h2>
        <p className={s.sectionLead}>
          Rather than presenting a hypothetical scenario, I am using my own professional
          portfolio as a live test environment. Every strategy applied here is documented,
          every measurement is dated, and every outcome is reported honestly.
        </p>

        <div className={s.metaGrid}>
          {META.map(({ label, value, sub }) => (
            <div className={s.metaCell} key={label}>
              <span className={s.metaLabel}>{label}</span>
              <span className={s.metaValue}>{value}</span>
              {sub && <span className={s.metaValueSmall}>{sub}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          B. THE CHALLENGE
      ══════════════════════════════════════ */}
      <div className={s.sectionAlt}>
        <div className={s.sectionAltInner}>
          <p className={s.eyebrow}><span className={s.eyebrowDot} /> The challenge</p>
          <h2 className={s.sectionTitle}>
            What makes GEO authority<br /><em>hard to build.</em>
          </h2>
          <p className={s.sectionLead}>
            Improving AI search visibility is not a single-action task. It involves
            understanding how different AI platforms retrieve and represent information,
            building consistent signals over time and measuring honestly.
          </p>

          <div className={s.challengeGrid}>
            {CHALLENGES.map((c, i) => (
              <div className={s.challengeCard} key={c.title}>
                <div className={s.challengeNum}>0{i + 1}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          C. GEO STRATEGY ROADMAP
      ══════════════════════════════════════ */}
      <div className={s.section}>
        <p className={s.eyebrow}><span className={s.eyebrowDot} /> GEO strategy</p>
        <h2 className={s.sectionTitle}>
          A ten-stage roadmap built<br />for <em>real AI visibility.</em>
        </h2>
        <p className={s.sectionLead}>
          Each stage builds on the last. The process is designed to be repeatable,
          evidence-based and honest about what can and cannot be measured.
        </p>

        <div className={s.roadmap}>
          {STRATEGY.map(({ n, title, body }) => (
            <div className={s.roadmapStep} key={n}>
              <span className={s.roadmapNum}>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          D. MEASUREMENT — BEFORE / AFTER
      ══════════════════════════════════════ */}
      <div className={s.sectionAlt}>
        <div className={s.sectionAltInner}>
          <p className={s.eyebrow}><span className={s.eyebrowDot} /> Measurement framework</p>
          <h2 className={s.sectionTitle}>
            Evidence-based tracking.<br /><em>No invented scores.</em>
          </h2>
          <p className={s.sectionLead}>
            Baseline measurements will be published once the initial prompt-testing round
            is complete. All figures shown here will be dated and reproducible.
          </p>

          <div className={s.measureGrid}>
            {MEASURES.map(({ title, rows }) => (
              <div className={s.measureCard} key={title}>
                <div className={s.measureHeader}>
                  <h3>{title}</h3>
                  <span className={s.pendingBadge}>
                    <span className={s.pendingDot} />
                    Pending
                  </span>
                </div>
                <div className={s.measureBody}>
                  {rows.map(([label, val]) => (
                    <div className={s.measureRow} key={label}>
                      <span className={s.measureRowLabel}>{label}</span>
                      <span className={s.measureRowValue}>Baseline measurement pending</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={s.measureNote}>
            <strong>Important:</strong> No baseline scores, improvement percentages or
            AI visibility ratings have been fabricated. All fields above will be updated
            with real, dated observations once the documented prompt-testing round is
            complete. Screenshots and source links will accompany every published figure.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          E. AI PLATFORMS
      ══════════════════════════════════════ */}
      <div className={s.sectionDark}>
        <div className={s.sectionAltInner}>
          <p className={`${s.eyebrow} ${s.eyebrowLight}`}>
            <span className={s.eyebrowDot} /> Target platforms
          </p>
          <h2 className={`${s.sectionTitle} ${s.sectionTitleLight}`}>
            Three platforms.<br />One consistent method.
          </h2>
          <p className={`${s.sectionLead} ${s.sectionLeadLight}`}>
            Each platform retrieves, ranks and presents information differently.
            Results are tracked separately — never combined into a single score.
          </p>

          <div className={s.platformsRow}>
            <div className={s.platformCard}>
              <div className={s.platformIcon}>💬</div>
              <h3>ChatGPT Search</h3>
              <p>
                Tested using ChatGPT with web search enabled. Brand mentions, cited URLs
                and answer context recorded per prompt with the OAI-SearchBot crawler
                permitted on the domain.
              </p>
              <span className={s.platformStatus}>
                <span className={s.platformStatusDot} />
                Baseline testing pending
              </span>
            </div>

            <div className={s.platformCard}>
              <div className={s.platformIcon}>✦</div>
              <h3>Google Gemini</h3>
              <p>
                Tested via Gemini with Search grounding active. Source links and brand
                description accuracy reviewed for each documented buyer-intent query.
              </p>
              <span className={s.platformStatus}>
                <span className={s.platformStatusDot} />
                Baseline testing pending
              </span>
            </div>

            <div className={s.platformCard}>
              <div className={s.platformIcon}>⊚</div>
              <h3>Perplexity AI</h3>
              <p>
                Tested using Perplexity web search. PerplexityBot access confirmed.
                Citations, surrounding answer context and competitor presence logged per test.
              </p>
              <span className={s.platformStatus}>
                <span className={s.platformStatusDot} />
                Baseline testing pending
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          E2. TOP 3 VISIBILITY OBJECTIVE
      ══════════════════════════════════════ */}
      <div className={s.section}>
        <p className={s.eyebrow}><span className={s.eyebrowDot} /> Long-term objective</p>
        <h2 className={s.sectionTitle}>
          From discoverable to a<br /><em>Top 3 recommendation candidate.</em>
        </h2>
        <p className={s.sectionLead}>
          The aspiration is not simply to appear in AI answers — it is to become a
          consistently cited, accurately described recommendation for the queries that
          matter most to potential buyers of GEO services.
        </p>

        <div className={s.top3Banner}>
          <h3>
            Target queries for<br /><em>Top 3 recommendation potential</em>
          </h3>
          <p>
            The following buyer-intent queries represent the long-term visibility
            objective for this project. Progress toward them will be measured with
            dated, documented prompt tests — not estimated or assumed.
          </p>
          <div className={s.queryGrid}>
            {TARGET_QUERIES.map((q) => (
              <span className={s.queryTag} key={q}>
                <em className={s.queryTagIcon}>→</em>
                {q}
              </span>
            ))}
          </div>
        </div>

        <div className={s.disclaimerBox}>
          <strong>No ranking is guaranteed.</strong> AI recommendations vary by query
          wording, platform, search mode, user context and time. Reaching Top 3 for a
          documented set of carefully selected prompts is an aspiration and a direction
          — not a promise. This case study will document the actual journey, including
          any queries where the goal is not achieved or where results fluctuate.
        </div>
      </div>

      {/* ══════════════════════════════════════
          F. IMPLEMENTATION TIMELINE
      ══════════════════════════════════════ */}
      <div className={s.sectionAlt}>
        <div className={s.sectionAltInner}>
          <p className={s.eyebrow}><span className={s.eyebrowDot} /> Implementation evidence</p>
          <h2 className={s.sectionTitle}>
            What has been done.<br /><em>What is still in progress.</em>
          </h2>
          <p className={s.sectionLead}>
            Status reflects actual project progress only. Completed stages have
            supporting evidence. Pending stages have not yet started.
          </p>

          <div className={s.timeline}>
            {TIMELINE.map(({ phase, title, body, status }) => (
              <div className={s.timelineItem} key={phase}>
                <div className={s.timelineLeft}>
                  <span className={s.timelinePhase}>{phase}</span>
                </div>
                <div className={s.timelineLine}>
                  <div className={`${s.timelineDot} ${status === 'pending' ? s.timelineDotPending : ''}`} />
                </div>
                <div className={s.timelineRight}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Status type={status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          G. RESULTS & LEARNINGS
      ══════════════════════════════════════ */}
      <div className={s.section}>
        <p className={s.eyebrow}><span className={s.eyebrowDot} /> Results & learnings</p>
        <h2 className={s.sectionTitle}>
          Results will be published<br /><em>after testing.</em>
        </h2>
        <p className={s.sectionLead}>
          This section will be updated with real findings once the first full testing
          round is complete. Everything published here will include the method,
          the sample, the date and the platform context.
        </p>

        <div className={s.resultsBox}>
          <div className={s.resultsIcon}>📋</div>
          <h3>Awaiting first documented test round</h3>
          <p>
            Baseline measurement, platform-specific findings, verified citations and
            lessons learned will appear here once the initial prompt-testing cycle is
            complete. No data will be published without a date, method and evidence.
          </p>
          <div className={s.resultsMeta}>
            {[
              'Actual baseline',
              'Changes implemented',
              'Retest date',
              'Platform-specific findings',
              'Verified citations',
              'Lessons learned',
            ].map((item) => (
              <span className={s.resultsMetaItem} key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
      <div className="cta-band">
        <h2>Interested in GEO for<br />your own website?</h2>
        <p style={{ color: '#716b64', maxWidth: '540px', margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.75' }}>
          I apply the same structured, evidence-based approach to client work. No
          fabricated scores, no guaranteed rankings — just honest, documented strategy.
        </p>
        <Link href="/geo-audit" className="button button-dark">
          Request a GEO audit ↗
        </Link>
      </div>
    </>
  );
}
