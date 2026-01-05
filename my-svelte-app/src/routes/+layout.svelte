<script lang="ts">
  import { slide } from 'svelte/transition';

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<div class="app-layout">
  <!-- 헤더 (모든 페이지 공통) -->
  <header class="header">
    <div class="container header-content">
      <a href="/" class="logo">MyBrand</a>
      
      <button 
        class="menu-toggle" 
        class:open={isMenuOpen}
        onclick={toggleMenu} 
        aria-label="메뉴"
        aria-expanded={isMenuOpen}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="nav desktop-nav">
        <a href="/#features" onclick={closeMenu}>특징</a>
        <a href="/about" onclick={closeMenu}>소개</a>
        <a href="/#contact" onclick={closeMenu}>문의하기</a>
      </nav>
    </div>
  </header>

  {#if isMenuOpen}
    <nav class="nav mobile-nav" transition:slide={{ duration: 300 }}>
      <a href="/#features" onclick={closeMenu}>특징</a>
      <a href="/about" onclick={closeMenu}>소개</a>
      <a href="/#contact" onclick={closeMenu}>문의하기</a>
    </nav>
  {/if}

  <!-- 페이지 내용이 들어가는 자리 -->
  <div class="container">
    <slot />
  </div>

  <!-- 푸터 (모든 페이지 공통) -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 My Svelte App. All rights reserved.</p>
    </div>
  </footer>
</div>

<style>
  /* 전역 스타일: body나 공통 클래스는 여기서 관리하면 좋습니다 */
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
    line-height: 1.6;
  }

  /* .container를 전역으로 설정하여 하위 페이지에서도 쓸 수 있게 함 */
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

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
    color: #ff3e00;
  }

  .logo:hover {
    text-decoration: none;
  }

  .desktop-nav a {
    text-decoration: none;
    color: #555;
    margin-left: 20px;
    font-weight: 500;
    transition: color 0.3s;
  }

  .desktop-nav a:hover { color: #ff3e00; }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    z-index: 101;
  }

  .bar { width: 25px; height: 3px; background-color: #333; transition: all 0.3s ease-in-out; }
  .menu-toggle.open .bar:nth-child(1) { transform: translateY(9px) rotate(45deg); }
  .menu-toggle.open .bar:nth-child(2) { opacity: 0; }
  .menu-toggle.open .bar:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 70px; left: 0; width: 100%;
    background: white;
    flex-direction: column;
    padding: 20px 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  .mobile-nav a { margin: 10px 0; text-align: center; text-decoration: none; color: #555; }

  .footer { background: #333; color: #fff; padding: 40px 0; text-align: center; }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .desktop-nav { display: none; }
    .mobile-nav { display: flex; }
  }
</style>