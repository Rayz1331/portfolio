// app/page.js (Next.js 13+)
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-700 selection:text-white">
      <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">RG.</div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#projets" className="hover:text-white">Projets</a>
            <a href="#competences" className="hover:text-white">Compétences</a>
            <a href="#veille" className="hover:text-white">Veille</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <section className="mb-24">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Rayan Guyot
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mb-8">
            Étudiant en <span className="text-white font-medium">BTS SIO 2</span>.
            Passionné par le développement web et l'administration système.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-5 py-3 rounded-md font-medium hover:bg-neutral-200"
            >
              ✉️ Me contacter
            </a>
            <a
              href="CV Développent informatique.pdf"
              target="_blank"
              className="px-5 py-3 text-neutral-400 hover:text-white"
            >
              📄 Voir mon CV
            </a>
          </div>
        </section>

        <section id="competences" className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-8">💻 Compétences Techniques</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">🌐 HTML / CSS</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">⚡ JavaScript</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">🖥️ PHP</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">🗄️ MySQL / SQL</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">🔧 C#</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">🐧 Linux</div>
          </div>
        </section>

        <section id="projets" className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-8">📂 Projets Récents</h2>
          <div className="grid gap-6">
            <a
              href="Veille.pdf"
              target="_blank"
              className="block bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-neutral-600 transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">Veille Technologique</h3>
              <p className="text-neutral-400 mb-4">
                Veille technologique portant sur l'impact de l'intelligence artificielle générative sur le e-commerce.
              </p>
            </a>

            <a
              href="Site.pdf"
              target="_blank"
              className="block bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-neutral-600 transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">Site vitrine pour un bar</h3>
              <p className="text-neutral-400 mb-4">
                Conception et développement d’un site web vitrine pour un bar afin de présenter les services, horaires et événements.
              </p>
              <div className="text-xs text-neutral-500">HTML • PHP • CSS</div>
            </a>

            <a
              href="PrestaShop.pdf"
              target="_blank"
              className="block bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-neutral-600 transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">Site e-commerce avec PrestaShop</h3>
              <p className="text-neutral-400 mb-4">
                Création et configuration d’un site e-commerce à l’aide de PrestaShop avec gestion des produits et des commandes.
              </p>
            </a>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Mise en place d’une solution de gestion de parc avec GLPI
              </h3>
              <p className="text-neutral-400 mb-4">
                Déploiement et configuration de GLPI pour la gestion de parc informatique et le suivi des tickets.
              </p>
              <div className="space-y-2 text-sm">
                <a href="GLPI1.pdf" target="_blank" className="block text-neutral-300 hover:text-white">📄 Rapport n°1</a>
                <a href="GLPI2.pdf" target="_blank" className="block text-neutral-300 hover:text-white">📄 Rapport n°2</a>
                <a href="GLPI3.pdf" target="_blank" className="block text-neutral-300 hover:text-white">📄 Rapport n°3</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">📞 Me contacter</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 space-y-4">
            <p>📧 <strong>Email :</strong> <a href="mailto:rayan.guyot@email.com" className="text-white hover:underline">rayan.guyot13@email.com</a></p>
            <p>📍 <strong>Localisation :</strong> Toulouse</p>
            <p>🎓 <strong>Formation :</strong> BTS SIO 2</p>
            <p>⏰ <strong>Disponibilité :</strong> Alternance / Stage</p>
          </div>
        </section>

        <footer className="border-t border-neutral-800 pt-10 text-center text-neutral-500 text-sm">
          <p>Développé par Rayan Guyot</p>
          <p>© 2026 – BTS SIO 2</p>
        </footer>
      </main>
    </div>
  );
}
