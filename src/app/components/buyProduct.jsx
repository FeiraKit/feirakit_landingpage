'use client';
import home from '../../../public/assets/home.jpg';
import comprarProduto from '../../../public/assets/comprarProduto.jpg';
import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function BuyProduct() {
  return (
    <section
      className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-14 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <SectionStepText
        title="Como comprar um produto:"
        p1='Para comprar um produto o usuário precisa estar logado e escolher o que deseja através do "feed" que mostrará os produtos cadastrados:'
        p2=" Obotão de comprar redireciona o cliente diretamente para o Whatsapp do vendedor, onde
         pode ser concluída a compra conforme a negociação entre eles. A negociação é direta entre cliente e ofertante, sendo de responsabilidade exclusiva de ambas as partes"
      />
      <SectionStepImages image1={home} image2={comprarProduto} />
    </section>
  );
}
