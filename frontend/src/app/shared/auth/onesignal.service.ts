import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnesignalService {
  // oneSignal = window['OneSignal'] || [];
  /**@ignore */
  constructor() {
    // this.init(); #Error de arranque de app
    // console.log(window);
    // this.suscribe();
  }

  /**Envió de user_id del usuario actual */
  logIn(id): void {
    // this.init();
    window['OneSignal'].sendTag('user_id', id);
    this.suscribe();
  }

  /** Eliminación del user_id del usuario actual */
  logOut(): void {
    window['OneSignal'].deleteTags(['user_id']);
    this.unSuscribe();
  }

  /** Baja del servicio de Onesignal */
  unSuscribe(): void {
    window['OneSignal'].setSubscription(false);
  }

  /** Alta del servicio de OneSignal */
  suscribe(): void {
    window['OneSignal'].setSubscription(true);
  }

  /** Instancia de arranque de Onesignal */
  init(): void {
    // if (!this.platform.is('cordova')) return false;
    // const OneSignal = window['OneSignal'] || [];
    // OneSignal.push(() => {
    // OneSignal.startInit({
    //   appId: 'fd50547d-6d5f-466a-b3f2-5a946dfc0b2d',
    //   notifyButton: {
    //     enable: true
    //   }
    // });
    // OneSignal.setLogLevel({ logLevel: 4, visualLevel: 2 });
    // OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
    // OneSignal.handleNotificationReceived().subscribe(() => {
    //   // console.log('Recibido!');
    //   // do something when notification is received
    // });
    // OneSignal.handleNotificationOpened().subscribe(() => {
    //   // do something when a notification is opened
    // });
    // OneSignal.endInit();
    // OneSignal.sendTag('user_id', this.userSession.user, tagsSent => {
    //   // Callback called when tags have finished sending
    //   console.log('OneSignal Tag Sent', tagsSent);
    // });
    // console.log('Init OneSignal');
    // OneSignal.push([
    //   'init',
    //   {
    //     appId: 'fd50547d-6d5f-466a-b3f2-5a946dfc0b2d',
    //     autoRegister: true,
    //     allowLocalhostAsSecureOrigin: true,
    //     notifyButton: {
    //       enable: false
    //     }
    //   }
    // ]);
    // console.log('OneSignal Initialized');
    // this.checkIfSubscribed();
    // });
  }
}
