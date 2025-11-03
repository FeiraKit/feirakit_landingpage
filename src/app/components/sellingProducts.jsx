import sellingProduct1 from '../../../public/assets/sellingProduct1.png';
import sellingProduct2 from '../../../public/assets/sellingProduct2.png';
import sellingProduct3 from '../../../public/assets/sellingProduct3.png';
import sellingProduct4 from '../../../public/assets/sellingProduct4.png';

import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function SellingProducts() {
  return (
    <>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-14 lg:flex-row-reverse md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepText
          title="Venda de produto"
          p1='A mesmaconta válida para o cliente do Feirakit também é válida para o produtor, possibilitando assim, que ele venda seus produtos. Para cadastrar um produto deve-se entrar na aba de "Meus Produtos"no menu:'
        />
        <SectionStepImages image1={sellingProduct1} />
      </section>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 md:pb-14 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepText p1='Na Tela "meus Produtos" clique na opção "adicionar" para criar um novo produto.Preencha o nome do produto, o preço, a categoria e o tipo de unidade:' />
        <SectionStepImages image1={sellingProduct2} />
      </section>

      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 md:pb-14 lg:flex-row-reverse md:flex-row-reverse  sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepText p1="Preencha a descrição e selecione as cidades onde este produto vai estar disponível:" />
        <SectionStepImages image1={sellingProduct3} />
      </section>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 md:pb-14 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepText
          p1="Selecione as fotos do produto e clique em continuar para para finalizar o cadastro e disponibi
lizar o produto para venda no aplicativo. A partir deste momento, clientes poderão entrar em contato
 através do número de Whatsapp do vendedor:"
        />
        <SectionStepImages image1={sellingProduct4} />
      </section>
    </>
  );
}
