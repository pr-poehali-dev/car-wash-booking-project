import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/43cfc4b9-b152-499e-b07a-daab39252fc1/files/3be80132-79c0-4640-8c3b-121a0e9d006a.jpg";
const DETAIL_IMAGE = "https://cdn.poehali.dev/projects/43cfc4b9-b152-499e-b07a-daab39252fc1/files/308139ea-4ce2-4022-b927-e26d9832d0db.jpg";
const CAR_IMAGE = "https://cdn.poehali.dev/projects/43cfc4b9-b152-499e-b07a-daab39252fc1/files/e5ca8110-f194-44d2-b0d7-4b9acea5f9da.jpg";

const NAV_LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#about", label: "О нас" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Droplets",
    title: "Премиум мойка",
    desc: "Бережная ручная мойка с использованием профессиональной химии. Без царапин и разводов.",
    badge: "Популярно",
  },
  {
    icon: "Sparkles",
    title: "Полировка кузова",
    desc: "Удаление царапин, потёртостей и голограмм. Восстановление зеркального блеска лакокрасочного покрытия.",
    badge: null,
  },
  {
    icon: "Shield",
    title: "Керамическое покрытие",
    desc: "Нанокерамика для защиты кузова на 2–5 лет. Гидрофобный эффект, защита от UV и химии.",
    badge: "Хит",
  },
  {
    icon: "Star",
    title: "Детейлинг салона",
    desc: "Химчистка салона, полировка пластика, обработка кожи. Ваш автомобиль как новый изнутри.",
    badge: null,
  },
  {
    icon: "Zap",
    title: "Оклейка плёнкой",
    desc: "Защитная PPF-плёнка или виниловая оклейка. Полная защита от гравия, песка и мелких ударов.",
    badge: null,
  },
  {
    icon: "Award",
    title: "Комплексный детейлинг",
    desc: "Полный пакет — от мойки до финальной полировки. Идеальный результат за одно посещение.",
    badge: "VIP",
  },
];

const PRICES = [
  {
    name: "Стандарт",
    price: "от 1 500 ₽",
    desc: "Базовая мойка кузова",
    features: ["Мойка кузова", "Мойка дисков", "Очистка стёкол", "Пылесос салона"],
    highlighted: false,
  },
  {
    name: "Комфорт",
    price: "от 3 500 ₽",
    desc: "Углублённая мойка + уход",
    features: ["Всё из Стандарт", "Чернение резины", "Защитный воск", "Полировка стёкол", "Ароматизация"],
    highlighted: true,
  },
  {
    name: "Премиум",
    price: "от 8 000 ₽",
    desc: "Полный детейлинг",
    features: ["Всё из Комфорт", "Химчистка салона", "Полировка кузова", "Защитное покрытие", "Детейлинг двигателя"],
    highlighted: false,
  },
];

