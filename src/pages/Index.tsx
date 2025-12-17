const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-3xl font-light text-foreground tracking-wide">
            Оплата госпошлин ГИБДД
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-normal text-foreground">
              Онлайн-сервис оплаты
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Быстро и безопасно оплачивайте государственные услуги ГИБДД
            </p>
          </div>

          <div className="relative w-full" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
            <iframe
              src="https://oplatagosuslug.ru/poshliny_gibdd/"
              className="w-full h-full border-0"
              title="Оплата госпошлин ГИБДД"
              loading="lazy"
              allow="payment"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Официальный сервис оплаты государственных услуг
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
