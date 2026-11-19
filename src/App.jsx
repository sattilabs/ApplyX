import React from 'react';import {motion} from 'framer-motion';
import {Routes,Route,useLocation} from 'react-router-dom';import {useEffect} from 'react';
import {GuidesPage,GuidePage,ServicePage,MarketPage} from './more.jsx';import {Nav,Footer,ToTop,WaFloat,Progress,useSEO} from './ui.jsx';import * as P from './pages.jsx';
const Page=({t,d,children})=>{useSEO(t,d);return <motion.div initial={{opacity:0,y:12,scale:.995}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.45,ease:[.2,.7,.2,1]}}>{children}</motion.div>};
const Home=()=><Page t="ApplyX by SATTILABS | Job Application Management & Career Support" d="Job search management, ATS-optimized resumes, daily applications and interview support for international job seekers."><P.Hero/><P.Value/><P.About/><P.Services/><P.Steps/><P.Audience/><P.Global/><P.Why/><P.Pricing/><P.Testimonials/><P.FAQs/><P.Contact/></Page>;
const mk=(t,d,...C)=>()=><Page t={`${t} | ApplyX`} d={d}>{C.map((X,i)=><X key={i}/>)}</Page>;
export default function App(){const {pathname,hash}=useLocation();useEffect(()=>{if(hash){setTimeout(()=>document.querySelector(hash)?.scrollIntoView({behavior:'smooth'}),60)}else scrollTo(0,0)},[pathname,hash]);
 return <><Progress/><Nav/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={React.createElement(mk('About Us','About ApplyX by SATTILABS, a career support and job application management service.',P.About,P.Value,P.Why))}/>
 <Route path="/services" element={React.createElement(mk('Services','Job application assistance, resume optimization and career support services.',P.Services,P.Steps))}/>
 <Route path="/pricing" element={React.createElement(mk('Pricing','Customized career support plans from ApplyX.',P.Pricing,P.FAQs))}/>
 <Route path="/contact" element={React.createElement(mk('Contact Us','Book a free consultation with ApplyX.',P.Contact))}/>
 <Route path="/privacy" element={React.createElement(mk('Privacy Policy','ApplyX privacy policy.',P.Privacy))}/><Route path="/terms" element={React.createElement(mk('Terms and Conditions','ApplyX terms, conditions and disclaimer.',P.Terms))}/>
 <Route path="/guides" element={<GuidesPage/>}/><Route path="/guides/:id" element={<GuidePage/>}/><Route path="/services/:id" element={<ServicePage/>}/><Route path="/markets/:id" element={<MarketPage/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/><ToTop/><WaFloat/></>}
