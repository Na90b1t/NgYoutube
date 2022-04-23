import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // регистрируем компонент
  imports: [BrowserModule], // импорт модуля для запуска приложения в браузере
  providers: [],
  bootstrap: [AppComponent], // запуск главного компонента
})
export class AppModule {}
