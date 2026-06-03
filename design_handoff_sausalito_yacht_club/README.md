# Handoff: Sausalito Yacht Club Website

## Overview

サウサリートヨットクラブ(Sausalito Yacht Club, 1984年〜)の公式Webサイト。西宮港周辺で毎週日曜に活動するクルージング中心のヨットクラブで、無料体験参加から会員入会までの導線を持つ、9ページ構成のマーケティングサイトです。

主な目的:
- **無料体験予約** (`trial.html`) へのコンバージョン
- 初心者・経験者それぞれに合わせた安心感の訴求
- クラブの歴史・活動方針・料金体系・アクセスの情報提供
- Instagram / ブログでのコミュニティ発信

ターゲットユーザー:
- ヨット初心者(見学・同乗だけしてみたい人、泳げない人、おひとり参加希望者)
- ブランクのあるセーリング経験者
- 関西在住で休日の海レジャーを探している層

---

## About the Design Files

このバンドル内のHTML/CSS/JSファイルは **デザインリファレンス(プロトタイプ)** です。最終的な見た目・レイアウト・コピー・インタラクションをそのまま動作する形で示していますが、本番コードとしてそのままコピーペーストすることを意図したものではありません。

実装タスクは「これらのHTMLデザインを、ターゲットのコードベース(あるいは新規構築する場合は最適なフレームワーク)で再現すること」です:

- **既存のフロントエンド環境(Next.js, Nuxt, Astro, WordPress, Jekyll など)がある場合**: そのプロジェクトの規約・コンポーネントライブラリ・ビルドツールに合わせて再構築してください。
- **新規構築する場合**: 静的サイト中心の構成なので、**Astro / Next.js (Static Export) / SvelteKit / Eleventy / Jekyll** などのSSGがおすすめです。フォームには Formspree / Basin / Netlify Forms / 自前 API などを組み合わせてください。
- **CMS化したい場合**: ブログ部分 (`index.html` のJournalセクション) と FAQ部分は、microCMS / Contentful / Sanity / Strapi 等のヘッドレスCMSで管理可能にすると運用が楽になります。

---

## Fidelity

**High-fidelity (hifi)**

すべての色 (Hex)、タイポグラフィ (Google Fonts: Noto Serif JP / Noto Sans JP / Cormorant Garamond)、余白、コンポーネント形状、ホバー状態、スクロールリビールアニメーション、レスポンシブ挙動が最終仕様で確定しています。開発者は**ピクセルパーフェクトな再現**を目指してください。

すべての design token は `assets/css/style.css` の `:root` に CSS 変数として定義済みです。実装時はそれをデザイントークンの単一情報源 (Single Source of Truth) として扱ってください。

---

## Pages / Screens

### 全ページ共通

#### 固定ヘッダー (`.site-header`)
- 高さ: 約 76px (スクロール前) / 約 60px (スクロール後)
- 初期状態: 透明 + 白文字 (ヒーロー画像の上に重なる)
- スクロール 60px 超過後: 白背景 (`rgba(252,252,250,0.96)` + `backdrop-filter: blur(12px)`) + ネイビー文字
- ヒーローのないページ (about/beginners/experienced/trial/fees/access/faq/contact) は常に白背景状態 (`.solid` クラス付与)
- 左: ブランドロゴ (円形の "S" マーク + "サウサリートヨットクラブ" / "SAUSALITO YACHT CLUB · EST. 1984")
- 中央: ナビゲーション (クラブについて / はじめての方 / 経験者の方 / 会費・料金 / アクセス / FAQ)
- 右: CTAボタン「無料体験を予約」(ネイビー塗りのピル型)
- モバイル (≤960px): ハンバーガーメニュー → 全画面ネイビー背景のフルスクリーンメニュー
- 現在ページのナビ項目には `.is-active` (下線)

#### 固定フッター (`.site-footer`)
- 背景: `#061838` (navy-deep)、文字: `rgba(255,255,255,0.78)`
- 上部 4 カラムグリッド:
  1. ブランド + ミッション文 + Instagram丸ボタン
  2. About (クラブ歴史 / はじめて / 経験者 / アクセス)
  3. Visit (無料体験 / 会費 / FAQ / お問い合わせ)
  4. Contact (西宮港 / 毎週日曜 10:00-14:00 / フォーム)
