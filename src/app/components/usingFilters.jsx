import buscaPorNome from '../../../public/assets/buscaPorNome.png';
import buscaPorRegiao from '../../../public/assets/buscaPorRegiao.png';
import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function UsingFilters() {
  return (
    <>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-14 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepImages image1={buscaPorNome} />
        <SectionStepText
          title="Filtro de produtos"
          p1=' Para encontrar um produto específico é possível filtrar por cidade ou por nome. Para filtrar
 por nome basta escrever o que deseja no formulário de "pesquisa"'
        />
      </section>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 md:pb-14 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepText
          p1=' Para filtrar por cidade, deve-se clicar no botão de "Buscar produtos por região"e na sequencia
 todas as cidades onde tem produtos cadastrados no Feirakit serão listadas. O usuário pode escolher a
 que deseja:'
        />
        <SectionStepImages image1={buscaPorRegiao} />
      </section>
    </>
  );
}
