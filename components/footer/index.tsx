import Link from 'next/link';
import React, { useState } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../../lib/assets';
import { ExternalUrl, Route } from '../../lib/types';
import ExternalLink from '../externalLink';
import ModalTermsAndConditions from '../modalTermsAndConditions';
import BlockItem from './blockItem';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOnOpen = () => setIsModalOpen(true);
  const modalOnClose = () => setIsModalOpen(false);

  return (
    <footer className="flex flex-wrap items-start justify-center max-w-[800px] mx-auto bg-white pt-[20px] pb-[25px] px-[10px] align-top text-gray-750 text-center text-[15px] leading-[20px] italic">
      <BlockItem>
        <div>Organised by:</div>
        <div className="flex">
          <ExternalLink href={ExternalUrl.NCADA_ORG}>
            <img
              src={getAssetUrl(
                'images/logo-national-council-against-drug-abuse.png'
              )}
              alt="National Council Against Drug Abuse logo"
              width="78"
              height="67"
              className="w-auto h-[67px] aspect-[78/67]"
            />
          </ExternalLink>
          <ExternalLink href={ExternalUrl.CNB_GOV}>
            <img
              src={getAssetUrl('images/logo-central-narcotics-bureau.png')}
              alt="Central Narcotics Bureau logo"
              width="69"
              height="54"
              className="w-auto h-[54px] aspect-[69/54]"
            />
          </ExternalLink>
        </div>
      </BlockItem>
      <BlockItem>
        <div>In collaboration with:</div>
        <div className="flex">
          <ExternalLink href={ExternalUrl.SP_EDU}>
            <img
              src={getAssetUrl('images/logo-singapore-polytechnic.png')}
              alt="Singapore Polytechnic logo"
              width="131"
              height="39"
              className="w-auto h-[39px] aspect-[131/39]"
            />
          </ExternalLink>
        </div>
      </BlockItem>
      <BlockItem>
        <div className="text-center text-[18px] tracking-[2px]">
          Follow us @CNB.DrugFreeSG
        </div>
        <div className="flex gap-[10px]">
          <ExternalLink href={ExternalUrl.CNB_ADAC_FACEBOOK}>
            <img
              src={getAssetUrl(
                'images/logo-facebook-cnb-anti-drug-abuse-campaign.png'
              )}
              alt="Central Narcotics Bureau | Anti-Drug Abuse Campaign | Facebook logo"
              width="71"
              height="52"
              className="w-auto h-[52px] aspect-[71/52]"
            />
          </ExternalLink>
          <ExternalLink href={ExternalUrl.CNB_ADAC_INSTAGRAM}>
            <img
              src={getAssetUrl(
                'images/logo-instagram-cnb-anti-drug-abuse-campaign.png'
              )}
              alt="Central Narcotics Bureau | Anti-Drug Abuse Campaign | Instagram logo"
              width="66"
              height="52"
              className="w-auto h-[52px] aspect-[66/52]"
            />
          </ExternalLink>
          <ExternalLink href={ExternalUrl.CNB_ADAC_YOUTUBE}>
            <img
              src={getAssetUrl(
                'images/logo-youtube-cnb-anti-drug-abuse-campaign.png'
              )}
              alt="Central Narcotics Bureau | Anti-Drug Abuse Campaign | YouTube logo"
              width="66"
              height="52"
              className="w-auto h-[52px] aspect-[66/52]"
            />
          </ExternalLink>
          <ExternalLink href={ExternalUrl.CNB_ADAC_SNAPCHAT}>
            <img
              src={getAssetUrl(
                'images/logo-snapchat-cnb-anti-drug-abuse-campaign.png'
              )}
              alt="Central Narcotics Bureau | Anti-Drug Abuse Campaign | Snapchat logo"
              width="66"
              height="52"
              className="w-auto h-[52px] aspect-[66/52]"
            />
          </ExternalLink>
        </div>
      </BlockItem>
      <BlockItem>
        <Link href={Route.HOME}>
          <a>
            <img
              src={getAssetUrl(
                'images/logo-ribbon-cnb-anti-drug-abuse-campaign-2017.png'
              )}
              alt="Central Narcotics Bureau | Anti-Drug Abuse Campaign | Ribbon logo"
              width="66"
              height="108"
              className="w-auto h-[108px] aspect-[66/108]"
            />
          </a>
        </Link>
      </BlockItem>
      <div className="w-full mt-[15px]">
        <button
          type="button"
          className={cn('underline', 'transition-colors hover:text-black')}
          onClick={modalOnOpen}
        >
          Terms &amp; Conditions
        </button>
        <ModalTermsAndConditions isOpen={isModalOpen} onClose={modalOnClose} />
      </div>
    </footer>
  );
}