- 下部: コピーライト + "SINCE 1984 — NISHINOMIYA, JAPAN"
- レスポンシブ: ≤860px で 2列、≤520px で 1列

#### 最終CTAバンド (`.cta-band`)
- 背景: ネイビー + 水平線写真をopacity 0.35で重ねる
- 中央寄せ。eyebrow + 大見出し + リード文 + 白塗り「無料体験を予約する」ボタン
- ホーム以外のすべてのページの最下部直前に配置

---

### 1. `index.html` — トップページ

**Purpose**: サイト全体のショーケース。無料体験への動機づけ。

**Sections (上から下に順番)**:

1. **Hero**
   - 全画面 (100vh / 100svh) フルブリードイメージ
   - 画像: `assets/images/hero-main.jpg`
   - オーバーレイ: `linear-gradient(180deg, rgba(6,24,56,0.45) 0%, rgba(6,24,56,0.1) 30%, rgba(6,24,56,0.7) 100%)`
   - 左下にコンテンツ:
     - Eyebrow: "EST. 1984 · NISHINOMIYA" (pale-blue, 13px, letter-spacing 0.22em)
     - H1: 「また海へ。あるいは、ずっと憧れていた海へ。」(Noto Serif JP, clamp 30-64px, line-height 1.4, max-width 18ch)
     - Lead: 5行のリード文 (clamp 14-16.5px, line-height 2, max-width 52ch)
     - CTAs: 「無料体験を予約する」(primary大) / 「初心者の方はこちら」(light) / 「経験者の方はこちら」(light)
   - 左端に縦書きメタ "SAUSALITO YACHT CLUB — NISHINOMIYA, SINCE 1984"
   - 右下に "SCROLL" インジケータ(縦線アニメーション)

2. **About intro** (split layout, wide variant 1.1:1)
   - 左: eyebrow + H2「風と、海と、40年続く日曜日のはじまり。」 + divider + リード文 + 補足文 + ghost button「クラブの歴史を読む」
   - 右: `assets/images/sail-wind.jpg` の 4:5 縦長画像

3. **Facts band** (paper背景, 4カラム grid)
   - 1984 / CLUB FOUNDED
   - 40+ / YEARS OF SAILING
   - 52 / SUNDAYS A YEAR
   - ¥0 / TRIAL FEE
   - 数字は Cormorant Garamond italic, clamp 36-52px

4. **Who it's for** (3カラム figure-card grid)
   - 01 — Beginner / はじめての方へ / people-onboard.jpg
   - 02 — Returning / 経験者の方へ / helm.jpg
   - 03 — Extraordinary / 非日常を求める方へ / aerial-yacht.jpg
   - 各カード: 4:5 画像 + メタ + H3 + 説明文 + ghost button
   - ホバー: 画像が `scale(1.04)` に 1.2s でズーム

5. **Fullbleed break**
   - `assets/images/aerial-yacht.jpg` を `height: clamp(320px, 50vw, 600px)` で全幅表示

6. **Reassurance** (2カラム tick-list)
   - 8項目の安心ポイント (チェックマーク付きリスト, 罫線セパレータ)

7. **Activities** (paper背景, 3カラム card-bordered)
   - N° 01 / 毎週日曜のショートクルージング
   - N° 02 / クルージング中心の心地よさ
   - N° 03 / 年に数回の長めのクルージング

8. **Quote callout**
   - 中央寄せ, max-width 760px
   - Eyebrow + 大きなシリフ体引用「風が変われば、海も変わる。だから、同じ日曜は二度とない。」
   - キャプション (Cormorant italic) "— A member, 12 years aboard"

9. **Blog (Journal)** (paper背景, 3カラム blog-card grid)
   - 見出し左右レイアウト: H2「活動ブログ」 + リード, 右に「すべての記事を見る」ghost button
   - 3カード: 3:2 画像 + 日付 + カテゴリ + H3 + 説明
   - ホバー: 画像 scale 1.05

10. **Instagram band** (paper背景, 中央寄せ)
    - Eyebrow + H2「最新の海の時間を、Instagramで発信中。」
    - Lead 文 + Instagram アイコン入りのprimary CTAボタン

