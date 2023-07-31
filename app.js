const fs = require('fs');
const BaileysProvider = require('./adapters/index.cjs');
const baileysInstance = new BaileysProvider(null);

// const large_message = " *🎁 APROVECHA HOY NUESTRO DESCUENTOS DE APERTURA 🎁* \n\nInscribete Hoy en nuestro Curso de Especialización en *Gestión de Indicadores (KPIS) para Mantenimiento.* \n\n 📅Fecha de Inicio: 14 de Junio\n🕐Hora:\n🇵🇪 🇪🇨 🇲🇽 🇵🇦 8:00 a 10:00 p.m. \n🇧🇴  9:00 a 11:00 p.m. \n\n ¡Te Esperamos! \n\n*Christian Perez* \n*Coordinador de Capacitación* \n*Contáctanos al: 958 745 005*\n";
// const link_message = "Más Información en: https://wa.link/upbwot";

const large_message = "*🚨ACCEDE HOY A NUESTRAS PROMOCIONES EXCLUSIVAS* \n\n📌Inscríbete HOY a nuestro Programa de Especialización *SEGURIDAD ELÉCTRICA INDUSTRIAL Y MINERA*\n\nInicio de Clases: 26 de Julio\nClases: Miércoles y Viernes\nHorario: de 8:00 p.m. a 10:00 p.m.\n🇵🇪 🇪🇨 🇲🇽 🇵🇦 🇨🇴 8:00 p.m. \n🇧🇴 🇨🇱 9:00p.m. \n\nVacantes Limitadas \n\nVive la Experiencia al más Alto Nivel.\n\n*Christian Perez* \n*Coordinador de Capacitación* \n*Contáctanos al: 958 745 005*\nMás Información al: https://walink.co/db12f2";

// const link_message = "Más Información en: https://wa.link/v9ym9q";

const phoneNumbers = fs.readFileSync('phone_numbers.txt', 'utf-8').split('\n').map(number => number.trim());

baileysInstance.on('ready', async () => {
  for (let i = 0; i < phoneNumbers.length; i++) {
    const phoneNumber = phoneNumbers[i];

    await baileysInstance.sendVideo(phoneNumber)
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

    await baileysInstance.sendCustomText(phoneNumber, large_message)
      .then(() => {
        console.log(`Mensaje de TEXTO enviado con éxito al número: ${phoneNumber}`);
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