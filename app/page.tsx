"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const heroImages = [
  {
    src: "/images/personal-1.jpg",
    altZh: "郭汶瑄 裝裱工作現場 1",
    altEn: "Wen-Hsuan Kuo mounting studio scene 1",
  },
  {
    src: "/images/personal-2.jpg",
    altZh: "郭汶瑄 裝裱工作現場 2",
    altEn: "Wen-Hsuan Kuo mounting studio scene 2",
  },
  {
    src: "/images/personal-3.jpg",
    altZh: "郭汶瑄 裝裱細節",
    altEn: "Detail of mounting process",
  },
  {
    src: "/images/personal-4.jpg",
    altZh: "書畫作品局部",
    altEn: "Detail of mounted ink painting",
  },
  {
    src: "/images/personal-5.jpg",
    altZh: "柏宜山房工作室空間",
    altEn: "Boyi Studio interior view",
  },
  {
    src: "/images/personal-6.jpg",
    altZh: "自畫像系列作品現場",
    altEn: "Self-portrait series installation view",
  },
  {
    src: "/images/personal-7.jpg",
    altZh: "過程物件系列",
    altEn: "Process Object series",
  },
  {
    src: "/images/personal-8.jpg",
    altZh: "遺留物系列",
    altEn: "Residuals series",
  },
  {
    src: "/images/personal-9.jpg",
    altZh: "主權封印作品局部",
    altEn: "The Sovereign Seal detail",
  },
  {
    src: "/images/personal-10.jpg",
    altZh: "工作與家庭之間的日常",
    altEn: "Daily life between work and family",
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const currentImage = heroImages[index];

  return (
    <div className="page" id="top">
      {/* 頁首 */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand">
            郭汶瑄
            <span className="brand-sub">Wen-Hsuan Kuo</span>
          </a>

          <nav className="nav" aria-label="主選單">
            <a href="#about">{lang === "zh" ? "關於" : "About"}</a>
            <a href="#practice">
              {lang === "zh" ? "裝裱與修復" : "Mounting & Restoration"}
            </a>
            <a href="#artworks">
              {lang === "zh" ? "創作" : "Artworks"}
            </a>
            <a href="#projects">
              {lang === "zh" ? "計畫與展覽" : "Projects & Exhibitions"}
            </a>
            <a href="#writing">
              {lang === "zh" ? "文字" : "Writing"}
            </a>
            <a href="#contact">
              {lang === "zh" ? "聯絡" : "Contact"}
            </a>
          </nav>

          <div className="lang-toggle" aria-label="語言切換">
            <button
              className={`lang-button ${lang === "zh" ? "active" : ""}`}
              onClick={() => setLang("zh")}
            >
              中
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-button ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero 大圖輪播 */}
        <section
          className="hero"
          aria-label={lang === "zh" ? "精選作品輪播" : "Featured works slider"}
        >
          <div className="hero-inner">
            <div className="hero-image-wrapper">
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={lang === "zh" ? currentImage.altZh : currentImage.altEn}
                className="hero-image"
              />
              <div className="hero-gradient" />
            </div>

            <div className="hero-overlay">
              <div className="hero-text">
                <h1 className="hero-title">
                  {lang === "zh"
                    ? "裝裱、勞動與主權價值的長期實驗"
                    : "Long-term experiments in mounting, labor, and sovereign value"}
                </h1>
                <p className="hero-subtitle">
                  {lang === "zh"
                    ? "結合傳統書畫裝裱修復與當代藝術創作，從工藝現場延伸到去中心化與時間書寫。"
                    : "Combining traditional mounting and restoration with contemporary art practice, extending from the craft site to decentralization and time-based inscription."}
                </p>
                <div className="hero-meta">
                  <span>
                    {lang === "zh"
                      ? "台北 · 書畫裝裱修復 · 當代藝術"
                      : "Taipei · Mounting & Restoration · Contemporary Art"}
                  </span>
                </div>
              </div>

              <div className="hero-controls">
                <button
                  className="hero-arrow"
                  onClick={() =>
                    setIndex(
                      (index - 1 + heroImages.length) % heroImages.length
                    )
                  }
                  aria-label={lang === "zh" ? "上一張" : "Previous image"}
                >
                  ‹
                </button>
                <div className="hero-dots" aria-hidden="true">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      className={`hero-dot ${i === index ? "active" : ""}`}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
                <button
                  className="hero-arrow"
                  onClick={() => setIndex((index + 1) % heroImages.length)}
                  aria-label={lang === "zh" ? "下一張" : "Next image"}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 關於 */}
        <section id="about" className="section">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh" ? "關於郭汶瑄" : "About Wen-Hsuan Kuo"}
            </h2>
            <div className="section-grid">
              <div className="section-main">
                {lang === "zh" ? (
                  <>
                    <p>
                      1980 年生於台灣，目前於台北經營書畫裝裱與修復工作室「柏宜山房」。
                      具有十五年軍旅背景與十五年專職裝裱經驗，實務涵蓋立軸、冊頁、手卷、屏風、木框與修復。
                    </p>
                    <p>
                      創作以「寄生創作」、「自畫像系列」、「過程物件」、「遺留物」與「主權封印」等長期計畫為核心，
                      由工藝現場出發，延伸到東方哲學、去中心化與比特幣等議題，將勞動、信念與時間視為主要媒材。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Born in 1980 in Taiwan, Wen-Hsuan Kuo runs the mounting and
                      restoration studio “Boyi Studio” in Taipei. He has
                      fifteen years of military experience and fifteen years of
                      professional practice in Chinese painting and calligraphy
                      mounting, covering hanging scrolls, albums, handscrolls,
                      screens, wooden frames, and conservation.
                    </p>
                    <p>
                      His artistic practice centers on long-term projects such
                      as “Parasitic Creation,” the “Self-Portrait Series,”
                      “Process Object,” “Residuals,” and “The Sovereign Seal.”
                      Starting from the craft site, his work extends to Eastern
                      philosophy, decentralization, and Bitcoin, treating labor,
                      belief, and time as primary materials.
                    </p>
                  </>
                )}

                {/* 學歷 Education */}
                <section className="section">
                  <h2 className="section-title">
                    {lang === "zh" ? "學歷" : "Education"}
                  </h2>

                  <div className="info-grid">
                    <div>
                      <ul className="info-list">
                        {/* 研究所就讀中 */}
                        <li>
                          <span className="info-label">
                            {lang === "zh" ? "就讀中：" : "In Progress:"}
                          </span>
                          <span className="info-value">
                            {lang === "zh"
                              ? "國立臺北藝術大學（TNUA）美術研究所 —— 書畫媒材與當代創作（就讀中）"
                              : "Taipei National University of the Arts (TNUA), MFA Fine Arts — Calligraphy & Ink-Based Media in Contemporary Art (In Progress)"}
                          </span>
                        </li>

                        {/* 大學已畢業 */}
                        <li>
                          <span className="info-label">
                            {lang === "zh" ? "學士：" : "Bachelor:"}
                          </span>
                          <span className="info-value">
                            {lang === "zh"
                              ? "國立臺灣藝術大學（NTUA）書畫藝術系"
                              : "National Taiwan University of Arts (NTUA), Department of Calligraphy & Painting"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="section-side">
                <ul className="info-list">
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "現職" : "Current"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "柏宜山房 負責人 · 裝裱與修復"
                        : "Founder of Boyi Studio · Mounting & Restoration"}
                    </span>
                  </li>
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "基地" : "Base"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "台北松山（規劃未來 LA 分點）"
                        : "Taipei Songshan (future LA branch in planning)"}
                    </span>
                  </li>
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "關鍵詞" : "Keywords"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "裝裱 · 修復 · 去中心化 · 時間書寫 · 比特幣"
                        : "mounting · restoration · decentralization · time-based art · Bitcoin"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 裝裱與修復 */}
        <section id="practice" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh"
                ? "書畫裝裱與修復實務"
                : "Mounting & Restoration Practice"}
            </h2>
            <div className="section-grid">
              <div className="section-main">
                {lang === "zh" ? (
                  <>
                    <p>
                      裝裱工作以「倫理與誠實」為基礎，強調可逆性、適材適法與長期保存，
                      盡量減少對原作的不可逆風險。依作品狀態評估工序，與作者、藏家或機構充分溝通。
                    </p>
                    <p>
                      工作室採用手工紙、傳統漿糊與穩定木作結構，並針對當代創作者提供展覽前之
                      裝裱規劃建議，使作品在空間中以最合適的方式被觀看。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The mounting and restoration practice is grounded in
                      ethics and honesty, emphasizing reversibility, appropriate
                      materials, and long-term preservation while minimizing
                      irreversible risks to the original work. Each piece is
                      evaluated individually in dialogue with artists,
                      collectors, and institutions.
                    </p>
                    <p>
                      The studio uses handmade paper, traditional starch paste,
                      and stable wooden structures, and offers exhibition
                      planning advice for contemporary artists to ensure that
                      works are presented appropriately in space.
                    </p>
                  </>
                )}
              </div>
              <div className="section-side">
                <ul className="tag-list">
                  <li>Hanging scrolls</li>
                  <li>Albums & handscrolls</li>
                  <li>Paper & silk conservation</li>
                  <li>Custom frames & screens</li>
                  <li>Exhibition mounting planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 創作 */}
        <section id="artworks" className="section">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh" ? "主要創作系列" : "Major Series"}
            </h2>
            <div className="cards-grid">
              <article className="card">
                <h3 className="card-title">
                  {lang === "zh" ? "寄生創作" : "Parasitic Creation"}
                </h3>
                <p className="card-text">
                  {lang === "zh"
                    ? "從裝裱者位置觀察藝術階層的寄生關係——作品、畫廊、藏家與資本之間的依附與反轉。"
                    : "Observing parasitic relations within the art hierarchy from the mounter’s position—between artworks, galleries, collectors, and capital."}
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">
                  {lang === "zh" ? "自畫像系列" : "Self-Portrait Series"}
                </h3>
                <p className="card-text">
                  {lang === "zh"
                    ? "以時間、勞動與 AI 書寫構成的自畫像，從工藝行為到演算法文本，紀錄主體生成過程。"
                    : "Self-portraits composed of time, labor, and AI writing, tracing the formation of subjectivity from craft actions to algorithmic text."}
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">
                  {lang === "zh" ? "過程物件與遺留物" : "Process Object & Residuals"}
                </h3>
                <p className="card-text">
                  {lang === "zh"
                    ? "以工藝副產物與剩餘物為主體，將被忽略的工具與邊角轉化為存在證據與倫理提問。"
                    : "Centering by-products and leftovers of craft, turning overlooked tools and edges into evidence of existence and ethical questions."}
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">
                  {lang === "zh" ? "主權封印 0.00020XX" : "The Sovereign Seal 0.00020XX"}
                </h3>
                <p className="card-text">
                  {lang === "zh"
                    ? "以年度封印比特幣與手工紙層為核心結構，結合個人主權、時間與可逆揭裱技術的極簡倫理系統。"
                    : "An annual sealing of Bitcoin within layers of handmade paper, forming a minimal ethical system of personal sovereignty, time, and reversible mounting."}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 計畫與展覽 */}
        <section id="projects" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh"
                ? "計畫、展覽與未來方向"
                : "Projects, Exhibitions & Directions"}
            </h2>
            <div className="section-grid">
              <div className="section-main">
                {lang === "zh" ? (
                  <>
                    <p>
                      近期聚焦於自畫像系列與主權封印的延伸計畫，持續投件各類獎項與國際駐村，
                      在工藝、學術與加密貨幣之間建立連續性的創作架構。
                    </p>
                    <p>
                      長期目標包括於台北與洛杉磯之間建立雙基地工作模式，透過展覽、論述與教學，
                      把裝裱實務與去中心化哲學連結為一個可被閱讀與實踐的系統。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Recent focus lies on extending the Self-Portrait Series
                      and The Sovereign Seal, actively submitting to awards and
                      international residencies, and building a continuous
                      structure across craft, academia, and crypto.
                    </p>
                    <p>
                      Long-term goals include establishing a dual-base practice
                      between Taipei and Los Angeles, connecting mounting
                      practice with decentralization through exhibitions,
                      writing, and teaching.
                    </p>
                  </>
                )}
              </div>
              <div className="section-side">
                <ul className="info-list">
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "近期關注" : "Current focus"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "自畫像 0–4 · 主權封印 0.00020XX"
                        : "Self-Portraits 0–4 · The Sovereign Seal 0.00020XX"}
                    </span>
                  </li>
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "中程目標" : "Mid-term"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "強化國際展覽與駐村能見度"
                        : "Increase visibility via international exhibitions and residencies"}
                    </span>
                  </li>
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "長程目標" : "Long-term"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "建立台北／LA 雙據點與教學體系"
                        : "Build a Taipei / LA dual-base and teaching structure"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 文字 */}
        <section id="writing" className="section">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh" ? "文字與研究" : "Writing & Research"}
            </h2>
            <div className="section-grid">
              <div className="section-main">
                {lang === "zh" ? (
                  <>
                    <p>
                      文字創作多圍繞「寄生」、「去中心化」、「AI 共創」、「主權價值」等主題，
                      形式包含論述、工作札記與展覽文本，作為作品與現實之間的中介層。
                    </p>
                    <p>
                      部分文字將彙整為《AI 共創日誌》與自畫像、主權封印相關論文，
                      作為未來展覽與申請資料的一部分。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Writing revolves around parasitism, decentralization, AI
                      co-creation, and sovereign value, taking the form of
                      essays, working notes, and exhibition texts as an
                      interface between works and reality.
                    </p>
                    <p>
                      Selected texts will be compiled into an “AI Co-Creation
                      Journal” and research on self-portraits and The Sovereign
                      Seal, supporting future exhibitions and applications.
                    </p>
                  </>
                )}
              </div>
              <div className="section-side">
                <ul className="link-list">
                  <li>
                    <span className="link-label">
                      {lang === "zh" ? "工作室網站" : "Studio website"}
                    </span>
                    <a
                      href="https://www.brad-studio.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.brad-studio.com
                    </a>
                  </li>
                  <li>
                    <span className="link-label">Instagram</span>
                    <a
                      href="https://www.instagram.com/kuowenhsuan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @kuowenhsuan
                    </a>
                  </li>
                  <li>
                    <span className="link-label">Instagram</span>
                    <a
                      href="https://www.instagram.com/2014_brad/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @2014_brad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 聯絡 */}
        <section id="contact" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title">
              {lang === "zh" ? "聯絡與合作" : "Contact & Collaboration"}
            </h2>
            <div className="section-grid">
              <div className="section-main">
                {lang === "zh" ? (
                  <>
                    <p>
                      歡迎就以下主題來信洽談：書畫裝裱與修復、展覽裝裱規劃、藝術創作合作、
                      展覽與駐村邀請，以及關於比特幣與去中心化的創作討論。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      For inquiries on mounting and restoration, exhibition
                      planning, artistic collaboration, exhibition and residency
                      invitations, or discussions on Bitcoin and
                      decentralization in art, please feel free to get in touch.
                    </p>
                  </>
                )}
              </div>
              <div className="section-side">
                <ul className="info-list">
                  <li>
                    <span className="info-label">Email</span>
                    <span className="info-value">
                      <a href="mailto:kuowenhsuan@gmail.com">
                        kuowenhsuan@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="info-label">
                      {lang === "zh" ? "工作室" : "Studio"}
                    </span>
                    <span className="info-value">
                      {lang === "zh"
                        ? "柏宜山房 · 台北市松山區"
                        : "Boyi Studio · Songshan, Taipei"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 勞動肖像（頁尾前） */}
      <section className="section section-alt">
        <div className="section-inner labor-portrait">
          <figure className="labor-figure">
            <img
              src="/images/labor-portrait.jpg"
              alt={
                lang === "zh"
                  ? "郭汶瑄於工作室背對畫面進行裝裱／創作的勞動肖像"
                  : "Wen-Hsuan Kuo working in the studio, back-view labor portrait during mounting / creation process."
              }
            />
            {/* figcaption 已移除：僅保留影像與 alt 描述 */}
          </figure>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Wen-Hsuan Kuo · 郭汶瑄</span>
          <span className="footer-dot">·</span>
          <span>
            {lang === "zh"
              ? "裝裱 · 創作 · 去中心化"
              : "Mounting · Art · Decentralization"}
          </span>
        </div>
      </footer>
    </div>
  );
}