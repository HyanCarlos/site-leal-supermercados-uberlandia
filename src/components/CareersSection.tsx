import { useState } from "react";
import { Briefcase, CheckCircle2, Mail, Send } from "lucide-react";
import { STORES } from "../data/stores";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function CareersSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [unit, setUnit] = useState(STORES[0].neighborhood);
  const [role, setRole] = useState("Operador(a) de Caixa");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError("Informe seu nome completo para simular o cadastro.");
      return;
    }
    if (phone.trim().length < 8) {
      setError("Informe um telefone para contato.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="trabalhe-conosco" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Institutional Info */}
          <div className="lg:col-span-6 space-y-5">
            <Badge variant="red">
              <Briefcase className="h-3.5 w-3.5" />
              Trabalhe Conosco
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Faça parte da equipe Supermercados Leal
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Com 10 supermercados em Uberlândia, o Leal gera oportunidades em
              atendimento, caixa, açougue, padaria, hortifrúti, reposição e
              logística.
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 space-y-3">
              <p className="text-sm font-bold text-zinc-900">
                Canais oficiais de currículo divulgados pela rede:
              </p>
              <a
                href="mailto:rh@supermercadoleal.com.br?subject=Curr%C3%ADculo%20-%20Supermercados%20Leal%20Uberl%C3%A2ndia"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-2.5 text-sm font-bold text-[#DC1F26] shadow-xs hover:bg-red-50 transition"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                rh@supermercadoleal.com.br
              </a>
              <p className="text-xs text-zinc-600">
                Você também pode entregar seu currículo impresso diretamente ao
                gerente de qualquer uma das 10 lojas em Uberlândia.
              </p>
            </div>
          </div>

          {/* Right Demo Form */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 border-zinc-200">
              <div className="mb-5 flex items-center justify-between gap-2">
                <h3 className="font-['Sora'] text-xl font-bold text-zinc-950">
                  Banco de Talentos (Demonstrativo)
                </h3>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-950">
                  Prévia do formulário
                </span>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span>Simulação registrada com sucesso!</span>
                  </div>
                  <p className="text-sm text-emerald-900">
                    Este formulário demonstra o fluxo de captação de currículos
                    no site. Para enviar seu currículo real ao RH da rede, clique
                    abaixo:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`mailto:rh@supermercadoleal.com.br?subject=${encodeURIComponent(
                        `Currículo ${role} — Unidade ${unit} (${name})`
                      )}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#DC1F26] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#B8161C]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Enviar por e-mail para o RH
                    </a>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setPhone("");
                      }}
                    >
                      Testar outro envio
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-name"
                        className="mb-1.5 block text-xs font-bold text-zinc-700"
                      >
                        Nome completo
                      </label>
                      <input
                        id="career-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="h-11 w-full rounded-xl border border-zinc-300 px-3.5 text-sm text-zinc-900 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-phone"
                        className="mb-1.5 block text-xs font-bold text-zinc-700"
                      >
                        Telefone para contato
                      </label>
                      <input
                        id="career-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(34) 90000-0000"
                        className="h-11 w-full rounded-xl border border-zinc-300 px-3.5 text-sm text-zinc-900 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-unit"
                        className="mb-1.5 block text-xs font-bold text-zinc-700"
                      >
                        Unidade de preferência
                      </label>
                      <select
                        id="career-unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-900 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
                      >
                        {STORES.map((s) => (
                          <option key={s.id} value={s.neighborhood}>
                            {s.neighborhood}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="career-role"
                        className="mb-1.5 block text-xs font-bold text-zinc-700"
                      >
                        Área de interesse
                      </label>
                      <select
                        id="career-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-900 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
                      >
                        <option>Operador(a) de Caixa</option>
                        <option>Repositor(a) de Mercearia</option>
                        <option>Açougue / Frios</option>
                        <option>Padaria / Confeitaria</option>
                        <option>Hortifrúti</option>
                        <option>Administrativo / Estoque</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-semibold text-[#DC1F26]">
                      {error}
                    </p>
                  )}

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Enviar candidatura (demonstração)
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