11. **FAQ teaser** (max-width 880px, 3問抜粋アコーディオン)
    - 「すべてのFAQを見る」ghost button へ

12. **Final CTA band** (.cta-band — 共通要素)

---

### 2. `about.html` — クラブの活動内容・歴史

**Sections**:
1. **Page hero** (上部 200px パディング + ネイビー背景 + harbor.jpgを opacity 0.55 で重ねる + breadcrumb)
2. **Story intro** (split: 左テキスト, 右 marina.jpg)
3. **Timeline** (paper背景, max-width 880px)
   - 縦線 + 5つのタイムラインアイテム: 1984 / 1990s / 2000s / 2010s / Today
   - 各アイテム: 年 (Cormorant italic) + H3 + 説明文
4. **Activities Detail** (3つの split セクション交互配置)
   - 01 ショートクルージング (sail-wind.jpg 左)
   - 02 クルージング中心 (cruise.jpg 右, flip)
   - 03 年に数回のロング (sunset-sea.jpg 左)
5. **Final CTA band**

---

### 3. `beginners.html` — はじめての方へ

**Sections**:
1. **Page hero** (people-onboard.jpg)
2. **Reassurance intro** (max-width 880px, テキストのみ)
3. **Fullbleed image break** (people-onboard.jpg)
4. **6 points grid** (card-bordered 2カラム grid)
   - 各カード: N° + H3 + 説明文
5. **A day at the club** (paper背景, timeline形式)
   - 10:00 / 10:30 / 11:00 / 13:30 / 14:00 の体験当日の流れ
6. **What to bring** (split: 左テキスト, 右 tick-list)
7. **Final CTA band**

---

### 4. `experienced.html` — 経験者の方へ

**Sections**:
1. **Page hero** (helm.jpg)
2. **Welcome back intro** (max-width 880px)
3. **4 reasons grid** (paper背景, card-bordered 2カラム)
4. **Sailing approach** (split wide, 左テキスト, 右 rope.jpg)
5. **Quote callout** (paper背景)
6. **Final CTA band**

---

### 5. `trial.html` — 無料体験募集 + 申し込みフォーム

**Sections**:
1. **Page hero** (hero-main.jpg)
2. **At a glance** (3カラム card-bordered + 2つの info-box)
3. **Reservation form** (paper背景, form-card max-width 820px)
   - **必須フィールド**: 名前 / ふりがな / メール / 電話 / 年齢層 (ラジオ 20s-70s+) / ヨット経験 (4択ラジオ) / 参加希望日 (date) / 参加人数 (select 1-5+)
   - **任意フィールド**: ご質問内容 (textarea) / Instagram経由か (ラジオ)
   - **同意チェック**: 個人情報取り扱い (必須)
   - **送信ボタン**: 「この内容で申し込む」primary large

**フォーム挙動** (現状デモ):
- `data-demo-form` 属性の form は `assets/js/main.js` でハンドリングされ、送信時に `e.preventDefault()` → 800ms 後に alert + reset
- **本番実装**: バックエンドAPI (例: `/api/trial`) を作成し POST して、確認メール送信 + 管理者通知。スパム対策に reCAPTCHA v3 / Cloudflare Turnstile を推奨。

---

### 6. `fees.html` — 会費・料金体系

**Sections**:
1. **Page hero** (marina.jpg)
2. **Price table** (max-width 980px, .price-table)
   - 7行の料金: 入会金 / 月会費(40歳未満) / 月会費(40歳以上) / 体験参加費 / 保険 / ロングクルージング / 支払い方法
   - レイアウト: 3カラム grid (label 200px / desc 1fr / value auto)
   - value: Cormorant italic 26px (例: 「7,000円 / 月」)
3. **Info box (placeholder warning)**
4. **Final CTA band**

**注**: 料金値はすべて指定どおり実装済みだが、`info-box` に「公開前確認」プレースホルダーが残っている。

---

### 7. `access.html` — アクセス・施設紹介

**Sections**:
1. **Page hero** (harbor.jpg)
2. **Map placeholder** (`assets/css/style.css` の `.map-placeholder`)
   - 420px高さ、青グラデ + 格子背景 + 雫型ピン + ラベル
   - **本番実装**: Google Maps Embed API / Mapbox / OpenStreetMap (Leaflet) に置換
