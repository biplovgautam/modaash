import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <p className="leading-relaxed">
            Welcome to Modaash. By accessing or using our dashboard (the "Service"), you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a manpower agency, you represent that you have the legal authority to bind that entity.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Services Provided</h2>
            <p className="leading-relaxed mb-4">
              We provide a digital workflow management system designed for the Foreign Employment Recruitment industry. This includes tools for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digitizing candidate and employer records.</li>
              <li>Managing contracts and documentation workflows.</li>
              <li>Internal communication and marketing automation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Accounts and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eligibility:</strong> Users must be registered agencies authorized by the Department of Foreign Employment (DoFE), Nepal. Misrepresentation of such will waive us from any liability that may arise out of actions/inactions caused by such misrepresentation.</li>
              <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your login credentials. Any activity occurring under your account is your sole responsibility.</li>
              <li><strong>Unauthorized Access:</strong> You must notify us immediately of any breach of security or unauthorized use of your dashboard.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Client Data and Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ownership:</strong> You retain all rights and ownership of the data you upload (Worker info, Employer details, Contracts).</li>
              <li><strong>License to Provider:</strong> You grant us a limited, non-exclusive license to host, store, and process this data solely to provide the Service, and for the marketing or analytics purposes outlined in our Privacy Policy.</li>
              <li><strong>Dashboard IP:</strong> All software, designs, and algorithms used in the dashboard are the exclusive intellectual property of Modaash.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
            <p className="leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal recruitment activities or human trafficking.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the dashboard.</li>
              <li>Use the marketing tools to send "spam" or unsolicited communications in violation of the Advertisement Act, 2076.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Service Availability and Support</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Uptime:</strong> We strive for 99.9% uptime; however, we do not guarantee uninterrupted service.</li>
              <li><strong>Maintenance:</strong> We may temporarily suspend the Service for scheduled maintenance. We will provide at least 24 hours notice for such events.</li>
              <li><strong>Modifications:</strong> We reserve the right to update features to comply with changing Nepali labor laws or DoFE regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Fees and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Subscription:</strong> Access to the dashboard is provided on a [Monthly/Annual] subscription basis.</li>
              <li><strong>Non-Payment:</strong> Failure to pay subscription fees within 30 days of the due date may result in temporary suspension of access to your data.</li>
              <li><strong>Taxes:</strong> All fees are exclusive of applicable VAT (13%) and other government levies unless stated otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">To the maximum extent permitted by the laws of Nepal:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modaash shall not be liable for any indirect, incidental, or consequential damages resulting from data loss or business interruption.</li>
              <li>Our total liability for any claim shall not exceed the amount paid by you for the Service during the 12 months preceding the claim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By You:</strong> You may terminate your account at any time by providing 30 days written notice.</li>
              <li><strong>By Us:</strong> We may terminate or suspend your access if you violate these terms or if your agency’s license is revoked by the Government of Nepal.</li>
              <li><strong>Data Retrieval:</strong> Upon termination, you will have 30 days to export your data before it is permanently deleted from our active servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law and Dispute Resolution</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Kathmandu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="leading-relaxed">
              We may modify these Terms from time to time. We will notify you of any significant changes via the dashboard interface or email. Continued use of the Service constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              For any questions regarding these Terms of Service or to reach support, please contact us at:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Emails:</strong> support@modaash.com, modaash.com@gmail.com</li>
              <li><strong>Office Address:</strong> Thapathali kathmandu</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