const REVIEWS = [
  {
    name: "Александр М.",
    car: "Mercedes S-Class",
    text: "Просто нет слов — машина выглядит лучше, чем когда я её покупал в салоне. Керамика держится уже второй год.",
    rating: 5,
    date: "Март 2024",
  },
  {
    name: "Екатерина В.",
    car: "BMW X5",
    text: "Сдала на полный детейлинг перед продажей. Покупатель был в шоке от состояния авто. Цена машины выросла на 150 тысяч.",
    rating: 5,
    date: "Февраль 2024",
  },
  {
    name: "Дмитрий К.",
    car: "Porsche Cayenne",
    text: "Езжу только сюда уже 3 года. Мастера знают своё дело, работают аккуратно, всегда объясняют что и зачем делают.",
    rating: 5,
    date: "Апрель 2024",
  },
];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[hsl(43,74%,52%)] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDone, setBookingDone] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[hsl(45,30%,92%)]" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/43cfc4b9-b152-499e-b07a-daab39252fc1/bucket/a7998c67-d8ba-45c2-bf17-9c98a75a2626.png"
              alt="DBC Detailing"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-body uppercase tracking-widest text-[hsl(45,10%,60%)] hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-[#0a0a0a] text-xs font-semibold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
          >
            Записаться
          </a>

          <button
            className="md:hidden text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a] px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-[hsl(45,10%,60%)] hover:text-gold py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 gold-gradient text-[#0a0a0a] text-xs font-semibold uppercase tracking-widest text-center rounded-sm"
            >
              Записаться онлайн
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12" style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(43,74%,52%), transparent)" }}></div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">Премиум детейлинг</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] mb-8 animate-slide-up">
              Ваш автомобиль<br />
              <span className="gold-text-gradient font-semibold italic">заслуживает</span><br />
              <span className="text-[hsl(45,30%,92%)]">большего</span>
            </h1>

            <p className="text-[hsl(45,10%,55%)] text-base font-light leading-relaxed max-w-xl mb-10 tracking-wide animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Профессиональный детейлинг и премиум-мойка автомобилей. Работаем только с лучшими материалами — ваш автомобиль будет выглядеть лучше нового.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="#booking"
                className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-[#0a0a0a] text-sm font-semibold uppercase tracking-widest rounded-sm gold-glow hover:opacity-90 transition-all"
              >
                <Icon name="Calendar" size={16} />
                Записаться онлайн
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-[hsl(45,30%,92%)] text-sm font-medium uppercase tracking-widest rounded-sm hover:border-gold hover:text-gold transition-all"
              >
                Наши услуги
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>

            <div className="flex items-center gap-8 mt-14 pt-10 border-t border-[#1a1a1a]">
              {[
                { num: "500+", label: "Довольных клиентов" },
                { num: "7 лет", label: "Опыт работы" },
                { num: "100%", label: "Гарантия качества" },
              ].map(stat => (
                <div key={stat.num} className="text-center">
                  <div className="font-display text-3xl font-semibold text-gold">{stat.num}</div>
                  <div className="text-xs text-[hsl(45,10%,50%)] mt-1 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mb-6"></div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">Что мы делаем</span>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              Наши <span className="gold-text-gradient italic font-semibold">услуги</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(service => (
              <div key={service.title} className="dark-card dark-card-hover rounded-sm p-8 relative">
                {service.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 gold-gradient text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                    {service.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-sm border border-[hsl(43,74%,52%)]/30 flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-3">{service.title}</h3>
                <p className="text-[hsl(45,10%,50%)] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-[hsl(43,74%,52%)]/10 rounded-sm"></div>
              <img
                src={DETAIL_IMAGE}
                alt="Процесс детейлинга"
                className="w-full h-[500px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
                <div className="font-display text-4xl font-semibold text-gold">7+</div>
                <div className="text-xs text-[hsl(45,10%,50%)] uppercase tracking-widest mt-1">лет опыта</div>
              </div>
            </div>

            <div>
              <div className="w-16 mb-6" style={{ height: "2px", background: "linear-gradient(90deg, hsl(43,74%,52%), hsl(43,80%,68%))" }}></div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">О компании</span>
              <h2 className="font-display text-5xl font-light leading-tight mb-6">
                Мастера, которым<br />
                <span className="gold-text-gradient italic font-semibold">доверяют</span>
              </h2>
              <p className="text-[hsl(45,10%,55%)] leading-relaxed mb-6">
                BlackShine — это профессиональный детейлинг-центр с 7-летним опытом работы с автомобилями премиум-класса. Мы используем только сертифицированные материалы и оборудование мирового уровня.
              </p>
              <p className="text-[hsl(45,10%,55%)] leading-relaxed mb-10">
                Наша команда прошла обучение у ведущих европейских специалистов. Каждый автомобиль — это отдельный проект, которому мы уделяем максимальное внимание.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  "Только оригинальная химия",
                  "Гарантия на все работы",
                  "Видеозапись процесса",
                  "Работаем с премиум-классом",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-gold flex-shrink-0" />
                    <span className="text-sm text-[hsl(45,10%,65%)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mb-6"></div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">Стоимость</span>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              Наши <span className="gold-text-gradient italic font-semibold">цены</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICES.map(plan => (
              <div
                key={plan.name}
                className={`rounded-sm p-8 relative flex flex-col ${
                  plan.highlighted
                    ? "border border-[hsl(43,74%,52%)] bg-gradient-to-b from-[#111] to-[#0d0d0d] gold-glow"
                    : "dark-card border border-[#1a1a1a]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 gold-gradient text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-medium mb-1">{plan.name}</h3>
                  <p className="text-[hsl(45,10%,50%)] text-sm">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="font-display text-4xl font-semibold text-gold">{plan.price}</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[hsl(45,10%,65%)]">
                      <Icon name="Check" size={14} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`w-full py-3 text-center text-sm font-semibold uppercase tracking-widest rounded-sm transition-all block ${
                    plan.highlighted
                      ? "gold-gradient text-[#0a0a0a] hover:opacity-90"
                      : "border border-[#333] text-[hsl(45,30%,92%)] hover:border-gold hover:text-gold"
                  }`}
                >
                  Выбрать
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-[hsl(45,10%,40%)] text-sm mt-8">
            * Цены зависят от класса и размера автомобиля. Точная стоимость рассчитывается индивидуально.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 mb-6" style={{ height: "2px", background: "linear-gradient(90deg, hsl(43,74%,52%), hsl(43,80%,68%))" }}></div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">Онлайн-запись</span>
              <h2 className="font-display text-5xl font-light leading-tight mb-6">
                Запишитесь<br />
                <span className="gold-text-gradient italic font-semibold">прямо сейчас</span>
              </h2>
              <p className="text-[hsl(45,10%,55%)] leading-relaxed mb-8">
                Выберите удобное время, и мы подготовим всё для вашего визита. Подтверждение придёт на телефон.
              </p>

              <img
                src={CAR_IMAGE}
                alt="Детейлинг авто"
                className="w-full h-64 object-cover rounded-sm opacity-80"
              />
            </div>

            <div className="dark-card rounded-sm p-8 border border-[#1a1a1a]">
              {bookingDone ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-3xl font-light mb-3">Запись принята!</h3>
                  <p className="text-[hsl(45,10%,55%)] text-sm">
                    Мы свяжемся с вами для подтверждения в течение 30 минут.
                  </p>
                  <button
                    onClick={() => { setBookingDone(false); setName(""); setPhone(""); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
                    className="mt-8 text-xs text-gold uppercase tracking-widest underline underline-offset-4"
                  >
                    Записаться ещё раз
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-5">
                  <h3 className="font-display text-2xl font-medium mb-6">Выберите услугу и время</h3>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[hsl(45,10%,50%)] mb-2">Услуга</label>
                    <select
                      value={selectedService}
                      onChange={e => setSelectedService(e.target.value)}
                      required
                      className="w-full bg-[#111] border border-[#2a2a2a] text-[hsl(45,30%,92%)] text-sm px-4 py-3 rounded-sm focus:border-[hsl(43,74%,52%)] focus:outline-none transition-colors"
                    >
                      <option value="">Выберите услугу...</option>
                      {SERVICES.map(s => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[hsl(45,10%,50%)] mb-2">Дата</label>
                      <input
                        type="date"
                        value={selectedDate}
                        min={today}
                        onChange={e => setSelectedDate(e.target.value)}
                        required
                        className="w-full bg-[#111] border border-[#2a2a2a] text-[hsl(45,30%,92%)] text-sm px-4 py-3 rounded-sm focus:border-[hsl(43,74%,52%)] focus:outline-none transition-colors"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[hsl(45,10%,50%)] mb-2">Время</label>
                      <select
                        value={selectedTime}
                        onChange={e => setSelectedTime(e.target.value)}
                        required
                        className="w-full bg-[#111] border border-[#2a2a2a] text-[hsl(45,30%,92%)] text-sm px-4 py-3 rounded-sm focus:border-[hsl(43,74%,52%)] focus:outline-none transition-colors"
                      >
                        <option value="">Время...</option>
                        {TIME_SLOTS.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[hsl(45,10%,50%)] mb-2">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Александр"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      className="w-full bg-[#111] border border-[#2a2a2a] text-[hsl(45,30%,92%)] text-sm px-4 py-3 rounded-sm placeholder:text-[hsl(45,10%,35%)] focus:border-[hsl(43,74%,52%)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[hsl(45,10%,50%)] mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#111] border border-[#2a2a2a] text-[hsl(45,30%,92%)] text-sm px-4 py-3 rounded-sm placeholder:text-[hsl(45,10%,35%)] focus:border-[hsl(43,74%,52%)] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gold-gradient text-[#0a0a0a] text-sm font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity mt-2"
                  >
                    Записаться
                  </button>

                  <p className="text-xs text-[hsl(45,10%,40%)] text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mb-6"></div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">Клиенты о нас</span>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              <span className="gold-text-gradient italic font-semibold">Отзывы</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map(review => (
              <div key={review.name} className="dark-card dark-card-hover rounded-sm p-8">
                <StarRating count={review.rating} />
                <p className="text-[hsl(45,10%,65%)] text-sm leading-relaxed mt-5 mb-6 italic">
                  "{review.text}"
                </p>
                <div className="border-t border-[#1a1a1a] pt-5 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm text-[hsl(45,30%,92%)]">{review.name}</div>
                    <div className="text-xs text-[hsl(45,10%,45%)] mt-0.5">{review.car}</div>
                  </div>
                  <span className="text-xs text-[hsl(45,10%,40%)]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mb-6"></div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body block mb-4">Как нас найти</span>
            <h2 className="font-display text-5xl font-light">
              <span className="gold-text-gradient italic font-semibold">Контакты</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "MapPin", label: "Адрес", value: "ул. Автомобильная, 1", sub: "Москва" },
              { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00", sub: "Ежедневно 9:00–21:00" },
              { icon: "Mail", label: "Email", value: "info@blackshine.ru", sub: "Ответим в течение часа" },
              { icon: "Clock", label: "Режим работы", value: "09:00 – 21:00", sub: "Без выходных" },
            ].map(item => (
              <div key={item.label} className="dark-card rounded-sm p-6 text-center dark-card-hover">
                <div className="w-10 h-10 rounded-sm border border-[hsl(43,74%,52%)]/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={18} className="text-gold" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[hsl(45,10%,45%)] mb-2">{item.label}</div>
                <div className="font-medium text-sm text-[hsl(45,30%,92%)]">{item.value}</div>
                <div className="text-xs text-[hsl(45,10%,45%)] mt-1">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="rounded-sm overflow-hidden border border-[#1a1a1a] h-64 bg-[#111] flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-gold mx-auto mb-3" />
              <p className="text-[hsl(45,10%,50%)] text-sm">Карта будет здесь</p>
              <p className="text-[hsl(45,10%,35%)] text-xs mt-1">ул. Автомобильная, 1, Москва</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-[#080808] border-t border-[#151515]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/43cfc4b9-b152-499e-b07a-daab39252fc1/bucket/a7998c67-d8ba-45c2-bf17-9c98a75a2626.png"
              alt="DBC Detailing"
              className="h-8 w-auto opacity-70"
            />
          </div>

          <p className="text-xs text-[hsl(45,10%,35%)] tracking-wide">
            © 2024 DBC Detailing. Все права защищены.
          </p>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[hsl(45,10%,40%)] hover:text-gold transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}