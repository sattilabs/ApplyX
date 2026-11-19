import {Link} from 'react-router-dom';import {ArrowRight,ArrowUpRight,Check,X,MapPin,Target,ShieldCheck,Sparkles} from 'lucide-react';
import {slug} from './content.js';import {C,values,services,steps,audiences,markets,why,wa} from './config.js';import {S,Reveal,FAQ,Carousel,Form,useSEO} from './ui.jsx';
import {Tilt3D,CareerScene,CareerGlobe} from './three-d.jsx';
export const Hero=()=>(
  <section className="hero-3d relative overflow-hidden">
    <div className="hero-grid" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-5 pb-10 pt-16 md:py-24 lg:min-h-[665px] lg:grid-cols-2 lg:gap-2">
      <Reveal>
        <p className="hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-2 text-sm font-semibold text-royal">
          <Sparkles size={15}/>{C.tagline}
        </p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight md:text-6xl">
          Your Next Career Move Starts With <span className="hero-title-grad">ApplyX.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
          From strategic job searches and ATS-optimized resumes to daily applications and interview support, we manage the work behind your job search so you can focus on getting hired.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-p">Get Started <ArrowRight size={18}/></Link>
          <Link to="/services" className="btn-o">Explore Our Services</Link>
        </div>
        <div className="hero-trust">
          <span><Target size={15}/> Targeted applications</span>
          <span><ShieldCheck size={15}/> Transparent tracking</span>
          <span><Check size={15}/> Personal support</span>
        </div>
      </Reveal>
      <Reveal className="w-full" i={1}><CareerScene/></Reveal>
    </div>
  </section>
);
export const Value=()=>(
  <S tone="white" eyebrow="Why ApplyX" title="More Than Job Applications. A Career Support Partner." sub="We help you manage the complete job-search process, from strategy to follow-up.">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map(([Icon,title,description],i)=>(
        <Reveal key={title} i={i} className="h-full">
          <Tilt3D className="h-full" strength={5}>
            <div className="card card-3d h-full">
              <span className="card-icon-3d mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal"><Icon size={26}/></span>
              <h3 className="mb-2 font-bold">{title}</h3><p className="text-sm leading-relaxed text-navy/70">{description}</p>
            </div>
          </Tilt3D>
        </Reveal>
      ))}
    </div>
  </S>
);
export const About=()=>(
  <S tone="light" id="about" eyebrow="About ApplyX" title="Your Career Deserves a Dedicated Team." sub="ApplyX, powered by SATTILABS, is a career support and job application management service designed to simplify the job-search journey. We combine personalized guidance, strategic job targeting and hands-on application support to help candidates navigate competitive employment markets.">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        ['Our Mission','Make professional job-search support organized, transparent and accessible.'],
        ['Our Approach','Understand the candidate, target deliberately, execute consistently and report openly.'],
        ['Our Commitment','Honest communication, careful handling of your information and no unrealistic promises.'],
        ['International Vision','Support candidates aiming at markets across North America, the UK, Europe and Australia.']
      ].map(([title,description],i)=>(
        <Reveal key={title} i={i} className="h-full">
          <Tilt3D className="h-full" strength={4}>
            <div className="card card-3d h-full"><h3 className="mb-2 font-bold text-royal">{title}</h3><p className="text-sm leading-relaxed text-navy/70">{description}</p></div>
          </Tilt3D>
        </Reveal>
      ))}
    </div>
  </S>
);
export const Services=()=>(
  <S id="services" tone="white" eyebrow="Our Services" title="Complete Job Application Management" sub="Twelve ways we support your search.">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(([Icon,title,description],i)=>(
        <Reveal key={title} i={i} className="h-full">
          <Tilt3D className="h-full" strength={5}>
            <Link to={`/services/${slug(title)}`} className="card card-3d block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal">
              <span className="card-icon-3d mb-4 grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal"><Icon size={24}/></span>
              <ArrowUpRight className="card-arrow-3d" size={20} aria-hidden="true"/>
              <h3 className="mb-2 font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-navy/70">{description}</p>
            </Link>
          </Tilt3D>
        </Reveal>
      ))}
    </div>
    <div className="mt-14 text-center"><h3 className="mb-4 text-2xl font-bold">Let Us Take Your Job Search Forward.</h3><Link to="/contact" className="btn-p">Discuss Your Career Goals</Link></div>
  </S>
);
export const Steps=()=>(
  <S id="how" tone="navy" eyebrow="How It Works" title="A Clear Five-Step Process">
    <ol className="journey-grid">
      {steps.map(([title,description],i)=>(
        <li key={title} className="h-full">
          <Reveal i={i} className="h-full">
            <div className="journey-step h-full">
              <span className="journey-step-number">{String(i+1).padStart(2,'0')}</span>
              <h3>{title}</h3><p>{description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
    <p className="journey-note">From your first conversation to ongoing application and interview support, every stage stays clear and structured.</p>
  </S>
);
export const Audience=()=>(
  <S tone="light" eyebrow="Who We Serve" title="Wherever You Are in Your Career, We Help You Move Forward.">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {audiences.map(([Icon,title,description],i)=>(
        <Reveal key={title} i={i} className="h-full">
          <Tilt3D className="h-full" strength={4}>
            <div className="card card-3d h-full"><span className="card-icon-3d mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal"><Icon size={26}/></span><h3 className="mb-2 font-bold">{title}</h3><p className="text-sm leading-relaxed text-navy/70">{description}</p></div>
          </Tilt3D>
        </Reveal>
      ))}
    </div>
  </S>
);
export const Global=()=>(
  <S tone="white" eyebrow="Global Career Support" title="Your Ambition Has No Borders." sub="Support depends on role eligibility, location, work authorization and client preferences. ApplyX does not provide immigration or visa sponsorship services and does not guarantee overseas employment.">
    <div className="global-layout">
      <Reveal><CareerGlobe/></Reveal>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {markets.map((market,i)=>(
          <Reveal key={market} i={i} className="h-full">
            <Tilt3D className="h-full" strength={5}>
              <Link to={`/markets/${slug(market)}`} className="card card-3d global-market-card flex h-full items-center gap-2 !p-4 sm:gap-3 sm:!p-5">
                <MapPin className="shrink-0 text-electric" size={20}/>
                <span className="text-sm font-semibold sm:text-base">{market}</span>
              </Link>
            </Tilt3D>
          </Reveal>
        ))}
      </div>
    </div>
  </S>
);
export const Why=()=>(
  <S tone="navy" eyebrow="Why ApplyX" title="Stop Managing Your Job Search Alone.">
    <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
      {why.map((item,i)=><Reveal key={item} i={i}><div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"><Check className="shrink-0 text-electric"/>{item}</div></Reveal>)}
    </div>
  </S>
);
export const Pricing=({full})=>{const p=C.pricing;return <S id="pricing" tone="light" eyebrow="Pricing & Plans" title={p.headline} sub={p.note}><div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"><div className="card relative overflow-hidden border-royal/30 shadow-xl shadow-royal/10"><div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-royal via-electric to-royal"/><h3 className="mb-1 text-lg font-bold">{p.duration}</h3>{p.amount&&<p className="text-4xl font-extrabold">{p.currency}{p.amount}<span className="ml-2 text-sm font-medium text-navy/60">{p.unit}</span></p>}<p className="mb-2 text-sm text-navy/60">{p.successFee}</p><p className="mb-4 text-sm text-navy/60">{p.hours}</p><ul className="space-y-2 text-sm">{p.included.map(i=><li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-royal"/>{i}</li>)}</ul><Link to="/contact" className="btn-p mt-6 w-full">Request Pricing</Link></div><div className="card"><h3 className="mb-4 text-lg font-bold">Not included</h3><ul className="space-y-2 text-sm">{p.excluded.map(i=><li key={i} className="flex gap-2"><X size={16} className="mt-0.5 shrink-0 text-navy/40"/>{i}</li>)}</ul></div></div></S>};
export const Testimonials=()=><S tone="white" eyebrow="Testimonials" title="Client Voices" sub="Placeholders below will be replaced with verified client testimonials."><Carousel/></S>;
export const FAQs=()=><S id="faq" tone="light" eyebrow="FAQs" title="Frequently Asked Questions"><FAQ/></S>;
export const Contact=()=><S id="contact" tone="navy" title="Your Next Opportunity Could Start With One Conversation." sub="Tell us about your career goals. Our team will help you understand how ApplyX can support your job-search journey."><div className="contact-3d mx-auto max-w-4xl"><Form/>{C.bookingUrl&&<div className="mt-6 text-center"><a href={C.bookingUrl} target="_blank" rel="noreferrer" className="btn-p">Book a Time Slot</a></div>}<p className="mt-6 text-center text-sm text-white/70">Phone {C.phone} · {C.email} · {C.pricing.hours}</p></div></S>;
const Doc=({title,children})=><S tone="white" title={title}><div className="mx-auto max-w-3xl space-y-4 text-navy/80">{children}<p className="text-sm italic text-navy/50">Template text: have it reviewed by a legal professional before publishing.</p></div></S>;
export const Privacy=()=><Doc title="Privacy Policy"><p>ApplyX by SATTILABS collects only the information you choose to share (such as name, email, phone, resume and career preferences) to provide job-application support and respond to inquiries.</p><p>We do not sell your personal information. We share it with employers or platforms only as needed to submit applications you have approved. This website has no accounts and does not store form submissions; the contact form opens your email or WhatsApp app.</p><p>Contact us at {C.email} to request access, correction or deletion of your information.</p></Doc>;
export const Terms=()=><Doc title="Terms and Conditions"><p>ApplyX provides job application assistance and career support. Services, fees and any success-based fee are governed by the written agreement between you and ApplyX.</p><p>You agree to provide accurate information and are responsible for the truthfulness of your resume and credentials.</p><h3 id="disclaimer" className="pt-4 text-xl font-bold text-navy">Disclaimer</h3><p>ApplyX does not guarantee interviews, job offers or employment. Hiring decisions rest solely with employers. We do not provide immigration, visa or legal advice. Availability depends on role eligibility, location, work authorization and client preferences.</p></Doc>;
export const PageHead=({t,s})=><section className="pagehead-3d px-5 py-20 text-center"><Reveal><span className="mb-4 inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-royal"><Sparkles size={14}/> ApplyX by SATTILABS</span><h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">{t}</h1>{s&&<p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">{s}</p>}</Reveal></section>;
export {useSEO};
