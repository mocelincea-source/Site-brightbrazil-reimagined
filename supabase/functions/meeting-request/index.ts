const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1nqa6UdyWjrQQZSqw5JBmdfgVJqU4LZOe1UtY86ac_p4";
const RANGE = "'Página1'!A:E";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    const sheetsKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!lovableApiKey || !sheetsKey) {
      return new Response(JSON.stringify({ error: "Integração não configurada" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, company, esg, email } = await req.json();

    const str = (v: unknown, min = 2, max = 200) =>
      typeof v === "string" && v.trim().length >= min && v.trim().length <= max;

    if (!str(name, 2, 120)) {
      return new Response(JSON.stringify({ error: "Nome inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!str(company, 2, 160)) {
      return new Response(JSON.stringify({ error: "Empresa inválida" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!str(esg, 2, 500)) {
      return new Response(JSON.stringify({ error: "Interesse em ESG inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      return new Response(JSON.stringify({ error: "E-mail inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    const response = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": sheetsKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[name.trim(), company.trim(), esg.trim(), email.trim(), timestamp]],
        }),
      },
    );

    if (!response.ok) {
      const details = await response.text();
      console.error(`Sheets append failed [${response.status}]: ${details}`);
      return new Response(
        JSON.stringify({ error: "Falha ao registrar solicitação", status: response.status, details }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("meeting-request error:", e);
    return new Response(JSON.stringify({ error: "Erro inesperado" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
