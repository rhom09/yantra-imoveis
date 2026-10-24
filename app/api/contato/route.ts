import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY || 're_dummy_key_for_build';
    const resend = new Resend(resendApiKey);

    const { nome, email, mensagem } = await req.json();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'contato@yantraimoveis.com.br',
      to: process.env.RESEND_TO_EMAIL || 'contato@yantraimoveis.com.br',
      subject: `Novo Contato de ${nome} - Yantra Imóveis`,
      html: `
        <h1>Novo contato recebido</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}
