/**
 * ⚙️ LIVESTREAM CONFIGURATION
 *
 * This file centralizes ALL editable settings for your livestream.
 * Edit here to fully customize your live broadcast!
 */

// ═══════════════════════════════════════════════════════════════
// 📹 VIDEO CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const videoConfig = {
  // 🎬 VIDEO TYPE
  // Choose: "youtube", "panda", "vturb", "vimeo" or "direct"
  videoType: "panda" as "youtube" | "panda" | "vturb" | "vimeo" | "direct",

  // 📹 YOUTUBE: Paste the complete video URL or just the video ID
  // Examples:
  //   Full URL: "https://www.youtube.com/watch?v=TkRmrPQDPFw"
  //   Short URL: "https://youtu.be/TkRmrPQDPFw"
  //   Shorts: "https://www.youtube.com/shorts/VsWdwMfr6A0"
  //   Just ID: "TkRmrPQDPFw"
  videoId: "https://www.youtube.com/shorts/VsWdwMfr6A0",

  // 🐼 PANDA VIDEO: Paste the complete embed code provided by Panda Video
  // Example: <div style="position:relative;padding-top:75%;"><iframe id="panda-xxxxx"...></iframe></div>
  // IMPORTANT: Use backticks (`) to paste code with quotes. Example:
  // pandaEmbedCode: `<div style="position:relative">...</div>`,
  pandaEmbedCode: `<div style="position:relative;padding-top:177.77777777777777%;"><iframe id="panda-541ae1a7-4093-48d5-b724-c830cfd61570" src="https://player-vz-38f4398e-3e4.tv.pandavideo.com.br/embed/?v=541ae1a7-4093-48d5-b724-c830cfd61570" style="border:none;position:absolute;top:0;left:0;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="100%" height="100%" fetchpriority="high"></iframe></div>`,

  // 📺 VTURB: Paste the entire script provided by Vturb
  // Example: <div id="vid_xxxxxxxxx" style="..."></div><script...></script>
  // IMPORTANT: Use backticks (`) to paste code with quotes. Example:
  // vturbScript: `<div id="vid_xxx">...</div><script>...</script>`,
  vturbScript: ``,

  // 🎥 VIMEO: Paste the complete embed code provided by Vimeo
  // Example: <div style="padding:216.7% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/..."...></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
  // IMPORTANT: Use backticks (`) to paste code with quotes. Example:
  // vimeoEmbedCode: `<div style="padding:216.7% 0 0 0;position:relative;">...</div>`,
  vimeoEmbedCode: ``,

  // 🔗 DIRECT LINK: Paste a direct link to your video file
  // Example: https://s3.video1,com.mp4
  // Supports: MP4, WebM, OGG
  directVideoUrl: "",

  // 📊 Live viewer configuration
  viewers: {
    // Initial viewer count
    initialCount: 1650,

    // 📉 VIEWER DROP CONFIGURATION
    // Set to true to enable viewer drop effect, false to keep constant viewers
    enableViewerDrop: false,

    // Viewers BEFORE the drop (range) - only used if enableViewerDrop is true
    beforeDrop: {
      min: 1600,
      max: 1800,
    },

    // Viewers AFTER the drop (range) - only used if enableViewerDrop is true
    afterDrop: {
      min: 100,
      max: 120,
    },

    // ⏱️ Time in SECONDS when viewer drop occurs
    // (198 seconds = 3 minutes and 18 seconds) - only used if enableViewerDrop is true
    dropTimeInSeconds: 10,

    // Update interval (in milliseconds)
    updateInterval: 3000,
  },
};

// ═══════════════════════════════════════════════════════════════
// 👤 CHANNEL CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const channelConfig = {
  // Channel name
  name: "TECFLIX",

  // Initials displayed in avatar (2 letters)
  initials: "TF",

  // 🖼️ Profile image URL (optional)
  // Specify the full path with extension: "/images/profile.png"
  // Place images in /public/images/ folder
  // Leave empty "" to use initials
  profileImageUrl: "/images/profile.png",

};

// ═══════════════════════════════════════════════════════════════
// 🔘 CALL TO ACTION BUTTON CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const ctaButtonConfig = {
  // Enable/disable button
  enabled: true,

  // Button text
  text: "Eu quero o Elétrica PRO!",

  // Delay in seconds before button appears
  delayInSeconds: 190,

  // Button link/URL
  link: "https://pay.kiwify.com.br/4qYgHgT?utm_source=live",

  // 🎨 BUTTON COLOR (choose ONE - set to true)
  color: {
    red: true,
    blue: false,
    gray: false,
    black: false,
    white: false,  // Default
  },

  // ✨ BUTTON EFFECTS (choose ONE or MORE - set to true)
  effects: {
    pulse: false,      // Pulsing effect
    glow: false,      // Glowing border effect
    shake: false,     // Shaking effect
    bounce: true,    // Bouncing effect
    float: false,     // Floating up/down effect
  },

  // 🎯 BUTTON ICON (choose ONE - set to true)
  icon: {
    click: false,       // Click/pointer icon (default)
    gift: true,       // Gift icon
    tag: false,        // Tag icon (offer/discount)
    trending: false,   // Trending up icon (opportunity)
    sparkles: false,   // Sparkles icon (special/highlight)
  },
};

