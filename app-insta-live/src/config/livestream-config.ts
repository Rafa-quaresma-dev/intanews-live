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
  loopComments: true,
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
  { user: "Rodrigo Almeida", message: "muito top essa ferramenta" },
{ user: "Ricardo Santos", message: "quanto vai ser na promoção?" },
{ user: "Marcos Oliveira", message: "to precisando fazer orçamentos assim" },
{ user: "Felipe Duarte", message: "ficou muito bom mesmo" },
{ user: "João Mendes", message: "hoje vai liberar o desconto?" },
{ user: "Alex Costa", message: "meu primo usa ela muito boa msm" },
{ user: "Carlos Martins", message: "realmente fica muito boa" },
{ user: "Thiago Silva", message: "vai ser gratuita?" },
{ user: "André Pires", message: "se for acima de 100 reais dá não" },
{ user: "Eduardo Ramos", message: "caraca braba demais" },
{ user: "Bruno Cardoso", message: "top demais essa plataforma" },
{ user: "Leonardo Vieira", message: "já quero testar" },
{ user: "Pedro Nascimento", message: "tô gostando do que tô vendo" },
{ user: "Fábio Ferreira", message: "cara isso aí ajuda demais nós eletricistas" },
{ user: "Henrique Souza", message: "bem melhor que fazer orçamento no papel" },
{ user: "Gustavo Araújo", message: "isso aí salva tempo demais" },
{ user: "Rafael Cunha", message: "tá com cara de ferramenta profissional" },
{ user: "Daniel Almeida", message: "show demais" },
{ user: "Lucas Rocha", message: "já estou interessado" },
{ user: "Mateus Faria", message: "vou querer ver mais sobre ela" },
{ user: "Ricardo Santos", message: "ela faz contrato também?" },
{ user: "Rodrigo Almeida", message: "posso usar no celular?" },
{ user: "Marcos Oliveira", message: "funciona online certinho?" },
{ user: "Felipe Duarte", message: "quero usar no notebook" },
{ user: "João Mendes", message: "serve para autônomo?" },
{ user: "Alex Costa", message: "sou eletricista e vai me ajudar demais" },
{ user: "Carlos Martins", message: "cara onde compro ela?" },
{ user: "Thiago Silva", message: "essa é top demais" },
{ user: "André Pires", message: "curti muito essas funções" },
{ user: "Eduardo Ramos", message: "isso agiliza muito meu trabalho" },
{ user: "Bruno Cardoso", message: "top demais mesmo" },
{ user: "Leonardo Vieira", message: "tem calculadora elétrica? show!" },
{ user: "Pedro Nascimento", message: "já quero assinar" },
{ user: "Fábio Ferreira", message: "perfeito pra minha rotina" },
{ user: "Henrique Souza", message: "funciona 24h online?" },
{ user: "Gustavo Araújo", message: "prático demais" },
{ user: "Rafael Cunha", message: "essa plataforma é completa" },
{ user: "Daniel Almeida", message: "precisava disso pra ontem" },
{ user: "Lucas Rocha", message: "onde faz cadastro?" },
{ user: "Mateus Faria", message: "tá muito boa mesmo" },
{ user: "Rodrigo Almeida", message: "vou receber na indicação mesmo?" },
{ user: "Ricardo Santos", message: "ganha 50% de cada um?" },
{ user: "Marcos Oliveira", message: "como vou cadastrar para indicar?" },
{ user: "Felipe Duarte", message: "vou querer ser afiliado" },
{ user: "João Mendes", message: "opa agora sim falou minha língua kkk" },
{ user: "Alex Costa", message: "ah mano vou indicar pra 5 amigos kkk" },
{ user: "Carlos Martins", message: "top demais vou querer sim" },
{ user: "Thiago Silva", message: "bora ganhar indicando kkk" },
{ user: "André Pires", message: "muito bom isso de afiliado" },
{ user: "Gustavo Araújo", message: "eu quero ❤️" },
{ user: "Rafael Cunha", message: "eu quero ❤️" },
{ user: "Daniel Almeida", message: "eu quero ❤️" },
{ user: "Lucas Rocha", message: "eu quero ❤️" },
{ user: "Mateus Faria", message: "eu quero ❤️" },
{ user: "Bruno Cardoso", message: "eu quero ❤️" },
{ user: "Pedro Nascimento", message: "eu quero ❤️" },
{ user: "Rodrigo Almeida", message: "vou querer a ferramenta" },
{ user: "Ricardo Santos", message: "libera o link aí" },
{ user: "Marcos Oliveira", message: "onde posso acessar?" },
{ user: "Felipe Duarte", message: "onde compra?" },
{ user: "João Mendes", message: "quero assinar" },
{ user: "Alex Costa", message: "onde obter o acesso?" },
{ user: "Carlos Martins", message: "mano onde entro pra pegar a ferramenta?" },
{ user: "Thiago Silva", message: "muito bom mesmo quero usar já" },
{ user: "André Pires", message: "me manda o link professor" },
{ user: "Eduardo Ramos", message: "já quero entrar" },
{ user: "Bruno Cardoso", message: "manda aí o acesso" },
{ user: "Leonardo Vieira", message: "vou comprar" },
{ user: "Pedro Nascimento", message: "show vou acessar" },
{ user: "Fábio Ferreira", message: "valeu vou querer" },
{ user: "Henrique Souza", message: "top vou lá agora" },
{ user: "Gustavo Araújo", message: "tô entrando no link" },
{ user: "Daniel Almeida", message: "já to indo comprar" },
{ user: "Lucas Rocha", message: "partiu assinar" },
{ user: "Mateus Faria", message: "tô dentro" },
{ user: "Rodrigo Almeida", message: "show já consegui acessar aqui" },
{ user: "Ricardo Santos", message: "obrigado professor" },
{ user: "Marcos Oliveira", message: "valeu assinei aqui" },
{ user: "Felipe Duarte", message: "obtive acesso aqui certinho" },
{ user: "João Mendes", message: "deu erro no cartão vou tentar de novo" },
{ user: "Alex Costa", message: "entrei aqui muito bom mesmo" },
{ user: "Carlos Martins", message: "top demais assinei" },
{ user: "Thiago Silva", message: "valeu muito bom mesmo" },
{ user: "André Pires", message: "já configurei meu perfil aqui" },
{ user: "Eduardo Ramos", message: "tô usando a parte de serviços, top" },
{ user: "Bruno Cardoso", message: "orçamento fica lindo demais" },
{ user: "Leonardo Vieira", message: "cliente já aprovou um orçamento que fiz nela" },
{ user: "Pedro Nascimento", message: "capricharam na plataforma" },
{ user: "Fábio Ferreira", message: "tá rodando liso no meu celular" },
{ user: "Henrique Souza", message: "obrigado por essa ferramenta professor" },
{ user: "Gustavo Araújo", message: "vale cada centavo" },
{ user: "Daniel Almeida", message: "muito boa mesmo" },
{ user: "Lucas Rocha", message: "já fiz contrato aqui top" },
{ user: "Mateus Faria", message: "sensacional" }
];