3. **Location details** (price-tableスタイルの6行)
   - 活動エリア / 集合場所(要入力) / 住所(要入力) / 最寄駅(要入力) / 駐車場(要入力) / 集合時間
4. **Facility intro** (paper背景, 3カラム figure-card)
5. **Final CTA band**

---

### 8. `faq.html` — FAQ

**Sections**:
1. **Page hero** (sunset-sea.jpg)
2. **FAQ accordion** (max-width 920px, 7問)
   - 質問: ボタン要素, "Q" prefix (Cormorant italic), 右側に開閉アイコン (border の三角形)
   - 開閉: `aria-expanded` の切替 + `max-height` トランジション 0.5s
   - 回答: "A" prefix, max-width 70ch, line-height 2
3. **Contact link** (中央寄せ ghost button "お問い合わせフォームへ")
4. **Final CTA band**

**質問一覧** (構造化データに同期):
1. 泳げません。参加できますか?
2. 一人で参加しても大丈夫ですか?
3. 服装や持ち物は何が必要ですか?
4. 雨や強風の日はどうなりますか?
5. 経験者ですが、ブランクがあります。大丈夫ですか?
6. レース中心のクラブですか?
7. 体験したら入会しないといけませんか?

---

### 9. `contact.html` — お問い合わせ

**Sections**:
1. **Page hero** (horizon.jpg)
2. **Alt CTAs** (2カラム info-box: trial / faq への誘導)
3. **General inquiry form** (paper背景, form-card)
   - 必須: 名前 / メール / お問い合わせ種類 (select 7選択肢) / 内容 (textarea) / 個人情報同意
   - 任意: ふりがな / 電話
4. **(Final CTA band は無し)** — フォーム送信が主目的のため

---

## Interactions & Behavior

### スクロール
- スクロール 60px超過で `.site-header` に `.scrolled` クラス → 背景が透明から白へ遷移 (350ms)
- フッターのない `body` (非ヒーローページ) では JS が `.solid` クラスを最初から付与

### モバイルナビ
- `.nav-toggle` クリックで `.nav.is-open` をトグル
- ハンバーガーアイコンは3本線 → ×に変形 (CSS transform 300ms)
- 開閉中は `body.style.overflow = 'hidden'` でスクロール固定
- ナビリンクをタップすると自動クローズ

### FAQアコーディオン
- 各 `.faq-q` (button) クリックで親 `.faq-item.is-open` トグル
- `aria-expanded` 同期
- `.faq-a` の `max-height` を `scrollHeight` に設定 (open) / `0` (close), 0.5s ease-out
- 矢印アイコンは `transform: rotate(45deg) → rotate(-135deg)` で回転

### スクロールリビール
- IntersectionObserver, threshold 0.12, rootMargin "0px 0px -60px 0px"
- 対象: `.reveal` クラス要素
- 状態: opacity 0 + translateY(24px) → opacity 1 + translateY(0) (1秒, ease)
- `.delay-1` (0.1s), `.delay-2` (0.2s), `.delay-3` (0.3s) で順次

### CTAボタン (`.btn`)
- 矢印 `.arrow` が hover 時に 18px → 26px に伸びる (350ms ease)
- バリエーション: `.btn-primary` (navy bg), `.btn-ghost` (navy border), `.btn-light` (透明 + 白ボーダー), `.btn-large` (パディング増)

### フォーム送信 (デモ実装)
```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 800ms 遅延 → reset + alert
});
```
**本番では適切な API エンドポイントへ POST + バリデーション + 確認ページへ遷移、を実装。**

### 画像ホバー
- `.figure-card img` / `.blog-card img`: hover 時に `scale(1.04)` (1.2s ease) / `scale(1.05)` (1s ease)

---

## State Management

このサイトは静的なマーケティングサイトなので、複雑な state は不要です。実装時に必要な state は:

| 場所 | State | 種類 |
|---|---|---|
| `.site-header` | `scrolled: boolean` | スクロール位置に応じて切替 |
| `.nav` | `isOpen: boolean` | モバイル時のメニュー開閉 |
| `.faq-item` | `isOpen: boolean` (×7) | アコーディオン開閉 |
| Form (trial/contact) | フォーム値, validation, isSubmitting, submitSuccess | フォーム送信全般 |

