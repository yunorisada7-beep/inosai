"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactEmail, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 w-full bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl shadow-sm transition-colors"
    >
      <Send className="w-4 h-4" />
      {pending ? "送信中..." : "送信する"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <section className="mt-8 bg-white/90 backdrop-blur rounded-2xl border border-rose-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-1">
        <Mail className="w-5 h-5 text-rose-500" />
        <h3 className="text-base font-bold text-slate-800">お問い合わせ</h3>
      </div>
      <p className="text-xs text-slate-500 mb-4">
        ご質問・ご依頼などお気軽にお寄せください。
      </p>

      <form action={formAction} className="flex flex-col gap-3">
        {/* ハニーポット */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-slate-700">
            お名前 <span className="text-rose-500">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-slate-700">
            メールアドレス <span className="text-rose-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            maxLength={120}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-slate-700">件名</span>
          <input
            type="text"
            name="subject"
            maxLength={120}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-slate-700">
            お問い合わせ内容 <span className="text-rose-500">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={2000}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>

        <SubmitButton />

        {state.status === "success" && (
          <div className="flex items-start gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{state.message}</span>
          </div>
        )}
        {state.status === "error" && (
          <div className="flex items-start gap-2 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{state.message}</span>
          </div>
        )}
      </form>
    </section>
  );
}
