'use client';
import { useSyncExternalStore, type ReactNode } from 'react';
let fallback=false;
function subscribe(callback:()=>void){window.addEventListener('storage',callback);window.addEventListener('portfolio-theme',callback);return()=>{window.removeEventListener('storage',callback);window.removeEventListener('portfolio-theme',callback);};}
function snapshot(){try{return localStorage.getItem('gurleen-night')==='true';}catch{return fallback;}}
export default function VsdTheme({children}:{children:ReactNode}){
 const night=useSyncExternalStore(subscribe,snapshot,()=>false);
 function toggle(){fallback=!night;try{localStorage.setItem('gurleen-night',String(!night));}catch{}window.dispatchEvent(new Event('portfolio-theme'));}
 return <main className={`vsd-page${night?' vsd-night':''}`}>
  <div className="vsd-theme-toolbar"><button type="button" className="vsd-theme-toggle" aria-label="Toggle night mode" aria-pressed={night} onClick={toggle}><span>{night?'Night':'Day'}</span><span className="vsd-toggle-track" aria-hidden="true"><i/></span></button></div>
  {children}
 </main>;
}
