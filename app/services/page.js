import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import {services} from '@/lib/content';
import styles from './services.module.css';

export const metadata={
  title:'AI Visibility, GEO & AEO Services',
  description:'AI visibility score audit, ChatGPT and Gemini analysis, GEO and AEO recommendations, and AI-ready content optimization by Rehmat Ali.'
};

const packages=[
  {name:'Basic',score:'30+',platforms:'Check the Fiverr gig for this package’s platform coverage.'},
  {name:'Standard',score:'50+',platforms:'ChatGPT + Gemini'},
  {name:'Premium',score:'70+',platforms:'ChatGPT + Gemini'}
];

const audiences=['Business websites','eCommerce stores','Blogs and affiliate sites','SaaS and startups','Digital agencies'];

const questions=[
  ['What information should I provide to start?','Share your website URL, business name, main products or services, target audience and up to three competitors. This helps focus the audit on your real customers and market.'],
  ['How is the AI Visibility Score measured?','The score depends on the measurement tool and test method. The review uses relevant prompts across the platforms in scope and records brand mentions, visibility and available citations. Any third-party score tool used should be named in the report.'],
  ['Can you guarantee a score, ranking or AI recommendation?','No. ChatGPT, Gemini, Claude and Perplexity control their own responses. Package scores are targets tied to a measurement tool, not guaranteed outcomes; mentions and rankings cannot be promised.'],
  ['Which AI platforms are included?','The service can assess ChatGPT, Gemini, Claude and Perplexity, depending on the package and agreed scope. Standard and Premium packages specify ChatGPT and Gemini; confirm Basic coverage on the Fiverr gig before ordering.'],
  ['How long does it take to see results?','The audit and report are delivered within the selected package’s stated delivery time. Search platforms may take longer to reflect website changes, and timing varies by site and platform.']
];

export default function Services(){
  return <>
    <PageIntro
      eyebrow="GEO · AEO · AI visibility"
      title="AI visibility, GEO and AEO services."
      description="Get an AI visibility audit, ChatGPT and Gemini analysis, and a practical GEO/AEO improvement plan. Score targets depend on the measurement tool and are not guarantees."
    />
    <section className={styles.deliverables}>
      <div className={styles.sectionIntro}>
        <p className="eyebrow">What the service includes</p>
        <h2>A clear review, useful recommendations and next steps.</h2>
      </div>
      <div className={styles.deliverableGrid}>
        {services.map(([title,description],index)=>(
          <article className={styles.deliverable} key={title}>
            <span>0{index+1}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
    <section className={styles.packages}>
      <div className={styles.sectionIntro}>
        <p className="eyebrow">Fiverr packages</p>
        <h2>Choose the target and platform scope that fit your needs.</h2>
        <p>These are tool-dependent target scores, not a universal industry benchmark or a promise of results. Confirm the measurement tool and package coverage on Fiverr before ordering.</p>
      </div>
      <div className={styles.packageGrid}>
        {packages.map(({name,score,platforms})=>(
          <article className={styles.package} key={name}>
            <p className="eyebrow">{name}</p>
            <p className={styles.score}>{score}<span> target score</span></p>
            <p>{platforms}</p>
          </article>
        ))}
      </div>
      <div className={styles.platforms}>
        <strong>Platforms available for assessment:</strong>
        <span>ChatGPT</span><span>Google Gemini</span><span>Claude</span><span>Perplexity</span>
        <p>Exact platform coverage depends on the package and agreed test scope.</p>
      </div>
    </section>
    <section className={styles.audience}>
      <div className={styles.sectionIntro}>
        <p className="eyebrow">Who this helps</p>
        <h2>Built for websites that need to be understood in AI search.</h2>
      </div>
      <ul>{audiences.map(audience=><li key={audience}>{audience}</li>)}</ul>
    </section>
    <section className={styles.fiverr}>
      <div className={styles.fiverrIntro}>
        <p className="eyebrow">Order through Fiverr</p>
        <h2>Know the scope before you order.</h2>
        <p>Review the package details and delivery terms on Fiverr, then keep your website details, project messages and report together in the order workflow.</p>
        <a className="button button-orange" href="https://www.fiverr.com/s/3AeD2ZY" target="_blank" rel="noopener noreferrer">View the Fiverr gig ↗</a>
        <a className={styles.profileLink} href="https://www.fiverr.com/s/7j12Wa1" target="_blank" rel="noopener noreferrer">View Rehmat’s Fiverr profile ↗</a>
      </div>
      <div className={styles.fiverrBenefits}>
        <h3>Why order on Fiverr?</h3>
        <ul>
          <li>Compare the Basic, Standard and Premium scope before checkout.</li>
          <li>Confirm included platforms and delivery time on the package page.</li>
          <li>Keep the project brief, messages and file handoff with the order.</li>
        </ul>
        <p>Have a question before ordering? <a href="https://www.fiverr.com/s/7j12Wa1" target="_blank" rel="noopener noreferrer">Message me on Fiverr</a>.</p>
      </div>
    </section>
    <section className={styles.faq}>
      <div className={styles.faqInner}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Common client questions</p>
          <h2>Quick answers before you start.</h2>
        </div>
        <div className={styles.faqList}>
          {questions.map(([question,answer])=>(
            <details key={question}>
              <summary><h2>{question}</h2></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
    <section className="cta-band">
      <p className="eyebrow">Ready to begin?</p>
      <h2>Share your website and the questions your customers ask.</h2>
      <a className="button button-dark" href="https://www.fiverr.com/s/3AeD2ZY" target="_blank" rel="noopener noreferrer">Order on Fiverr ↗</a>
      <p className={styles.fiverrMessage}>Have a question? <a href="https://www.fiverr.com/s/7j12Wa1" target="_blank" rel="noopener noreferrer">Message me on Fiverr</a>.</p>
    </section>
  </>;
}