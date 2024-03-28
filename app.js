const fs = require('fs');
const BaileysProvider = require('./adapters/index.cjs');
const baileysInstance = new BaileysProvider(null);

// const large_message = "*🛑 ÚLTIMA OPORTUNIDAD* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\n¿Fin de año y aún no te has inscrito a un Programa de Especialización?\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Triple Certificación a un Precio Especial.\n\nCertifícate en *PLANNER DE MANTENIMIENTO*  y aplica técnicas de gestión de proyectos para gestionar eficazmente las principales actividades de mantenimiento y paradas.\n\n Adicionalmente certifícate en nuestros Programas de:\n ▪ Análisis de Datos con Power BI\n ▪ Mentalidad para el Éxito.\n\n*🛑¡NO PIERDAS ESTA OPORTUNIDAD!🛑*\n\nEmpieza con tu Especialización aquí: *https://wa.link/lb4o8j*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 ÚLTIMA OPORTUNIDAD* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\n¿Fin de año y aún no te has inscrito a un Programa de Especialización?\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Triple Certificación a un Precio Especial.\n\nCertifícate en *GESTIÓN Y SUPERVISIÓN DEL MANTENIMIENTO DE EQUIPOS PESADOS* y aplica técnicas de gestión mediante KPI´s para el funcionamiento de maquinaria pesada mediante un mantenimiento preventivo y predictivo.\n\n Adicionalmente certifícate en nuestros Programas de:\n ▪ Análisis de Datos con Power BI\n ▪ Mentalidad para el Éxito.\n\n*🛑¡NO PIERDAS ESTA OPORTUNIDAD!🛑*\n\nEmpieza con tu Especialización aquí: *https://wa.link/fpon6t*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 ÚLTIMA OPORTUNIDAD* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\n¿Fin de año y aún no te has inscrito a un Programa de Especialización?\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Triple Certificación a un Precio Especial.\n\nCertifícate en *PRIMAVERA P6, MS PROJECT Y POWER BI PARA PROYECTOS DE CONSTRUCCIÓN* y gestiona la planificación y control usando Primavera P6, enfocado en Proyectos de Construcción, desde el alcance del proyecto hasta la asignación de recursos y línea base\n\n Adicionalmente certifícate en nuestros Programas de:\n ▪ Análisis de Datos con Power BI\n ▪ Mentalidad para el Éxito.\n\n*🛑¡NO PIERDAS ESTA OPORTUNIDAD!🛑*\n\nEmpieza con tu Especialización aquí: *https://wa.link/ka5biu*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 ÚLTIMA OPORTUNIDAD* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\n¿Fin de año y aún no te has inscrito a un Programa de Especialización?\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Triple Certificación a un Precio Especial.\n\nCertifícate en *SUPERVISIÓN Y RESIDENCIA DE OBRAS PRIVADAS Y PÚBLICAS* y desarrolla las competencias y habilidades necesarias para asumir con gran capacidad y responsabilidad las funciones de un Residente y/o Supervisor de Obra.\n\nAdicionalmente, certifícate en nuestros Programas de:\n▪ Análisis de Datos con Power BI\n▪ Mentalidad para el Éxito.\n\n*🛑 ¡NO PIERDAS ESTA OPORTUNIDAD! 🛑*\nEmpieza con tu Especialización aquí: *https://wa.link/f49nzk*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo del Mantenimiento y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate como *PLANNER DE MANTENIMIENTO* y optimiza tus estrategias de mantenimiento gestionando correctamente los indicadores de gestión dentro de tu organización.\n\nContamos sólo con *5 CUPONES DE DESCUENTO*, no dejes pasar tu oportunidad de crecer y destacar profesionalmente en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\nEmpieza con tu Especialización aquí: *https://wa.link/6oxtaw*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo del Mantenimiento y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate como *PLANNER DE MANTENIMIENTO* y optimiza tus estrategias de mantenimiento gestionando correctamente los indicadores de gestión dentro de tu organización.\n\nAprovecha nuestro descuento exclusivo para impulsar tu crecimiento laboral y destacar en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\n\nEmpieza con tu Especialización aquí: *https://wa.link/6oxtaw*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo de la Construcción y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate en *SUPERVISIÓN Y RESIDENCIA DE OBRAS PRIVADAS Y PÚBLICAS* y domina la supervisión de la ejecución técnica, administrativa y labores de residencia de obra, garantizando la eficiencia del proyecto de construcción.\n\nAprovecha nuestro descuento exclusivo para impulsar tu crecimiento laboral y destacar en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\n\nEmpieza con tu Especialización aquí: *https://wa.link/3fu9ng*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo del Mantenimiento y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate en *GESTIÓN Y SUPERVISIÓN DEL MANTENIMIENTO DE EQUIPOS PESADOS* y gestiona mediante KPI´s el funcionamiento de maquinaria pesada planificando un mantenimiento preventivo y predictivo, analizando indicadores de sus sistemas hidráulicos, motor, etc.\n\nAprovecha nuestro descuento exclusivo para impulsar tu crecimiento laboral y destacar en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\n\nEmpieza con tu Especialización aquí: *https://wa.link/ptnw5s*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo de la Construcción y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate en *PRIMAVERA P6, MS PROJECT Y POWER BI PARA PROYECTOS DE CONSTRUCCIÓN* y domina los principales comandos avanzados de Primavera P6 y su correcta aplicación en casos de programación de proyectos.\n\nAprovecha nuestro descuento exclusivo para impulsar tu crecimiento laboral y destacar en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\n\nEmpieza con tu Especialización aquí: *https://wa.link/skzyuh*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 NO DEJES PASAR ESTA NUEVA OPORTUNIDAD 🔴*\n\n¿Iniciamos el año y aún no te especializas?\n\n*NO ESPERES MÁS* para convertirte en un líder en el campo del Mantenimiento y desarrollar tu perfil profesional con esta Nueva Oportunidad 🏆\n\nEspecialízate como *PLANNER DE MANTENIMIENTO* y optimiza tus estrategias de mantenimiento gestionando correctamente los indicadores de gestión dentro de tu organización.\n\nAprovecha nuestro descuento exclusivo para impulsar tu crecimiento laboral y destacar en tu área laboral.\n\n*📍 NO ESPERES MÁS E INSCRÍBETE AHORA 📍*\n\nEmpieza con tu Especialización aquí: *https://wa.link/6oxtaw*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 ¡ÚLTIMA OPORTUNIDAD PARA PERTENECER A NUESTRO GRUPO DE ESPECIALISTAS! 🏆*\n\n*INICIAMOS CLASES* y queremos que seas parte de nuestro nuevo grupo de especialistas en *PLANNER DE MANTENIMIENTO.*\n\n*MATRICÚLATE HOY* y obtén un Descuento Exclusivo para que puedas certificarte en las mejores estrategias de mantenimiento gestionando correctamente los indicadores de mantenimiento dentro de tu organización.\n\n🚨 Sólo contamos con *03 ÚLTIMOS CUPOS* para completar nuestro grupo de capacitación. ¡No pierdas la oportunidad de participar en nuestro programa de especialización y potenciar tu perfil profesional! 🚨\n\n*✅ Solicita tu Inscripción Aquí:*\n*https://wa.link/km1trv*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴¡ÚLTIMA OPORTUNIDAD PARA PERTENECER A NUESTRO GRUPO DE ESPECIALISTAS!🏆*\n\n*INICIAMOS CLASES* y queremos que seas parte de nuestro nuevo grupo de especialistas en *GESTIÓN Y SUPERVISIÓN DEL MANTENIMIENTO EN EQUIPOS PESADOS.*\n\n*MATRICÚLATE HOY* y obtén un Descuento Exclusivo para que puedas certificarte en las mejores estrategias y habilidades en el campo de la ingeniería aplicada de los sistemas de equipos utilizados en minería, construcción, transporte pesado y afines.\n\n🚨 Sólo contamos con *03 ÚLTIMOS CUPOS* para completar nuestro grupo de capacitación. ¡No pierdas la oportunidad de participar en nuestro programa de especialización y potenciar tu perfil profesional! 🚨\n\n*✅ Solicita tu Inscripción Aquí:*\n*https://wa.link/7lhp9s*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 ¡ÚLTIMA OPORTUNIDAD PARA PERTENECER A NUESTRO GRUPO DE ESPECIALISTAS! 🏆*\n\n*INICIAMOS CLASES* y queremos que seas parte de nuestro nuevo grupo de especialistas en *SUPERVISIÓN Y RESIDENCIA DE OBRAS PRIVADAS Y PÚBLICAS.*\n\n*MATRICÚLATE HOY* y obtén un Descuento Exclusivo para que puedas certificarte en las mejores estrategias y habilidades para asumir con gran capacidad y responsabilidad las funciones de un residente y/o supervisor de obra, teniendo en cuenta los conocimientos técnicos y las normas actuales.\n\n🚨 Sólo contamos con *03 ÚLTIMOS CUPOS* para completar nuestro grupo de capacitación. ¡No pierdas la oportunidad de participar en nuestro programa de especialización y potenciar tu perfil profesional! 🚨\n\n*✅ Solicita tu Inscripción Aquí:*\n*https://wa.link/fm5t2b*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🔴 ¡ÚLTIMA OPORTUNIDAD PARA PERTENECER A NUESTRO GRUPO DE ESPECIALISTAS! 🏆*\n\n*INICIAMOS CLASES* y queremos que seas parte de nuestro nuevo grupo de especialistas en *PRIMAVERA P6, MS PROJECT Y POWER BI PARA PROYECTOS DE CONSTRUCCIÓN.*\n\n*MATRICÚLATE HOY* y obtén un Descuento Exclusivo para que puedas certificarte en las mejores estrategias, dominando los principales comandos avanzados de Primavera P6 y su correcta aplicación en casos de programación de proyectos.\n\n🚨 Sólo contamos con *03 ÚLTIMOS CUPOS* para completar nuestro grupo de capacitación. ¡No pierdas la oportunidad de participar en nuestro programa de especialización y potenciar tu perfil profesional! 🚨\n\n*✅ Solicita tu Inscripción Aquí:*\n*https://wa.link/2nj570*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 OPORTUNIDAD EXCLUSIVA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Preventa por el lanzamiento de nuestro Programa de Especialización en *GESTIÓN DE FLOTA MINERA (DISPATCH)* y vuélvete un experto en:\n\n▪ Sistemas de Administración de Flota\n▪ Integración de DISPATCH con Operaciones Mineras\n▪ Mejores Prácticas de Operación y Rendimiento de Flotas\n▪ Seguridad y Salud Ocupacional en la Gestión de Flotas\n\nAdicionalmente, adquiere nuestra certificación en *Análisis de Datos con Power BI.*\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/p6fgra*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 OPORTUNIDAD EXCLUSIVA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Preventa por el lanzamiento de nuestro Programa de Especialización en *LEAN CONSTRUCTION (LAST PLANNER SYSTEM & PULL PLANNING),* vuélvete un experto en:\n\n▪ Fundamentos de Lean Construction\n▪ Mejora Continua en Construcción\n▪ Herramientas y Métodos Lean\n▪ Sistema Last Planner\n\nAdicionalmente, adquiere nuestra certificación en *Análisis de Datos con Power BI.*\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/wbmrws*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 OPORTUNIDAD EXCLUSIVA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Preventa por el lanzamiento de nuestro Programa de Especialización en *AUTOMATIZACIÓN, INSTRUMENTACIÓN Y CONTROL INDUSTRIAL CON SISTEMAS SCADA,* vuélvete un experto en:\n\n▪ Sensores y Transmisores\n▪ Control de Procesos con PLC\n▪ Instrumentación Virtual y Gemelos Digitales\n▪ Automatización y Control Avanzado\n\nAdicionalmente, adquiere nuestra certificación en *Análisis de Datos con Power BI.*\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/1f5d77*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 OPORTUNIDAD EXCLUSIVA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Preventa por el lanzamiento de nuestro Programa de Especialización en *REDES Y SUBESTACIONES ELÉCTRICAS DE DISTRIBUCIÓN,* vuélvete un experto en:\n\n▪ Planificación de Proyectos Eléctricos\n▪ Tipos de Subestaciones Eléctricas\n▪ Automatización y Control en Subestaciones\n▪ Desarrollo Sostenible y Responsabilidad Social en Proyectos Eléctricos\n\nAdicionalmente, adquiere nuestra certificación en *Análisis de Datos con Power BI.*\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/eyjihs*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 OPORTUNIDAD EXCLUSIVA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\nTe brindamos nuestro *PAQUETE EXCLUSIVO* de Preventa por el lanzamiento de nuestro Programa de Especialización en *GESTIÓN DE FLOTA MINERA (DISPATCH),* vuélvete un experto en:\n\n▪ Sistemas de Administración de Flota\n▪ Integración de DISPATCH con Operaciones Mineras\n▪ Mejores Prácticas de Operación y Rendimiento de Flotas\n▪ Seguridad y Salud Ocupacional en la Gestión de Flotas\n\nAdicionalmente, adquiere nuestra certificación en *Análisis de Datos con Power BI.*\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/olcpni*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// const large_message = "*🛑 ÚLTIMAS VACANTES DE PREVENTA* para Certificarte y Potenciar tu Perfil Profesional 🎓\n\n*ACCEDE A MÁS DEL 40%* de *DESCUENTO EXCLUSIVO* al inscribirte en nuestro Programa de Especialización en *LEAN CONSTRUCTION (LAST PLANNER SYSTEM & PULL PLANNING).*\n\nNo pierdas nuestra *PRE VENTA* y vuélvete un experto en:\n▪ Lean Production en Construcción. \n▪ Valor y Cadena de Valor.\n▪ Perfeccionamiento Continuo en Procesos Constructivos.\n▪ Mapa de Cadena de Valor (VSM).\n\n*✅ ¡NO PIERDAS ESTA OPORTUNIDAD! ✅*\nEscríbenos al WhatsApp para mayor Información:\n*https://wa.link/d1ehdq*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// enviandose "FLOTA"
// const large_message = "*🛑 #ÚLTIMAOPORTUNIDAD* | ¡No pierdas la Oportunidad de ser un Especialista en *GESTIÓN DE FLOTA MINERA (DISPATCH)! 📈* \n\nImpulsa tu carrera con nuestro *Programa de Especialización Exclusivo,* diseñado para aquellos que desean especializarse en el ámbito de la minería y así destacar en su entorno laboral.\n\n*📍Contamos con 5 ÚLTIMOS CUPOS para cerrar nuestras inscripciones.* ¡Decídete e inicia tu ascenso laboral de una vez!\n\n✅ Consulta con nuestro equipo comercial aquí:\n*https://wa.link/99vf8o*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// PRUEBA A ESPERA DE APROBACION 
// const large_message = "*🛑 #ÚLTIMAOPORTUNIDAD* | ¡No pierdas la Oportunidad de ser un Especialista en *LEAN CONSTRUCTION! 📈* \n\nImpulsa tu carrera con nuestro *Programa de Especialización Exclusivo,* diseñado para aquellos que desean especializarse en el ámbito de la construcción y así destacar en su entorno laboral.\n\n*📍Contamos con 5 ÚLTIMOS CUPOS para cerrar nuestras inscripciones.* ¡Decídete e inicia tu ascenso laboral de una vez!\n\n✅ Consulta con nuestro equipo comercial aquí:\n*https://wa.link/e75vit*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// PRUEBA A ESPERA DE APROBACION 
// const large_message = "*🛑 #ÚLTIMAOPORTUNIDAD* | ¡No pierdas la Oportunidad de ser un Especialista en *REDES Y SUBESTACIONES ELÉCTRICAS DE DISTRIBUCIÓN! 📈* \n\nImpulsa tu carrera con nuestro *Programa de Especialización Exclusivo,* diseñado para aquellos que desean especializarse en el ámbito de la industria eléctrica y así destacar en su entorno laboral.\n\n*📍Contamos con 5 ÚLTIMOS CUPOS para cerrar nuestras inscripciones.* ¡Decídete e inicia tu ascenso laboral de una vez!\n\n✅ Consulta con nuestro equipo comercial aquí:\n*https://wa.link/zq8bmp*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";


