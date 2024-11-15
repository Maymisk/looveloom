export default function TermsOfService() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold text-red-200 text-center mb-8">
				Terms of Service
			</h1>
			<p className="text-sm text-gray-600 mb-4">
				Last updated: November 11, 2024
			</p>

			<div className="space-y-8">
				<section>
					<h2 className="text-xl font-semibold text-white">
						1. Acceptance of Terms
					</h2>
					<p className="mt-2 text-white font-light">
						By accessing and using our platform, you agree to comply
						with and be bound by the following Terms of Service. If
						you do not agree to any part of these terms, you must
						not use the platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						2. Description of Service
					</h2>
					<p className="mt-2 text-white font-light">
						Our platform allows couples to create a personalized
						page by filling out a form with their names,
						relationship start date, a custom message, and up to 7
						photos. After checkout and upon successful payment, they
						receive a special link directing them to a screen to
						configuring their Loveloom. After doing so, they receive
						the QRCode to their page in their email.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						3. Registration and Security
					</h2>
					<p className="mt-2 text-white font-light">
						To use the service, you must provide a valid email
						address. Your email will not be shared with third
						parties.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						4. Privacy
					</h2>
					<p className="mt-2 text-white font-light">
						We respect your privacy and do not use your data for any
						processing or sale to third parties.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						5. User Content
					</h2>
					<p className="mt-2 text-white font-light">
						You are solely responsible for the content you upload to
						the platform, including photos, messages, and
						relationship information. We assume no responsibility
						for any inappropriate, illegal, or unauthorized content
						uploaded by users. By submitting content, you grant us a
						limited, non-exclusive license to use it solely for the
						purpose of providing the service.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						6. Payments and Refunds
					</h2>
					<p className="mt-2 text-white font-light">
						All payments are processed through Stripe. Once payment
						is complete, the couple will receive a link to configure
						their page via email. Refunds are generally not provided
						except under exceptional circumstances, at our sole
						discretion. Please review all details carefully before
						confirming your purchase.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						7. Service Modifications and Availability
					</h2>
					<p className="mt-2 text-white font-light">
						We strive to keep the service operational and accessible
						according to the selected plan (1-year for the Starter
						Plan or lifetime for the Loveful Plan). However, under
						exceptional circumstances beyond our control, such as
						legal, technical, or financial issues, we reserve the
						right to modify or discontinue the service. If
						discontinuation is necessary, we will make all
						reasonable efforts to notify users in advance, ensure
						the preservation of pages, or offer alternative
						solutions wherever feasible. Loveloom is not liable for
						losses arising from service modifications or
						discontinuation under extraordinary circumstances,
						though we will do our utmost to minimize any impact.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						8. Limitation of Liability
					</h2>
					<p className="mt-2 text-white font-light">
						To the fullest extent permitted by law, we shall not be
						liable for any indirect, incidental, special, or
						consequential damages arising from or related to your
						use of or inability to use the platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						9. Changes to Terms
					</h2>
					<p className="mt-2 text-white font-light">
						We may update these Terms of Service periodically. When
						updates are made, we will revise the "last updated" date
						at the top of this page. It is your responsibility to
						review these Terms of Service periodically to stay
						informed of any changes.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						10. Contact
					</h2>
					<p className="mt-2 text-white font-light">
						If you have any questions about these Terms of Service,
						please contact us at:{' '}
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
