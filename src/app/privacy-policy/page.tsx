export default function TermsOfPrivacy() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold text-red-200 text-center mb-8">
				Privacy Policy
			</h1>
			<p className="text-sm text-gray-600 mb-4">
				Last updated: July 20, 2024
			</p>

			<div className="space-y-8">
				<section>
					<h2 className="text-xl font-semibold text-white">
						1. Introduction
					</h2>
					<p className="mt-2 text-white font-light">
						Your privacy is important to us. This Privacy Policy
						explains how we collect, use, store, and protect your
						personal information when you use our platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						2. Information We Collect
					</h2>
					<p className="mt-2 text-white font-light">
						We collect the following information when you use our
						platform:
					</p>
					<ul className="list-disc pl-6 text-white font-light mt-2">
						<li>
							<span className="font-semibold">
								Registration Information:
							</span>{' '}
							Name, relationship start date, custom message,
							couple photos, milestones and associated data (type,
							message, date).
						</li>
						<li>
							<span className="font-semibold">
								Payment Information:
							</span>{' '}
							Email address registered with Stripe for payment
							processing and delivery of the personalized page
							link.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						3. How We Use Your Information
					</h2>
					<p className="mt-2 text-white font-light">
						We use your information to:
					</p>
					<ul className="list-disc pl-6 text-white font-light mt-2">
						<li>
							Process payment and send the personalized page link
							via email.
						</li>
						<li>
							Personalize and create the couple’s page with the
							provided information.
						</li>
						<li>Improve our services and customer support.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						4. Information Sharing
					</h2>
					<p className="mt-2 text-white font-light">
						We do not share your personal information with third
						parties except as necessary to process payments (Stripe)
						and as required by law.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						5. Security
					</h2>
					<p className="mt-2 text-white font-light">
						We implement security measures to protect your personal
						information against unauthorized access, use, or
						disclosure. However, no internet data transmission is
						completely secure, and we cannot guarantee absolute
						security.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						6. Data Retention
					</h2>
					<p className="mt-2 text-white font-light">
						We retain your personal information only for as long as
						necessary to fulfill the purposes for which it was
						collected or as required by law.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						7. Your Rights
					</h2>
					<p className="mt-2 text-white font-light">
						You have the right to access, correct, or delete your
						personal information. To exercise these rights, please
						contact us at:{' '}
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
						8. Changes to this Privacy Policy
					</h2>
					<p className="mt-2 text-white font-light">
						We may update this Privacy Policy periodically. When
						updates are made, we will revise the "last updated" date
						at the top of this page. It is your responsibility to
						review this policy periodically to stay informed of any
						changes.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-white">
						9. Contact
					</h2>
					<p className="mt-2 text-white font-light">
						If you have any questions about this Privacy Policy,
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
