CREATE OR REPLACE FUNCTION public.admin_set_role(_user_id uuid, _role app_role, _grant boolean)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Admin only'; END IF;
  IF _grant THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (_user_id, _role) ON CONFLICT (user_id, role) DO NOTHING;
  ELSE
    IF _user_id = auth.uid() AND _role = 'admin' THEN RAISE EXCEPTION 'Cannot remove your own admin role'; END IF;
    DELETE FROM public.user_roles WHERE user_id = _user_id AND role = _role;
  END IF;
END; $$;
REVOKE ALL ON FUNCTION public.admin_set_role(uuid, app_role, boolean) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.admin_set_role(uuid, app_role, boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.get_site_stats()
RETURNS json LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT json_build_object(
    'repairs_completed', (SELECT count(*) FROM public.service_records WHERE status = 'COMPLETED'),
    'clients', (SELECT count(*) FROM public.profiles)
  )
$$;
GRANT EXECUTE ON FUNCTION public.get_site_stats() TO anon, authenticated;