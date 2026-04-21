"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const TO_EMAIL = "yunorisada7@gmail.com";

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // 簡易ハニーポット
  if (String(formData.get("website") ?? "")) {
    return { status: "success", message: "送信しました。" };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "お名前・メール・お問い合わせ内容は必須です。",
    };
  }

  // メール形式の簡易チェック
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が正しくありません。",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      status: "error",
      message:
        "送信設定が未完了です。しばらくしてから再度お試しください。",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM ?? "亥鼻祭フォーム <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `【亥鼻祭サイト】${subject || "お問い合わせ"}`,
      text:
        `お名前: ${name}\n` +
        `メール: ${email}\n` +
        `件名: ${subject || "(なし)"}\n\n` +
        `--- 本文 ---\n${message}\n`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "送信に失敗しました。時間をおいて再度お試しください。",
      };
    }

    return {
      status: "success",
      message: "お問い合わせを送信しました。ありがとうございました。",
    };
  } catch (err) {
    console.error(err);
    return {
      status: "error",
      message: "送信時にエラーが発生しました。",
    };
  }
}
