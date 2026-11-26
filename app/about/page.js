import Link from 'next/link';
import Image, {getImageProps} from 'next/image';
import PageIntro from '@/components/PageIntro';
import styles from './about.module.css';

export const metadata = {
  title: 'Who is Rehmat Ali?',
  description: 'Meet Rehmat Ali, a Lahore-based GEO and AEO consultant helping businesses improve how they are understood across AI-powered search.'
};

const questions = [
  [
    'What does Rehmat Ali help businesses with?',
    'I review how clearly a website explains its business, services and expertise, then recommend practical improvements. Depending on the project, that can include GEO and AEO content, technical accessibility, entity clarity and AI visibility tracking.'
  ],
  [
    'What is an AI Visibility Score?',
    'There is no single industry-wide score shared by ChatGPT, Gemini, Perplexity and Claude. I measure defined signals—such as brand mentions, cited pages and answer accuracy—against an agreed prompt set, platform list and test date. Any combined score should explain its method and sample.'
  ],
  [
    'Can you guarantee that AI platforms will mention or recommend my business?',
    'No. AI answers change by question, platform and time, and no consultant can guarantee a mention or recommendation. The work focuses on making your website clearer, more useful and easier to assess, then documenting what changes in the agreed tests.'
  ],
  [
    'How do you measure whether the work is helping?',
    'We start with a baseline, then repeat the same relevant prompts on the agreed platforms and record mentions, citations and answer context. Where available, we can also review search impressions, visits and other business measures. Results are reported with the test method and its limits.'
  ],
  [
    'How is GEO different from traditional SEO?',
    'SEO supports discovery in search results through accessible pages, useful content and sound site foundations. GEO looks more closely at how a business and its information are understood or cited in generated answers. The practices overlap; GEO does not replace SEO.'
  ],
  [
    'Which AI search platforms can you assess?',
    'The platform list depends on your audience and project scope. It may include ChatGPT, Google Gemini, Perplexity and Claude. I record which products and test conditions were used so the observations are clear and repeatable.'
  ]
];

const mobilePortrait=getImageProps({
  src:'/assets/hero-mobile.webp',
  width:1024,
  height:1536,
  alt:'Rehmat Ali reviewing information on a tablet',
  sizes:'100vw',
  quality:75
});

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Rehmat Ali"
        title="Hi, I’m Rehmat Ali."
        description="I’m a Lahore-based GEO and AEO consultant. I help businesses improve how their websites are discovered and understood across AI-powered search platforms, including ChatGPT, Google Gemini, Perplexity and Claude."
      />
      <section className={styles.profile}>
        <picture className={styles.portrait}>
          <source media="(max-width: 640px)" srcSet={mobilePortrait.props.srcSet} sizes={mobilePortrait.props.sizes} />
          <Image
            src="/assets/hero.webp"
            alt="Rehmat Ali reviewing information on a tablet"
            width={1672}
            height={941}
            sizes="(max-width: 640px) 100vw, 45vw"
            quality={75}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className={styles.copy}>
          <p className="eyebrow">What I focus on</p>
          <h2>Clear answers, useful content and measurable observations.</h2>
          <p>
            My work brings together Generative Engine Optimization (GEO), Answer
            Engine Optimization (AEO) and practical SEO foundations. I look at
            whether important pages are accessible, services are easy to
            distinguish, customer questions get useful answers and key claims
            have supporting evidence.
          </p>
          <p>
            I focus on observable signals such as brand mentions, citations and
            how accurately a platform describes a business. Because there is no
            universal AI visibility score, I define the prompts, platforms and
            dates behind each review instead of presenting an unexplained
            number.
          </p>
          <p>
            Recommendations are based on the website and evidence reviewed.
            They are intended to improve discoverability—not promise a ranking,
            citation or recommendation.
          </p>
          <Link className="button button-orange" href="/services">Explore services ↗</Link>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqIntro}>
            <p className="eyebrow">Questions clients ask</p>
            <h2>Straight answers about GEO and AI visibility.</h2>
          </div>
          <div className={styles.faqList}>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary><h2>{question}</h2></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.skillsIntro}>
          <p className="eyebrow">Other skills</p>
          <h2>Additional skills I bring to digital projects.</h2>
        </div>
        <div className={styles.skillsGrid}>
          <article>
            <h3>MERN stack development</h3>
            <p>
              I have experience with MongoDB, Express.js, React and Node.js for
              building full-stack web applications, from interactive interfaces
              to server-side features.
            </p>
          </article>
          <article>
            <h3>AI-supported workflows</h3>
            <p>
              I use AI tools to assist with research, ideation and content
              workflows, then review the output for clarity, accuracy and fit.
            </p>
          </article>
          <article>
            <h3>UGC-style AI video ads</h3>
            <p>
              I create short, creator-style AI video ads that introduce a
              product, explain its benefits and give brands social-ready
              creative options.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
