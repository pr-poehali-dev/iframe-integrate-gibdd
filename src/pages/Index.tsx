const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-light text-foreground tracking-wide">
            Оплата госпошлин ГИБДД
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <div className="p-4 sm:p-6 border-b border-border">
            <h2 className="text-lg sm:text-xl font-normal text-foreground">
              Онлайн-сервис оплаты
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Быстро и безопасно оплачивайте государственные услуги ГИБДД
            </p>
          </div>

          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[calc(100vh-280px)]">
            <iframe
              src="https://oplatagosuslug.ru/poshliny_gibdd/"
              className="w-full h-full border-0"
              title="Оплата госпошлин ГИБДД"
              loading="lazy"
              allow="payment"
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Официальный сервис оплаты государственных услуг
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;