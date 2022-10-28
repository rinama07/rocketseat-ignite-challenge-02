import homeIllustration from '../../../assets/home-illustration.svg';
import { Heading } from '../../../components/Heading';

import { BenefitList } from './BenefitList';
import { messages } from './messages';
import { BannerContainer } from './styles';

export function HeaderBanner() {
  return (
    <BannerContainer>
      <div>
        <Heading>{messages.title}</Heading>

        <h2>{messages.subtitle}</h2>

        <BenefitList />
      </div>

      <img src={homeIllustration} alt={messages.illustration.alt} />
    </BannerContainer>
  );
}
