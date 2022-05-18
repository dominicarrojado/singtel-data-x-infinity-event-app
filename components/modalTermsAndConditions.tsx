import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import XIcon from '@heroicons/react/outline/XIcon';
import cn from 'classnames';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalTermsAndConditions({ isOpen, onClose }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            className={cn(
              'flex items-center justify-center min-h-full p-4',
              'sm:p-0'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel
                className={cn(
                  'relative w-full max-w-[500px] bg-white text-gray-750 overflow-hidden shadow-xl',
                  'transform transition-all',
                  'sm:my-8'
                )}
              >
                <div className="flex justify-between p-[15px] border-b-[1px] border-b-gray-200">
                  <h3 className="text-xl font-bold">Terms and Conditions</h3>
                  <button type="button" aria-label="Close" onClick={onClose}>
                    <XIcon
                      className={cn(
                        'h-6 w-6 text-black opacity-30',
                        'transition-opacity hover:opacity-50 active:opacity-100'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="p-[15px]">
                  <ol className="list-decimal list-inside flex flex-col gap-[10px] pb-[15px]">
                    <li>
                      Secure a #DrugFreeSG contest is organised by the Central
                      Narcotics Bureau. The pledge app is in no way sponsored,
                      endorsed or administered by, or associated with Facebook.
                    </li>
                    <li>
                      Pledge to be drug-free, share it on Facebook, and stand a
                      chance to win up to $100 worth of F&amp;B, Entertainment
                      or Retail vouchers in a bimonthly draw.
                    </li>
                    <li>
                      By participating in this contest, the participant agrees
                      to fully abide by the Terms and Conditions stated below.
                      <ul className="list-disc list-outside flex flex-col gap-[10px] mt-[15px] pl-[30px]">
                        <li>
                          <b>Pledging period:</b> 7th April 2017 - 18th August
                          2017
                        </li>
                        <li>
                          <b>Eligibility:</b> This Contest is open to all
                          Singapore citizens and Permanent Residents aged 13 and
                          above residing in Singapore except employees of
                          Central Narcotics Bureau as well as its affiliate and
                          subsidiary companies, advertising/promotion agencies
                          or other third parties involved in the design or
                          conduct of this Contest, their respective sales
                          representatives, distributors, retailers, and members
                          of the households or immediate families. False and/or
                          deceptive entries or acts shall render participants
                          ineligible for participation. Central Narcotics Bureau
                          reserves the right, at its sole discretion, to
                          disqualify any individual(s) who tamper with the entry
                          process. In such events, the participant shall not be
                          notified of such disqualification. Participants must
                          also make their post on Facebook public for their
                          entries to be valid.
                        </li>
                        <li>
                          <b>Mechanics:</b> To participate in the contest
                          giveaway, the participant must:
                          <ul className="list-disc list-outside mt-[10px] pl-[50px]">
                            <li>
                              Go to Secure a #DrugFreeSG located on the side tab
                              of the Central Narcotics Bureau Facebook page.
                            </li>
                            <li>
                              Upload or submit an image and then choose from 8
                              stickers or frames to overlay on your image.
                            </li>
                            <li>
                              Once the image has been submitted, a "share"
                              button will appear so that participant can share
                              it on their profile.
                            </li>
                            <li>
                              <p>
                                Before sharing, participants must set the
                                privacy setting of their post to public. Posts
                                that are private will not be valid for the
                                giveaway.
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <b>Entries by Participant:</b> Multiple pledges are
                            allowed but participants can only win once
                            throughout the whole contest period.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Results:</b> Winners with the best pledge; photo
                            and caption, will be selected twice every month and
                            contacted privately via Facebook Messenger on where
                            and when they can redeem their prize. Central
                            Narcotics Bureau will not collect any personal
                            information online, except contestants' email
                            address for contacting purposes. However, personal
                            identification will be required on site should there
                            be any physical redemption of prize(s) to prevent
                            any form of fraudulence.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Prizes:</b> Each winner can win up to $100 worth
                            of vouchers. New prizes will be announced on Fridays
                            of every new cycle. Prizes are non-refundable nor
                            exchangeable for cash or prizes of other value.
                            Central Narcotics Bureau will not be responsible for
                            any loss or damage of the prizes upon delivery.
                            Terms and Conditions stated on the prizes apply.
                            Failure to redeem the prizes by the stipulated
                            redemption date will result in the expiration of the
                            prizes.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Limitation of Liability:</b> All participants
                            agree to release and agree to hold harmless Central
                            Narcotics Bureau, Facebook and their respective
                            directors, officers, employees, representatives and
                            agents from any and all liability for any injuries,
                            loss or damage of any kind, including death, arising
                            in whole or in part, directly or indirectly, from
                            acceptance, possession, use or misuse of a prize, or
                            participation in this Contest, to the fullest extent
                            as permissible by law.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Publicity:</b> The winner's acceptance of the
                            prize constitutes an irrevocable and unconditional
                            grant of permission by the winner to Central
                            Narcotics Bureau to use the winner's name and
                            likeness for publicity and advertising purposes
                            without limitation and additional compensation
                            (except where prohibited). The winner further hereby
                            acknowledges that Central Narcotics Bureau shall be
                            at liberty to publish and otherwise use any entries
                            made, including but not limited to telephone
                            recordings, audio recordings, visual recordings and
                            photographs, for the promotion and publicity of this
                            contest (whether now or in the future). Where
                            permissible, each winner expressly waives all
                            rights, which the winner may acquire or have under
                            the law (and any subsequent enactment or amendments
                            thereto) and any other rights which the winner may
                            have or be entitled to under the law.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>
                              Contest Suspension and Entry Disqualification:
                            </b>{' '}
                            Central Narcotics Bureau reserves the right to, in
                            its sole discretion, cancel or suspend the Contest
                            should a virus, bugs or other causes beyond the
                            control of the Central Narcotics Bureau corrupt the
                            administration, security or proper operation of the
                            Contest. Central Narcotics Bureau also reserves the
                            right to disqualify and remove any offensive and/or
                            inappropriate posts on the pledge application.
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Governing Law:</b> These Terms and Conditions
                            shall be governed and construed in accordance with
                            Singapore law. Any dispute, controversy or claim
                            arising out of or relating to these Terms and
                            Conditions, or the breach, termination or invalidity
                            thereof, shall be decided by the courts of
                            Singapore.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div className="flex justify-between p-[15px] border-t-[1px] border-t-gray-200" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
