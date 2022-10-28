import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import successIllustration from '../../assets/success-illustration.svg';
import { Heading } from '../../components/Heading';
import { IconCircle } from '../../components/IconCircle';

import { messages } from './messages';
import {
  PurchaseInfoBorder,
  PurchaseInfoContainer,
  Subtitle,
  SuccessContainer,
} from './styles';

export function SuccessPage() {
  const purchaseDataMock = {
    address: {
      street: '',
      number: '102',
      district: 'Farrapos',
      city: 'Porto Alegre',
      state: 'RS',
    },
    payment: 'Cartão de Crédito',
  };

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
                    {purchaseDataMock.address.street}
                    ,&nbsp;
                    {purchaseDataMock.address.number}
                  </b>
                </p>

                <p>
                  {purchaseDataMock.address.district}&nbsp;-&nbsp;
                  {purchaseDataMock.address.city},&nbsp;
                  {purchaseDataMock.address.state}
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
                  <b>{purchaseDataMock.payment}</b>
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
