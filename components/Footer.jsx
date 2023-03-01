import logo from "public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import playBadge from "public/images/app/google-play-badge.png";
import iOSBadge from "public/images/app/iOS-badge.svg";

const footerItems1 = {
  title: "Shop products",
  items: [
    { text: "Apparels", link: "/products" },
    { text: "Footwear", link: "/products" },
    { text: "Watches", link: "/products" },
    { text: "Accessories", link: "/products" },
    { text: "Jewellery", link: "/products" },
    { text: "Home & Living", link: "/products" },
  ],
};

const footerItems2 = {
  title: "Policies",
  items: [
    { text: "Terms of use", link: "/terms" },
    { text: "FAQs", link: "/faq" },
    { text: "Shipping", link: "/shipping-policy" },
    { text: "Cancellation", link: "/cancellation-policy" },
    { text: "Returns", link: "/return-policy" },
    { text: "Refunds", link: "/refund-policy" },
    { text: "Privacy", link: "/privacy-policy" },
  ],
};

const footerItems3 = {
  title: "About",
  items: [
    { text: "Blog", link: "/blog" },
    { text: "About us", link: "/about-us" },
    { text: "Help Centre", link: "/help-center" },
    { text: "Careers", link: "/careers" },
    { text: "Become a seller", link: "/seller-onboarding" },
  ],
};

const buyerFeatures = [
  {
    head: "Access to a wider range of suppliers",
    desc: `Dhamika can connect you with suppliers from all over the world, giving you 
    access to a wider range of products and services than you may be able to find locally.`,
  },
  {
    head: "Competitive pricing",
    desc: `By using Dhamika, you can compare prices from different suppliers and negotiate 
    better deals, resulting in cost savings for your business.`,
  },
  {
    head: "Streamlined processes",
    desc: `Dhamika offers streamlined processes for finding, ordering, and shipping products, 
    saving you time and effort. Many marketplaces offer tools to track shipments, manage payments, 
    and handle customs clearance.`,
  },
  {
    head: "Quality assurance",
    desc: `Dhamika also offers quality assurance, with third-party inspections and certifications, 
    giving you confidence in the products you are buying.`,
  },
  {
    head: "Reduced risk",
    desc: `Using a marketplace with verified suppliers and secure payment systems 
    can reduce the risk of fraud and ensure that you receive the products you ordered.`,
  },
];

const sellerFeatures = [
  {
    head: "Easier Buyer Discovery",
    desc: `Exporters can gain access to a wider customer base through Dhamika, 
    reducing dependence on cold callings, import houses and commission agents.`,
  },
  {
    head: "Increased visibility",
    desc: `Exporters can showcase their catalog on Dhamika, thus increasing
    the visibility of their products and services to potential buyers around the world.`,
  },
  {
    head: "Easy communication",
    desc: `Dhamika provides a platform for easy communication between exporters and
    potential buyers, allowing them to discuss product specifications,
    pricing, and other details.`,
  },
  {
    head: "Reduced costs",
    desc: `You can reduce your marketing and sales costs with Dhamika by leaving the
    customer sourcing activity to us, instead of relying on traditional marketing methods.`,
  },
  {
    head: "Streamlined processes",
    desc: `Dhamika offers streamlined export-import process by providing tools and 
    resources to manage your operations more efficiently.`,
  },
  {
    head: "Improved credibility",
    desc: `By associating with a global platform such as Dhamika, you can improve your 
    credibility and reputation in the global marketplace.`,
  },
  {
    head: "Risk mitigation",
    desc: `Dhamika can help mitigate the risks associated with international trade by 
    providing exporters with information and tools to manage their transactions securely.`,
  },
];

