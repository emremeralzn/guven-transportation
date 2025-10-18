# Nakliyat Websitesi - Next.js + TypeScript + TailwindCSS

Modern, SEO-optimized ve yüksek performanslı nakliyat ve taşımacılık firması websitesi.

## 🚀 Özellikler

- **Next.js 14** - React tabanlı modern web framework
- **TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **TailwindCSS** - Utility-first CSS framework
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Responsive Design** - Mobile-first yaklaşım
- **Performance** - Next.js Image optimization, lazy loading, SSG
- **Accessibility** - WCAG 2.1 uyumlu
- **WhatsApp Integration** - Hızlı iletişim butonu
- **Cloudinary** - Optimized image hosting
- **Static Generation** - Hızlı yükleme süreleri

## 📁 Proje Yapısı

```
nakliyat/
├── components/          # React bileşenleri
│   ├── SEO.tsx         # SEO meta tags ve schema
│   ├── Layout.tsx      # Ana layout bileşeni
│   ├── Header.tsx      # Site başlığı
│   ├── Footer.tsx      # Site alt bilgisi
│   ├── Hero.tsx        # Ana banner
│   ├── ServiceCard.tsx # Hizmet kartları
│   ├── TestimonialCard.tsx # Müşteri yorumları
│   ├── FAQ.tsx         # Sıkça sorulan sorular
│   ├── ContactForm.tsx # İletişim formu
│   ├── WhatsAppButton.tsx # WhatsApp butonu
│   └── ...
├── pages/              # Next.js sayfaları
│   ├── index.tsx       # Ana sayfa
│   ├── hakkimizda.tsx  # Hakkımızda
│   ├── hizmetlerimiz/  # Hizmetler sayfaları
│   ├── galeri.tsx      # Galeri
│   ├── iletisim.tsx    # İletişim
│   └── api/            # API routes
│       ├── sitemap.ts  # Sitemap generator
│       └── robots.ts   # Robots.txt generator
├── data/               # JSON veri dosyaları
│   ├── site.json       # Site bilgileri
│   ├── services.json   # Hizmetler
│   ├── testimonials.json # Müşteri yorumları
│   └── faq.json        # Sıkça sorulan sorular
├── lib/                # Utility fonksiyonları
│   └── data.ts         # Veri okuma fonksiyonları
├── styles/             # CSS dosyaları
│   └── globals.css     # Global stiller
├── types/              # TypeScript tip tanımları
│   └── index.ts        # Tip tanımları
└── public/             # Statik dosyalar
```

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd nakliyat
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Çevre değişkenlerini ayarlayın**
`.env.local` dosyası oluşturun:
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Nakliyat Firması
NEXT_PUBLIC_COMPANY_NAME=Güven Nakliyat

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_PHONE=+905551234567
NEXT_PUBLIC_WHATSAPP_MESSAGE=Merhaba! Nakliyat hizmetleriniz hakkında bilgi almak istiyorum.

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your-api-key

# Contact Information
NEXT_PUBLIC_COMPANY_EMAIL=info@guvennakliyat.com
NEXT_PUBLIC_COMPANY_PHONE=+905551234567
NEXT_PUBLIC_COMPANY_ADDRESS=İstanbul, Türkiye
```

4. **Cloudinary ayarları**
- [Cloudinary](https://cloudinary.com) hesabı oluşturun
- `next.config.js` dosyasındaki domain'i güncelleyin
- Resimlerinizi Cloudinary'ye yükleyin

5. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

6. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📝 İçerik Güncelleme

### Site Bilgileri
`data/site.json` dosyasını düzenleyin:
```json
{
  "siteName": "Firma Adınız",
  "tagline": "Sloganınız",
  "description": "Site açıklaması",
  "contact": {
    "phone": "Telefon numaranız",
    "email": "E-posta adresiniz",
    "address": "Adresiniz"
  }
}
```

### Hizmetler
`data/services.json` dosyasını düzenleyin:
```json
{
  "services": [
    {
      "id": "hizmet-id",
      "title": "Hizmet Adı",
      "description": "Hizmet açıklaması",
      "features": ["Özellik 1", "Özellik 2"],
      "image": "Cloudinary URL"
    }
  ]
}
```

### Müşteri Yorumları
`data/testimonials.json` dosyasını düzenleyin:
```json
{
  "testimonials": [
    {
      "name": "Müşteri Adı",
      "text": "Yorum metni",
      "rating": 5,
      "avatar": "Cloudinary URL"
    }
  ]
}
```

## 🚀 Deployment

### Vercel (Önerilen)

1. **Vercel hesabı oluşturun**
2. **GitHub repository bağlayın**
3. **Environment variables ekleyin**
4. **Deploy edin**

### Manuel Build

```bash
npm run build
npm run export
```

## 📊 SEO Kontrolleri

### Google Search Console
1. Site haritasını ekleyin: `https://your-domain.com/sitemap.xml`
2. Robots.txt'i kontrol edin: `https://your-domain.com/robots.txt`

### Meta Tags Kontrolü
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Performance Testleri
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Accessibility Testleri
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🎨 Tasarım Özelleştirme

### Renkler
`tailwind.config.js` dosyasında renkleri özelleştirin:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        600: '#2563eb',
        // ...
      }
    }
  }
}
```

### Fontlar
Google Fonts'tan font ekleyin ve `_app.tsx` dosyasında import edin.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme

### Yeni Sayfa Ekleme
1. `pages/` klasöründe yeni dosya oluşturun
2. `getStaticProps` fonksiyonu ekleyin
3. SEO props'ları ayarlayın
4. Navigation'a ekleyin

### Yeni Bileşen Ekleme
1. `components/` klasöründe yeni dosya oluşturun
2. TypeScript tiplerini tanımlayın
3. Accessibility özelliklerini ekleyin

## 🐛 Sorun Giderme

### Build Hataları
```bash
npm run lint
npm run type-check
```

### Performance Sorunları
- Next.js Image component kullanın
- Lazy loading uygulayın
- Bundle analyzer kullanın

### SEO Sorunları
- Meta tags'leri kontrol edin
- Structured data'yı test edin
- Sitemap'i doğrulayın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun
3. Commit yapın
4. Push yapın
5. Pull Request açın

## 📞 Destek

Herhangi bir sorun için:
- GitHub Issues
- E-posta: info@guvennakliyat.com
- Telefon: +90 555 123 45 67

---

**Not**: Bu template, nakliyat ve taşımacılık firmaları için optimize edilmiştir. Kendi ihtiyaçlarınıza göre özelleştirebilirsiniz.
