import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{brand:'#df4f8d',ink:'#291b24',cream:'#fffaf7',blush:'#f8dce8'},fontFamily:{display:['Georgia','serif'],sans:['Arial','sans-serif']},boxShadow:{soft:'0 20px 60px rgba(41,27,36,.10)'}}},plugins:[] } satisfies Config;
