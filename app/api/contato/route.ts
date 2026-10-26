import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, assunto, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 });
    }

    // Ambiente de desenvolvimento: simula envio
    if (process.env.NODE_ENV === 'development') {
      console.log('Simulação de envio de e-mail:', { nome, email, telefone, assunto, mensagem });
      return NextResponse.json({ message: 'E-mail simulado com sucesso!' }, { status: 200 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `Novo Contato: ${assunto} - ${nome}`,
      html: `
        <h1>Novo contato recebido</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro rota contato:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
