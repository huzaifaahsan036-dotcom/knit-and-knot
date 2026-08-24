import { createClient } from '@supabase/supabase-js';
const url=process.env.NEXT_PUBLIC_SUPABASE_URL||'https://rwpwnhfbdofrqpgcadao.supabase.co';
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_cYvSX_RUVq3b0kjn05oc3A_OO0hP0qe';
export const supabase=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
export const publicImage=(path?:string|null)=>{if(!path)return null;if(path.startsWith('http'))return path;const bucket=path.startsWith('product-images/')?'product-images':path.startsWith('category-images/')?'category-images':'website-images';const clean=path.replace(/^product-images\/|^category-images\/|^website-images\//,'');return `${url}/storage/v1/object/public/${bucket}/${clean}`};