React/Vue で実装する場合は、各セクションを独立コンポーネントとして切り出し、ヘッダーとフォームだけ状態を持たせる構成が無理がありません。

### データフェッチ
- **現状**: ブログ3枚はハードコード(ダミー)
- **本番**: ヘッドレスCMSやMarkdownファイルからフェッチ → カードコンポーネントに渡す
- **フォーム送信先**: 未実装。バックエンド or サードパーティ(Formspree等)を選定要

---

## Design Tokens

すべて `assets/css/style.css` の `:root` で定義済み。

### Colors

```css
--navy:       #0B2545;  /* primary, ボタン背景, 見出し */
--navy-deep:  #061838;  /* フッター, hover時 */
--navy-soft:  #1A3A6C;
--white:      #FCFCFA;  /* 背景・文字 (オフホワイト) */
--paper:      #F7F4EE;  /* セクション間の差し色背景 */
--sand:       #ECE6DA;  /* 画像placeholder, スキマ */
--pale-blue:  #BFD7EA;  /* アクセント, eyebrow on dark */
--soft-blue:  #8DA9C4;  /* eyebrow, キャプション */
--line:       #D8D3C7;  /* ボーダー (light) */
--line-dark:  rgba(11,37,69,0.12);  /* ボーダー (default) */
--text:       #1A2332;  /* 本文 */
--text-mute:  #5B6776;  /* 補足文 */
```

### Typography

