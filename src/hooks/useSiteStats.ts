import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const BASE = { repairs: 100, clients: 500 };

/** Live counters: the published baseline plus every completed repair / registered client in the database. */
export const useSiteStats = () => {
  const [stats, setStats] = useState(BASE);
  useEffect(() => {
    (supabase.rpc as unknown as (f: string) => Promise<{ data: { repairs_completed: number; clients: number } | null }>)("get_site_stats")
      .then(({ data }) => {
        if (data) setStats({ repairs: BASE.repairs + Number(data.repairs_completed || 0), clients: BASE.clients + Number(data.clients || 0) });
      })
      .catch(() => {});
  }, []);
  return stats;
};
