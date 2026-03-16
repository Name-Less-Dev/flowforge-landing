export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-24 bg-background/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-brand">
              FlowForge
            </h3>

            <p className="mt-4 text-sm text-foreground/70">
              Plataforma de automação inteligente para equipes modernas.
              Conecte ferramentas, elimine tarefas repetitivas e ganhe tempo.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-foreground cursor-pointer">Recursos</li>
              <li className="hover:text-foreground cursor-pointer">Integrações</li>
              <li className="hover:text-foreground cursor-pointer">Preços</li>
              <li className="hover:text-foreground cursor-pointer">Atualizações</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-foreground cursor-pointer">Sobre</li>
              <li className="hover:text-foreground cursor-pointer">Carreiras</li>
              <li className="hover:text-foreground cursor-pointer">Blog</li>
              <li className="hover:text-foreground cursor-pointer">Contato</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-foreground cursor-pointer">Twitter</li>
              <li className="hover:text-foreground cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground cursor-pointer">GitHub</li>
              <li className="hover:text-foreground cursor-pointer">Discord</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-sm text-foreground/60 flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} FlowForge. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-foreground cursor-pointer">
              Privacidade
            </span>
            <span className="hover:text-foreground cursor-pointer">
              Termos
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}