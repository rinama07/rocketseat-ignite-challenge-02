import { HeaderBanner } from './HeaderBanner';
import { ProductSection } from './ProductSection';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <HeaderBanner />

      <ProductSection />
    </HomeContainer>
  );
}
