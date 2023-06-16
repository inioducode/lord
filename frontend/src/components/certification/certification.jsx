
import Certificate from "../../assets/images/certificate.jpeg";
import "./certification.css";
import { ReactComponent as CheckIcon } from "../../assets/images/check-line.svg";

const Certification = [
  {
    name: "REG NAME: ",
    description: "LEGACY LODY CONSULTANCY SERVICES",
    icon: CheckIcon,
  },
  {
    name: "Business Name Registration No:",
    description: "6880574",
    icon: CheckIcon,
  },
  {
    name: "Issuer:",
    description: " Registrar-General of Corporate Affairs Commission",
    icon: CheckIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto gridcontainer grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base head  font-semibold leading-7 text-indigo-600">
                Company Legal Status
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                According to the certificate, Legacy Lody Consultancy Services
                has been duly registered under the Companies and Allied Matters
                Act 2020. Our business activities primarily revolve around
                Business Management Consulting Services and General Contracts.
                Our principal place of business is located at Block 62, Flat 7,
                PW Kubwa, Abuja, FCT. We strive to provide top-notch services
                and maintain compliance with all applicable laws and
                regulations. If you have any further inquiries or require more
                information regarding our legal status or business operations,
                please do not hesitate to contact us. Thank you for visiting our
                website, and we look forward to serving you.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {Certification.map((feature) => (
                  <div key={feature.name} className="relative pl-9 details">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    <dt className="inline font-semibold text-900">
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={Certificate}
            alt="certificate"
            className="w-[40rem] max-w-none certificate rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
