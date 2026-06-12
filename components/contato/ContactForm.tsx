'use client';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementação futura da chamada à API
    alert('Formulário enviado!');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome completo"
        className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado"
        required
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        className="w-full p-4 border border-border-yantra rounded-md focus:outline-dourado"
        required
      />
      <textarea
        placeholder="Como podemos ajudar?"
        className="w-full p-4 border border-border-yantra rounded-md h-32 focus:outline-dourado"
        required
      />
      <button
        type="submit"
        className="px-8 py-4 bg-dourado text-white rounded-md font-sans font-medium hover:bg-dourado-light transition duration-200"
      >
        ENVIAR MENSAGEM
      </button>
    </form>
  );
}
