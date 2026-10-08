REVOKE EXECUTE ON FUNCTION public.bootstrap_current_user(text, text, text, text) FROM public, anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.bootstrap_current_user(text, text, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;