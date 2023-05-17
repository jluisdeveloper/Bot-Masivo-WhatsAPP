const EventEmitter = require('events');
var baileysProvider = require('@whiskeysockets/baileys');
var pino = require('pino');
// var fs = require('fs');

var { readFileSync } = require('fs')


const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  DisconnectReason,
  MessageType, MessageOptions, Mimetype
} = baileysProvider;

// const { prepareMessageMedia } = require('@whiskeysockets/baileys');

/**
 * ADAPTADOR DE BAYLEYS PARA ENVIO MASIVO UN POCO CHUNGO EL PROVIDERCLASS PARECE C++ :V ME AGRADA
 */

const NODE_ENV = process.env.NODE_ENV || 'dev'
class ProviderClass extends EventEmitter {
  /**
   * events: message | auth | auth_error | ...
   *
   */

  sendMessage = async (userId, message) => {
    if (NODE_ENV !== 'production') console.log('[sendMessage]', { userId, message })
    return message
  }

  getInstance = () => this.vendor
}

const baileyCleanNumber = (number, full = false) => {
  number = number.replace('@s.whatsapp.net', '');
  number = !full ? `${number}@s.whatsapp.net` : `${number}`;
  return number
};

const generateRefprovider = (prefix = false) => {
  const id = crypto.randomUUID();
  return prefix ? `${prefix}_${id}` : id
};

const baileyIsValidNumber = (rawNumber) => {
  const regexGroup = /\@g.us\b/gm;
  const exist = rawNumber.match(regexGroup);
  return !exist
};


class BaileysProvider extends ProviderClass {
  globalVendorArgs = { name: `bot`, gifPlayback: false }
  vendor = null;
  saveCredsGlobal = null;
  constructor(args) {
    super()
    this.globalVendorArgs = { ...this.globalVendorArgs, ...args };
    this.initBailey().then();
  }

  initBailey = async () => {
    const NAME_DIR_SESSION = `bot_sessions`;
    const { state, saveCreds } = await useMultiFileAuthState(NAME_DIR_SESSION);
    this.saveCredsGlobal = saveCreds;

    try {
      const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        browser: Browsers.macOS('Desktop'),
        syncFullHistory: false,
        logger: pino({ level: 'fatal' }),
      });

      sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        const statusCode = lastDisconnect?.error?.output?.statusCode;

        if (connection === 'close') {
          if (statusCode !== DisconnectReason.loggedOut) {
            this.initBailey();
          }

          if (statusCode === DisconnectReason.loggedOut) {
            const PATH_BASE = join(process.cwd(), NAME_DIR_SESSION);
            rimraf(PATH_BASE, (err) => {
              if (err) return
            });

            this.initBailey();
          }
        }

        if (connection === 'open') {
          this.vendor = sock;
          this.initBusEvents(sock);
          this.emit('ready', true);
        }
      });

      sock.ev.on('creds.update', async () => {
        await saveCreds();
      });
    } catch (e) {
      logger.log(e);
      this.emit('auth_failure', [
        `Algo inesperado ha ocurrido NO entres en pánico`,
        `Reinicia el BOT`,
        `Tambien puedes mirar un log que se ha creado baileys.log`,
        `Necesitas ayuda: https://link.codigoencasa.com/DISCORD`,
        `(Puedes abrir un ISSUE) https://github.com/codigoencasa/bot-whatsapp/issues/new/choose`,
      ]);
    }
  }

  busEvents = () => [
    {
      event: 'messages.upsert',
      func: ({ messages, type }) => {
        if (type !== 'notify') return
        const [messageCtx] = messages;
        let payload = {
          ...messageCtx,
          body: messageCtx?.message?.extendedTextMessage?.text ?? messageCtx?.message?.conversation,

          from: messageCtx?.key?.remoteJid,
        };

        //Detectar location
        if (messageCtx.message?.locationMessage) {
          const { degreesLatitude, degreesLongitude } = messageCtx.message.locationMessage;
          if (typeof degreesLatitude === 'number' && typeof degreesLongitude === 'number') {
            payload = { ...payload, body: generateRefprovider('_event_location_') };
          }
        }

        //Detectar media
        if (messageCtx.message?.imageMessage) {
          payload = { ...payload, body: generateRefprovider('_event_media_') };
        }

        //Detectar file
        if (messageCtx.message?.documentMessage) {
          payload = { ...payload, body: generateRefprovider('_event_document_') };
        }

        //Detectar voice note
        if (messageCtx.message?.audioMessage) {
          payload = { ...payload, body: generateRefprovider('_event_voice_note_') };
        }

        if (payload.from === 'status@broadcast') return

        if (payload?.key?.fromMe) return

        if (!baileyIsValidNumber(payload.from)) {
          return
        }

        const btnCtx = payload?.message?.buttonsResponseMessage?.selectedDisplayText;
        if (btnCtx) payload.body = btnCtx;

        const listRowId = payload?.message?.listResponseMessage?.title;
        if (listRowId) payload.body = listRowId;

        payload.from = baileyCleanNumber(payload.from, true);
        this.emit('message', payload);
      },
    },
  ]

  initBusEvents = (_sock) => {
    this.vendor = _sock;
    const listEvents = this.busEvents();

    for (const { event, func } of listEvents) {
      this.vendor.ev.on(event, func);
    }
  }

  sendText = async (number, message, linkText, linkUrl) => {
    const final = baileyCleanNumber(number)
    const textWithLink = `${message} [${linkText}](${linkUrl})`
    return await this.vendor.sendMessage(final, { text: textWithLink })
  }

  sendCustomText = async (number, message) => {
    const final = baileyCleanNumber(number)
    return await this.vendor.sendMessage(final, { text: message })
  }

  // https://static.wikia.nocookie.net/blackforce/images/6/60/Lucifer3.png/revision/latest?cb=20190523035359&path-prefix=es

  sendCustomImage = async (number) => {
    const final = baileyCleanNumber(number)
    // const imageInfo = await this.vendor.prepareMessageMedia("/home/anarchist/Pictures/magna-cover.jpeg", "image")

    // console.log(this.vendor)
    return await this.vendor.sendMessage(final,
      {
        // image: fs.readFileSync("/home/anarchist/Pictures/magna-cover.jpeg"),
        image: readFileSync("/home/anarchist/Pictures/magna-cover-3.jpeg"),
        caption: '*Más Información: https://magna.edu.pe/programas/supply-chain-management/*',
        gifPlayback: true
      }
    )
  }


  /**
   * Esta nota no sirve whatsapp dejo de permitir el envio de "botones",  solo se vera el boton en whatsapp web 
   * quizas en IOS pero en android no, almenos no en versiones recientes solo en antiguas.
   */


  sendButton = async (numberIn) => {
    const final = baileyCleanNumber(numberIn);


    const templateButtons = [
      { index: 1, urlButton: { displayText: '⭐ Whatsapp ⭐', url: 'https://wa.link/hy2lvm' } },
    ]

    const buttonMessage = {
      text: '',
      footer: '',
      templateButtons: templateButtons
      // image: { url: 'https://example.com/image.jpeg' }
    }
    return await this.vendor.sendMessage(final, buttonMessage)
  }

  // sendMessage = async (numberIn, message, { options }) => {
  //   const number = baileyCleanNumber(numberIn);

  //   if (options?.buttons?.length) return this.sendButtons(number, message, options.buttons)
  //   if (options?.media) return this.sendMedia(number, options.media, message)
  //   return this.sendText(number, message)
  // }
}

var baileys = BaileysProvider;

module.exports = baileys;