```css
--serif:   "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif;
--sans:    "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
--display: "Cormorant Garamond", "Noto Serif JP", serif;
```

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;500;600&display=swap
```

### Type Scale

| 用途 | クラス/要素 | サイズ | 行間 | letter-spacing | 備考 |
|---|---|---|---|---|---|
| Body | `body` | 16px | 1.8 | 0 | `font-feature-settings: "palt"` |
| h1 (Hero) | `.hero h1` | clamp(30px, 5.6vw, 64px) | 1.4 | .02em | Noto Serif JP, weight 400 |
| h1 (Page) | `.page-hero h1` | clamp(28px, 5vw, 56px) | 1.3 | .02em | Noto Serif JP, weight 400 |
| h2 | `h2` | clamp(24px, 3.4vw, 40px) | 1.35 | .02em | Noto Serif JP, weight 500 |
| h3 | `h3` | clamp(18px, 1.8vw, 22px) | 1.5 | .02em | Noto Serif JP, weight 500 |
| Lead | `.lead` | clamp(15px, 1.3vw, 18px) | 2 | 0 | 本文より大きめ |
| Eyebrow | `.eyebrow` | 13px | 1.5 | .22em uppercase | Cormorant italic, soft-blue |
| Eyebrow num | `.eyebrow-num` | 18px | 1.5 | .05em | Cormorant italic, soft-blue |
| Caption | `.muted` 系 | 13-14.5px | 1.7 | 0 | text-mute色 |
| Button | `.btn` | 15px (large: 16px) | 1 | .08em | Noto Sans JP weight 500 |

### Spacing

レイアウトは `clamp()` を多用して滑らかにスケール:

```css
--gut: clamp(20px, 4vw, 56px);   /* セクション左右のパディング */
.section: clamp(72px, 11vw, 144px) 上下パディング
.section-tight: clamp(56px, 8vw, 96px)
.grid gap: clamp(24px, 3vw, 40px)
.split gap: clamp(40px, 6vw, 96px)
.section-head margin-bottom: clamp(40px, 5vw, 72px)
```

### Container widths

```css
.container       max-width: 1240px
.container-wide  max-width: 1480px
form-card        max-width: 820px
faq container    max-width: 920px
single col text  max-width: 880px-980px (ページごと)
```

### Border Radius

- `.btn`: 999px (pill)
- `.brand-mark`: 50% (circle)
- input/select/textarea: 2px
- カード: 0px (角ばっている。シャープな上品さを意図)

### Shadows

- ヘッダー scrolled時: `0 1px 0 var(--line-dark)` (細い区切り線のみ)
- 画像 hover: なし(scale だけ)
- map-pin: `0 8px 20px rgba(0,0,0,0.25)`
- フォーム focus: `0 0 0 3px rgba(11,37,69,0.08)`

### Easing

```css
--ease: cubic-bezier(.2, .7, .2, 1);
```

全 transition/animation で統一。

### Breakpoints

| px | 用途 |
|---|---|
| ≤ 960 | モバイルナビ表示 |
| ≤ 860 | grid を 1列に, split を 1列に |
| ≤ 720 | facts 4→2列, hero meta 非表示 |
| ≤ 600 | field-row 2→1列 |
| ≤ 520 | footer 2→1列 |

---

## Assets

### 写真 (`assets/images/`)

すべて `image_search` 経由でライセンス確認済みの素材を取得しています。本番運用では:
- **理想**: クラブのオリジナル写真に差し替え
- **暫定**: 同じUnsplash等のフリー素材で運用可

| ファイル | 用途 | サイズ |
|---|---|---|
| `hero-main.jpg` | トップヒーロー / OG画像 / trial.html hero | ~1.2MB |
| `sail-wind.jpg` | index intro / about活動セクション | ~85KB |
| `people-onboard.jpg` | who-it's-for 01 / beginners hero | ~387KB |
| `harbor.jpg` | about hero / access hero / facility 03 | ~624KB |
| `helm.jpg` | who-it's-for 02 / experienced hero | ~1MB |
| `aerial-yacht.jpg` | who-it's-for 03 / fullbleed break | ~363KB |
| `horizon.jpg` | cta-band 背景 / contact hero | ~237KB |
| `cruise.jpg` | about活動 02 | ~470KB |
| `sunset-sea.jpg` | about活動 03 / faq hero | ~70KB |
| `blog1-3.jpg` | journal カード × 3 | ~150-770KB |
| `rope.jpg` | experienced sailing approach / facility 02 | ~435KB |
| `marina.jpg` | about intro / fees hero / facility 01 | ~344KB |

### アイコン

- `assets/favicon.svg` — ネイビーのヨットシルエットアイコン (SVG, 自家製)
- ヘッダー Instagram アイコン — インライン SVG (`<rect> + <circle>` のシンプル構図)
- ボタンの矢印 — CSS の `::after` で再現 (画像不使用)
- FAQ開閉矢印 — CSSのborder三角形 (画像不使用)
- チェックマーク (`.tick-list`) — CSSのborder回転 (画像不使用)
- マップピン — CSS の border-radius (画像不使用)

---

## SEO / 構造化データ

公開前に **`https://www.sausalito-yacht-club.jp/` を実ドメインに一括置換** してください。置換箇所:

- 各HTMLの `<link rel="canonical">`, `og:url`, hreflang, Twitter image URL
- すべての `<script type="application/ld+json">` 内の `@id` / `url` / `image` (全ページ Organization + ページ別)
- `sitemap.xml` の `<loc>` (9URL)
- `robots.txt` の `Sitemap:` 行

### 構造化データ (各ページ3ブロック構成)

| ページ | LD 1 | LD 2 | LD 3 |
|---|---|---|---|
| index | SportsClub (Organization) | WebSite | SportsActivityLocation |
| about | SportsClub | BreadcrumbList | AboutPage |
| beginners | SportsClub | BreadcrumbList | WebPage with Audience |
| experienced | SportsClub | BreadcrumbList | WebPage with Audience |
| trial | SportsClub | BreadcrumbList | Event (毎週日曜の繰返し) |
| fees | SportsClub | BreadcrumbList | Product with Offers |
| access | SportsClub | BreadcrumbList | WebPage |
| faq | SportsClub | BreadcrumbList | FAQPage (7問) |
| contact | SportsClub | BreadcrumbList | ContactPage |

### ターゲットキーワード

- プライマリ: 西宮港 ヨット / ヨットクラブ 西宮 / ヨット 無料体験 / 兵庫 ヨットクラブ
- セカンダリ: ヨット 初心者 / ヨット 一人参加 / ヨット 泳げない / ヨット ブランク / 関西 セーリング / クルージング 関西

`<meta name="keywords">` は各ページ固有のキーワードを含有(現代SEOでの効力は限定的だが、後方互換のため設置)。

