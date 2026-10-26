'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erro ao enviar mensagem.');

      setStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome completo" className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado" required />
      <input type="email" name="email" placeholder="Seu melhor e-mail" className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado" required />
      <input type="tel" name="telefone" placeholder="Telefone" className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado" required />
      <input type="text" name="assunto" placeholder="Assunto" className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado" required />
      <textarea name="mensagem" placeholder="Como podemos ajudar?" className="w-full p-4 border border-border-yantra rounded-md h-32 focus:outline-dourado" required />

      {status === 'success' && <p className="text-green-600">Mensagem enviada com sucesso!</p>}
      {status === 'error' && <p className="text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-4 bg-dourado text-white rounded-md font-sans font-medium hover:bg-dourado-light transition duration-200 disabled:opacity-50"
      >
        {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
      </button>
    </form>
  );
}
