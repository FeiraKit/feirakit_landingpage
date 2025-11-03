import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

import editOrDelete from '../../../public/assets/editOrDelete.png';

export function EditOrDeleteProduct() {
  return (
    <section
      className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-14 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <SectionStepText
        title="Como editar ou Apagar um Produto:"
        p1='Para editar ou apagar um produto, deve-se entrar no menu, selecionar "Meus Produtos",
 selecionar o produto que deseja-se modificar e fazer as alterações no formulário.'
        p2="No caso de apagar um determinado produto, basta clicar no botão de excluir e confirmar"
      />
      <SectionStepImages image1={editOrDelete} />
    </section>
  );
}
