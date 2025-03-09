import { Accordion } from '@/shared/components/accordion';
import { LandingPageFAQItem } from './Item';

export function LandingPageAccordion() {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-2/3 max-xl:w-full flex flex-col gap-4"
		>
			<LandingPageFAQItem
				value="item-1"
				question="O que é o Loveloom?"
				answer={
					'Loveloom é a sua própria página personalizada de relacionamento. Você pode incluir fotos, uma mensagem sincera e um cronômetro que acompanha há quanto tempo vocês estão juntos, tornando-se uma maneira única de celebrar seu amor.'
				}
			/>
			<LandingPageFAQItem
				value="item-2"
				question="Como recebo meu site após o pagamento?"
				answer={
					'Após concluir o pagamento, você receberá um e-mail com um código QR e um link para acessar seu site, facilitando o compartilhamento com o mundo.'
				}
			/>
			<LandingPageFAQItem
				value="item-3"
				question="Meu site tem data de expiração?"
				answer={
					'Se você escolher o plano Padrão, seu Loveloom durará um ano. No entanto, com o plano Cheio de Amor, sua página estará disponível para sempre!'
				}
			/>
			<LandingPageFAQItem
				value="item-4"
				question="Meu código QR tem data de expiração?"
				answer={
					'Sim! O código QR enviado para o seu e-mail desaparecerá após uma semana. No entanto, se você o salvou, ainda poderá usá-lo normalmente!'
				}
			/>

			{/* <LandingPageFAQItem
    value="item-4"
    question="Posso editar minha página depois de criada?"
    answer={
        "Sim, assim que você receber o link para sua página, ele incluirá uma seção de edição onde você poderá fazer as alterações necessárias."
    }
/> */}

			<LandingPageFAQItem
				value="item-5"
				question="Quanto tempo leva para receber o código QR por e-mail?"
				answer={
					'Após criar sua página, você receberá o código QR em, no máximo, alguns minutos!'
				}
			/>
			<LandingPageFAQItem
				value="item-6"
				question="Como posso entrar em contato com o suporte ao cliente?"
				answer={
					'Você pode entrar em contato com nosso suporte ao cliente por e-mail em support@looveloom.com'
				}
			/>
		</Accordion>
	);
}
