-- After creating your owner account at /auth, run this once in Supabase SQL Editor.
-- Replace the email with the exact owner email.
update public.profiles p set role='admin' from auth.users u where p.id=u.id and lower(u.email)=lower('YOUR-OWNER-EMAIL@example.com');