export default function Footer() {
  return (
    <footer className="border-t shadow-top bg-white divide-y">
      {/* section 1: Value for Buyer */}
      <div className="py-8">
        <div className="container mx-auto space-y-6">
          <h2 className="text-center font-inter">
            SOURCE GLOBALLY WITH{" "}
            <span className="text-indigo-700">DHAMIKA</span>
          </h2>
          <p>
            As an importer, you're always on the lookout for the best products
            at the most competitive prices. Dhamika can provide you with a range
            of benefits that can make your job easier and more efficient.
          </p>
          <table>
            <tbody>
              {buyerFeatures &&
                buyerFeatures.map((item, index) => (
                  <tr key={index} className="text-sm">
                    <td className="px-2">
                      {index + 1}
                      {")"}
                    </td>
                    {Object.values(item).map((val, val_ind) => (
                      <td key={val_ind} className="py-1 px-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          <p>
            Overall, Dhamika can provide importers with greater choice, improved
            pricing, streamlined processes, quality assurance, and reduced risk,
            making it an attractive option for sourcing products from overseas.
          </p>
        </div>
      </div>
      {/* section 2: Value for Seller */}
      <div className="py-8">
        <div className="container mx-auto space-y-6">
          <h2 className="text-center font-inter">
            EXPORT WITH <span className="text-indigo-700">DHAMIKA</span>
          </h2>
          <table>
            <tbody>
              {sellerFeatures &&
                sellerFeatures.map((item, index) => (
                  <tr key={index} className="text-sm">
                    <td className="px-2">
                      {index + 1}
                      {")"}
                    </td>
                    {Object.values(item).map((val, val_ind) => (
                      <td key={val_ind} className="py-1 px-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          <p>
            Overall, a B2B export-import website can offer significant value to
            exporters by providing them with a platform to connect with
            potential buyers, increase their visibility, and streamline their
            export-import processes.
          </p>
        </div>
      </div>

      {/* section 3: download app + follow + nav links */}
      <div className="py-4">
        <div className="container mx-auto grid md:grid-cols-8 gap-6">
          <div className="col-span-2 space-y-6 flex flex-col">
            {/* logo */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5">
                <Image src={logo} alt="dhamika" />
              </div>
              <div>
                <Link href="/">
                  <h1 className="mb-0 tracking-tight font-roboto text-indigo-700">
                    dhamika
                  </h1>
                </Link>
              </div>
            </div>
            {/* logo ends */}
            <div className="text-sm font-poppins">
              <p>Dhamika Exports Pvt Ltd</p>
              <p>Tech Park, South City 1</p>
              <p>Gurgaon, Haryana - 122001</p>
            </div>
          </div>
          <div className="col-span-4 grid md:grid-cols-3 gap-4">
            {/* links column 1 */}
            <div className="space-y-4">
              <h3>{footerItems1.title}</h3>
              <ul className="space-y-1">
                {footerItems1.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm font-poppins hover:font-bold"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* links column 2 */}
            <div className="space-y-4">
              <h3>{footerItems2.title}</h3>
              <ul className="space-y-1">
                {footerItems2.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm font-poppins hover:font-bold"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* links column 3 */}
            <div className="space-y-4">
              <h3>{footerItems3.title}</h3>
              <ul className="space-y-1">
                {footerItems3.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm font-poppins hover:font-bold"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <h3>Download app / follow us</h3>
            {/* top section - app download */}
            <div className="space-y-4">
              <h4 className="font-poppins tracking-tight text-sm">
                Download meraretail app from your favorite app store
              </h4>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.meraretail.meraretail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={playBadge}
                    alt="google play badge"
                    className="h-12 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://apps.apple.com/in/app/meraretail/id1498420001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={iOSBadge}
                    alt="google play badge"
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
            {/* bottom section - follow links */}
            <div className="space-y-4">
              <h4 className="font-poppins tracking-tight text-sm">
                Follow meraretail on social media to get latest updates on
                upcoming products, deals and offers
              </h4>

              <div className="flex items-center">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="/" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="/" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="/" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4: copyright, privacy policy, terms of use */}
      <div className="py-4 text-sm sm:text-base">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* left section */}
          <p className="text-gray-600">
            Copyright © 2022 Dhamika Exports Pvt Ltd
          </p>
          {/* right section */}
          <div className="flex divide-x gap-4 text-right">
            <span className="text-gray-600">All Rights Reserved</span>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 hover:underline pl-4"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 hover:underline pl-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
