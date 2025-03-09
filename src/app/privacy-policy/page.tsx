export default function TermsOfPrivacy() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold text-red-200 text-center mb-8">
				Política de Privacidade
			</h1>
			<p className="text-sm text-gray-600 mb-4">
				Última atualização: 20 de julho de 2024
			</p>

			<div className="space-y-8">
				<section>
					<h2 className="text-xl font-semibold text-white">
						1. Introdução
					</h2>
					<p className="mt-2 text-white font-light">
						Sua privacidade é importante para nós. Esta Política de
						Privacidade explica como coletamos, usamos, armazenamos
						e protegemos suas informações pessoais quando você
						utiliza nossa plataforma.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						2. Informações que Coletamos
					</h2>
					<p className="mt-2 text-white font-light">
						Coletamos as seguintes informações quando você usa nossa
						plataforma:
					</p>
					<ul className="list-disc pl-6 text-white font-light mt-2">
						<li>
							<span className="font-semibold">
								Informações de Registro:
							</span>{' '}
							Nome, data de início do relacionamento, mensagem
							personalizada, fotos do casal, marcos e dados
							associados (tipo, mensagem, data).
						</li>
						<li>
							<span className="font-semibold">
								Informações de Pagamento:
							</span>{' '}
							Endereço de e-mail registrado no Stripe para
							processamento do pagamento e entrega do link da
							página personalizada.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						3. Como Utilizamos suas Informações
					</h2>
					<p className="mt-2 text-white font-light">
						Utilizamos suas informações para:
					</p>
					<ul className="list-disc pl-6 text-white font-light mt-2">
						<li>
							Processar o pagamento e enviar o link da página
							personalizada por e-mail.
						</li>
						<li>
							Personalizar e criar a página do casal com as
							informações fornecidas.
						</li>
						<li>Melhorar nossos serviços e suporte ao cliente.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						4. Compartilhamento de Informações
					</h2>
					<p className="mt-2 text-white font-light">
						Não compartilhamos suas informações pessoais com
						terceiros, exceto quando necessário para processar
						pagamentos (Stripe) e conforme exigido por lei.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						5. Segurança
					</h2>
					<p className="mt-2 text-white font-light">
						Implementamos medidas de segurança para proteger suas
						informações pessoais contra acesso, uso ou divulgação
						não autorizados. No entanto, nenhuma transmissão de
						dados pela internet é totalmente segura, e não podemos
						garantir segurança absoluta.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						6. Retenção de Dados
					</h2>
					<p className="mt-2 text-white font-light">
						Reteremos suas informações pessoais apenas pelo tempo
						necessário para cumprir os propósitos para os quais
						foram coletadas ou conforme exigido por lei.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						7. Seus Direitos
					</h2>
					<p className="mt-2 text-white font-light">
						Você tem o direito de acessar, corrigir ou excluir suas
						informações pessoais. Para exercer esses direitos, entre
						em contato conosco pelo e-mail:{' '}
						<a
							href="mailto:support@looveloom.com"
							className="text-blue-500 hover:text-blue-600"
						>
							support@looveloom.com
						</a>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						8. Alterações nesta Política de Privacidade
					</h2>
					<p className="mt-2 text-white font-light">
						Podemos atualizar esta Política de Privacidade
						periodicamente. Quando houver alterações, revisaremos a
						data da &quot;última atualização&quot; no topo desta
						página. É sua responsabilidade revisar esta política
						periodicamente para se manter informado sobre qualquer
						mudança.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						9. Contato
					</h2>
					<p className="mt-2 text-white font-light">
						Se você tiver qualquer dúvida sobre esta Política de
						Privacidade, entre em contato conosco pelo e-mail:{' '}
						<a
							href="mailto:support@looveloom.com"
							className="text-blue-500 hover:text-blue-600"
						>
							support@looveloom.com
						</a>
						.
					</p>
				</section>
			</div>
		</main>
	);
}
