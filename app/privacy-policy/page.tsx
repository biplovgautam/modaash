import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy describes how Modaash collects, uses, and protects information through our digital dashboard designed for manpower agencies in Nepal. We are committed to protecting the privacy of workers and employers in accordance with the Individual Privacy Act, 2075 and other relevant laws of Nepal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope of Data Collection</h2>
            <p className="leading-relaxed mb-4">
              While our platform helps digitize workflows, we strictly limit the collection of personally identifiable information (PII).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What we collect:</strong> Contact information (names, email addresses, phone numbers), professional history, and employer information for backup, data recovery and optimizing/improving our product’s functionality solely.</li>
              <li><strong>What we DO NOT collect:</strong> We do not store and process high-sensitivity documents such as original Passport scans, National ID (NID) numbers, Driver’s License or biometric data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p className="leading-relaxed mb-4">The information collected is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Operational Digitization:</strong> To allow manpower offices to manage their daily workflows.</li>
              <li><strong>Marketing & Promotion:</strong> To provide updates on new opportunities, industry trends, and promotional offers related to the manpower sector.</li>
              <li><strong>Analytics:</strong> To improve the dashboard’s functionality and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="leading-relaxed mb-4">Pursuant to Section 12 of the Privacy Act, 2075, we process data based on:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Consent:</strong> By using the dashboard or providing information, users (agencies, workers, and employers) provide explicit consent for data processing.</li>
              <li><strong>Contractual Necessity:</strong> Processing is required to fulfill the service agreement between Modaash’s and the manpower agency.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security and Storage</h2>
            <p className="leading-relaxed mb-4">We implement industry-standard technical and organizational measures to protect your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption:</strong> Data is encrypted and hashed during transmission and at rest.</li>
              <li><strong>Access Control:</strong> Access to digitized records is restricted to authorized personnel of the respective manpower agency.</li>
              <li><strong>Local Compliance:</strong> We strive to ensure data handling practices align with the latest directives from the Department of Foreign Employment (DoFE) and the Ministry of Labour.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Sharing and Third Parties</h2>
            <p className="leading-relaxed mb-4">We do not sell your personal data. Data may only be shared with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in hosting and marketing (subject to strict confidentiality).</li>
              <li><strong>Legal Requirements:</strong> If required by the Government of Nepal or a court order under the prevailing laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights (Data Subject Rights)</h2>
            <p className="leading-relaxed mb-4">Under Nepali law, individuals have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the data we hold.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of personal data when the purpose of collection is served.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
            <p className="leading-relaxed mb-4">For any privacy-related inquiries or to exercise your rights, please contact our Data Compliance Officer:</p>
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
