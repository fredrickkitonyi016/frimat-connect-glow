CREATE TABLE public.devices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL,
  device_type text NOT NULL DEFAULT '',
  model text NOT NULL DEFAULT '',
  serial_no text NOT NULL DEFAULT '',
  installed_on date,
  warranty_expires_at date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.devices TO authenticated;
GRANT ALL ON public.devices TO service_role;
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View devices" ON public.devices FOR SELECT TO authenticated USING (client_id = auth.uid() OR has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Add devices" ON public.devices FOR INSERT TO authenticated WITH CHECK (client_id = auth.uid() OR has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Edit devices" ON public.devices FOR UPDATE TO authenticated USING (client_id = auth.uid() OR has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff')) WITH CHECK (client_id = auth.uid() OR has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Remove devices" ON public.devices FOR DELETE TO authenticated USING (client_id = auth.uid() OR has_role(auth.uid(),'admin'));
CREATE TRIGGER devices_updated BEFORE UPDATE ON public.devices FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_number text NOT NULL DEFAULT ('QTE-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  client_id uuid NOT NULL,
  description text NOT NULL,
  amount_ksh numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'PENDING',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.quotes TO authenticated;
GRANT ALL ON public.quotes TO service_role;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View quotes" ON public.quotes FOR SELECT TO authenticated USING (client_id = auth.uid() OR has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Staff create quotes" ON public.quotes FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Staff edit quotes" ON public.quotes FOR UPDATE TO authenticated USING (has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff')) WITH CHECK (has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff'));
CREATE POLICY "Admins delete quotes" ON public.quotes FOR DELETE TO authenticated USING (has_role(auth.uid(),'admin'));
CREATE TRIGGER quotes_updated BEFORE UPDATE ON public.quotes FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.ticket_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id uuid NOT NULL REFERENCES public.service_records(id) ON DELETE CASCADE,
  sender_id uuid NOT NULL,
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;
GRANT ALL ON public.ticket_messages TO service_role;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View ticket messages" ON public.ticket_messages FOR SELECT TO authenticated USING (
  has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff') OR EXISTS (SELECT 1 FROM public.service_records r WHERE r.id = record_id AND r.client_id = auth.uid()));
CREATE POLICY "Send ticket messages" ON public.ticket_messages FOR INSERT TO authenticated WITH CHECK (
  sender_id = auth.uid() AND length(body) BETWEEN 1 AND 2000 AND (has_role(auth.uid(),'admin') OR has_role(auth.uid(),'staff') OR EXISTS (SELECT 1 FROM public.service_records r WHERE r.id = record_id AND r.client_id = auth.uid())));
ALTER PUBLICATION supabase_realtime ADD TABLE public.ticket_messages;

CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL,
  record_id uuid REFERENCES public.service_records(id) ON DELETE SET NULL,
  display_name text NOT NULL DEFAULT '',
  rating int NOT NULL DEFAULT 5,
  comment text NOT NULL DEFAULT '',
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View reviews" ON public.reviews FOR SELECT TO authenticated USING (approved OR client_id = auth.uid() OR has_role(auth.uid(),'admin'));
CREATE POLICY "Clients submit reviews" ON public.reviews FOR INSERT TO authenticated WITH CHECK (client_id = auth.uid() AND approved = false AND rating BETWEEN 1 AND 5 AND length(comment) <= 1000);
CREATE POLICY "Admins moderate reviews" ON public.reviews FOR UPDATE TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));
CREATE POLICY "Admins delete reviews" ON public.reviews FOR DELETE TO authenticated USING (has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.respond_quote(_quote_id uuid, _accept boolean)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.quotes SET status = CASE WHEN _accept THEN 'APPROVED' ELSE 'REJECTED' END
  WHERE id = _quote_id AND client_id = auth.uid() AND status = 'PENDING';
  IF NOT FOUND THEN RAISE EXCEPTION 'Quote not found or already answered'; END IF;
END; $$;
REVOKE ALL ON FUNCTION public.respond_quote(uuid, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.respond_quote(uuid, boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.log_purchase_invoice(_description text, _amount numeric, _reference text)
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n text;
BEGIN
  IF auth.uid() IS NULL OR _amount <= 0 OR _amount > 10000000 THEN RAISE EXCEPTION 'Invalid purchase'; END IF;
  INSERT INTO public.invoices (client_id, description, amount_ksh, payment_status, transaction_reference)
  VALUES (auth.uid(), left(_description, 200), _amount, 'PENDING CONFIRMATION', left(coalesce(_reference,''), 100))
  RETURNING invoice_number INTO n;
  RETURN n;
END; $$;
REVOKE ALL ON FUNCTION public.log_purchase_invoice(text, numeric, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.log_purchase_invoice(text, numeric, text) TO authenticated;