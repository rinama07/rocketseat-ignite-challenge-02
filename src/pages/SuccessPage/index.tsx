import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import successIllustration from '../../assets/success-illustration.svg';
import { Heading } from '../../components/Heading';
import { IconCircle } from '../../components/IconCircle';
import { usePurchaseContext } from '../../contexts/purchaseContext';

import { messages } from './messages';
import {
  PurchaseInfoBorder,
  PurchaseInfoContainer,
  Subtitle,
  SuccessContainer,
} from './styles';

export function SuccessPage() {
  const { deliveryAddress, deliveryPayment } = usePurchaseContext();

  console.log({ deliveryAddress, deliveryPayment });

  return (
    <SuccessContainer>
      <div>
        <Heading element="h2" color="yellow700">
          {messages.title}
        </Heading>

        <Subtitle>{messages.subtitle}</Subtitle>

        <PurchaseInfoBorder>
          <PurchaseInfoContainer>
            <div>
              <IconCircle color="purple500" Icon={MapPin} />

              <span>
                <p>
                  {messages.purchaseInfo.address}&nbsp;
                  <b>
                    {deliveryAddress.streetName}
                    ,&nbsp;
                    {deliveryAddress.streetNumber}
                  </b>
                </p>

                <p>
                  {deliveryAddress.district}&nbsp;-&nbsp;
                  {deliveryAddress.city},&nbsp;
                  {deliveryAddress.state}
                </p>
              </span>
            </div>

            <div>
              <IconCircle color="yellow500" Icon={Timer} />

              <span>
                <p>{messages.purchaseInfo.deliveryTime}</p>

                <p>
                  <b>20 min - 30 min</b>
                </p>
              </span>
            </div>

            <div>
              <IconCircle color="yellow700" Icon={CurrencyDollar} />

              <span>
                <p>{messages.purchaseInfo.payment}</p>

                <p>
                  <b>{deliveryPayment.type}</b>
                </p>
              </span>
            </div>
          </PurchaseInfoContainer>
        </PurchaseInfoBorder>
      </div>

      <img src={successIllustration} alt={messages.illustration.alt} />
    </SuccessContainer>
  );
}
