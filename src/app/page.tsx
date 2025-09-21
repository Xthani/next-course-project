import Link from "next/link";
import { RacketsGrid } from "@/features/rackets/ui";

const Page = () => {
  return (
    <div className="container">
      <section className="text-center mb-xl">
        <h1 className="text-3xl font-bold text-primary mb-lg">
          Добро пожаловать в TENNIS STORE
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Откройте для себя лучшие теннисные ракетки от ведущих мировых брендов.
          Профессиональное качество для игроков всех уровней.
        </p>

        <div className="mb-lg">
          <h2 className="text-2xl font-bold text-center mb-lg">
            Популярные ракетки
          </h2>
          <RacketsGrid limit={3} />
        </div>

        <Link
          href="/rackets"
          className="bg-primary text-white p-md rounded-lg font-semibold text-lg transition-colors"
        >
          Смотреть каталог
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-lg  shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-md flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold">Топовые бренды</h3>
            <p className="text-gray-700">
              Wilson, Head, Yonex, Babolat и другие ведущие производители
            </p>
          </div>

          <div className="bg-white p-lg  shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-md flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold">Быстрая доставка</h3>
            <p className="text-gray-700">
              Быстрая и надежная доставка по всей стране
            </p>
          </div>

          <div className="bg-white p-lg  shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-md flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold">Экспертная поддержка</h3>
            <p className="text-gray-700">
              Помощь в выборе подходящей ракетки от профессионалов
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">28</div>
            <div>Моделей ракеток</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4</div>
            <div>Топовых бренда</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div>Оригинальная продукция</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div>Поддержка клиентов</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
