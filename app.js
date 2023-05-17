const fs = require('fs');
const BaileysProvider = require('./adapters/index.cjs');
const baileysInstance = new BaileysProvider(null);

// const large_message = " *🎁 APROVECHA HOY NUESTRO DESCUENTOS DE APERTURA 🎁* \n\nInscribete Hoy en nuestro Curso de Especialización en *Gestión de Indicadores (KPIS) para Mantenimiento.* \n\n 📅Fecha de Inicio: 14 de Junio\n🕐Hora:\n🇵🇪 🇪🇨 🇲🇽 🇵🇦 8:00 a 10:00 p.m. \n🇧🇴  9:00 a 11:00 p.m. \n\n ¡Te Esperamos! \n\n*Christian Perez* \n*Coordinador de Capacitación* \n*Contáctanos al: 958 745 005*\n";
// const link_message = "Más Información en: https://wa.link/upbwot";

const large_message = " *🚨ÚLTIMAS VACANTES🚨* \n\nInscríbete Hoy en nuestro Programa de Especialización en *SUPPLY CHAIN MANAGEMENT* y obtén nuestros *DESCUENTOS ESPECIALES.* \n\n 📅Fecha de Inicio: 02 de Junio\n🕐Hora:\n🇵🇪 🇪🇨 🇲🇽 🇵🇦 🇨🇴 8:00 a 10:00 p.m. \n🇧🇴 🇨🇱 9:00 a 11:00 p.m. \n\n ¡Te Esperamos! \n\n*Cinthya Meza* \n*Coordinadora de Capacitación* \n*Contáctanos al: 940 709 451*\n*Whatsapp: https://wa.link/v9ym9q*";

// const link_message = "Más Información en: https://wa.link/v9ym9q";

const phoneNumbers = fs.readFileSync('phone_numbers.txt', 'utf-8').split('\n').map(number => number.trim());

baileysInstance.on('ready', async () => {
  for (let i = 0; i < phoneNumbers.length; i++) {
    const phoneNumber = phoneNumbers[i];

    await baileysInstance.sendCustomText(phoneNumber, large_message)
      .then(() => {
        console.log(`Mensaje de TEXTO enviado con éxito al número: ${phoneNumber}`);
      })
      .catch((error) => {
        console.error(`Error al enviar el mensaje al número ${phoneNumber}:`, error);
      });

    await baileysInstance.sendCustomImage(phoneNumber)
      .then(() => {
        console.log(`Mensaje IMAGEN enviado con éxito al número: ${phoneNumber}`);
      })
      .catch((error) => {
        console.error(`Error al enviar el mensaje al número ${phoneNumber}:`, error);
      });

    if (i < phoneNumbers.length - 1) {
      const delay = Math.floor(Math.random() * 4000) + 10000; // Genera un retraso aleatorio entre 4 y 10 segundos
      await sleep(delay);
    }

    // await baileysInstance.sendCustomText(phoneNumber, link_message)
    //   .then(() => {
    //     console.log(`Mensaje de TEXTO enviado con éxito al número: ${phoneNumber}`);
    //   })
    //   .catch((error) => {
    //     console.error(`Error al enviar el mensaje al número ${phoneNumber}:`, error);
    //   });


  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}