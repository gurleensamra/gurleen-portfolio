import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist/client');
const base=(process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/,'');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2','.rsc':'text/x-component'};
createServer(async(req,res)=>{
 try {
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(base){if(pathname!==base&&!pathname.startsWith(base+'/')){res.writeHead(404);res.end('Not found');return;}pathname=pathname.slice(base.length)||'/';}
  let path=resolve(root,'.'+pathname);
  if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
  if(pathname.endsWith('/'))path=resolve(path,'index.html');
  try{if((await stat(path)).isDirectory())path=resolve(path,'index.html');}catch{if(!extname(path))path+='.html';}
  let data;let status=200;
  try{data=await readFile(path);}catch{path=resolve(root,'404.html');data=await readFile(path);status=404;}
  res.writeHead(status,{'Content-Type':mime[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);
 }catch{res.writeHead(500);res.end('Build the portfolio first with npm run build.');}
}).listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log(`Portfolio preview: http://127.0.0.1:${process.env.PORT||4173}${base}/`));
