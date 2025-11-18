import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainMenu = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'BookOpen' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'readers', label: 'Читателям', icon: 'Users', 
      submenu: [
        { id: 'students', label: 'Ученикам', icon: 'GraduationCap' },
        { id: 'parents', label: 'Родителям', icon: 'Heart' },
        { id: 'teachers', label: 'Педагогам', icon: 'Briefcase' }
      ]
    },
    { id: 'resources', label: 'Электронные ресурсы', icon: 'Globe' },
    { id: 'media', label: 'Медиа', icon: 'Play',
      submenu: [
        { id: 'podcasts', label: 'Сахалыы подкастар', icon: 'Podcast' },
        { id: 'videos', label: 'Видеоролики', icon: 'Video' }
      ]
    },
    { id: 'about', label: 'О библиотеке', icon: 'Info',
      submenu: [
        { id: 'about-us', label: 'О нас', icon: 'Building' },
        { id: 'contacts', label: 'Контакты', icon: 'Mail' }
      ]
    },
    { id: 'documents', label: 'Нормативные документы', icon: 'FileText' },
    { id: 'novelties', label: 'Новинки', icon: 'Sparkles' },
    { id: 'recommendations', label: 'Рекомендации', icon: 'Star' },
    { id: 'creativity', label: 'Творчество читателей', icon: 'Palette' },
    { id: 'faq', label: 'Вопрос-ответ', icon: 'MessageCircleQuestion' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Новые поступления якутской литературы',
      date: '15 января 2025',
      category: 'Обновления',
      excerpt: 'В библиотеке появилась коллекция произведений современных якутских писателей и поэтов.',
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/ff2f68b3-575c-4404-beeb-1a1cf36d272a.jpg'
    },
    {
      id: 2,
      title: 'Литературный конкурс "Моя любимая книга"',
      date: '10 января 2025',
      category: 'Конкурсы',
      excerpt: 'Приглашаем всех учеников принять участие в конкурсе эссе о любимых произведениях.',
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/6ab74b6e-e99d-4ccf-9c2e-d70191a4f0d2.jpg'
    },
    {
      id: 3,
      title: 'Запуск нового подкаста о литературе',
      date: '8 января 2025',
      category: 'События',
      excerpt: 'Теперь вы можете слушать обзоры книг и интервью с авторами в нашем подкасте.',
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/1668e47d-5b1b-4535-b1b8-b737feaa8677.jpg'
    }
  ];

  const literatureSections = [
    {
      id: 'fiction',
      title: 'Художественная литература',
      icon: 'BookHeart',
      description: 'Классика и современность',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      count: '2500+ книг'
    },
    {
      id: 'foreign',
      title: 'Зарубежная литература',
      icon: 'Globe',
      description: 'Мировая классика',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
      count: '1800+ книг'
    },
    {
      id: 'yakut',
      title: 'Якутская литература',
      icon: 'Mountain',
      description: 'Национальное наследие',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      count: '600+ книг'
    },
    {
      id: 'children',
      title: 'Детская литература',
      icon: 'Baby',
      description: 'Для юных читателей',
      color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      count: '3200+ книг'
    },
    {
      id: 'prose',
      title: 'Проза',
      icon: 'FileText',
      description: 'Современная и классическая',
      color: 'bg-gradient-to-br from-violet-500 to-purple-500',
      count: '1500+ книг'
    },
    {
      id: 'poetry',
      title: 'Поэзия',
      icon: 'Feather',
      description: 'Стихи и поэмы',
      color: 'bg-gradient-to-br from-pink-600 to-red-500',
      count: '800+ книг'
    }
  ];

  const resources = [
    { id: 1, title: 'ЛитРес: Школа', icon: 'BookOpen', description: 'Электронная библиотека', url: '#' },
    { id: 2, title: 'НЭБ', icon: 'Library', description: 'Национальная электронная библиотека', url: '#' },
    { id: 3, title: 'Президентская библиотека', icon: 'Landmark', description: 'Электронные ресурсы', url: '#' },
    { id: 4, title: 'Онлайн-выставки', icon: 'Image', description: 'Виртуальные экспозиции', url: '#' }
  ];

  const yakutPodcasts = [
    {
      id: 1,
      title: 'Саха литературата',
      description: 'Якутские писатели и их произведения',
      duration: '45 мин',
      episodes: 24,
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/ff2f68b3-575c-4404-beeb-1a1cf36d272a.jpg'
    },
    {
      id: 2,
      title: 'Төрөөбүт тылбыт',
      description: 'О якутском языке и культуре',
      duration: '30 мин',
      episodes: 18,
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/6ab74b6e-e99d-4ccf-9c2e-d70191a4f0d2.jpg'
    },
    {
      id: 3,
      title: 'Айымньылар аймахтара',
      description: 'Якутские сказки и легенды',
      duration: '25 мин',
      episodes: 32,
      image: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/1668e47d-5b1b-4535-b1b8-b737feaa8677.jpg'
    }
  ];

  const videoRoliki = [
    {
      id: 1,
      title: 'Саха суруйааччыларынан',
      description: 'Встречи с якутскими писателями',
      views: '12К',
      videos: 15,
      thumbnail: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/ff2f68b3-575c-4404-beeb-1a1cf36d272a.jpg'
    },
    {
      id: 2,
      title: 'Кинигэни аах-сиир',
      description: 'Обзоры якутских книг',
      views: '8.5К',
      videos: 22,
      thumbnail: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/6ab74b6e-e99d-4ccf-9c2e-d70191a4f0d2.jpg'
    },
    {
      id: 3,
      title: 'Саха тылын үөрэтиибит',
      description: 'Уроки якутского языка',
      views: '25К',
      videos: 40,
      thumbnail: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/1668e47d-5b1b-4535-b1b8-b737feaa8677.jpg'
    },
    {
      id: 4,
      title: 'Норуот айымньыта',
      description: 'Народное творчество Якутии',
      views: '6.2К',
      videos: 12,
      thumbnail: 'https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/ff2f68b3-575c-4404-beeb-1a1cf36d272a.jpg'
    }
  ];

  const faqItems = [
    {
      question: 'Как записаться в библиотеку?',
      answer: 'Для записи в библиотеку необходимо обратиться к библиотекарю с документом, удостоверяющим личность (для учеников - дневник или справка из школы). Запись производится бесплатно.'
    },
    {
      question: 'Сколько книг можно взять одновременно?',
      answer: 'Ученики могут взять одновременно до 5 книг на срок до 14 дней. Учебники выдаются на весь учебный год.'
    },
    {
      question: 'Можно ли продлить срок пользования книгой?',
      answer: 'Да, срок можно продлить, обратившись к библиотекарю лично, по телефону или через форму на сайте. Продление возможно, если на книгу нет очереди.'
    },
    {
      question: 'Как получить доступ к электронным ресурсам?',
      answer: 'Доступ к электронным ресурсам предоставляется всем зарегистрированным читателям. Логин и пароль можно получить у библиотекаря.'
    },
    {
      question: 'Проводятся ли мероприятия в библиотеке?',
      answer: 'Да, регулярно проводятся литературные встречи, конкурсы, викторины и тематические мероприятия. Следите за новостями на сайте.'
    }
  ];

  const novelties = [
    { title: 'Новая серия учебных пособий по литературе', date: '18 января 2025', category: 'Учебная литература' },
    { title: 'Поступление современной зарубежной прозы', date: '15 января 2025', category: 'Художественная' },
    { title: 'Якутские сказки и легенды - новое издание', date: '12 января 2025', category: 'Краеведение' },
    { title: 'Детская энциклопедия "Мир вокруг нас"', date: '10 января 2025', category: 'Детская' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Library" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Школьная Библиотека
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Мир знаний открыт для тебя</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>

            <nav className="hidden md:flex gap-2">
              {mainMenu.slice(0, 6).map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="text-sm"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {mainMenu.map((item) => (
                <div key={item.id}>
                  <Button
                    variant={activeSection === item.id ? 'default' : 'ghost'}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <Icon name={item.icon as any} className="mr-2" size={16} />
                    {item.label}
                  </Button>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <Button
                          key={sub.id}
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setActiveSection(sub.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full justify-start text-sm"
                        >
                          <Icon name={sub.icon as any} className="mr-2" size={14} />
                          {sub.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 md:space-y-16 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 md:p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Добро пожаловать в школьную библиотеку! 📚
                </h2>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
                  Здесь собраны лучшие книги, электронные ресурсы и материалы для вашего развития
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90"
                    onClick={() => setActiveSection('catalog')}
                  >
                    <Icon name="BookOpen" className="mr-2" size={20} />
                    Каталог книг
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 border-white text-white hover:bg-white/30"
                    onClick={() => setActiveSection('resources')}
                  >
                    <Icon name="Globe" className="mr-2" size={20} />
                    Электронные ресурсы
                  </Button>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => setActiveSection('novelties')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Sparkles" className="text-white" size={24} />
                  </div>
                  <CardTitle>Новинки</CardTitle>
                  <CardDescription>Свежие поступления</CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => setActiveSection('recommendations')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Star" className="text-white" size={24} />
                  </div>
                  <CardTitle>Рекомендации</CardTitle>
                  <CardDescription>Что почитать</CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => setActiveSection('creativity')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Palette" className="text-white" size={24} />
                  </div>
                  <CardTitle>Творчество читателей</CardTitle>
                  <CardDescription>Ваши работы</CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl md:text-3xl font-bold">Новости</h3>
                <Button variant="outline" onClick={() => setActiveSection('news')}>
                  Все новости
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <Badge className="absolute top-4 left-4">{item.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Коллекции</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {literatureSections.map((section) => (
                  <Card
                    key={section.id}
                    className="cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
                    onClick={() => setActiveSection('catalog')}
                  >
                    <div className={`h-40 ${section.color} flex flex-col items-center justify-center text-white p-6`}>
                      <Icon name={section.icon as any} size={48} className="mb-3" />
                      <h4 className="text-xl font-bold text-center">{section.title}</h4>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-2">{section.description}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Icon name="Library" size={16} />
                        {section.count}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'catalog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold">Каталог</h2>
                <p className="text-muted-foreground mt-2">Более 10 000 книг в нашей коллекции</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Input placeholder="Поиск по названию, автору, жанру..." className="flex-1" />
              <Button>
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {literatureSections.map((section) => (
                <Card key={section.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className={`h-40 ${section.color} flex flex-col items-center justify-center text-white p-6`}>
                    <Icon name={section.icon as any} size={48} className="mb-3" />
                    <h3 className="text-xl font-bold text-center">{section.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary">
                      <Icon name="Library" size={16} />
                      {section.count}
                    </div>
                    <Button className="w-full" variant="outline">
                      Открыть раздел
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Новости</h2>
                <p className="text-muted-foreground mt-2">События библиотеки</p>
              </div>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>{item.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                        <Button variant="outline">
                          Читать полностью
                          <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {(activeSection === 'students' || activeSection === 'parents' || activeSection === 'teachers' || activeSection === 'readers') && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {activeSection === 'students' && 'Ученикам'}
                  {activeSection === 'parents' && 'Родителям'}
                  {activeSection === 'teachers' && 'Педагогам'}
                  {activeSection === 'readers' && 'Читателям'}
                </h2>
                <p className="text-muted-foreground mt-2">Полезная информация и ресурсы</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all">
                <CardHeader>
                  <Icon name="BookOpen" className="mb-3 text-primary" size={32} />
                  <CardTitle>Списки литературы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Рекомендованная литература по классам</p>
                  <Button variant="outline" className="w-full">Смотреть списки</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all">
                <CardHeader>
                  <Icon name="Calendar" className="mb-3 text-primary" size={32} />
                  <CardTitle>Мероприятия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Расписание встреч и конкурсов</p>
                  <Button variant="outline" className="w-full">Расписание</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all">
                <CardHeader>
                  <Icon name="HelpCircle" className="mb-3 text-primary" size={32} />
                  <CardTitle>Консультации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Помощь в подборе литературы</p>
                  <Button variant="outline" className="w-full">Задать вопрос</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'resources' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Электронные ресурсы</h2>
                <p className="text-muted-foreground mt-2">Доступ к цифровым библиотекам и материалам</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-xl transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={resource.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Перейти
                      <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' || activeSection === 'about-us' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">О нас</h2>
                <p className="text-muted-foreground mt-2">История и миссия библиотеки</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Наша библиотека</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Школьная библиотека является центром образования и культурного развития учащихся. Мы работаем с 1985 года и за это время накопили богатую коллекцию литературы.</p>
                <p>В нашем фонде более 10 000 книг: художественная литература, учебники, справочники, периодические издания. Особое внимание уделяем якутской литературе и краеведению.</p>
                <p>Мы проводим литературные встречи, выставки, конкурсы и викторины. Наша цель — привить любовь к чтению и помочь в образовательном процессе.</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10 000+</div>
                  <CardTitle>Книг в фонде</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <CardTitle>Читателей</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <CardTitle>Мероприятий в год</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
                <p className="text-muted-foreground mt-2">Как с нами связаться</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Якутск, ул. Школьная, д. 1</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (xxx) xxx-xx-xx</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">library@school.edu</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Пт: 9:00-17:00</div>
                      <div className="text-sm text-muted-foreground">Сб-Вс: выходной</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Написать нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Сообщение" rows={5} />
                    <Button className="w-full">
                      <Icon name="Send" className="mr-2" size={16} />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Нормативные документы</h2>
                <p className="text-muted-foreground mt-2">Правила и положения</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Положение о школьной библиотеке',
                'Правила пользования библиотекой',
                'План работы библиотеки на 2024-2025 учебный год',
                'Порядок работы с учебниками',
                'Инструкция по сохранности библиотечного фонда'
              ].map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Icon name="FileText" className="text-primary" size={24} />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doc}</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="Download" size={16} />
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'novelties' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Новинки</h2>
                <p className="text-muted-foreground mt-2">Последние поступления</p>
              </div>
            </div>

            <div className="space-y-4">
              {novelties.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{item.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'recommendations' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Рекомендации</h2>
                <p className="text-muted-foreground mt-2">Что почитать</p>
              </div>
            </div>

            <Tabs defaultValue="1-4" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="1-4">1-4 классы</TabsTrigger>
                <TabsTrigger value="5-9">5-9 классы</TabsTrigger>
                <TabsTrigger value="10-11">10-11 классы</TabsTrigger>
              </TabsList>
              {['1-4', '5-9', '10-11'].map((grade) => (
                <TabsContent key={grade} value={grade} className="space-y-4">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Icon name="BookOpen" className="mx-auto mb-4 text-muted-foreground" size={48} />
                      <p className="text-muted-foreground">Рекомендации для {grade === '1-4' ? '1-4' : grade === '5-9' ? '5-9' : '10-11'} классов</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {activeSection === 'creativity' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Творчество читателей</h2>
                <p className="text-muted-foreground mt-2">Рисунки, стихи и отзывы</p>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <CardContent className="p-8 text-center">
                <Icon name="Palette" className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">Поделитесь своим творчеством</h3>
                <p className="text-white/90 mb-6">Присылайте свои рисунки, стихи и отзывы о прочитанных книгах</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  <Icon name="Upload" className="mr-2" size={20} />
                  Отправить работу
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'podcasts' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Сахалыы подкастар</h2>
                <p className="text-muted-foreground mt-2">Якутские подкасты о литературе и культуре</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yakutPodcasts.map((podcast) => (
                <Card key={podcast.id} className="group hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={podcast.image} 
                      alt={podcast.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary/90 backdrop-blur-sm mb-2">
                        <Icon name="Podcast" className="mr-1" size={12} />
                        {podcast.episodes} эпизодов
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{podcast.title}</CardTitle>
                    <CardDescription>{podcast.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {podcast.duration}
                      </div>
                    </div>
                    <Button className="w-full">
                      <Icon name="Play" className="mr-2" size={16} />
                      Слушать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={40} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Подпишитесь на подкасты</h3>
                    <p className="text-white/90">Новые выпуски каждую неделю о якутской литературе и культуре</p>
                  </div>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                    <Icon name="Bell" className="mr-2" size={20} />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'videos' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Видеоролики</h2>
                <p className="text-muted-foreground mt-2">Образовательные видео о якутской культуре</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {videoRoliki.map((video) => (
                <Card key={video.id} className="group hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" className="text-primary ml-1" size={28} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/60 backdrop-blur-sm">
                        {video.videos} видео
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Eye" size={16} />
                        {video.views} просмотров
                      </div>
                      <Button variant="outline">
                        Смотреть
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-pink-500 to-red-500 text-white border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Youtube" size={40} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Следите за новыми видео</h3>
                    <p className="text-white/90">Регулярные выпуски о якутской литературе, языке и традициях</p>
                  </div>
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90">
                    <Icon name="Youtube" className="mr-2" size={20} />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'faq' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Вопрос-ответ</h2>
                <p className="text-muted-foreground mt-2">Часто задаваемые вопросы</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card>
              <CardHeader>
                <CardTitle>Не нашли ответ?</CardTitle>
                <CardDescription>Задайте свой вопрос</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Ваш вопрос" rows={4} />
                  <Button>
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Library" size={20} />
                </div>
                <h3 className="text-xl font-bold">Школьная Библиотека</h3>
              </div>
              <p className="text-white/80 text-sm">
                Центр образования и развития
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('catalog')}>Каталог</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('news')}>Новости</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('resources')}>Электронные ресурсы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('about-us')}>О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('contacts')}>Контакты</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveSection('faq')}>Вопрос-ответ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-white/80 text-sm mb-2">library@school.edu</p>
              <p className="text-white/80 text-sm">+7 (xxx) xxx-xx-xx</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 Школьная Библиотека. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;