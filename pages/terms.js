import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "../styles/terms.module.scss";

function Terms() {
	let behaviour =
		"Zozo, Inc. and its affiliates’ (“,” “we,” “us,” and “our”) goal is to make design accessible to all. As such, we provide a design platform that you can use, among other things, to design, prototype, gather feedback and collaborate. This Privacy Policy will help you understand how we collect, use and share your personal information and assist you in exercising the privacy rights available to you.";

	let biddingContribution1 = `This Privacy Policy applies to personal information processed by us in our business, including on our websites (e.g.com, designsystems.com and any other websites that we own or operate), our mobile applications, our application program interfaces, our design tool services, and our related online and offline offerings (collectively, the “Services”).`;

	let biddingContribution2 = `This Privacy Policy does not apply to any third-party websites, services or applications, even if they are accessible through our Services. In addition, a separate privacy notice, which is available upon request if it applies to you, governs personal information we receive from our current or prospective employees and contractors.`;

	let biddingContribution3 = `By using our Services, you agree to be bound by this Privacy Policy. If you don’t agree to this Privacy Policy, do not use the Services. If you access and use the Services on behalf of a company (such as your employer) or other legal entity, you represent and warrant that you have the authority to bind that company or other legal entity to this Privacy Policy. In that case, “you” and “your” will refer to that company or other legal entity.
            `;
	let security1 = `What personal information we collect depends on how you interact with our Services.What personal information we collect depends on how you interact with our Services.
            What personal information we collect depends on how you interact with our Services.
            Information You Provide to Us
            Account Information. When you create an Account, we will collect the personal information you provide to us, such as your name, email address, personal website, and picture.
            `;
	let security2 = `Payment Information. We may sell services or merchandise through our Services. When you make purchases through the Services, we may use a third-party application, such as the Apple App Store, Google Play App Store, Amazon App Store, and/or services such as Stripe to process your payments. These third-party applications may collect certain financial information from you to process a payment on behalf of Figma, including your name, email address, mailing address, payment card information, and other billing information. Figma does not store or receive your payment information, but it may store and receive information associated with your payment information (e.g., your billing details).
            `;

	let remidies1 = `With Us. We collect personal information from you such as email address, phone number, or mailing address when you request information about our Services, register for our newsletter, or otherwise communicate with us.
            `;
	let remidies2 = `Candidate Data. We may post job openings and opportunities on the Services. If you reply to one of these postings, we will collect and process the information you provide to us to assess your suitability, aptitude, skills, and qualifications for employment.`;

	let waiver1 = `Account Information. When you create an Account, we will collect the personal information you provide to us, such as your name, email address, personal website, and picture.
      `;
	let waiver2 = `Payment Information. We may sell services or merchandise through our Services. When you make purchases through the Services, we may use a third-party application, such as the Apple App Store, Google Play App Store, Amazon App Store, and/or services such as Stripe to process your payments. These third-party applications may collect certain financial information from you to process a payment on behalf of Figma, including your name, email address, mailing address, payment card information, and other billing information. Figma does not store or receive your payment information, but it may store and receive information associated with your payment information (e.g., your billing details).
      `;
	return (
		<CustomerLayout>
			<div className={styles.terms}>
				<div className="bg-white px-10 py-20">
					<h1 className="text-center">Terms</h1>
					<h3 className="mt-10">Updated Date: November 10, 2021</h3>
					<div className="mt-10">
						<h4>BEHAVIOUR</h4>
						<p>{behaviour}</p>
					</div>

					<div className="mt-10">
						<h4>BIDDING CONTRIBUTION</h4>
						<p>{biddingContribution1}</p>
						<p>{biddingContribution2}</p>
						<p>{biddingContribution3}</p>
					</div>

					<div className="mt-10">
						<h4>SECURITY AND PRIVACY</h4>
						<p>{security1}</p>
						<p>{security2}</p>
					</div>

					<div className="mt-10">
						<h4>REMEDIES</h4>
						<p>{remidies1}</p>
						<p>{remidies2}</p>
					</div>

					<div className="mt-10">
						<h4>WARRANTY WAIVER</h4>
						<p>{waiver1}</p>
						<p>{waiver2}</p>
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default Terms;
