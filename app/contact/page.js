import PageIntro from '@/components/PageIntro';
export const metadata={
  title:'Contact',
  description:'Message Rehmat Ali on Fiverr to discuss an AI visibility audit, GEO or AEO project.'
};
export default function Contact(){
  return <>
    <PageIntro
      eyebrow="Contact Rehmat Ali"
      title="Message me on Fiverr."
      description="Share your website, business name, main services, target audience and up to three competitors to start an AI visibility discussion."
    />
    <section className="content-section two-col">
      <div>
        <p className="eyebrow">Choose how to reach me</p>
        <h2>Ask a question or place your order through Fiverr.</h2>
        <p className="muted">Message me through my Fiverr profile to discuss your website and goals. For package details and delivery terms, use the gig page.</p>
      </div>
      <div className="contact-panel">
        <p><span>Fiverr profile</span><a href="https://www.fiverr.com/s/7j12Wa1" target="_blank" rel="noopener noreferrer">Message Rehmat Ali on Fiverr ↗</a></p>
        <p><span>Location</span><b>Lahore, Pakistan · Remote collaboration</b></p>
        <a className="button button-orange" href="https://www.fiverr.com/s/3AeD2ZY" target="_blank" rel="noopener noreferrer">View the Fiverr gig ↗</a>
      </div>
    </section>
  </>;
}