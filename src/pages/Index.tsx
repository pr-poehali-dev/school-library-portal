import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

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
      count: '2500+ книг',
      tags: ['Романы', 'Повести', 'Рассказы']
    },
    {
      id: 'foreign',
      title: 'Зарубежная литература',
      icon: 'Globe',
      description: 'Мировая классика',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
      count: '1800+ книг',
      tags: ['Европа', 'Америка', 'Азия']
    },
    {
      id: 'yakut',
      title: 'Якутская литература',
      icon: 'Mountain',
      description: 'Национальное наследие',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      count: '600+ книг',
      tags: ['Проза', 'Поэзия', 'Фольклор']
    },
    {
      id: 'children',
      title: 'Детская литература',
      icon: 'Baby',
      description: 'Для юных читателей',
      color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      count: '3200+ книг',
      tags: ['Сказки', 'Приключения', 'Обучение']
    },
    {
      id: 'prose',
      title: 'Проза',
      icon: 'FileText',
      description: 'Современная и классическая',
      color: 'bg-gradient-to-br from-violet-500 to-purple-500',
      count: '1500+ книг',
      tags: ['Современная', 'Классическая', 'Экспериментальная']
    },
    {
      id: 'poetry',
      title: 'Поэзия',
      icon: 'Feather',
      description: 'Стихи и поэмы',
      color: 'bg-gradient-to-br from-pink-600 to-red-500',
      count: '800+ книг',
      tags: ['Лирика', 'Эпос', 'Авангард']
    }
  ];

  const mediaSections = [
    {
      id: 'podcasts',
      title: 'Подкасты',
      icon: 'Podcast',
      description: 'Аудио о книгах и литературе',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      count: '120+ эпизодов',
      items: [
        'Обзоры новинок',
        'Интервью с авторами',
        'Литературные дискуссии',
        'Аудиокниги'
      ]
    },
    {
      id: 'videos',
      title: 'Видеоролики',
      icon: 'Video',
      description: 'Образовательный контент',
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      count: '200+ видео',
      items: [
        'Видеообзоры книг',
        'Мастер-классы',
        'Экскурсии по библиотеке',
        'Встречи с писателями'
      ]
    }
  ];

  const additionalSections = [
    {
      id: 'local-history',
      title: 'Краеведение',
      icon: 'MapPin',
      description: 'История родного края',
      color: 'bg-gradient-to-br from-amber-500 to-orange-500'
    },
    {
      id: 'contests',
      title: 'Конкурсы',
      icon: 'Trophy',
      description: 'Участвуй и побеждай',
      color: 'bg-gradient-to-br from-indigo-500 to-blue-500'
    },
    {
      id: 'methodical',
      title: 'Методические пособия',
      icon: 'BookOpen',
      description: 'Для педагогов',
      color: 'bg-gradient-to-br from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Library" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Школьная Библиотека
                </h1>
                <p className="text-sm text-muted-foreground">Мир знаний открыт для тебя</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-4">
              {['home', 'news', 'literature', 'media'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className="transition-all hover:scale-105"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'news' && 'Новости'}
                  {section === 'literature' && 'Литература'}
                  {section === 'media' && 'Медиа'}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-5xl font-bold mb-4 animate-scale-in">
                  Добро пожаловать в школьную библиотеку! 📚
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Здесь собраны лучшие книги, подкасты, видео и образовательные материалы для вашего развития
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
                    onClick={() => setActiveSection('literature')}
                  >
                    <Icon name="BookOpen" className="mr-2" size={20} />
                    Каталог книг
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 border-white text-white hover:bg-white/30 backdrop-blur-sm"
                    onClick={() => setActiveSection('media')}
                  >
                    <Icon name="Play" className="mr-2" size={20} />
                    Медиа
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
                <img
                  src="https://cdn.poehali.dev/projects/c387e5ad-3156-420f-98c5-ad13ce7d28a0/files/6ab74b6e-e99d-4ccf-9c2e-d70191a4f0d2.jpg"
                  alt="Library"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Последние новости</h3>
                  <p className="text-muted-foreground">Актуальные события библиотеки</p>
                </div>
                <Button variant="outline" onClick={() => setActiveSection('news')}>
                  Все новости
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8">Литературные коллекции</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {literatureSections.map((section, index) => (
                  <Card
                    key={section.id}
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setActiveSection('literature')}
                  >
                    <div className={`h-40 ${section.color} flex flex-col items-center justify-center text-white p-6`}>
                      <Icon name={section.icon as any} size={48} className="mb-3" />
                      <h4 className="text-xl font-bold text-center">{section.title}</h4>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-3">{section.description}</p>
                      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary">
                        <Icon name="Library" size={16} />
                        {section.count}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {section.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8">Мультимедиа</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {mediaSections.map((section, index) => (
                  <Card
                    key={section.id}
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary animate-scale-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setActiveSection('media')}
                  >
                    <div className={`h-48 ${section.color} flex flex-col items-center justify-center text-white p-8`}>
                      <Icon name={section.icon as any} size={64} className="mb-4" />
                      <h4 className="text-2xl font-bold text-center">{section.title}</h4>
                      <p className="text-white/90 text-center mt-2">{section.description}</p>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary">
                        <Icon name="Play" size={16} />
                        {section.count}
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8">Дополнительные разделы</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {additionalSections.map((section, index) => (
                  <Card
                    key={section.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-32 ${section.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                      <Icon name={section.icon as any} className="text-white" size={48} />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-4xl font-bold">Новости библиотеки</h2>
                <p className="text-muted-foreground mt-2">Следите за событиями и обновлениями</p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Все новости</TabsTrigger>
                <TabsTrigger value="updates">Обновления</TabsTrigger>
                <TabsTrigger value="contests">Конкурсы</TabsTrigger>
                <TabsTrigger value="events">События</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {newsItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{item.category}</Badge>
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
              </TabsContent>

              {['updates', 'contests', 'events'].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Icon name="Info" className="mx-auto mb-4 text-muted-foreground" size={48} />
                      <p className="text-muted-foreground">Новости из категории "{tab === 'updates' ? 'Обновления' : tab === 'contests' ? 'Конкурсы' : 'События'}"</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {activeSection === 'literature' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div className="flex-1">
                <h2 className="text-4xl font-bold">Литературный каталог</h2>
                <p className="text-muted-foreground mt-2">Более 10 000 книг в вашем распоряжении</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск книг по названию, автору, жанру..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button size="lg" className="px-8">
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {literatureSections.map((section, index) => (
                <Card
                  key={section.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-48 ${section.color} flex flex-col items-center justify-center text-white p-8`}>
                    <Icon name={section.icon as any} size={64} className="mb-4" />
                    <h3 className="text-2xl font-bold text-center">{section.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary">
                      <Icon name="Library" size={16} />
                      {section.count}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {section.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Открыть раздел
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'media' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              <div>
                <h2 className="text-4xl font-bold">Медиатека</h2>
                <p className="text-muted-foreground mt-2">Подкасты и видео о литературе</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mediaSections.map((section, index) => (
                <Card
                  key={section.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`h-64 ${section.color} flex flex-col items-center justify-center text-white p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Icon name={section.icon as any} size={80} className="mb-4 relative z-10" />
                    <h3 className="text-3xl font-bold text-center mb-2 relative z-10">{section.title}</h3>
                    <p className="text-white/90 text-center relative z-10">{section.description}</p>
                    <Badge className="mt-4 bg-white/20 backdrop-blur-sm border-white relative z-10">
                      {section.count}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-6">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon name="Play" size={16} className="text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Перейти к {section.id === 'podcasts' ? 'подкастам' : 'видео'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Headphones" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Подпишитесь на наши каналы</h3>
                    <p className="text-white/90">Не пропускайте новые выпуски подкастов и видеороликов</p>
                  </div>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                    <Icon name="Bell" className="mr-2" size={20} />
                    Подписаться
                  </Button>
                </div>
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
              <p className="text-white/80">
                Центр образования и развития для учеников и педагогов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={18} />
                Литература
              </h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Художественная</li>
                <li className="hover:text-white cursor-pointer transition-colors">Зарубежная</li>
                <li className="hover:text-white cursor-pointer transition-colors">Якутская</li>
                <li className="hover:text-white cursor-pointer transition-colors">Детская</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Play" size={18} />
                Медиа
              </h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Подкасты</li>
                <li className="hover:text-white cursor-pointer transition-colors">Видеоролики</li>
                <li className="hover:text-white cursor-pointer transition-colors">Аудиокниги</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Mail" size={18} />
                Контакты
              </h4>
              <p className="text-white/80 text-sm mb-2">library@school.edu</p>
              <p className="text-white/80 text-sm mb-4">+7 (xxx) xxx-xx-xx</p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
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
