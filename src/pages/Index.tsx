import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#4CAF50]">
              ТаксиСервис
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-[#4CAF50] transition-colors"
            >
              Главная
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-[#4CAF50] transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#tariffs"
              className="text-gray-700 hover:text-[#4CAF50] transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#4CAF50] transition-colors"
            >
              Контакты
            </a>
            <Button className="bg-[#4CAF50] text-white hover:bg-[#43a047]">
              <Icon name="Phone" className="mr-2" />
              Заказать звонок
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </nav>

      {/* Главный экран */}
      <section className="bg-[#1A1F2C] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1590039616589-de5dafe18542')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Быстрая подача такси в любую точку города
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Комфортные автомобили, вежливые водители и выгодные тарифы для
              ваших поездок
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#4CAF50] text-white hover:bg-[#43a047] px-6 py-6 text-lg">
                <Icon name="Phone" className="mr-2" />
                Вызвать такси
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 px-6 py-6 text-lg"
              >
                <Icon name="Download" className="mr-2" />
                Скачать приложение
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Card className="w-full max-w-md mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Заказать такси онлайн
                </h3>
                <div className="space-y-4">
                  <div>
                    <Input placeholder="Откуда" className="bg-gray-100" />
                  </div>
                  <div>
                    <Input placeholder="Куда" className="bg-gray-100" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Дата" className="bg-gray-100" />
                    <Input placeholder="Время" className="bg-gray-100" />
                  </div>
                  <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#43a047] py-6 text-lg">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая подача</h3>
              <p className="text-gray-600">
                Автомобиль приедет в течение 5-7 минут после заказа
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Все водители проходят строгий отбор и проверку документов
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выгодные цены</h3>
              <p className="text-gray-600">
                Стоимость поездки всегда прозрачна и выгодна для клиента
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Car" className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Эконом</h3>
                <p className="text-gray-600 mb-4">
                  Недорогие поездки по городу
                </p>
                <p className="text-3xl font-bold mb-4">от 99 ₽</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Комфортные автомобили
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Быстрая подача
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Опытные водители
                  </li>
                </ul>
                <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#43a047]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="border-[#4CAF50] shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#4CAF50] text-white px-4 py-1 rounded-bl-lg font-medium">
                Популярный
              </div>
              <CardContent className="pt-6">
                <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="CarFront" className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Комфорт</h3>
                <p className="text-gray-600 mb-4">
                  Поездки повышенного комфорта
                </p>
                <p className="text-3xl font-bold mb-4">от 149 ₽</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Автомобили бизнес-класса
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Вода в салоне
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Зарядка для телефона
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Wi-Fi в салоне
                  </li>
                </ul>
                <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#43a047]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Car" className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Бизнес</h3>
                <p className="text-gray-600 mb-4">
                  Премиум-поездки для бизнеса
                </p>
                <p className="text-3xl font-bold mb-4">от 249 ₽</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Премиум автомобили
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Водители в костюмах
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Встреча с табличкой
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-2"
                    />
                    Помощь с багажом
                  </li>
                </ul>
                <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#43a047]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Мобильное приложение */}
      <section className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Скачайте наше приложение
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Заказывайте такси, отслеживайте поездки и платите удобным способом
              прямо с вашего смартфона
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white border border-white hover:bg-white hover:text-black">
                <Icon name="Apple" className="mr-2" />
                App Store
              </Button>
              <Button className="bg-black text-white border border-white hover:bg-white hover:text-black">
                <Icon name="Play" className="mr-2" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1616187175003-bfe603baa900"
              alt="Мобильное приложение"
              className="rounded-lg shadow-xl max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Что говорят наши клиенты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                        alt="Аватар клиента"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Алексей Петров</h4>
                    <div className="flex text-[#4CAF50]">
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Очень доволен сервисом. Такси приезжает быстро, водители
                  вежливые, а цены приятно удивляют!"
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                        alt="Аватар клиента"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Екатерина Смирнова</h4>
                    <div className="flex text-[#4CAF50]">
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Регулярно пользуюсь этим сервисом для поездок на работу.
                  Всегда вовремя, чисто в салоне и приятно общаться с
                  водителями."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
                        alt="Аватар клиента"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Михаил Иванов</h4>
                    <div className="flex text-[#4CAF50]">
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="Star" />
                      <Icon name="StarHalf" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Удобное приложение, можно отслеживать машину на карте. Один
                  раз водитель задержался, но служба поддержки быстро решила
                  вопрос."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer id="contact" className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-4">
                ТаксиСервис
              </h3>
              <p className="opacity-80 mb-4">
                Быстрые и комфортные поездки по городу по выгодным ценам
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#4CAF50]">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="hover:text-[#4CAF50]">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="hover:text-[#4CAF50]">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Для водителей
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Часто задаваемые вопросы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4CAF50]">
                    Правила пользования
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2" />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2" />
                  info@taxiservice.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2" />
                  г. Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center opacity-60">
            <p>© 2025 ТаксиСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
