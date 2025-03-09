export default function TermsOfService() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold text-red-200 text-center mb-8">
				Termos de Serviço
			</h1>
			<p className="text-sm text-gray-600 mb-4">
				Última atualização: 11 de novembro de 2024
			</p>

			<div className="space-y-8">
				<section>
					<h2 className="text-xl font-semibold text-white">
						1. Aceitação dos Termos
					</h2>
					<p className="mt-2 text-white font-light">
						Ao acessar e usar nossa plataforma, você concorda em
						cumprir e estar vinculado a estes Termos de Serviço. Se
						você não concordar com qualquer parte destes termos, não
						deve utilizar a plataforma.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						2. Descrição do Serviço
					</h2>
					<p className="mt-2 text-white font-light">
						Nossa plataforma permite que casais criem uma página
						personalizada preenchendo um formulário com seus nomes,
						data de início do relacionamento, uma mensagem
						personalizada e até 7 fotos. Após a finalização da
						compra e confirmação do pagamento, eles recebem um link
						especial para configurar seu Loveloom. Depois de fazer
						isso, recebem o QR Code de sua página por e-mail.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						3. Registro e Segurança
					</h2>
					<p className="mt-2 text-white font-light">
						Para usar o serviço, você deve fornecer um endereço de
						e-mail válido. Seu e-mail não será compartilhado com
						terceiros.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						4. Privacidade
					</h2>
					<p className="mt-2 text-white font-light">
						Respeitamos sua privacidade e não utilizamos seus dados
						para qualquer tipo de processamento ou venda para
						terceiros.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						5. Conteúdo do Usuário
					</h2>
					<p className="mt-2 text-white font-light">
						Você é o único responsável pelo conteúdo que faz upload
						na plataforma, incluindo fotos, mensagens e informações
						do relacionamento. Não nos responsabilizamos por
						qualquer conteúdo inadequado, ilegal ou não autorizado
						enviado pelos usuários. Ao enviar conteúdo, você nos
						concede uma licença limitada e não exclusiva para usá-lo
						exclusivamente com o propósito de fornecer o serviço.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						6. Pagamentos e Reembolsos
					</h2>
					<p className="mt-2 text-white font-light">
						Todos os pagamentos são processados através do Stripe.
						Após a confirmação do pagamento, o casal receberá um
						link para configurar sua página via e-mail. Reembolsos
						geralmente não são fornecidos, exceto em circunstâncias
						excepcionais, a nosso critério exclusivo. Certifique-se
						de revisar todos os detalhes cuidadosamente antes de
						confirmar sua compra.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						7. Modificações e Disponibilidade do Serviço
					</h2>
					<p className="mt-2 text-white font-light">
						Nos esforçamos para manter o serviço operacional e
						acessível de acordo com o plano escolhido (1 ano para o
						Plano Starter ou vitalício para o Plano Loveful). No
						entanto, sob circunstâncias excepcionais além do nosso
						controle, como questões legais, técnicas ou financeiras,
						reservamo-nos o direito de modificar ou descontinuar o
						serviço. Caso a descontinuação seja necessária, faremos
						todos os esforços razoáveis para notificar os usuários
						com antecedência, garantir a preservação das páginas ou
						oferecer soluções alternativas sempre que viável. A
						Loveloom não se responsabiliza por perdas decorrentes de
						modificações ou descontinuação do serviço em
						circunstâncias extraordinárias, embora nos esforcemos
						para minimizar qualquer impacto.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						8. Limitação de Responsabilidade
					</h2>
					<p className="mt-2 text-white font-light">
						Na máxima extensão permitida por lei, não seremos
						responsáveis por quaisquer danos indiretos, incidentais,
						especiais ou consequenciais decorrentes do uso ou
						incapacidade de uso da plataforma.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						9. Alterações nos Termos
					</h2>
					<p className="mt-2 text-white font-light">
						Podemos atualizar estes Termos de Serviço
						periodicamente. Quando houver atualizações, revisaremos
						a data da &quot;última atualização&quot; no topo desta
						página. É sua responsabilidade revisar estes Termos de
						Serviço periodicamente para se manter informado sobre
						quaisquer alterações.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						10. Contato
					</h2>
					<p className="mt-2 text-white font-light">
						Se você tiver qualquer dúvida sobre estes Termos de
						Serviço, entre em contato conosco pelo e-mail:{' '}
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