// MASIVO DE 3 DIAS planner

// const large_message = "*🔴 3 DÍAS DE LOCURA* | ¡No pierdas la Oportunidad de ser un Especialista en *PLANNER DE MANTENIMIENTO! 📈* \n\nImpulsa tu carrera con nuestro Programa de Especialización Exclusivo, diseñado para aquellos que desean especializarse en el ámbito de la industria del Mantenimiento y así destacar en su entorno laboral.\n\n*📍APROVECHA NUESTRO DESCUENTO EXCLUSIVO POR TIEMPO LIMITADO:*\n *PAGO ÚNICO DE S/. 500.00📍* \n¡Decídete e inicia tu ascenso laboral de una vez!\n\n✅ Consulta con nuestro equipo comercial aquí:\n*https://wa.link/be4etv*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";

// MASIVO 3 DIAS PRIMAVERA
const large_message = "*🔴 3 DÍAS DE LOCURA* | ¡No pierdas la Oportunidad de ser un Especialista en *PRIMAVERA P6, MS PROJECT Y POWER BI PARA PROYECTOS DE CONSTRUCCIÓN! 📈* \n\nImpulsa tu carrera con nuestro Programa de Especialización Exclusivo, diseñado para aquellos que desean especializarse en el ámbito de la industria de Proyectos y Construcción y así destacar en su entorno laboral.\n\n*📍APROVECHA NUESTRO DESCUENTO EXCLUSIVO POR TIEMPO LIMITADO:*\n *PAGO ÚNICO DE S/. 500.00📍* \n¡Decídete e inicia tu ascenso laboral de una vez!\n\n✅ Consulta con nuestro equipo comercial aquí:\n*https://wa.link/6psc0k*\n\n*MAGNA Institución de Especialización Profesional*\nEspecialización al más ALTO NIVEL";




const phoneNumbers = fs.readFileSync('phone_numbers.txt', 'utf-8').split('\n').map(number => number.trim());

baileysInstance.on('ready', async () => {
  for (let i = 0; i < phoneNumbers.length; i++) {
    const phoneNumber = phoneNumbers[i];

    await baileysInstance.sendCustomImage(phoneNumber)
      .then(() => {
        console.log(`Mensaje Video enviado con éxito al número: ${phoneNumber}`);
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

    // await baileysInstance.sendCustomImage(phoneNumber)
    //   .then(() => {
    //     console.log(`Mensaje con imagen enviado con éxito al número: ${phoneNumber}`);
    //   })
    //   .catch((error) => {
    //     console.error(`Error al enviar el mensaje al número ${phoneNumber}:`, error);
    //   });

    // if (i < phoneNumbers.length - 1) {
    //   const delay = Math.floor(Math.random() * 4000) + 10000; // Genera un retraso aleatorio entre 4 y 10 segundos
    //   await sleep(delay);
    // }

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