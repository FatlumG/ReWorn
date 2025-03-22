import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import tiktok from "../../assets/icons/tiktok.svg";

function Footer() {
  return (
    <footer id="footer" className="px-10 sm:px-24 sm:px-30 lg:px-10 xl:px-20 pt-12 pb-5 mt-28 bg-bg-primary font-poppins">
      <div className="w-full grid grid-cols-5 lg:flex gap-10 lg:justify-between">
        <div className="col-span-5 sm:col-span-3">
          <h2 className="text-xl font-bold">KUSHTET & POLITIKAT</h2>
          <ul>
            <li className="mt-1 text-gray cursor-pointer">
              <a>Qendra e Privatësisë</a>
            </li>
            <li className="text-gray cursor-pointer whitespace-nowrap lg:whitespace-normal">
              <a>Politika e Privatësisë dhe Cookies</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Menaxho Cookies</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Kushtet dhe Rregullat</a>
            </li>
            <li className="text-gray cursor-pointer whitespace-nowrap">
              <a>Njoftimi i të Drejtave të Autorit</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Përgjegjësia Ligjore</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 sm:col-span-2">
          <h2 className="text-xl font-bold">RRETH NESH</h2>
          <ul>
            <li className="mt-1 text-gray cursor-pointer whitespace-nowrap">
              <a>Rreth ReWorn</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Përgjegjësia Sociale</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Partneritet</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 sm:col-span-3">
          <h2 className="text-xl font-bold">MARRJET & DONATIMET</h2>
          <ul>
            <li className="mt-1 text-gray cursor-pointer whitespace-nowrap lg:whitespace-normal">
              <a>Informacion mbi marrjen e veshbathjes</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Kthimet</a>
            </li>
            <li className="text-gray cursor-pointer whitespace-nowrap">
              <a>Si të merrni veshmbathje</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Tabela e madhësive</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 sm:col-span-2">
          <h2 className="text-xl font-bold">PËRKUJDESJA NDAJ KLIENTIT</h2>
          <ul>
            <li className="mt-1 text-gray cursor-pointer">
              <a>Na Kontaktoni</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Si të donatoni</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Komente Shtesë</a>
            </li>
            <li className="text-gray cursor-pointer">
              <a>Vërejtje</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 sm:col-span-5">
          <h2 className="text-xl font-bold">Rrjetet Sociale</h2>
          <ul>
            <li className="mt-2 cursor-pointer">
              <a href="#" className="flex gap-2">
                <img src={facebook} alt="Facebook" />
                <span>Facebook</span>
              </a>
            </li>
            <li className="mt-2 cursor-pointer">
              <a href="#" className="flex gap-2">
                <img src={instagram} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </li>
            <li className="mt-2 cursor-pointer">
              <a href="#" className="flex gap-2">
                <img src={twitter} alt="Twitter" />
                <span>Twitter</span>
              </a>
            </li>
            <li className="mt-2 cursor-pointer">
              <a href="#" className="flex gap-2">
                <img src={tiktok} alt="Tiktok" />
                <span>Tiktok</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-gray">
        2025 &copy; ReWorn. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
