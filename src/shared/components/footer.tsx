import Link from 'next/link';

export function Footer() {
	return (
		<footer className="border-t border-gray-800 mt-32">
			<div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-white font-bold text-lg">
							Sobre nós
						</h3>
						<p className="mt-4 text-gray-300">
							Estamos comprometidos com entregar o melhor serviço
							com paixão e integridade.
						</p>
					</div>
					<div>
						<h3 className="text-white font-bold text-lg">
							Links rápidos
						</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="/"
									className="text-gray-400 hover:text-red-400 transition"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="mailto:support@looveloom.com"
									target="_blank"
									className="text-gray-400 hover:text-red-400 transition"
								>
									Contate-nos
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white font-bold text-lg">Legal</h3>

						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="/terms-of-service"
									className="text-gray-400 hover:text-red-400 transition"
								>
									Termos de serviço
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="text-gray-400 hover:text-red-400 transition"
								>
									Política de privacidade
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-800 pt-4 text-center">
					<p className="text-gray-100">
						&copy; 2024 Loveloom. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
