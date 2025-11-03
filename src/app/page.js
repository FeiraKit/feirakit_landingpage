import { BuyProduct } from './components/buyProduct';
import { Hero } from './components/hero';
import { Register } from './components/register';
import { SectionSeparator } from './components/smallComponents/sectionSeparator';
import { EditUser } from './components/editUser';
import { UsingFilters } from './components/usingFilters';
import { TopicSeparator } from './components/smallComponents/topicSeparator';
import { SellingProducts } from './components/sellingProducts';
import { EditOrDeleteProduct } from './components/editingOrDeleting';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="HowToUse" className="py-2">
        <SectionSeparator title={'Cadastro de usuário'} />
        <Register />

        <SectionSeparator title={'Usando o app'} />
        <BuyProduct />
        <TopicSeparator />
        <UsingFilters />
        <TopicSeparator />
        <SellingProducts />
        <TopicSeparator />
        <EditOrDeleteProduct />

        <SectionSeparator title={'Editar dados do usuário'} />
        <EditUser />
      </div>
    </main>
  );
}