---

## Files in This Bundle

### HTMLページ (9ファイル)

| File | Purpose |
|---|---|
| `index.html` | トップページ(ヒーロー + 全セクション) |
| `about.html` | クラブ活動・歴史 |
| `beginners.html` | はじめての方向け |
| `experienced.html` | 経験者向け |
| `trial.html` | 体験申し込みフォーム |
| `fees.html` | 料金体系 |
| `access.html` | アクセス・施設 |
| `faq.html` | FAQアコーディオン |
| `contact.html` | お問い合わせフォーム |

### 共通リソース

| File | Purpose |
|---|---|
| `assets/css/style.css` | デザイントークン + 全コンポーネントスタイル |
| `assets/js/main.js` | ヘッダースクロール / モバイルナビ / アコーディオン / スクロールリビール / フォームデモ |
| `assets/favicon.svg` | SVG faviconアイコン |

### SEOインフラ

| File | Purpose |
|---|---|
| `sitemap.xml` | サイトマップ(9URL) |
| `robots.txt` | クロール許可 + sitemap参照 |
| `manifest.webmanifest` | PWAマニフェスト |

### Assets フォルダ

`assets/images/` の14枚の写真は別途バイナリとしてオリジナルプロジェクト側にあります(本ハンドオフ zip には含まれない場合あり)。再現時は本READMEの Assets セクションを参照して、同等の写真を用意してください。

---

## 公開前チェックリスト

1. [ ] ドメイン `https://www.sausalito-yacht-club.jp/` を実ドメインに一括置換
2. [ ] `fees.html` の料金情報を最終確認(現状は要件指定の値が入っている)
3. [ ] `access.html` の「要入力」プレースホルダー (集合場所/住所/最寄駅/駐車場/集合時間) を実情報に差し替え
4. [ ] `fees.html` の info-box プレースホルダー注記を削除
5. [ ] `access.html` の地図プレースホルダーを Google Maps Embed 等に置換
6. [ ] Instagram URL (`https://instagram.com/`) を実アカウントに置換 (header CTA / footer / `og:url` 周辺)
7. [ ] フォーム送信先のバックエンド/APIを実装し、`data-demo-form` の挙動を本番ロジックに置換
8. [ ] reCAPTCHA / Turnstile などのスパム対策
9. [ ] Google Search Console / Bing Webmaster Tools にサイトマップ送信
10. [ ] OG画像が `https://www.sausalito-yacht-club.jp/assets/images/hero-main.jpg` で正しく解決できるか確認 (Facebook Debugger, Twitter Card Validator)
11. [ ] Lighthouse / PageSpeed Insights で Core Web Vitals チェック
12. [ ] フォームの WCAG 準拠 (現状 `label` 紐付け済みだが、エラーメッセージの aria-live 等を追加検討)
13. [ ] アクセシビリティ全般の最終チェック(キーボード操作、スクリーンリーダー)

---

## アーキテクチャ推奨

新規構築する場合のスタック例:

### Option A: Astro (推奨)
- 静的サイト主体 + 部分的に React/Vue/Svelte を mix in 可能
- ヘッダー / フッター / CTAバンド を `.astro` コンポーネントに切り出し
- 各ページは `src/pages/*.astro`
- ブログ部分は `src/content/blog/` で Markdown 管理 → ContentLayer
- フォームは Formspree / Netlify Forms / 自前API

### Option B: Next.js (App Router)
- フォームに RSC + Server Action がフィットする
- ブログを CMS (microCMS / Sanity) と連携しやすい
- 多言語対応(英語版を将来追加するなら)も容易

### Option C: WordPress (Block Theme)
- 非エンジニアでも運用更新したいなら最適
- カスタムブロックでヒーロー / 価格テーブル / FAQ を実装
- Contact Form 7 / WPForms でフォーム

### Option D: 静的 HTML を直接運用
- 本ハンドオフの HTML をほぼそのまま CDN にデプロイ(Netlify / Cloudflare Pages / Vercel)
- フォームは Netlify Forms に置換するだけで本番運用可
- もっとも工数が低い

---

## 連絡先

設計に関する質問や、変更要望があれば本ハンドオフのデザイナー宛にご相談ください。