// ═══════════════════════════════════════════════════════════════
// ❤️ HEARTS ANIMATION CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const heartsConfig = {
  // Enable/disable heart animation
  enabled: true,

  // Interval between hearts appearing (in milliseconds)
  interval: 500,
};

// ═══════════════════════════════════════════════════════════════
// 📊 PIXELS TRACKING CONFIGURATION
// ═══════════════════════════════════════════════════════════════

/**
 * 💡 HOW TO ADD YOUR PIXELS:
 *
 * 1. Go to your platform (Facebook, TikTok, Google Analytics)
 * 2. Get the pixel/tracking code
 * 3. Copy the ENTIRE script block (including <script> tags)
 * 4. Paste it in the corresponding field below using backticks (`)
 * 5. Leave empty "" if you don't use that platform
 *
 * EXAMPLE for Facebook:
 * facebookPixel: `<!-- Meta Pixel Code -->
 * <script>
 * !function(f,b,e,v,n,t,s)
 * {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 * ... (rest of your script)
 * </script>
 * <!-- End Meta Pixel Code -->`
 */

export const pixelsConfig = {
  // 🔵 FACEBOOK PIXEL
  // Paste your complete Facebook pixel script here (use backticks)
  // Leave empty "" if you don't have one
  facebookPixel: `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1330752468705193');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1330752468705193&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`,

  // 🎵 TIKTOK PIXEL
  // Paste your complete TikTok pixel script here (use backticks)
  // Leave empty "" if you don't have one
  tiktokPixel: ``,

  // 🔴 GOOGLE ANALYTICS
  // Paste your complete Google Analytics script here (use backticks)
  // Leave empty "" if you don't have one
  googleAnalyticsPixel: ``,
};

// ═══════════════════════════════════════════════════════════════
// 💬 CHAT CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const chatConfig = {
  // 📱 How many comments to show on screen at once
  visibleComments: 5,

  // ⏱️ Interval between comments (in seconds)
  // Set to 1 for comments to appear every 1 second
  // Set to 2 for comments to appear every 2 seconds, etc.
  commentInterval: 1,

  // 🔄 Loop comments
  // If true, after the last comment it will restart from the first one
  // If false, comments stop after the last one
  loopComments: false,
};

// ═══════════════════════════════════════════════════════════════
// 📝 CHAT COMMENTS (SIMPLE LIST WITH TIMING)
// ═══════════════════════════════════════════════════════════════

/**
 * 💡 HOW TO EDIT COMMENTS:
 *
 * Each comment has 2 fields:
 * - user: User name (string)
 * - message: Comment text (string)
 *
 * Comments appear automatically based on the "commentInterval"
 * setting in chatConfig (default: 1 second between each comment)
 *
 * Example:
 * { user: "John Doe", message: "Great stream!" }
 */

