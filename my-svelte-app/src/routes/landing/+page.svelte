<script lang="ts">

  import Button from './../Button.svelte';
  /**
   * Svelte 5의 룬($state)을 사용하여 모바일 메뉴의 열림/닫힘 상태를 관리합니다.
   * 기존의 let 변수 선언과 달리, $state를 사용하면 값이 변경될 때 UI가 자동으로 업데이트됩니다.
   */
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="landing-page">
  <!-- 히어로 섹션 (메인 비주얼) -->
  <section class="hero">
    <div class="container hero-content">
      <h1 class="hero-title">
        퍼블리싱의 새로운 경험,<br />
        <span class="highlight">Svelte 5</span>와 함께하세요.
      </h1>
      <p class="hero-desc">
        더 적은 코드로 더 많은 것을 만들어보세요. 
        반응형 디자인과 강력한 성능을 기본으로 제공합니다.
      </p>
      <div class="hero-actions">
        <Button variant="primary">시작하기</Button>
        <Button variant="outline">더 알아보기</Button>
      </div>
    </div>
  </section>

  <!-- 특징 섹션 (그리드 레이아웃) -->
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">주요 특징</h2>
      <div class="feature-grid">
        <div class="card">
          <h3>⚡ 빠른 속도</h3>
          <p>가상 돔(Virtual DOM) 없이 바닐라 JS로 컴파일되어 놀라운 성능을 보여줍니다.</p>
        </div>
        <div class="card">
          <h3>🎨 간결한 스타일</h3>
          <p>컴포넌트 내부에 작성된 CSS는 해당 컴포넌트에만 적용되어(Scoped) 관리가 쉽습니다.</p>
        </div>
        <div class="card">
          <h3>📱 반응형 대응</h3>
          <p>모바일, 태블릿, 데스크탑 등 모든 디바이스에 최적화된 레이아웃을 제공합니다.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* 
    Svelte의 style 태그 안에 작성된 CSS는 기본적으로 이 컴포넌트에만 적용됩니다(Scoped CSS).
    따라서 클래스 이름이 다른 파일과 겹칠 걱정을 하지 않아도 됩니다.
  */

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header */
  .header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff3e00; /* Svelte Orange */
  }

  .nav a {
    text-decoration: none;
    color: #555;
    margin-left: 20px;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav a:hover {
    color: #ff3e00;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%);
    padding: 100px 0;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .highlight {
    color: #ff3e00;
  }

  .hero-desc {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
  }

  .btn {
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: transform 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-primary {
    background-color: #ff3e00;
    color: white;
    margin-right: 10px;
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid #ff3e00;
    color: #ff3e00;
  }

  /* Features Section */
  .features {
    padding: 80px 0;
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .card {
    padding: 30px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    transition: box-shadow 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  }

  .card h3 {
    margin-top: 0;
    color: #333;
  }

  /* Footer */
  .footer {
    background: #333;
    color: #fff;
    padding: 40px 0;
    text-align: center;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .menu-toggle {
      display: flex;
    }

    .nav {
      display: none;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      padding: 20px 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .nav.active {
      display: flex;
    }

    .nav a {
      margin: 10px 0;
      text-align: center;
    }
  }
</style>