export const comments = [
  {
    "user": "Carlos Silva",
    "message": "Muito top essa ferramenta!"
  },
  {
    "user": "João Pedro",
    "message": "Quanto vai ser na promoção?"
  },
  {
    "user": "Roberto Santos",
    "message": "To precisando fazer orçamentos assim"
  },
  {
    "user": "Fernando Lima",
    "message": "Ficou muito bom mesmo"
  },
  {
    "user": "André Costa",
    "message": "Hoje vai liberar o desconto?"
  },
  {
    "user": "Paulo Oliveira",
    "message": "Meu primo usa ela muito boa msm"
  },
  {
    "user": "Marcos Alves",
    "message": "Realmente fica muito boa"
  },
  {
    "user": "Ricardo Ferreira",
    "message": "Vai ser gratuita?"
  },
  {
    "user": "Diego Martins",
    "message": "Se for acima de 100 reais daí não"
  },
  {
    "user": "Gustavo Pereira",
    "message": "Caraca braba demais..."
  },
  {
    "user": "Lucas Rodrigues",
    "message": "Essa ferramenta vai facilitar muito meu trampo"
  },
  {
    "user": "Rafael Souza",
    "message": "Quero ver quanto vai ficar"
  },
  {
    "user": "Bruno Nascimento",
    "message": "Tá muito profissional isso aí"
  },
  {
    "user": "Felipe Cardoso",
    "message": "Vai valer a pena com certeza"
  },
  {
    "user": "Thiago Barbosa",
    "message": "Mano, preciso disso urgente"
  },
  {
    "user": "Rodrigo Mendes",
    "message": "Showww demais essa parada"
  },
  {
    "user": "Gabriel Rocha",
    "message": "Tô ansioso pra ver o preço"
  },
  {
    "user": "Mateus Araújo",
    "message": "Isso vai economizar muito meu tempo"
  },
  {
    "user": "Leandro Dias",
    "message": "Cara, tá perfeito"
  },
  {
    "user": "Alessandro Gomes",
    "message": "Finalmente uma ferramenta boa assim"
  },
  {
    "user": "Vinicius Castro",
    "message": "To doido pra usar"
  },
  {
    "user": "Marcelo Pinto",
    "message": "Vai facilitar demais os orçamentos"
  },
  {
    "user": "Renato Carvalho",
    "message": "Coisa linda essa ferramenta"
  },
  {
    "user": "Eduardo Lopes",
    "message": "Tá top demais mano"
  },
  {
    "user": "César Moreira",
    "message": "Quero pegar na promoção"
  },
  {
    "user": "Fábio Ribeiro",
    "message": "Isso vai me salvar muito"
  },
  {
    "user": "Igor Cavalcanti",
    "message": "Melhor ferramenta que vi"
  },
  {
    "user": "Juliano Teixeira",
    "message": "Quanto tá saindo?"
  },
  {
    "user": "Sérgio Monteiro",
    "message": "Vou precisar dessa"
  },
  {
    "user": "Wagner Azevedo",
    "message": "Tá show hein"
  },
  {
    "user": "Daniel Freitas",
    "message": "Perfeito pra mim"
  },
  {
    "user": "Robson Nunes",
    "message": "Meu parceiro falou que é boa"
  },
  {
    "user": "Cristiano Ramos",
    "message": "Bora liberar logo essa belezura"
  },
  {
    "user": "Alex Soares",
    "message": "Tô na espera do valor"
  },
  {
    "user": "Hugo Batista",
    "message": "Vai me ajudar muito nos trampos"
  },
  {
    "user": "Caio Vieira",
    "message": "Top demais cara"
  },
  {
    "user": "Antônio Moura",
    "message": "Preciso dessa urgente"
  },
  {
    "user": "Renan Campos",
    "message": "Valeu mostrar isso aí"
  },
  {
    "user": "Douglas Melo",
    "message": "Tá muito bom mesmo"
  },
  {
    "user": "Adriano Correia",
    "message": "Quanto vai custar?"
  },
  {
    "user": "Wellington Macedo",
    "message": "Showzaço essa ferramenta"
  },
  {
    "user": "Fábio Duarte",
    "message": "Isso vai bombar"
  },
  {
    "user": "Rodrigo Santos",
    "message": "Tô precisando disso faz tempo"
  },
  {
    "user": "Maurício Almeida",
    "message": "Vai valer cada centavo"
  },
  {
    "user": "Nelson Xavier",
    "message": "Coisa boa demais"
  },
  {
    "user": "Pablo Fernandes",
    "message": "Quero demais"
  },
  {
    "user": "William Costa",
    "message": "Tá da hora essa parada"
  },
  {
    "user": "Samuel Reis",
    "message": "Mano, muito bom isso"
  },
  {
    "user": "Henrique Borges",
    "message": "Finalmente algo profissional"
  },
  {
    "user": "Edson Farias",
    "message": "Tô ligado que vai ser top"
  },
  {
    "user": "Milton Cunha",
    "message": "Preciso já"
  },
  {
    "user": "Ivan Nogueira",
    "message": "Brabo demais"
  },
  {
    "user": "Jonas Medeiros",
    "message": "Vai me economizar muito tempo"
  },
  {
    "user": "Otávio Pires",
    "message": "Show de bola"
  },
  {
    "user": "Claudio Sampaio",
    "message": "Espero que seja acessível"
  },
  {
    "user": "Evandro Cruz",
    "message": "Tá perfeito"
  },
  {
    "user": "Gilberto Guedes",
    "message": "Muito boa mesmo"
  },
  {
    "user": "Hélio Rezende",
    "message": "Ansioso pra usar"
  },
  {
    "user": "Iago Fonseca",
    "message": "Vai ajudar muito"
  },
  {
    "user": "Jorge Tavares",
    "message": "Tá muito top"
  },
  {
    "user": "Kevin Pacheco",
    "message": "Ela faz contrato também?"
  },
  {
    "user": "Leonardo Marques",
    "message": "Posso usar no celular?"
  },
  {
    "user": "Mário Brandão",
    "message": "Funciona online?"
  },
  {
    "user": "Nathan Silva",
    "message": "Quero usar no notebook"
  },
  {
    "user": "Orlando Motta",
    "message": "Serve pra autônomo?"
  },
  {
    "user": "Pedro Henrique",
    "message": "Sou eletricista e vai me ajudar demais"
  },
  {
    "user": "Quirino Bastos",
    "message": "Cara onde compro ela?"
  },
  {
    "user": "Ramon Siqueira",
    "message": "Essa é top demais"
  },
  {
    "user": "Saulo Vasconcelos",
    "message": "Funciona offline também?"
  },
  {
    "user": "Tales Caldeira",
    "message": "Tem versão pra Android?"
  },
  {
    "user": "Ulisses Franco",
    "message": "Posso usar em vários dispositivos?"
  },
  {
    "user": "Valdir Esteves",
    "message": "Ela gera PDF?"
  },
  {
    "user": "Xavier Lira",
    "message": "Tem como personalizar?"
  },
  {
    "user": "Yuri Novaes",
    "message": "Funciona pra MEI?"
  },
  {
    "user": "Zé Carlos",
    "message": "Posso colocar minha logo?"
  },
  {
    "user": "Alberto Dantas",
    "message": "Tem app ou é só web?"
  },
  {
    "user": "Benedito Leite",
    "message": "Salva na nuvem?"
  },
  {
    "user": "Cláudio Roberto",
    "message": "Consigo imprimir os orçamentos?"
  },
  {
    "user": "Davi Moraes",
    "message": "É fácil de usar?"
  },
  {
    "user": "Elias Bento",
    "message": "Tem suporte técnico?"
  },
  {
    "user": "Francisco Luz",
    "message": "Ela é compatível com iOS?"
  },
  {
    "user": "Giovani Paiva",
    "message": "Precisa de internet sempre?"
  },
  {
    "user": "Hamilton Aguiar",
    "message": "Tem tutorial de uso?"
  },
  {
    "user": "Isaque Tomé",
    "message": "Ela calcula materiais?"
  },
  {
    "user": "Jeferson Prado",
    "message": "Tem banco de dados de preços?"
  },
  {
    "user": "Klaus Menezes",
    "message": "Posso adicionar serviços personalizados?"
  },
  {
    "user": "Lauro Sena",
    "message": "Gera contrato automaticamente?"
  },
  {
    "user": "Miguel Andrade",
    "message": "Tem controle de clientes?"
  },
  {
    "user": "Nicolas Figueiredo",
    "message": "Ela salva histórico?"
  },
  {
    "user": "Osvaldo Braga",
    "message": "Posso enviar por WhatsApp?"
  },
  {
    "user": "Paulo César",
    "message": "Tem integração com outras ferramentas?"
  },
  {
    "user": "Quintino Rios",
    "message": "É atualizada constantemente?"
  },
  {
    "user": "Raul Miranda",
    "message": "Tem versão gratuita?"
  },
  {
    "user": "Sandro Queiroz",
    "message": "Aceita quais formas de pagamento?"
  },
  {
    "user": "Túlio Barros",
    "message": "Tem período de teste?"
  },
  {
    "user": "Ubiratan Chaves",
    "message": "Posso cancelar quando quiser?"
  },
  {
    "user": "Vicente Rocha",
    "message": "É assinatura mensal ou anual?"
  },
  {
    "user": "Wilson Vargas",
    "message": "Tem desconto pra pagamento anual?"
  },
  {
    "user": "Ximenes Góes",
    "message": "Ela tem app móvel mesmo?"
  },
  {
    "user": "Yan Cardoso",
    "message": "Consigo usar no tablet?"
  },
  {
    "user": "Zacarias Lima",
    "message": "Ela sincroniza entre dispositivos?"
  },
  {
    "user": "Ademar Santos",
    "message": "Tem limite de orçamentos?"
  },
  {
    "user": "Bento Dias",
    "message": "É segura pra guardar dados?"
  },
  {
    "user": "Cauê Oliveira",
    "message": "Tem backup automático?"
  },
  {
    "user": "Demétrio Silva",
    "message": "Posso exportar dados?"
  },
  {
    "user": "Ernesto Machado",
    "message": "Ela tem calculadora embutida?"
  },
  {
    "user": "Flávio Augusto",
    "message": "Consigo editar depois de salvar?"
  },
  {
    "user": "Geraldo Neves",
    "message": "Tem campo pra observações?"
  },
  {
    "user": "Hélder Pereira",
    "message": "Ela gera relatórios?"
  },
  {
    "user": "Ilton Monteiro",
    "message": "Posso duplicar orçamentos?"
  },
  {
    "user": "Jairo Fonseca",
    "message": "Tem modelo pronto?"
  },
  {
    "user": "Kauê Martins",
    "message": "É intuitiva de usar?"
  },
  {
    "user": "Lúcio Borges",
    "message": "Tem vídeo explicativo?"
  },
  {
    "user": "Marcio Teixeira",
    "message": "Ela é rápida?"
  },
  {
    "user": "Norberto Vieira",
    "message": "Consigo trabalhar offline?"
  },
  {
    "user": "Olavo Pinto",
    "message": "Tem campo pra prazo de execução?"
  },
  {
    "user": "Plínio Ramos",
    "message": "Posso colocar fotos?"
  },
  {
    "user": "Rui Barbosa",
    "message": "Ela calcula desconto automaticamente?"
  },
  {
    "user": "Silvio Gomes",
    "message": "Tem como enviar por email?"
  },
  {
    "user": "Tadeu Moura",
    "message": "Vou receber na indicação?"
  },
  {
    "user": "Urbano Castro",
    "message": "Ganha 50% de cada um?"
  },
  {
    "user": "Vanderlei Correia",
    "message": "Como vou cadastrar pra indicar?"
  },
  {
    "user": "Walace Lopes",
    "message": "Vou querer ser afiliado"
  },
  {
    "user": "Yvon Almeida",
    "message": "Opa agora sim falou minha língua kkk"
  },
  {
    "user": "Zenildo Souza",
    "message": "Ah mano vou indicar pelo menos pra 5 amigos kkk"
  },
  {
    "user": "Adalberto Freitas",
    "message": "Top demais vou querer sim"
  },
  {
    "user": "Baltazar Cunha",
    "message": "Como funciona essa indicação?"
  },
  {
    "user": "Celso Ribeiro",
    "message": "Vou ganhar por cada indicado?"
  },
  {
    "user": "Darlan Campos",
    "message": "Isso é comissão vitalícia?"
  },
  {
    "user": "Elton Macedo",
    "message": "Pagam mesmo a indicação?"
  },
  {
    "user": "Fabiano Duarte",
    "message": "Tenho vários colegas que vão querer"
  },
  {
    "user": "Gilmar Xavier",
    "message": "Como recebo o dinheiro das indicações?"
  },
  {
    "user": "Humberto Fernandes",
    "message": "É PIX o pagamento?"
  },
  {
    "user": "Ivaldo Reis",
    "message": "Vou divulgar no meu grupo"
  },
  {
    "user": "Josué Borges",
    "message": "Que massa essa parte de afiliado"
  },
  {
    "user": "Kleber Nogueira",
    "message": "Conheço uns 10 que vão querer"
  },
  {
    "user": "Lourival Medeiros",
    "message": "Bora indicar galera"
  },
  {
    "user": "Messias Pires",
    "message": "Vou virar afiliado mesmo"
  },
  {
    "user": "Nilton Sampaio",
    "message": "Quanto é a comissão exata?"
  },
  {
    "user": "Odair Cruz",
    "message": "Tem material pra divulgar?"
  },
  {
    "user": "Pascoal Guedes",
    "message": "Vou mandar no status"
  },
  {
    "user": "Quirino Rezende",
    "message": "Da pra ganhar uma grana boa nisso"
  },
  {
    "user": "Ronaldo Tavares",
    "message": "Eu quero ❤️"
  },
  {
    "user": "Sebastião Pacheco",
    "message": "Eu quero 🔥"
  },
  {
    "user": "Teodoro Marques",
    "message": "Eu quero 👏"
  },
  {
    "user": "Ulrich Brandão",
    "message": "Eu quero 🙌"
  },
  {
    "user": "Valter Motta",
    "message": "Eu quero ⚡"
  },
  {
    "user": "Wanderson Silva",
    "message": "Eu quero 💪"
  },
  {
    "user": "Yago Bastos",
    "message": "Eu quero 🎯"
  },
  {
    "user": "Zeca Siqueira",
    "message": "Eu quero ✅"
  },
  {
    "user": "Arnaldo Vasconcelos",
    "message": "Eu quero 💯"
  },
  {
    "user": "Benício Caldeira",
    "message": "Eu quero 🚀"
  },
  {
    "user": "Carmelo Franco",
    "message": "Eu quero 👍"
  },
  {
    "user": "Dorival Esteves",
    "message": "Eu quero 😍"
  },
  {
    "user": "Edilson Lira",
    "message": "Eu quero 🤩"
  },
  {
    "user": "Firmino Novaes",
    "message": "Eu quero 🔝"
  },
  {
    "user": "Gastão Dantas",
    "message": "Eu quero 💚"
  },
  {
    "user": "Vou querer a ferramenta",
    "message": "Libera o link"
  },
  {
    "user": "Isidoro Moraes",
    "message": "Onde posso acessar?"
  },
  {
    "user": "Jacinto Bento",
    "message": "Onde compra?"
  },
  {
    "user": "Lindomar Luz",
    "message": "Quero assinar"
  },
  {
    "user": "Manoel Paiva",
    "message": "Onde obter o acesso?"
  },
  {
    "user": "Nivaldo Aguiar",
    "message": "Mano onde obter acesso a ferramenta"
  },
  {
    "user": "Odilson Tomé",
    "message": "Muito bom mesmo"
  },
  {
    "user": "Paulino Prado",
    "message": "Cadê o link?"
  },
  {
    "user": "Raimundo Menezes",
    "message": "Posta o link aí"
  },
  {
    "user": "Sidnei Sena",
    "message": "Quero o link"
  },
  {
    "user": "Tarcísio Andrade",
    "message": "Manda o link na descrição"
  },
  {
    "user": "Ulysses Figueiredo",
    "message": "Como faço pra comprar?"
  },
  {
    "user": "Vagner Braga",
    "message": "Qual o site?"
  },
  {
    "user": "Wladimir César",
    "message": "Tem na descrição?"
  },
  {
    "user": "Ximenes Rios",
    "message": "Libera logo"
  },
  {
    "user": "Ygor Miranda",
    "message": "Quero já"
  },
  {
    "user": "Zélio Queiroz",
    "message": "Bora liberar"
  },
  {
    "user": "Adilson Barros",
    "message": "Tô esperando"
  },
  {
    "user": "Bertoldo Chaves",
    "message": "Cadê?"
  },
  {
    "user": "Cid Vargas",
    "message": "Libera aí"
  },
  {
    "user": "Deivid Góes",
    "message": "Quero adquirir"
  },
  {
    "user": "Everton Cardoso",
    "message": "Qual o endereço?"
  },
  {
    "user": "Felício Lima",
    "message": "Manda o acesso"
  },
  {
    "user": "Genilson Santos",
    "message": "Como acesso?"
  },
  {
    "user": "Haroldo Dias",
    "message": "Quero comprar agora"
  },
  {
    "user": "Inácio Oliveira",
    "message": "Vou comprar"
  },
  {
    "user": "Jarbas Machado",
    "message": "Show vou acessar"
  },
  {
    "user": "Laerte Augusto",
    "message": "Valeu vou querer"
  },
  {
    "user": "Moacir Neves",
    "message": "Top vou lá"
  },
  {
    "user": "Nazareno Pereira",
    "message": "Vou adquirir"
  },
  {
    "user": "Oldair Monteiro",
    "message": "Bora lá então"
  },
  {
    "user": "Percival Fonseca",
    "message": "Vou comprar sim"
  },
  {
    "user": "Quintiliano Martins",
    "message": "Fechou"
  },
  {
    "user": "Roberval Borges",
    "message": "Já vou acessar"
  },
  {
    "user": "Silas Teixeira",
    "message": "Show já consegui acessar aqui"
  },
  {
    "user": "Teófilo Vieira",
    "message": "Obrigado professor"
  },
  {
    "user": "Ubaldo Pinto",
    "message": "Valeu assinei aqui"
  },
  {
    "user": "Valdomiro Ramos",
    "message": "Obtive aqui"
  },
  {
    "user": "Welington Gomes",
    "message": "Deu erro no meu cartão vou tentar de novo"
  },
  {
    "user": "Xisto Moura",
    "message": "Entrei aqui muito bom mesmo"
  },
  {
    "user": "Ylmar Castro",
    "message": "Top demais assinei"
  },
  {
    "user": "Zeferino Correia",
    "message": "Valeu muito bom mesmo"
  },
  {
    "user": "Adão Lopes",
    "message": "Consegui acessar"
  },
  {
    "user": "Barnabé Almeida",
    "message": "Já tô usando"
  },
  {
    "user": "Ciro Souza",
    "message": "Acessei aqui show"
  },
  {
    "user": "Dênis Freitas",
    "message": "Valeu demais"
  },
  {
    "user": "Emerson Cunha",
    "message": "Já comprei"
  },
  {
    "user": "Florisvaldo Ribeiro",
    "message": "Consegui aqui"
  },
  {
    "user": "Gerson Campos",
    "message": "Tá rodando já"
  },
  {
    "user": "Hamilcar Macedo",
    "message": "Assinei show"
  },
  {
    "user": "Iberê Duarte",
    "message": "Valeu professor"
  },
  {
    "user": "Jair Xavier",
    "message": "Muito obrigado"
  },
  {
    "user": "Kléber Fernandes",
    "message": "Deu certo aqui"
  },
  {
    "user": "Laudelino Reis",
    "message": "Já acessei"
  },
  {
    "user": "Mizael Borges",
    "message": "Top consegui"
  },
  {
    "user": "Natanael Nogueira",
    "message": "Show de bola"
  },
  {
    "user": "Onofre Medeiros",
    "message": "Já estou usando"
  },
  {
    "user": "Policarpo Pires",
    "message": "Valeu mesmo"
  },
  {
    "user": "Quintino Sampaio",
    "message": "Deu tudo certo"
  },
  {
    "user": "Romildo Cruz",
    "message": "Assinei já"
  },
  {
    "user": "Salomão Guedes",
    "message": "Consegui professor"
  },
  {
    "user": "Tito Rezende",
    "message": "Tá funcionando"
  },
  {
    "user": "Ulrich Tavares",
    "message": "Show demais"
  },
  {
    "user": "Vilmar Pacheco",
    "message": "Obrigado"
  },
  {
    "user": "Wando Marques",
    "message": "Já comprei aqui"
  },
  {
    "user": "Yuri Brandão",
    "message": "Consegui acessar"
  },
  {
    "user": "Zoroastro Motta",
    "message": "Valeu demais professor"
  },
  {
    "user": "Ademir Silva",
    "message": "Assinei show"
  },
  {
    "user": "Benedito Bastos",
    "message": "Já tô usando aqui"
  },
  {
    "user": "Clóvis Siqueira",
    "message": "Deu certo"
  },
  {
    "user": "Dirceu Vasconcelos",
    "message": "Obrigado mestre"
  },
  {
    "user": "Ednaldo Caldeira",
    "message": "Top já acessei"
  },
  {
    "user": "Florentino Franco",
    "message": "Show consegui"
  },
  {
    "user": "Geraldo Esteves",
    "message": "Valeu"
  },
  {
    "user": "Hilário Lira",
    "message": "Assinei aqui"
  },
  {
    "user": "Irineu Novaes",
    "message": "Já tá funcionando"
  },
  {
    "user": "Jeremias Dantas",
    "message": "Consegui obrigado"
  },
  {
    "user": "Leonel Leite",
    "message": "Show de bola professor"
  },
  {
    "user": "Murilo Moraes",
    "message": "Deu tudo certo aqui"
  },
  {
    "user": "Nestor Bento",
    "message": "Top demais"
  },
  {
    "user": "Otacílio Luz",
    "message": "Valeu mesmo"
  },
  {
    "user": "Prudêncio Paiva",
    "message": "Já comprei show"
  },
  {
    "user": "Quirino Aguiar",
    "message": "Consegui acessar aqui"
  },
  {
    "user": "Rosemberg Tomé",
    "message": "Funcionou"
  },
  {
    "user": "Silvano Prado",
    "message": "Assinei obrigado"
  },
  {
    "user": "Tobias Menezes",
    "message": "Show demais"
  },
  {
    "user": "Urias Sena",
    "message": "Valeu professor"
  },
  {
    "user": "Vivaldo Andrade",
    "message": "Deu certo sim"
  },
  {
    "user": "Waldir Figueiredo",
    "message": "Já tô usando"
  },
  {
    "user": "Xenofonte Braga",
    "message": "Consegui aqui"
  },
  {
    "user": "Yves César",
    "message": "Top já assinei"
  },
  {
    "user": "Zulmiro Rios",
    "message": "Obrigado demais"
  },
  {
    "user": "Alcides Miranda",
    "message": "Show consegui"
  },
  {
    "user": "Bonifácio Queiroz",
    "message": "Valeu"
  },
  {
    "user": "Cosme Barros",
    "message": "Já acessei"
  },
  {
    "user": "Damião Chaves",
    "message": "Tá rodando"
  },
  {
    "user": "Evaristo Vargas",
    "message": "Deu certo show"
  },
  {
    "user": "Faustino Góes",
    "message": "Assinei aqui"
  },
  {
    "user": "Gumercindo Cardoso",
    "message": "Valeu professor"
  },
  {
    "user": "Homero Lima",
    "message": "Consegui obrigado"
  },
  {
    "user": "Idalberto Santos",
    "message": "Top demais"
  },
  {
    "user": "Jacó Dias",
    "message": "Show"
  },
  {
    "user": "Lázaro Oliveira",
    "message": "Já comprei"
  },
  {
    "user": "Moisés Machado",
    "message": "Funcionou aqui"
  },
  {
    "user": "Noé Augusto",
    "message": "Valeu mesmo"
  },
  {
    "user": "Orestes Neves",
    "message": "Deu tudo certo"
  },
  {
    "user": "Pantaleão Pereira",
    "message": "Assinei show"
  },
  {
    "user": "Querubim Monteiro",
    "message": "Consegui acessar"
  },
  {
    "user": "Régis Fonseca",
    "message": "Tá funcionando"
  },
  {
    "user": "Salustiano Martins",
    "message": "Obrigado professor"
  },
  {
    "user": "Timóteo Borges",
    "message": "Show de bola"
  },
  {
    "user": "Uriel Teixeira",
    "message": "Valeu"
  },
  {
    "user": "Vasco Vieira",
    "message": "Já assinei"
  },
  {
    "user": "Wolney Pinto",
    "message": "Deu certo"
  },
  {
    "user": "Xerxes Ramos",
    "message": "Consegui aqui"
  },
  {
    "user": "Yago Gomes",
    "message": "Top"
  },
  {
    "user": "Zózimo Moura",
    "message": "Valeu demais"
  },
  {
    "user": "Arlindo Castro",
    "message": "Assinei aqui show"
  },
  {
    "user": "Bartolomeu Correia",
    "message": "Funcionou"
  },
  {
    "user": "Casimiro Lopes",
    "message": "Já acessei obrigado"
  },
  {
    "user": "Diógenes Almeida",
    "message": "Show consegui"
  },
  {
    "user": "Eládio Souza",
    "message": "Top demais"
  },
  {
    "user": "Filadelfo Freitas",
    "message": "Deu tudo certo aqui"
  },
  {
    "user": "Generoso Cunha",
    "message": "Valeu professor"
  },
  {
    "user": "Hermenegildo Ribeiro",
    "message": "Já comprei show"
  },
  {
    "user": "Isac Campos",
    "message": "Consegui acessar"
  },
  {
    "user": "Josias Macedo",
    "message": "Tá rodando já"
  },
  {
    "user": "Leôncio Duarte",
    "message": "Assinei obrigado"
  },
  {
    "user": "Matias Xavier",
    "message": "Show demais"
  },
  {
    "user": "Nicodemos Fernandes",
    "message": "Valeu mesmo"
  },
  {
    "user": "Osmar Reis",
    "message": "Deu certo sim"
  },
  {
    "user": "Plácido Borges",
    "message": "Já tô usando"
  },
  {
    "user": "Quintiliano Nogueira",
    "message": "Consegui aqui"
  },
  {
    "user": "Rodolfo Medeiros",
    "message": "Top já assinei"
  },
  {
    "user": "Severino Pires",
    "message": "Obrigado demais"
  },
  {
    "user": "Tertuliano Sampaio",
    "message": "Show consegui"
  },
  {
    "user": "Urbino Cruz",
    "message": "Valeu"
  },
  {
    "user": "Vital Guedes",
    "message": "Já acessei"
  },
  {
    "user": "Wilton Rezende",
    "message": "Tá funcionando"
  },
  {
    "user": "Ximeno Tavares",
    "message": "Deu certo show"
  },
  {
    "user": "Yves Pacheco",
    "message": "Assinei aqui"
  },
  {
    "user": "Zacarías Marques",
    "message": "Valeu professor"
  },
  {
    "user": "Afonso Brandão",
    "message": "Consegui obrigado"
  },
  {
    "user": "Bráulio Motta",
    "message": "Top demais"
  },
  {
    "user": "Caetano Silva",
    "message": "Show"
  },
  {
    "user": "Décio Bastos",
    "message": "Já comprei"
  },
  {
    "user": "Eliseu Siqueira",
    "message": "Funcionou aqui"
  },
  {
    "user": "Ferdinando Vasconcelos",
    "message": "Valeu mesmo"
  },
  {
    "user": "Godofredo Caldeira",
    "message": "Deu tudo certo"
  },
  {
    "user": "Hipólito Franco",
    "message": "Assinei show"
  },
  {
    "user": "Ismael Esteves",
    "message": "Consegui acessar"
  },
  {
    "user": "Josafá Lira",
    "message": "Tá funcionando"
  },
  {
    "user": "Lindolfo Novaes",
    "message": "Obrigado professor"
  },
  {
    "user": "Mário Dantas",
    "message": "Show de bola"
  },
  {
    "user": "Nabor Leite",
    "message": "Valeu"
  },
  {
    "user": "Olegário Moraes",
    "message": "Já assinei"
  },
  {
    "user": "Possidônio Bento",
    "message": "Deu certo"
  },
  {
    "user": "Quesito Luz",
    "message": "Consegui aqui"
  },
  {
    "user": "Rodrigo Silva",
    "message": "Top já usei e aprovei"
  },
  {
    "user": "Sebastiano Paiva",
    "message": "Valeu demais"
  },
  {
    "user": "Tiago Aguiar",
    "message": "Assinei aqui show"
  },
  {
    "user": "Ubirajara Tomé",
    "message": "Funcionou"
  },
  {
    "user": "Valério Prado",
    "message": "Já acessei obrigado"
  },
  {
    "user": "Walace Menezes",
    "message": "Show consegui"
  },
  {
    "user": "Xandy Sena",
    "message": "Top demais"
  },
  {
    "user": "Yule Andrade",
    "message": "Deu tudo certo aqui"
  },
  {
    "user": "Zenóbio Figueiredo",
    "message": "Valeu professor"
  },
  {
    "user": "Alarico Braga",
    "message": "Já comprei show"
  },
  {
    "user": "Bertrand César",
    "message": "Consegui acessar"
  },
  {
    "user": "Conrado Rios",
    "message": "Tá rodando já"
  },
  {
    "user": "Danilo Miranda",
    "message": "Assinei obrigado"
  },
  {
    "user": "Elói Queiroz",
    "message": "Show demais"
  },
  {
    "user": "Frederico Barros",
    "message": "Valeu mesmo"
  },
  {
    "user": "Gaudêncio Chaves",
    "message": "Deu certo sim"
  },
  {
    "user": "Heitor Vargas",
    "message": "Já tô usando"
  },
  {
    "user": "Ivo Góes",
    "message": "Consegui aqui"
  },
  {
    "user": "Jacinto Cardoso",
    "message": "Top já assinei"
  },
  {
    "user": "Lair Lima",
    "message": "Obrigado demais"
  },
  {
    "user": "Manfredo Santos",
    "message": "Show consegui"
  },
  {
    "user": "Natálio Dias",
    "message": "Valeu"
  },
  {
    "user": "Octávio Oliveira",
    "message": "Já acessei"
  },
  {
    "user": "Palmiro Machado",
    "message": "Tá funcionando"
  },
  {
    "user": "Quirino Augusto",
    "message": "Deu certo show"
  },
  {
    "user": "Reinaldo Neves",
    "message": "Assinei aqui"
  },
  {
    "user": "Salvador Pereira",
    "message": "Valeu professor"
  },
  {
    "user": "Teobaldo Monteiro",
    "message": "Consegui obrigado"
  },
  {
    "user": "Ulrico Fonseca",
    "message": "Top demais"
  },
  {
    "user": "Virgílio Martins",
    "message": "Show"
  },
  {
    "user": "Wenceslau Borges",
    "message": "Já comprei"
  },
  {
    "user": "Xisto Teixeira",
    "message": "Funcionou aqui"
  },
  {
    "user": "Yves Vieira",
    "message": "Valeu mesmo"
  },
  {
    "user": "Zózimo Pinto",
    "message": "Deu tudo certo"
  },
  {
    "user": "Anselmo Ramos",
    "message": "Assinei show"
  },
  {
    "user": "Bernardo Gomes",
    "message": "Consegui acessar"
  },
  {
    "user": "Clemente Moura",
    "message": "Tá funcionando"
  },
  {
    "user": "Divino Castro",
    "message": "Obrigado professor"
  },
  {
    "user": "Elpídio Correia",
    "message": "Show de bola"
  },
  {
    "user": "Fabio Lopes",
    "message": "Valeu"
  },
  {
    "user": "Gaspar Almeida",
    "message": "Já assinei"
  },
  {
    "user": "Herculano Souza",
    "message": "Deu certo"
  },
  {
    "user": "Ítalo Freitas",
    "message": "Consegui aqui"
  },
  {
    "user": "Jonas Cunha",
    "message": "Top"
  },
  {
    "user": "Ladislau Ribeiro",
    "message": "Valeu demais"
  },
  {
    "user": "Marcos Roberto",
    "message": "Assinei aqui show e já recomendei pra galera"
  },
  {
    "user": "Nataniel Campos",
    "message": "Funcionou perfeitamente"
  },
  {
    "user": "Odilon Macedo",
    "message": "Já acessei obrigado"
  },
  {
    "user": "Primiano Duarte",
    "message": "Show consegui"
  },
  {
    "user": "Radamés Xavier",
    "message": "Top demais"
  },
  {
    "user": "Sabino Fernandes",
    "message": "Deu tudo certo aqui"
  },
  {
    "user": "Trajano Reis",
    "message": "Valeu professor"
  },
  {
    "user": "Ubaldino Borges",
    "message": "Já comprei show"
  },
  {
    "user": "Venâncio Nogueira",
    "message": "Consegui acessar"
  },
  {
    "user": "Ricardo Almeida",
    "message": "Tá rodando já, muito bom"
  },
  {
    "user": "Xico Pires",
    "message": "Assinei obrigado"
  },
  {
    "user": "Yuri Sampaio",
    "message": "Show demais valeu"
  },
  {
    "user": "Zeno Cruz",
    "message": "Valeu mesmo professor"
  }
];
